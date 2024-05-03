import { useEffect, useState } from "react";
import FilterArea from "./FilterArea/FilterArea";
import ListArea from "./ListArea/ListArea";
import "./Main.css";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

interface MainProps {}

const Main = ({}: MainProps) => {
  const [issues, setIssues] = useState<IssueItem[]>([]);
  const [filteredIssues, setFilteredIssues] = useState<IssueItem[]>([]);
  const [categories, setCategories] = useState<OptionType[]>([]);
  const [priorities, setPriorities] = useState<OptionType[]>([]);
  const [teams, setTeams] = useState<OptionType[]>([]);
  const [tags, setTags] = useState<OptionType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchIssues = async () => {
      setLoading(true);
      try {
        Promise.all([
          axios
            .get("https://assets.outsized.com/hiring/issues-0.json")
            .then((res) => {
              setIssues((prev: IssueItem[]) => [...prev, ...res.data]);
              setLoading(false);
            }),
          axios
            .get("https://assets.outsized.com/hiring/issues-1.json")
            .then((res) => {
              setIssues((prev: IssueItem[]) => [...prev, ...res.data]);
              setLoading(false);
            }),
          axios
            .get("https://assets.outsized.com/hiring/issues-2.json")
            .then((res) => {
              setIssues((prev: IssueItem[]) => [...prev, ...res.data]);
              setLoading(false);
            }),
          axios
            .get("https://assets.outsized.com/hiring/issues-3.json")
            .then((res) => {
              setIssues((prev: IssueItem[]) => [...prev, ...res.data]);
              setLoading(false);
            }),
        ]);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    };
    if (issues) {
      fetchIssues();
    }
  }, []);

  useEffect(() => {
    if (issues) {
      setFilteredIssues([...issues]);
      const uniqueCategories = Array.from(
        new Set(issues.map((issue: IssueItem) => issue.category))
      ).map((team) => ({ label: team, value: team }));
      setCategories(uniqueCategories);

      const uniquePriorities = Array.from(
        new Set(issues.map((issue: IssueItem) => issue.priority))
      ).map((team) => ({ label: team, value: team }));
      setPriorities(uniquePriorities);

      const uniqueTeams = Array.from(
        new Set(issues.map((issue: IssueItem) => issue.team))
      ).map((team) => ({ label: team, value: team }));
      setTeams(uniqueTeams);

      const uniqueTags = Array.from(
        new Set(issues.flatMap((issue: IssueItem) => issue.tag))
      ).map((team) => ({ label: team, value: team }));

      setTags(uniqueTags);
    }
  }, [issues]);

  return (
    <div className="main">
      {loading ? (
        <div className="loader-wrapper">
          <ClipLoader
            color="#e2e2e2"
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <p>Fetching data please wait</p>
        </div>
      ) : (
        <>
          <FilterArea
            tags={tags}
            team={teams}
            categories={categories}
            priorities={priorities}
            setIssues={setFilteredIssues}
            issues={issues}
          />
          <ListArea issues={filteredIssues} />
        </>
      )}
    </div>
  );
};
export default Main;
