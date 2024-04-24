import { useEffect } from "react";
import { REGIONS } from "../../constants/countries";
import { useState } from "react";

export default function SelectRegion({ liftingRegion }) {
  const [region, setRegion] = useState();

  const handleSelectRegion = (e) => setRegion(e.target.value);

  useEffect(() => {
    liftingRegion(region);
  }, [region]);

  return (
    <label>
      Choose the region:{" "}
      <select onChange={handleSelectRegion}>
        <option selected disabled>
          Select the region
        </option>
        {REGIONS.map((item, index) => (
          <option key={index} value={item}>{item}</option>
        ))}
      </select>
    </label>
  );
}
