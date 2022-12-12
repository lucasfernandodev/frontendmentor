import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PurchaseContext } from "../../../Context/PurchaseContext";
import {
  InterfacePurchase,
} from "../../../types/Purchase";
import { Button } from "../../Interfaces/Atoms/Button";
import { Form } from "../../Interfaces/Organisms/Form";
import { PlainSelect } from "../../Interfaces/Organisms/Form/PlainSelect";
import { ToggleButton } from "../../Interfaces/Organisms/Form/ToggleButton";
import style from "./style.module.css";

interface plainsInterface {
  [key: string]: {
    [key: string]: {
      title: string;
      price: number;
      plus: null | string;
      icon: string;
    };
  };
}

const plains: plainsInterface = {
  Monthly: {
    arcade: {
      title: "arcade",
      price: 9,
      plus: null,
      icon: "/assets/images/icon-arcade.svg",
    },
    Advanced: {
      title: "Advanced",
      price: 12,
      plus: null,
      icon: "/assets/images/icon-advanced.svg",
    },
    Pro: {
      title: "Pro",
      price: 15,
      plus: null,
      icon: "/assets/images/icon-pro.svg",
    },
  },
  Yearly: {
    arcade: {
      title: "arcade",
      price: 90,
      plus: "2 months free",
      icon: "/assets/images/icon-arcade.svg",
    },
    Advanced: {
      title: "Advanced",
      price: 120,
      plus: "2 months free",
      icon: "/assets/images/icon-advanced.svg",
    },
    Pro: {
      title: "Pro",
      price: 150,
      plus: "2 months free",
      icon: "/assets/images/icon-pro.svg",
    },
  },
};

interface SelectYourPlainProps {
  purchase: InterfacePurchase;
}

interface PlainInterface {
  title: string;
  price: number;
  plus: string | null;
  icon: string;
}

export function SelectYourPlain({ purchase }: SelectYourPlainProps) {
  const { updateItem } = React.useContext(PurchaseContext);

  const to = useNavigate();
  const [plainType, setPlainType] = useState<"Monthly" | "Yearly">("Monthly");
  const [selectedPlain, setSelectedPlain] = useState<null | PlainInterface>(
    null
  );
  function getPlainSelected(e: any) {
    const plainId = e.target.id;

    if (plains[plainType][plainId] !== undefined) {
      setSelectedPlain(plains[plainType][plainId]);
    }
  }

  function handleBack(e: any) {
    e.preventDefault();
    to("/steps?id=1");
  }

  function handleNextStep(e: any) {
    e.preventDefault();

    if (selectedPlain !== null) {
      updateItem({
        plain: {
          name: selectedPlain.title,
          price: selectedPlain.price,
          type: plainType,
        },
      });

      to("/steps?id=3");
    }
  }

  return (
    <Form
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
    >
      <Form.Content>
        <fieldset className={style.cards}>
          {Object.values(plains[plainType]).map((plain) => (
            <PlainSelect
              key={plain.price}
              icon={plain.icon}
              title={plain.title}
              price={plain.price}
              plus={plain.plus ? plain.plus : null}
              onChange={getPlainSelected}
            />
          ))}
        </fieldset>
        <div className={style.toggle}>
          <ToggleButton
            options={[
              { value: "Monthly", placeholder: "Monthly" },
              { value: "Yearly", placeholder: "Yearly" },
            ]}
            onChange={(e) => setPlainType(e as "Monthly" | "Yearly")}
          />
        </div>
      </Form.Content>
      <Form.Footer>
        <Button variation="back" onClick={handleBack}>
          Go Back
        </Button>
        <Button variation="next" onClick={handleNextStep}>
          Next Step
        </Button>
      </Form.Footer>
    </Form>
  );
}
