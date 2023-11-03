import React, { useState } from "react";
import MainAccount from "./MainAccount";
import '../App.css';

function BillScreen() {
  const [currentPage, setCurrentPage] = useState("bill");

  const handleCreateBillClick = () => {
    setCurrentPage("main-account");
  };

  return (
    <div>
      <div className="content">
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
              <input placeholder="Value" type="number" step="0.01" />
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
      <div className="image"></div> {/* Div para exibir a imagem no canto inferior direito */}
    </div>
  );
}

export default BillScreen;
