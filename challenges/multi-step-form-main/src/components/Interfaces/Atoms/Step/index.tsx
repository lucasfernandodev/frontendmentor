import style from "./style.module.css";

export interface StepProps {
  current: number;
  state?: "default" | "active";
}

export function Step({ current, state = "default" }: StepProps) {
  return (
    <span aria-label={`Step number indicator`} className={style.step} data-state={state}>
      {current}
    </span>
  );
}
