import useGetAPI from "../Hooks/useGetAPI";
import { CountryDetailedType, CountryType } from "../types/country";

const BASE_URL = "https://restcountries.com/v3.1/";

function convertObjectToArray(obj: {}) {
  const array: any = [];
  Object.entries(obj).forEach((item) => array.push(item));
  return array;
}

function separator(numb:Number) {
  var str = numb.toString().split(".");
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return str.join(".");
}

const Country = {
  FindAll: () => {
    type requestProps = {
      data: CountryType[] | null;
      isFetching: boolean;
    };

    const formattedData: requestProps = {
      data: [],
      isFetching: true,
    };

    function formatCountryList(countriesData: any) {
      const countryList: CountryType[] = [];

      for (const country of countriesData) {
        let code: string = country.cioc === "" ? country.cca2 : country.cioc;
        code === "" ? country.ccn3 : code;
        code === "" ? country.cca3 : code;

        let population = separator(country.population);
        countryList.push({
          name: country.name.common,
          region: country.region,
          population: population,
          flags: country.flags,
          capital: country.capital[0],
          code: code,
        });
      }

      return countryList;
    }

    const URL =
      "all?fields=name,region,population,capital,flags,cioc,cca2,cca3,cca3";

    const { data, isFetching } = useGetAPI(`${BASE_URL}${URL}`) as requestProps;
    if (
      typeof data === "undefined" ||
      (data !== null && typeof data[0] === "undefined")
    )
      return { data: [], isFetching };

    formattedData.data =
      data && typeof data[0].name !== "undefined" ? formatCountryList(data) : [];

    return { data: formattedData.data, isFetching };
  },

  FindByCode: (code: string) => {

    type requestProps = {
      data: CountryDetailedType | null;
      isFetching: boolean;
    };

    const formattedData: requestProps = {
      data: null,
      isFetching: false,
    };

    const URL = `alpha/${code}?fields=name,region,currencies,flags,capital,subregion,population,languages,tld,borders`;

    const { data, isFetching } = useGetAPI(`${BASE_URL}${URL}`) as any;

    function formatCountryData(data: any) {

      let dataCurrent = data;
      
      dataCurrent.capital = dataCurrent.capital;
      dataCurrent.population = separator(dataCurrent.population),

      dataCurrent.currencies = Object.entries(dataCurrent.currencies).map(key => dataCurrent.currencies[key[0]])
      dataCurrent.currencies = dataCurrent.currencies.map((item: any) => {
        return Object.keys(item).map(key => { return item[key].toString().split(","); })
      });

      dataCurrent.currencies = dataCurrent.currencies.map((name: any) => {return name[0]});

      dataCurrent.languages = convertObjectToArray(dataCurrent.languages).map((item: any) => {
        return item[1]; 
      });

      dataCurrent.name.nativeName = convertObjectToArray(dataCurrent.name.nativeName).map((item: any) => {
        return item[1];
      });


      return dataCurrent;
    }





    if (typeof data !== "undefined" && data !== null) {
      if (typeof data.name !== "undefined") {
        if (formattedData.data === null) {
          formattedData.data = formatCountryData(data);
        }
      }
    }

    return { data: formattedData.data, isFetching } as requestProps;
  },
};

export default Country;
