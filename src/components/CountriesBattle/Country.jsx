import { useContext } from "react";
import CountriesContext from "../../contexts/CountriesContext";
import "./style.sass";

export default function Country({ title }) {
  const { countries } = useContext(CountriesContext);
  return (
    <div className="country__wrapper">
      <label>
        Choose <b>{title}</b> country:
        <select>
          {countries.map((item, index) => (
            <option key={index} value={item.name.common}>
              {item.flag}
              {item.name.official}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
