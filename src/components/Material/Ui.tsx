import { FC } from "react";
import { Link } from "react-router-dom";
import { BasicTabs } from "./Tabs";

export const Ui: FC = () => {
  return (
    <div>
      <Link to="/"> наазад </Link>
      <BasicTabs />
    </div>
  );
};
