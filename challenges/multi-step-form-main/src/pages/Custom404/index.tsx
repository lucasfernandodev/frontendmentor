import { Link } from "react-router-dom";
import style from "../../style/pages/custom404.module.css";

export function Custom404() {
  return (
    <div className={style.wrapper}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has ocurred!</p>
      <Link to='/'>Go to the homepage</Link>
    </div>
  );
}
