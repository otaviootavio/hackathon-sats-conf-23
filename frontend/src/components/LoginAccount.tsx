import React, { useState } from "react";
import ViewAccount from "./ViewAccount";
import CreateAccount from "./CreateAccount";
import AccessAccount from "./AccessAccount";
import '../App.css';

function LoginAccount() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleCreateAccountClick = () => {
    setCurrentPage("create-account");
  };

  const handleAccessAccountClick = () => {
    setCurrentPage("access-account");
  };

  return (
    <div>
      <div className="content">
        {/* Seu conteúdo */}
        {currentPage === "home" && (
          <div>
            <h1>Welcome</h1>
            <form>
              <input placeholder="Insert Your Nickname" type="text" />
            </form>
            <br />
            <button onClick={handleCreateAccountClick}>Create Account</button>
            <br />
            <br />
            <button onClick={handleAccessAccountClick}>Access Account</button>
          </div>
        )}
        {currentPage === "create-account" && (
          <div>
            <CreateAccount />
          </div>
        )}
        {currentPage === "access-account" && (
          <div>
            <AccessAccount />
          </div>
        )}
      </div>
      <div className="image"></div> {/* Div para exibir a imagem no canto inferior direito */}
    </div>
  );
}

export default LoginAccount;
