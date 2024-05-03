import { useEffect, useState } from "react";
import Lane from "../../components/Lane/Lane";
import "./ListArea.css";

interface ListAreaProps {
  issues: IssueItem[];
}

const ListArea = ({ issues }: ListAreaProps) => {
  const [todo, setTodo] = useState<IssueItem[]>([]);
  const [inprogress, setInprogress] = useState<IssueItem[]>([]);
  const [review, setReview] = useState<IssueItem[]>([]);
  const [completed, setCompleted] = useState<IssueItem[]>([]);

  useEffect(() => {
    if (issues?.length) {
      const todo: IssueItem[] = [];
      const inProgress: IssueItem[] = [];
      const completed: IssueItem[] = [];
      const review: IssueItem[] = [];

      issues.forEach((issue) => {
        if (issue?.status === "To Do") {
          todo.push(issue);
        } else if (issue?.status === "In Progress") {
          inProgress.push(issue);
        } else if (issue?.status === "Completed") {
          completed.push(issue);
        } else if (issue?.status === "Review") {
          review.push(issue);
        }
      });

      setTodo([...todo]);
      setInprogress([...inProgress]);
      setCompleted([...completed]);
      setReview([...review]);
    }
  }, [issues]);

  return (
    <div className="list-area">
      <Lane status="To Do" issues={todo} />
      <Lane status="In Progress" issues={inprogress} />
      <Lane status="Review" issues={review} />
      <Lane status="Completed" issues={completed} />
    </div>
  );
};
export default ListArea;
