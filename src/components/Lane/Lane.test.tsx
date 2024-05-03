import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Lane from "./Lane";

describe("Lane Component", () => {
  const status = "Test Status";
  const issues: IssueItem[] = [
    {
      id: "1",
      title: "Issue 1",
      userName: "User 1",
      status: "To Do",
      category: "Bug",
      priority: "High",
      team: "Team A",
      tag: ["Tag1", "Tag2"],
    },
    {
      id: "2",
      title: "Issue 2",
      userName: "User 2",
      status: "In Progress",
      category: "Feature",
      priority: "Low",
      team: "Team B",
      tag: ["Tag2", "Tag3"],
    },
    {
      id: "3",
      title: "Issue 3",
      userName: "User 3",
      status: "Completed",
      category: "Enhancement",
      priority: "Medium",
      team: "Team C",
      tag: ["Tag3", "Tag4"],
    },
  ];

  test("renders Lane component", () => {
    render(<Lane status={status} issues={issues} />);

    const statusElement = screen.getByText(status);
    expect(statusElement).toBeInTheDocument();

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();

    const infiniteScrollElement = screen.getByTestId("infinite-scroll");
    expect(infiniteScrollElement).toBeInTheDocument();
  });

  test("search filters issues correctly", () => {
    render(<Lane status={status} issues={issues} />);

    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "User 1" } });

    const issueItem = screen.getByText("User 1");
    expect(issueItem).toBeInTheDocument();

    expect(screen.queryByText("User 2")).not.toBeInTheDocument();
    expect(screen.queryByText("User 3")).not.toBeInTheDocument();
  });
});
