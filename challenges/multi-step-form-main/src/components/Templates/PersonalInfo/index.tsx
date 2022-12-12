import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Interfaces/Atoms/Button";
import { Form } from "../../Interfaces/Organisms/Form";
import { PurchaseContext } from "../../../Context/PurchaseContext";
import { ownerType } from "../../../types/Purchase";

type ownerValidationType = Record<keyof ownerType, null | boolean>;

export function PersonalInfo() {

  const formRef = useRef<HTMLFormElement>(null);

  const navigate = useNavigate();
  const { updateItem } = React.useContext(PurchaseContext);

  const [phone, setPhone] = useState("");
  const [owner, setOwner] = useState({} as ownerType);
  const [isInputsValid, setIsInputsValid] = useState({} as ownerValidationType);


  const handleInputPhone = (valor: string) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    setPhone(valor)
}

  function handleInputs(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    if (formRef.current) {
      const inputs = formRef.current.getElementsByTagName("input");
      const isInputsValid = {} as Record<keyof ownerType, null | boolean>;
      const InputsValues = {} as ownerType;

      Object.values(inputs).map((element) => {
        const isName = element.getAttribute("name") as keyof ownerType;

        isInputsValid[isName] = !!element.value;
        InputsValues[isName] = element.value as never;
      });

      setIsInputsValid({ ...isInputsValid });
      setOwner({ ...InputsValues });
    }
  }



  useEffect(() => {
    const { name, email, phone } = isInputsValid;

    if (name && email && phone) {
      updateItem({ owner });
      navigate("/steps?id=2");
    }
  }, [isInputsValid]);



  return (
    <Form
      title="Personal info"
      description="Please provide your name, email address, and phone number."
      ref={formRef}
    >
      <Form.Content>
        <Form.Group isValid={isInputsValid.name}>
          <Form.Label>Name</Form.Label>
          <Form.Input name="name" placeholder="e.g. Stephen King" />
        </Form.Group>
        <Form.Group isValid={isInputsValid.email}>
          <Form.Label>Email Address</Form.Label>
          <Form.Input
            name="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
          />
        </Form.Group>
        <Form.Group isValid={isInputsValid.phone}>
          <Form.Label>Phone Number</Form.Label>
          <Form.Input
            value={phone}
            name="phone"
            type="tel"
            maxLength={15}
            pattern="\(\d{2}\)\s*\d{5}-\d{4}"
            placeholder="e.g. +1 234 567 890"
            onChange={(e: any) => handleInputPhone(e.target.value)}
          />
        </Form.Group>
      </Form.Content>
      <Form.Footer>
        <Button variation="next" onClick={handleInputs}>
          Next Step
        </Button>
      </Form.Footer>
    </Form>
  );
}
