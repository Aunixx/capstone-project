import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./Select.css";

type option = {
  label: string;
  value: string;
};
interface SelectProps {
  id: string;
  options: option[];
  label: string;
}

const Select = ({ id, options, label }: SelectProps) => {
  return (
    <Autocomplete
      disablePortal
      id={id}
      options={options}
      sx={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default Select;
