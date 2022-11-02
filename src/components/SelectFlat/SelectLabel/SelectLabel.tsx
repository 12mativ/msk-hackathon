import SelectLabelView from "./SelectLabelView";
import React, {useState} from "react";

function SelectLabel() {
  const [checked, setChecked] = useState(false)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return <SelectLabelView checked={checked} onChange={handleChange}/>
}

export default SelectLabel