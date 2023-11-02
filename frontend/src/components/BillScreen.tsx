import React, { useState } from "react";
import MainAccount from "./MainAccount";


function BillScreen() {
  const [currentPage, setCurrentPage] = useState("bill");

  const handleCreateBillClick = () => {
    setCurrentPage("main-account");
  };


  return (
    <div>
      
      {currentPage === "bill" && (
        <div>
          <h1>What's the Bill?</h1>
          <br/>
          <h2>Bill's information</h2>
          <br/>
            <form>
              <input placeholder="Description" type="text" />
            </form>
          <br />
          <form>
              <input placeholder="Value" type = "number step = 0.01" />
            </form>
          <br />
          <button onClick={handleCreateBillClick}>Insert Bill</button>
          <br />
        </div>
      )}
      {currentPage === "main-account" && (
        <div>
          <MainAccount />
        </div>
      )}
    </div>
  );
}

export default BillScreen;
