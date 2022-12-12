import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Layout } from "../../components/Interfaces/Layout";
import { FinishingUp } from "../../components/Templates/FinishingUp";
import { PersonalInfo } from "../../components/Templates/PersonalInfo";
import { PickAddons } from "../../components/Templates/PickAddons";
import { SelectYourPlain } from "../../components/Templates/SelectYourPlain";
import { ThankYou } from "../../components/Templates/ThankYou";
import { PurchaseContext } from "../../Context/PurchaseContext";
import { isAllowed } from "../../utils/isAllowed";

export default function Step() {
  const { purchase } = React.useContext(PurchaseContext);
  const { search }: { search: string } = useLocation();
  const [step, setStep] = useState<number>(1);

  const navigate = useNavigate();

  useEffect(() => {
    if (search) {
      const validade = isAllowed({ query: search });
      if (validade.isError) return navigate("404");
      if (validade.id !== 1 && typeof purchase.owner.name === "undefined") {
        return navigate("/steps?id=1");
      }
      if (validade.id) return setStep(validade.id);
    }
  }, [search]);

  return (
    <Layout step={step}>
      {step === 1 && <PersonalInfo />}
      {step === 2 && <SelectYourPlain purchase={purchase} />}
      {step === 3 && <PickAddons purchase={purchase} />}
      {step === 4 && <FinishingUp purchase={purchase}/>}
      {step === 5 && <ThankYou />}
    </Layout>
  );
}
