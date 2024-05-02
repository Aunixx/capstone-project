import { useEffect, useState } from "react";
import FilterArea from "./FilterArea/FilterArea";
import ListArea from "./ListArea/ListArea";
import "./Main.css";
import axios from "axios";

type IssueItem = {
  id: string;
  title: string;
  userName: string;
  userAvatar?: string;
  status: "To Do" | "In Progress" | "Review" | "Completed";
  category: "Bug" | "Feature" | "Enhancement" | "Question";
  priority: "Low" | "Medium" | "High" | "Critical";
  team: string;
  tag: string[];
};

interface MainProps {}

const Main = ({}: MainProps) => {
  const [issues, setIssues] = useState<IssueItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [priorities, setPriorities] = useState<string[]>([]);
  const [teams, setTeams] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        Promise.all([
          axios
            .get("https://assets.outsized.com/hiring/issues-0.json")
            .then((res) =>
              setIssues((prev: IssueItem[]) => [...prev, ...res.data])
            ),
          axios
            .get("https://assets.outsized.com/hiring/issues-1.json")
            .then((res) =>
              setIssues((prev: IssueItem[]) => [...prev, ...res.data])
            ),
          axios
            .get("https://assets.outsized.com/hiring/issues-2.json")
            .then((res) =>
              setIssues((prev: IssueItem[]) => [...prev, ...res.data])
            ),
          axios
            .get("https://assets.outsized.com/hiring/issues-3.json")
            .then((res) =>
              setIssues((prev: IssueItem[]) => [...prev, ...res.data])
            ),
        ]);

        // setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (issues) {
      fetchIssues();
    }
  }, []);

  useEffect(() => {
    if (issues) {
      const uniqueCategories = Array.from(
        new Set(issues.map((issue: IssueItem) => issue.category))
      );
      console.log(uniqueCategories);
      setCategories(uniqueCategories);

      const uniquePriorities = Array.from(
        new Set(issues.map((issue: IssueItem) => issue.priority))
      );
      console.log(uniquePriorities);
      setPriorities(uniquePriorities);

      const uniqueTeams = Array.from(
        new Set(issues.map((issue: IssueItem) => issue.team))
      );
      console.log(uniqueTeams);
      setTeams(uniqueTeams);

      const uniqueTags = Array.from(
        new Set(issues.flatMap((issue: IssueItem) => issue.tag))
      );
      console.log(uniqueTags);
      setTags(uniqueTags);
    }
  }, [issues]);

  return (
    <div className="main">
      <FilterArea />
      <ListArea issues={issues} />
    </div>
  );
};
export default Main;
