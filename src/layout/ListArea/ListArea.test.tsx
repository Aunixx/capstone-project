import React from "react";
import { render, screen } from "@testing-library/react";
import ListArea from "./ListArea";

describe("ListArea Component", () => {
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

  test("renders LisArea component with issues", () => {
    render(<ListArea issues={issues} />);
  });
});
