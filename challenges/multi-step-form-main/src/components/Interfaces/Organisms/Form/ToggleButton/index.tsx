import { HTMLProps, useEffect, useState } from "react";
import style from "./style.module.css";

interface ToggleButtonProps{
  options: [
    { placeholder: string; value: 'Monthly' | 'Yearly' },
    { placeholder: string; value: 'Monthly' | 'Yearly' }
  ],
  classname?: string,
  onChange?: <T>(event: T) => void
}

export function ToggleButton({ options,onChange, classname }: ToggleButtonProps) {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const option1 = options[0].value;
  const option2 = options[1].value;

  const toggleIsPressed = () => {
    setIsPressed(!isPressed);
  };

  useEffect(() => {
    onChange && onChange(!isPressed ? option1 : option2);
  }, [isPressed])

  return (
    <div className={style.toggle}>
      <label htmlFor="togglePrice" className={isPressed === false ? style.active : ''}>{options[0].placeholder}</label>
      <button
        onClick={toggleIsPressed}
        type="button"
        role="switch"
        id="togglePrice"
        aria-pressed={isPressed}
        className={classname}
      >
        <span aria-hidden="false">Toggle Price</span>
      </button>
      <label htmlFor="togglePrice"  className={isPressed === true ? style.active : ''}>{options[1].placeholder}</label>
    </div>
  );
}
