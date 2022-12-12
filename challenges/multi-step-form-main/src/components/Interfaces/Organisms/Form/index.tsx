import React, { ForwardedRef, HTMLProps, ReactNode } from "react";
import style from "./style.module.css";
interface FormProps extends HTMLProps<HTMLFormElement> {
  title: string;
  description: string;
  children?: ReactNode;
}

const Root = React.forwardRef(
  (
    { title, description, children }: FormProps,
    ref: ForwardedRef<HTMLFormElement>
  ) => (
    <form ref={ref} className={style.form}>
      <div className={style.header}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.description}>{description}</p>
      </div>
      {children}
    </form>
  )
);

function Content({ children }: HTMLProps<HTMLDivElement>) {
  return <div className={style.content}>{children}</div>;
}

interface input extends HTMLProps<HTMLInputElement>{
  isMask?: boolean;
  mask?: string | Array<string | RegExp>;
}

function Input({
  className,
  ...args
}: input) {

  return <input className={[style.input, className].join(" ")} {...args} />;
}




function Label({ children, className }: HTMLProps<HTMLLabelElement>) {
  return (
    <label className={[style.label, className].join(" ")}>{children}</label>
  );
}




interface GroupProps extends HTMLProps<HTMLFieldSetElement> {
  isValid?: boolean | null;
}




function Group({ children, className, isValid }: GroupProps) {
  const isInputValid =
    isValid === false ? style.invalid : isValid === true ? style.valid : null;
  return (
    <fieldset className={[style.fieldset, isInputValid, className].join(" ")}>
      {children}
      <span className={style.ErrorMessage}>This field is required</span>
    </fieldset>
  );
}




function Footer({ children, className }: HTMLProps<HTMLElement>) {
  return <div className={[style.footer, className].join(" ")}>{children}</div>;
}



export const Form = Object.assign(Root, {
  Input,
  Label,
  Group,
  Content,
  Footer,
});
