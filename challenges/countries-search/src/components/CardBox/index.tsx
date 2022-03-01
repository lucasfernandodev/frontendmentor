import style from './style.module.css';

const CardBox:React.FunctionComponent = ({children}) => {
  return (
    <section className={style.CardBox}>
      {children}
    </section>
  )
};

export default CardBox;