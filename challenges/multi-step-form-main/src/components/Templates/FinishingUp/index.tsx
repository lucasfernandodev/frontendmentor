import { Link, useNavigate } from "react-router-dom";
import { addOns, InterfacePurchase } from "../../../types/Purchase";
import { Button } from "../../Interfaces/Atoms/Button";
import { Form } from "../../Interfaces/Organisms/Form";
import style from "./style.module.css";

interface FinishingUpProps {
  purchase: InterfacePurchase;
}

const calcPriceAddons = (addons: addOns[]): number => {
  let price = 0;

  addons.map((ads) => {
    price = price + ads.price;
  });

  return price;
};

export function FinishingUp({ purchase }: FinishingUpProps) {
  const navigate = useNavigate();
  const plainType = purchase.plain.type === "Monthly" ? "mo" : "yr";

  const priceTotal =
    purchase.plain.price + calcPriceAddons(purchase["add-ons"]);

  function handleBack(e: any) {
    e.preventDefault();
    navigate("/steps?id=3");
  }

  function handleConfirm(e: any) {
    e.preventDefault();
    navigate("/steps?id=5");
  }

  return (
    <Form
      title="Finishing up"
      description="Double-check everything looks OK before confirming."
    >
      <Form.Content>
        <div className={style.plain}>
          <div className={style.details}>
            <span className={style.plainName}>
              {purchase.plain.name} ({purchase.plain.type})
            </span>
            <div className={style.price}>
              ${purchase.plain.price}/{plainType}
            </div>
          </div>

          <Link to="/steps?id=2">Change</Link>
        </div>
        <ul className={style.addons}>
          {purchase["add-ons"].map((addons) => {
            return (
              <li key={addons.name}>
                <span className={style.name}>{addons.name}</span>
                <span className={style.price}>
                  +${addons.price}/{plainType}
                </span>
              </li>
            );
          })}
        </ul>
        <div className={style.priceTotal}>
          <span className={style.title}>
            Total (per {purchase.plain.type === "Monthly" ? "month" : "year"})
          </span>
          <span className={style.price}>
            +${priceTotal}/{plainType}
          </span>
        </div>
      </Form.Content>
      <Form.Footer>
        <Button variation="back" onClick={handleBack}>
          Go Back
        </Button>
        <Button variation="confirm" onClick={handleConfirm}>
          Confirm
        </Button>
      </Form.Footer>
    </Form>
  );
}
