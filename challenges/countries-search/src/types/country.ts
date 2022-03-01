export type CountryType = {
  name: string;
  region: string;
  population: string;
  capital: string;
  flags: {
    svg: string;
    png: string;
  };
  code: string
}

export type CountryDetailedType = {
  capital: string,
  borders: [string],
  region: string,
  subregion: string,
  tld: [string],
  flags: {
    svg: string,
    png: string
  },
  name: {
    common: string,
    official: string,
    nativeName: [{
      common: string,
      official: string,
    }]
  },
  currencies: [string],
  population: string
  languages: [string]
}