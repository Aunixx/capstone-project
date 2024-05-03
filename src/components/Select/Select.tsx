import React, { useEffect, useState } from "react";
import Select from "react-select";

interface SelectProps {
  options: readonly OptionType[];
  placeholder: string;
  name: string;
  setFilters: any;
  label: string;
  val: OptionType[];
}

const SimpleSelect = ({
  options,
  placeholder,
  name,
  setFilters,
  label,
  val,
}: SelectProps) => {
  const [value, onChange] = useState<readonly OptionType[]>([...val]);
  useEffect(() => {
    setFilters([...value]);
  }, [value]);

  return (
    <div className="select-wrappper">
      <label>{label}</label>
      <Select
        isMulti
        name={name}
        placeholder={placeholder}
        options={options}
        onChange={onChange}
        value={val}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </div>
  );
};
export default SimpleSelect;
