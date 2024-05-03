import { useState } from "react";
import IssueItem from "../IssueItem/IssueItem";
import InfiniteScroll from "react-infinite-scroll-component";
import { IoSearch } from "react-icons/io5";
import "./Lane.css";

interface LaneProps {
  status: string;
  issues: IssueItem[];
}

const Lane = ({ status, issues }: LaneProps) => {
  const [itemsToShow, setItemsToShow] = useState<number>(20);

  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredIssues = issues.filter((issue) =>
    issue.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const loadMore = () => {
    setTimeout(() => {
      setItemsToShow(itemsToShow + 20);
    }, 500);
  };
  return (
    <div className="lane-area">
      <div className="lane-header">
        <h2>{status}</h2>
        <div className="input-wrapper">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IoSearch />
        </div>
      </div>
      <div className="issues-wrapper" data-testId="infinite-scroll">
        <InfiniteScroll
          dataLength={itemsToShow}
          next={loadMore}
          hasMore={itemsToShow < issues.length}
          height={"calc(100vh - 300px)"}
          loader={<h4>Loading...</h4>}
          endMessage={<p>No more items</p>}
        >
          {filteredIssues.slice(0, itemsToShow).map((issue, index) => (
            <IssueItem key={issue.id} issue={issue} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};
export default Lane;
