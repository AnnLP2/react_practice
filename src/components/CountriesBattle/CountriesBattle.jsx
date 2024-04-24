import { useEffect, useState } from "react";
import SelectRegion from "./SelectRegion";
import Country from "./Country";
import service from "../../services/restcountries";
import CountriesContext from "../../contexts/CountriesContext";
import "./style.sass";

export default function CountriesBattle() {
  const [region, setRegion] = useState();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (region) {
      (async () => {
        const response = await service.getCountries(region);
        setCountries(response);
      })();
    }
  }, [region]);

  return (
    <div>
      <SelectRegion liftingRegion={setRegion} />
          <CountriesContext.Provider value={{ countries } }>
        {countries.length ? (
          <div className="countries__wrapper">
            <Country title="First" />
            <Country title="Second" />
          </div>
        ) : null}
      </CountriesContext.Provider>
    </div>
  );
}
