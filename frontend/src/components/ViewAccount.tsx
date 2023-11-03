import React from "react";
import { PaginationList } from "./types/pagination.type";

type Props = {
  setCurrentPage: React.Dispatch<React.SetStateAction<PaginationList>>;
};

const ViewAccount = (props: Props) => {
  //todo
  // mock the account data
  return <div>ViewAccount</div>;
};

export default ViewAccount;
