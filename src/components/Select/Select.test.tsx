import { render, screen } from "@testing-library/react";
import SimpleSelect from "./Select";

describe("SimpleSelect Component", () => {
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  test("renders SimpleSelect component with correct content", () => {
    const placeholder = "Select option";
    const name = "options";
    const label = "Select an option";
    const val: OptionType[] = [];

    render(
      <SimpleSelect
        options={options}
        placeholder={placeholder}
        name={name}
        setFilters={() => {}}
        label={label}
        val={val}
      />
    );

    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();

    const placeholderElement = screen.getByText(placeholder);
    expect(placeholderElement).toBeInTheDocument();

    const selectComponent = screen.getByRole("combobox");
    expect(selectComponent).toBeInTheDocument();
  });
});
