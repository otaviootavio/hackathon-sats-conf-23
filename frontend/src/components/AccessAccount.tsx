import React, { useState } from "react";
import MainAccount from "./MainAccount";

function AccessAccount() {
  const [currentPage, setCurrentPage] = useState("access-account");

  const handleAccessClick = () => {
    setCurrentPage("main-account");
  };

  return (
    <div>
      
      <br />
      {currentPage === "access-account" && (
        <div>
            <h1>Accessing Account</h1>
            <br/>
            <h2>Plese, insert the Account ID</h2>
            <form>
              <input placeholder="ID" type="text" />
            </form>
            <br/>
            <h2>Is there a password?</h2>
            <br/>
            <form>
              <input placeholder="Password" type="text" />
            </form>
            <br/>
          <button onClick={handleAccessClick}>Access Account</button>
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

export default AccessAccount;