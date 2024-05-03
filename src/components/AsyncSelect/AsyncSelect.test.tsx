import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import AsyncSelect from "./AsyncSelect";

describe("AsyncSelect Component", () => {
  const options: OptionType[] = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
  ];
  const setFilter = jest.fn();
  const label = "Test Label";
  const val: OptionType[] = [];

  test("renders AsyncSelect component", async () => {
    render(
      <AsyncSelect
        options={options}
        setFilter={setFilter}
        label={label}
        val={val}
      />
    );

    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();

    const asyncPaginateElement = screen.getByTestId("async-paginate");
    expect(asyncPaginateElement).toBeInTheDocument();

    const inputElement = asyncPaginateElement.querySelector("input");
    expect(inputElement).toBeInTheDocument();
    if (inputElement) {
      fireEvent.change(inputElement, { target: { value: options[0].label } });
      waitFor(() => screen.getByText(options[0].label));
    }
  });
});
