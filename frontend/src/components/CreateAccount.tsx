import React, { useState } from "react";
import MainAccount from "./MainAccount";
import '../App.css';

function CreateAccount() {
  const [currentPage, setCurrentPage] = useState("create-account");

  const handleCreateClick = () => {
    setCurrentPage("main-account");
  };

  return (
    <div>
      <div className="content">
        <br />
        {currentPage === "create-account" && (
          <div>
            <h1>Creating Account</h1>
            <br />
            <h2>Do you want to set a password?</h2>
            <form>
              <input placeholder="Insert Password" type="text" />
            </form>
            <br />
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
      <div className="image"></div> {/* Div para exibir a imagem no canto inferior direito */}
    </div>
  );
}

export default CreateAccount;
