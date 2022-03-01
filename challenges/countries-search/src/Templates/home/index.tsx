import style from "../../styles/style.module.css";
import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Country from "../../lib/countriesSearch";
import { CountryType } from "../../types/country";
import Search from "../../components/Search";
import CardBox from "../../components/CardBox";
import Select from "../../components/Select";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
import titleCase from "../../utils/titleCase";

const HomeTemplate = () => {
  const [region, setRegion] = useState<string>("all");
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CountryType[]>([]);
  const [countriesData, setCountriesData] = useState<CountryType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const response = Country.FindAll();
  const inputRef = useRef(null);

  useEffect(() => {
    if(countriesData.length === 0 && response.isFetching === true){
      if (response.data.length !== 0 && response.data !== null) {
         setCountriesData(response.data);
      }
    }
  }, [response.data, countriesData, response.isFetching]);

  useEffect(() => {

    if (search.length !== 0 && search !== "") {

      setIsLoading(true);

      const timer = setTimeout(() => {
        const list = countriesData;
        const filterCountries = list.filter((country: CountryType) => {
          return country.name.includes(search) ||  country.name.includes(titleCase(search));
        });

        if (filterCountries.length > 0) {
          if (region !== "all") {
            const list = filterCountries;
            const filterCountriesByRegion = list.filter((country) => {
              return country.region.includes(region);
            });

            if (filterCountriesByRegion.length !== 0) {
              setIsLoading(false);
              setSearchResult(filterCountriesByRegion);
            } else {
              setSearchResult([]);
              setIsLoading(false);
            }
          } else {
            setIsLoading(false);
            setSearchResult(filterCountries);
          }
        } else {
          setSearchResult([]);
          setIsLoading(false);
        }
      }, 1000);


      return () => {
        clearTimeout(timer);
      };
    } else {

      const sliceArray = countriesData.slice(0, 20);
      setSearchResult(sliceArray);
    }
  }, [region, search, countriesData]);



  return(
    <>
    <Header />
      <main className={style.home}>
        <aside className={style.boxSearch}>
          <Search
            ref={inputRef}
            onChange={(e: any) => setSearch(e.target.value)}
          />
          <Select onClick={(e) => setRegion(e)} />
        </aside>

        <CardBox>
          {isLoading === true ? <Loading /> : (
            <>
              {response.isFetching === true ? <Loading /> :
              <>
                {searchResult.length !== 0 ? (
                  searchResult.map(item => <Card key={item.name} data={item}/>)
                ) : (
                  <p>No country found.</p>
                )}
              </>
              }
            </>
          )}
        </CardBox>
      </main>
    </>
  )
}

export default HomeTemplate;