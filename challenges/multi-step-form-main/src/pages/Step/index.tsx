import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Layout } from "../../components/Interfaces/Layout";
import { FinishingUp } from "../../components/Templates/FinishingUp";
import { PersonalInfo } from "../../components/Templates/PersonalInfo";
import { PickAddons } from "../../components/Templates/PickAddons";
import { SelectYourPlain } from "../../components/Templates/SelectYourPlain";
import { ThankYou } from "../../components/Templates/ThankYou";

export default function Step() {
  const { search }: { search: string } = useLocation();
  const [step, setStep] = useState<number>(1);

  const to = useNavigate();

  useEffect(() => {
    if (search) {
      const isQueryUnique =
        search.split("?").filter((a) => a).length > 1 ? false : true;
      if (!isQueryUnique) return to("/404");
      const curentStep = parseInt(search.split("?id=").filter((a) => a)[0]);
      setStep(curentStep);
    }
  }, [search]);

  return (
    <Layout>
      {step === 1 && <PersonalInfo />}
      {step === 2 && <SelectYourPlain />}
      {step === 3 && <PickAddons />}
      {step === 4 && <FinishingUp />}
      {step === 5 && <ThankYou />}
    </Layout>
  );
}
