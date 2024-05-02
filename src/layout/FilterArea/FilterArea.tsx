import Select from "../../components/Select/Select";
import "./FilterArea.css";

interface FilterAreaProps {}

const FilterArea = ({}: FilterAreaProps) => {
  return (
    <div className="filter-area">
      <div className="dropdowns">
        <Select
          label="Filter by Category"
          id="category"
          options={[{ label: "asd", value: "asd" }]}
        />
      </div>
    </div>
  );
};
export default FilterArea;
