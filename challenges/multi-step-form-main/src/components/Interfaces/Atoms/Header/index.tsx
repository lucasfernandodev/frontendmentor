import style from "./style.module.css";
export function Header({ children }: { children: React.ReactNode }) {
  return <header className={style.header}>{children}</header>;
}
