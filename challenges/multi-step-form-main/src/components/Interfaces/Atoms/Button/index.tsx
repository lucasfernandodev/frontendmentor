import { HTMLAttributes, ReactNode } from "react";
import style from "./style.module.css";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variation?: "back" | "next" | "confirm";
}

export function Button({
  children,
  className,
  variation = "next",
  ...args
}: ButtonProps) {
  return (
    <button
      className={[style.button, style[variation], className].join(" ")}
      {...args}
    >
      {children}
    </button>
  );
}
