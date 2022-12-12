import style from "./style.module.css";

export function ThankYou() {
  return (
    <div className={style.wrapper}>
      <img src="/assets/images/icon-thank-you.svg" alt="Check-mark icon" />
      <h2 className={style.title}>Thank you!</h2>
      <p className={style.thankMessage}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
