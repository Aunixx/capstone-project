import React from "react";
import { render, screen } from "@testing-library/react";
import FilterArea from "./FilterArea";

describe("FilterArea Component", () => {
  const tags: OptionType[] = [
    { label: "Tag 1", value: "tag_1" },
    { label: "Tag 2", value: "tag_2" },
  ];
  const categories: OptionType[] = [
    { label: "Bug", value: "Bug" },
    { label: "Feature", value: "Feature" },
  ];
  const priorities: OptionType[] = [
    { label: "Low", value: "Low" },
    { label: "Medium", value: "Medium" },
  ];
  const team: OptionType[] = [
    { label: "Team A", value: "Team A" },
    { label: "Team B", value: "Team B" },
  ];
  const setIssues = jest.fn();
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

  test("renders FilterArea component with correct content", () => {
    render(
      <FilterArea
        tags={tags}
        categories={categories}
        team={team}
        priorities={priorities}
        setIssues={setIssues}
        issues={issues}
      />
    );
  });

  test("Reset Button to be in the document", () => {
    render(
      <FilterArea
        tags={tags}
        categories={categories}
        team={team}
        priorities={priorities}
        setIssues={setIssues}
        issues={issues}
      />
    );
    expect(screen.getByTestId("reset-button")).toBeInTheDocument();
  });
  test("Filters to be in the document", () => {
    render(
      <FilterArea
        tags={tags}
        categories={categories}
        team={team}
        priorities={priorities}
        setIssues={setIssues}
        issues={issues}
      />
    );
    expect(screen.getByTestId("category")).toBeInTheDocument();
    expect(screen.getByTestId("priority")).toBeInTheDocument();
    expect(screen.getByTestId("team")).toBeInTheDocument();
    expect(screen.getByTestId("async-paginate")).toBeInTheDocument();
  });
});
