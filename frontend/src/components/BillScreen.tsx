import React, { useState } from "react";
import { PaginationList } from "./types/pagination.type";

type Props = {
  setCurrentPage: React.Dispatch<React.SetStateAction<PaginationList>>;
};

function BillScreen(props: Props) {
  const handleCreateBillClick = () => {
    props.setCurrentPage(PaginationList.Main);
  };

  return (
    <div>
      <h1>What's the Bill?</h1>
      <br />
      <h2>Bill's information</h2>
      <br />
      <form>
        <input placeholder="Description" type="text" />
      </form>
      <br />
      <form>
        <input placeholder="Value" type="number step = 0.01" />
      </form>
      <br />
      <button onClick={handleCreateBillClick}>Insert Bill</button>
      <br />
    </div>
  );
}

export default BillScreen;
