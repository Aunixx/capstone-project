type OptionType = {
  value: string;
  label: string;
};

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
