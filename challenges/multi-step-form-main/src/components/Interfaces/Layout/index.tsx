import React from "react";
import { Header } from "../Atoms/Header";
import { Step } from "../Atoms/Step";
import { StepWithTitle } from "../Molecules/StepWithTitle";
import style from "./style.module.css";

const steps = ["Your Info", "Select plan", "ADD-ONS", "Summary"];

export function Layout({
  children,
  step,
}: {
  step: number;
  children: React.ReactNode;
}) {

  step = step === 5 ? 4 : step;
  
  return (
    <main className={style.main}>
      <Header>
        <div className={style.steps}>
          {steps.map((description: string, index: number) => (
            <StepWithTitle
              key={index}
              title={`STEP ${index + 1}`}
              description={description}
              current={index + 1}
              state={step === index + 1 ? "active" : "default"}
            />
          ))}
        </div>
      </Header>
      {children}
    </main>
  );
}
