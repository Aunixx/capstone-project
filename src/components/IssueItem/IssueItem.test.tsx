import React from "react";
import { render, screen } from "@testing-library/react";
import IssueItem from "./IssueItem";

describe("IssueItem Component", () => {
  const testIssue: IssueItem = {
    id: "1",
    title: "Test Issue",
    userName: "asd",
    status: "To Do",
    userAvatar: "/path/to/avatar.png",
    category: "Bug",
    priority: "High",
    team: "Team A",
    tag: ["Tag1", "Tag2"],
  };

  test("renders IssueItem component with correct content", () => {
    render(<IssueItem issue={testIssue} />);

    const titleElement = screen.getByText(testIssue.userName);
    expect(titleElement).toBeInTheDocument();

    const categoryIcon = screen.getByTestId("category-icon");
    expect(categoryIcon).toBeInTheDocument();

    const priorityIcon = screen.getByTestId("priority-icon");
    expect(priorityIcon).toBeInTheDocument();

    const teamIcon = screen.getByTestId("team-icon");
    expect(teamIcon).toBeInTheDocument();

    const tagIcon = screen.getByTestId("tag-icon");
    expect(tagIcon).toBeInTheDocument();

    const userAvatar = screen.getByRole("img");
    expect(userAvatar).toBeInTheDocument();
    expect(userAvatar).toHaveAttribute("src", testIssue.userAvatar);

    expect(screen.getByText(testIssue.category)).toBeInTheDocument();
    expect(screen.getByText(testIssue.priority)).toBeInTheDocument();
    expect(screen.getByText(testIssue.team)).toBeInTheDocument();
    testIssue.tag.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });
});
