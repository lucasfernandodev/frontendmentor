import { Step, StepProps } from "../../Atoms/Step";
import style from "./style.module.css";

interface StepWithTitleProps extends StepProps {
  title: string,
  description: string,
}

export function StepWithTitle({ current, state, title, description }: StepWithTitleProps) {
  return (
   <div className={style.stepWithTitle}>
    <span>
      <Step current={current} state={state} />
    </span>
    <div className={style.wrapper}>
      <span className={style.title}>{title}</span>
      <span className={style.description}>{description}</span>
    </div>
   </div>
  );
}
