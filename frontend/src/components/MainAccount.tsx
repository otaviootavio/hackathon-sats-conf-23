import React from "react";
import { PaginationList } from "./types/pagination.type";

type Props = {
  setCurrentPage: React.Dispatch<React.SetStateAction<PaginationList>>;
};

function MainAccount(props: Props) {
  const handleBillScreenClick = () => {
    props.setCurrentPage(PaginationList.Bill);
  };
  const handleViewAccountClick = () => {
    props.setCurrentPage(PaginationList.View);
  };

  return (
    <div>
      <div>Your balance: 2000 Sats</div> 
      <br />
      <button onClick={handleBillScreenClick}>Add Bill</button>
      <br />
      <br />
      <button onClick={handleViewAccountClick}>Finish</button>
    </div>
  );
}

export default MainAccount;
