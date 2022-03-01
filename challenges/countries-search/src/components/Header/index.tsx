import { useEffect, useState } from "react";
import IconMoon from "../../utils/icons/Moon";
import style from "./style.module.css";
import { setCookie, parseCookies } from "nookies";
import IconSun from "../../utils/icons/Sun";

const Header = () => {

  const {theme} = parseCookies();
  const [lightMode, setLightMode] = useState(theme === "dark" ? false : true);

  useEffect(() => {
    const themeElementRef = document.querySelector('#theme');
    const windowElementRef = document.querySelector('body');

   
    if(typeof theme === 'undefined' && theme === null){
      themeElementRef?.classList.remove("light");
      themeElementRef?.classList.add("dark");

      windowElementRef?.classList.remove("light");
      windowElementRef?.classList.add("dark");

    }else{
      if(lightMode !== true){
        themeElementRef?.classList.remove("light");
        themeElementRef?.classList.add("dark");
  
        windowElementRef?.classList.remove("light");
        windowElementRef?.classList.add("dark");
      }else{
        themeElementRef?.classList.remove("dark");
        themeElementRef?.classList.add("light");
  
        windowElementRef?.classList.remove("dark");
        windowElementRef?.classList.add("light");
      }
    }


    setCookie(null, "theme", lightMode === true ? "light" : "dark", {
      maxAge: 86400 * 7,
      path: "/"
    })
  }, [lightMode, theme])

  return (
    <header className={style.header}>
      <div className={style.content}>
        <div className="brand">
          <h1>Where in the world?</h1>
        </div>
        <div className="dark-mode-toggle">
          <button className="dark-mode" onClick={e => lightMode === true ? setLightMode(false) : setLightMode(true)}>
            <div className="icon">
              {lightMode === true ? <IconMoon /> : <IconSun />}
            </div>
            <span>{lightMode !== true ? "Light" : "Dark"} Mode</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export async function getServerSideProps(context: any) {
  const cookies = parseCookies(context)
  
  return {
    props: {
      theme: "dark"
    }
  }
}

export default Header;
