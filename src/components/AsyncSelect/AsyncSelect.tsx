import { useEffect, useState } from "react";
import type { GroupBase, OptionsOrGroups } from "react-select";
import { AsyncPaginate } from "react-select-async-paginate";

interface AsyncSelectProps {
  options: OptionType[];
  setFilter: any;
  label: string;
  val: OptionType[];
}

const AsyncSelect = ({ options, setFilter, label, val }: AsyncSelectProps) => {
  const sleep = (ms: number) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(undefined);
      }, ms);
    });
  const loadOptions = async (
    search: string,
    prevOptions: OptionsOrGroups<OptionType, GroupBase<OptionType>>
  ) => {
    await sleep(1000);

    let filteredOptions: OptionType[];
    if (!search) {
      filteredOptions = options;
    } else {
      const searchLower = search.toLowerCase();

      filteredOptions = options.filter(({ label }: OptionType) =>
        label.toLowerCase().includes(searchLower)
      );
    }

    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
      prevOptions.length,
      prevOptions.length + 10
    );

    return {
      options: slicedOptions,
      hasMore,
    };
  };
  const [value, onChange] = useState<readonly OptionType[]>([...val]);
  useEffect(() => {
    setFilter([...value]);
  }, [value]);
  return (
    <div className="select-wrappper" data-testId="async-paginate">
      <label>{label}</label>
      <AsyncPaginate
        value={val}
        loadOptions={loadOptions}
        isMulti
        placeholder="Select tag"
        closeMenuOnSelect={false}
        onChange={onChange}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </div>
  );
};

export default AsyncSelect;
