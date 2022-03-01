import style from "./style.module.css";

const Loading = () => {
  return (
    <div className={style.box}>
      <div className={style.container}>
        <span className={style.circle}></span>
        <span className={style.circle}></span>
        <span className={style.circle}></span>
        <span className={style.circle}></span>
      </div>
    </div>
  );
};

export default Loading;
