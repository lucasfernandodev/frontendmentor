import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PurchaseContext } from "../../../Context/PurchaseContext";
import { InterfacePurchase } from "../../../types/Purchase";
import { Button } from "../../Interfaces/Atoms/Button";
import { Form } from "../../Interfaces/Organisms/Form";
import { AddOnsSelected } from "../../Interfaces/Organisms/Form/AddOnsSelected";
import style from "./style.module.css";

interface addonsInterface {
  title: string;
  description: string;
  price: {
    Monthly: number;
    Yearly: number;
  };
};

const addons: Record<string, addonsInterface> = {
  "Online service": {
    title: "Online service",
    description: "Access to multiplayer games",
    price: {
      Monthly: 1,
      Yearly: 10,
    },
  },
  "Larger storage": {
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: {
      Monthly: 2,
      Yearly: 20,
    },
  },
  "Customizable Profile": {
    title: "Customizable Profile",
    description: "Custom theme on your profile",
    price: {
      Monthly: 2,
      Yearly: 20,
    },
  },
};

interface PickAddonsProps {
  purchase: InterfacePurchase;
}

export function PickAddons({ purchase }: PickAddonsProps) {
  const typePlan = purchase.plain.type
  const { updateItem } = React.useContext(PurchaseContext);
  const navigation = useNavigate();
  const selectedPlain = purchase.plain.type;
  const [addonsSelected, setAddonsSelected] = useState([] as addonsInterface[])

  function handleBack(e: any) {
    e.preventDefault();
    navigation("/steps?id=2");
  }

  function handleNextStep(e: any) {
    e.preventDefault();
    updateItem({
      "add-ons": addonsSelected.map(addos => {
        return {name: addos.title,
        price: addos.price[typePlan]}
      })
    })

    navigation('/steps?id=4')
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    const input = e.target;
    const value = e.target.value;

    if(input.checked){
      setAddonsSelected([...addonsSelected, addons[value]])
    }else{
      setAddonsSelected([...addonsSelected.filter(ad => ad.title !== value)]);
    }
  }

  return (
    <Form
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    >
      <Form.Content>
        {Object.values(addons).map((addon) => (
          <AddOnsSelected
            key={addon.title}
            description={addon.description}
            price={addon.price[selectedPlain]}
            title={addon.title}
            type={selectedPlain}
            onChange={handleChange}
          />
        ))}
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
