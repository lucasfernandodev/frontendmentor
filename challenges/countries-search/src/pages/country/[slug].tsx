import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CardDetailed from "../../components/CardDetailed";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { CountryDetailedType } from "../../types/country";
import IconBack from "../../utils/icons/Back";
import style from "../../styles/country.module.css";
import Country from "../../lib/countriesSearch";
import { GetServerSidePropsContext, NextPage } from "next";
import { parseCookies } from "nookies";

type Props = {
  theme: string
}

const CountryPage: NextPage<Props> = ({theme}) => {
  const [country, setCountry] = useState<CountryDetailedType>([] as any);

  const router = useRouter();

  const { slug } = router.query;
  const response = Country.FindByCode(slug as string);

  useEffect(() => {
    if (typeof slug === "undefined") {
      router.push("/");
    }
  });

  useEffect(() => {
    let cancel = false;
    if (cancel) return;
    if (response.isFetching === true) {
      if (response.data !== null && typeof response.data !== "undefined") {
        setCountry(response.data);
      }
    }
    return () => { 
      cancel = true;
    }
  }, [response.data, response.isFetching]);

  useEffect(() => {
    if (response.data !== null && typeof response.data !== "undefined") {
      setCountry(response.data);
    }
  },[router.query.slug, response.data])



  const handleClickBackHome = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push("/");
  };



  return (
    <>
      <Head>
        <title>
         {typeof country.name === 'undefined' ? "Country" : country.name.common} · Where in the world?
        </title>
        <link rel="shortcut icon" href="/images/favicon.svg" type="image/svg" />
      </Head>
      <Header theme={theme}/>
      <main className={style.about}>
        <aside>
          <button className={style.toHome} onClick={(e) => handleClickBackHome(e)}>
            <IconBack />
            <span>Back</span>
          </button>
        </aside>

        {response.isFetching === true ? (
          <Loading />
        ) : (
          <>
            {typeof country.name === "undefined" ? (
              <p>Error loading country</p>
            ) : (
              <section className={style.country}>
                <div className={style["country-image"]}>
                  {typeof country.flags !== "undefined" && (
                    <Image
                      src={country.flags.svg}
                      width={560}
                      height={400}
                      alt={country.name.common}
                    />
                  )}
                </div>

                <CardDetailed data={country} />
              </section>
            )}
          </>
        )}
      </main>
    </>
  );
};


export async function getServerSideProps(context: GetServerSidePropsContext){
  const {theme} = parseCookies(context);

  return {
    props: { theme }
  }
}


export default CountryPage;
