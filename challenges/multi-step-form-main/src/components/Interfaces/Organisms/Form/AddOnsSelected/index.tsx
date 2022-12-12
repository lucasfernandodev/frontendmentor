import { HTMLProps } from "react";
import style from "./style.module.css";

interface AddOnsSelectedProps extends HTMLProps<HTMLInputElement>{
  title: string;
  description: string;
  price: number;
  type?: "Monthly" | "Yearly";
}

export function AddOnsSelected({
  title,
  description,
  price,
  type,
  onChange,
  ...args
}: AddOnsSelectedProps) {
  
  const formattedPrice = `+$${price}/${type === "Monthly" ? "mo" : "yr"}`;

  function ToggleClassSelected(e: any) {
    const input = e.target;
    const label = e.target.parentNode.parentNode;

    if (input.checked) {
      label.classList.add(style.active);
    } else {
      label.classList.remove(style.active);
    }
  }

  function processONChange(e: any){
    ToggleClassSelected(e)
    onChange && onChange(e)
  }
  return (
    <label htmlFor={title.replaceAll(" ", "")} className={style.content}>
      <div className={style.info}>
        <input
          onChange={processONChange}
          type="checkbox"
          name="add-ons"
          defaultValue={title}
          id={title.replaceAll(" ", "")}
          {...args}
        />
        <div className={style.summary}>
          <h3 className={style.title}>{title}</h3>
          <p className={style.description}>{description}</p>
        </div>
      </div>
      <span className={style.price}>{formattedPrice}</span>
    </label>
  );
}
