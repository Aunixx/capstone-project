import { useEffect } from "react";
import Lane from "../../components/Lane/Lane";
import "./ListArea.css";

interface ListAreaProps {
  issues: any;
}

const ListArea = ({ issues }: ListAreaProps) => {
  useEffect(() => {
    console.log(issues);
  }, [issues]);
  return (
    <div className="list-area">
      {[1, 2, 3, 4].map((lane) => (
        <Lane />
      ))}
    </div>
  );
};
export default ListArea;
