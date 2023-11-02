import React, { useState } from "react";
import MainAccount from "./MainAccount";

function CreateAccount() {
  const [currentPage, setCurrentPage] = useState("create-account");

  const handleCreateClick = () => {
    setCurrentPage("main-account");
  };

  return (
    <div>
      
      <br />
      {currentPage === "create-account" && (
        <div>
            <h1>Creating Account</h1>
            <br/>
            <h2>Do you wanna to put a password?</h2>
            <form>
              <input placeholder="Insert Passward" type="text" />
            </form>
            <br/>
          <button onClick={handleCreateClick}>Create Account</button>
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

export default CreateAccount;