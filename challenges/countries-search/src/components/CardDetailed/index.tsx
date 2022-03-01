import style from "./style.module.css";
import { CountryDetailedType } from "../../types/country";
import Link from "next/link";
import { useEffect, useState } from "react";
import Country from "../../lib/countriesSearch";
// import Loading from "../Loading";

interface cardProps {
  data: CountryDetailedType;
}

type interfaceBorders = {
  name: {
    common: string;
  };
};
const CardDetailed: React.FunctionComponent<cardProps> = ({ data }) => {
  const [countryBorders, setCountryBorders] = useState<any>([] as any);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (typeof data !== "undefined") {
      if (data.borders.length > 0) {

        const array: any = [];

          for (let i = 0; i < data.borders.length; i++) {
           array.push(fetch(`https://restcountries.com/v3.1/alpha/${data.borders[i]}?fields=name`).then((value) => {return value.json()}))
          }

          array.length !== 0 ? setCountryBorders(array) : null
          setIsLoading(false);
        
      }
    }
  }, [data]);

  useEffect(() => {
    if(isLoading === false){
      if(typeof countryBorders[0] !== 'undefined'){
        if(typeof countryBorders[0].name === 'undefined'){
          const response: any = Promise.all(countryBorders).then(value => setCountryBorders(value))
        }
     
  
      
      }
    }
  }, [countryBorders, isLoading])

  const {
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = data;

  return (
    <div className={style["country-info"]}>
      <h2>{name && name.common}</h2>
      <div className={style.col}>
        <div className={style.info}>
          <span className={style.question}>Native Name: </span>
          <span className={style.answer}>{name.nativeName[0].common}</span>
        </div>
        <div className={style.info}>
          <span className={style.question}>Population: </span>
          <span className={style.answer}>{population}</span>
        </div>
        <div className={style.info}>
          <span className={style.question}>Region: </span>
          <span className={style.answer}>{region}</span>
        </div>
        <div className={style.info}>
          <span className={style.question}>Sub Region: </span>
          <span className={style.answer}>{subregion}</span>
        </div>
        <div className={style.info}>
          <span className={style.question}>Capital: </span>
          <span className={style.answer}>{capital}</span>
        </div>
      </div>
      <div className={style.col}>
        <div className={style.info}>
          <span className={style.question}>Top Level Domain: </span>
          <span className={style.answer}>{tld}</span>
        </div>
        <div className={style.info}>
          <span className={style.question}>Currencies: </span>
          <span className={style.answer}> {currencies.join(", ")}</span>
        </div>
        <div className={style.info}>
          <span className={style.question}>Languages: </span>
          <span className={style.answer}>{languages.join(", ")}</span>
        </div>
      </div>
      <div className={style.row}>
        <span className={style.question}>Border Countries:</span>
        <span className={style.answer}>
          {isLoading === false &&
            borders.map((item, index) => (
              <Link key={index} href={`/country/${item}`}>
                {typeof countryBorders[0].name === 'undefined' ? "-" : (
                 <a>{typeof countryBorders[index]?.name !== 'undefined' ? countryBorders[index].name?.common : "-"}</a>
                )}
               
              </Link>
            ))}
        </span>
      </div>
    </div>
  );
};

export default CardDetailed;
