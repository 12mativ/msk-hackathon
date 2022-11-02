import FlatCardView from "./FlatCardView";
import React, {useState} from "react";

function FlatCard() {
  const [checked, setChecked] = useState(false)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return <FlatCardView checked={checked} onChange={handleChange}/>
}

export default FlatCard