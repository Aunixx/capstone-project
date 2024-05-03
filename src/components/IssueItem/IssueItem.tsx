import "./IssueItem.css";
import { GoTag } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { HiOutlineCircleStack } from "react-icons/hi2";

interface IssueItemProps {
  issue: IssueItem;
}

const IssueItem = ({ issue }: IssueItemProps) => {
  return (
    <ul className="issue-list" data-testId="issue-item">
      <li className="issue-item">
        <span className="issue-item-icon">
          <img src={issue.userAvatar} />
        </span>
        <p className="issue-item-title">{issue.userName}</p>
      </li>
      <li className="issue-item">
        <span className="issue-item-icon" data-testId="category-icon">
          <BiCategory />
        </span>
        <p className="issue-item-title">{issue.category}</p>
      </li>
      <li className="issue-item">
        <span className="issue-item-icon" data-testId="priority-icon">
          <BsBoxSeam />
        </span>
        <p className="issue-item-title">{issue.priority}</p>
      </li>
      <li className="issue-item">
        <span className="issue-item-icon" data-testId="team-icon">
          <HiOutlineCircleStack />
        </span>
        <p className="issue-item-title">{issue.team}</p>
      </li>
      <li className="issue-item">
        <span className="issue-item-icon" data-testId="tag-icon">
          <GoTag />
        </span>
        <p className="issue-item-title">
          {issue.tag.length
            ? issue.tag.map((item) => <span>{item}</span>)
            : "-"}
        </p>
      </li>
    </ul>
  );
};

export default IssueItem;
