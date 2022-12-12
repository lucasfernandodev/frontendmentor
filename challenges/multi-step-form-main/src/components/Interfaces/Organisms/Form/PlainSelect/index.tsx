import { HTMLProps } from "react";
import style from "./style.module.css";

interface PlainSelectProps extends HTMLProps<HTMLInputElement>{
  icon: string;
  title: string;
  price: number;
  plus?: string | null;
  type?: "Monthly" | "Yearly";
}

export function PlainSelect({
  icon,
  title,
  price,
  plus,
  type = "Monthly",
  ...args
}: PlainSelectProps) {
  const typeMinify = type === "Monthly" ? "mo" : "yr";
  return (
    <>
      <input
        className={style.input}
        type="radio"
        name="plain"
        id={title}
        {...args}
      />
      <label className={style.card} htmlFor={title}>
        <div className={style.icon}>
          <img src={icon} alt={`Icon ${title}`} />
        </div>
        <div className={style.content}>
          <h3 className={style.title}>{title}</h3>
          <p className={style.price}>{`$${price}/${typeMinify}`}</p>
          {plus && <p className={style.plus}>{plus}</p>}
        </div>
      </label>
    </>
  );
}
