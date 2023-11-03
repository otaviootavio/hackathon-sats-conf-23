import React from "react";
import { PaginationList } from "./types/pagination.type";

type Props = {
  setCurrentPage: React.Dispatch<React.SetStateAction<PaginationList>>;
};

function MainAccount(props: Props) {
  const handleBillScreenClick = () => {
    props.setCurrentPage(PaginationList.Bill);
  };

  return (
    <div>
      <button onClick={handleBillScreenClick}>Add Fatura</button>
      <br />
    </div>
  );
}

export default MainAccount;
