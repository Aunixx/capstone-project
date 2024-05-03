import "./FilterArea.css";
import { useEffect, useState } from "react";
import AsyncSelect from "../../components/AsyncSelect/AsyncSelect";
import SimpleSelect from "../../components/Select/Select";
import { IoMdClose } from "react-icons/io";

interface FilterAreaProps {
  tags: OptionType[];
  categories: OptionType[];
  priorities: OptionType[];
  team: OptionType[];
  setIssues: any;
  issues: IssueItem[];
}

const FilterArea = ({
  tags,
  categories,
  priorities,
  team,
  setIssues,
  issues: allIssues,
}: FilterAreaProps) => {
  const [tagFilter, setTagFilter] = useState<OptionType[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<OptionType[]>([]);
  const [priorityFilter, setPriorityFilter] = useState<OptionType[]>([]);
  const [teamFilter, setTeamFilter] = useState<OptionType[]>([]);

  useEffect(() => {
    console.log(tagFilter, categoryFilter, priorityFilter, teamFilter);
    const filteredIssues = allIssues.filter((issue) => {
      const tagMatch =
        tagFilter.length === 0 ||
        tagFilter.some((tagFilter) => issue.tag.includes(tagFilter.value));

      const categoryMatch =
        categoryFilter.length === 0 ||
        categoryFilter.some(
          (categoryFilter) => issue.category === categoryFilter.value
        );

      const priorityMatch =
        priorityFilter.length === 0 ||
        priorityFilter.some(
          (priorityFilter) => issue.priority === priorityFilter.value
        );

      const teamMatch =
        teamFilter.length === 0 ||
        teamFilter.some((teamFilter) => issue.team === teamFilter.value);

      return tagMatch && categoryMatch && priorityMatch && teamMatch;
    });

    setIssues(filteredIssues);
  }, [tagFilter, categoryFilter, priorityFilter, teamFilter]);

  const handleReset = () => {
    setTagFilter([]);
    setCategoryFilter([]);
    setPriorityFilter([]);
    setTeamFilter([]);
  };

  const removeFilter = (filter: OptionType, type: string) => {
    console.log(categoryFilter);
    switch (type) {
      case "category":
        setCategoryFilter(
          categoryFilter.filter((f) => f.value !== filter.value)
        );
        break;
      case "priority":
        setPriorityFilter(
          priorityFilter.filter((f) => f.value !== filter.value)
        );
        break;
      case "team":
        setTeamFilter(teamFilter.filter((f) => f.value !== filter.value));
        break;
      case "tag":
        setTagFilter(tagFilter.filter((f) => f.value !== filter.value));
        break;
      default:
        break;
    }
  };

  return (
    <div className="filter-area">
      <div className="dropdowns">
        <SimpleSelect
          placeholder="Select category"
          options={categories}
          name="Categories"
          val={categoryFilter}
          testId="category"
          label="Filter By Category"
          setFilters={setCategoryFilter}
        />
        <SimpleSelect
          placeholder="Select priority"
          options={priorities}
          name="priority"
          val={priorityFilter}
          testId="priority"
          label="Filter By  Priority"
          setFilters={setPriorityFilter}
        />

        <SimpleSelect
          placeholder="Select team"
          options={team}
          name="team"
          val={teamFilter}
          testId="team"
          label="Filter By Team"
          setFilters={setTeamFilter}
        />
        <AsyncSelect
          options={tags}
          val={tagFilter}
          setFilter={setTagFilter}
          label="Filter By Tag"
        />
      </div>
      <div className="pills-area">
        <div className="pills-section" data-testId="pills-section">
          {categoryFilter.map((filter: OptionType) => (
            <span className="category pill">
              <button onClick={() => removeFilter(filter, "category")}>
                <IoMdClose />
              </button>
              <span>{filter?.label}</span>
            </span>
          ))}
          {priorityFilter.map((filter: OptionType) => (
            <span className="priority pill">
              <button onClick={() => removeFilter(filter, "priority")}>
                <IoMdClose />
              </button>
              <span>{filter?.label}</span>
            </span>
          ))}
          {teamFilter.map((filter: OptionType) => (
            <span className="team pill">
              <button onClick={() => removeFilter(filter, "team")}>
                <IoMdClose />
              </button>
              <span>{filter?.label}</span>
            </span>
          ))}
          {tagFilter.map((filter: OptionType) => (
            <span className="tag pill">
              <button onClick={() => removeFilter(filter, "tag")}>
                <IoMdClose />
              </button>
              <span>{filter?.label}</span>
            </span>
          ))}
        </div>
        <button
          className="reset-filter"
          onClick={handleReset}
          data-testId="reset-button"
        >
          Reset Filter
        </button>
      </div>
    </div>
  );
};
export default FilterArea;
