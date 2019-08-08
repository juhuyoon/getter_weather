import React, { useState } from "react";
import Select from "react-select";
import * as cities from "../../data/cities";

function AutoComplete() {
  console.log(cities);
  // hook with 2 variables
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  return (
    <Select value={selectedOption} onChange={handleChange} options={cities} />
  );
}

export default AutoComplete;
