import React, { useState } from "react";
import CreateAccount from "./CreateAccount";
import AccessAccount from "./AccessAccount";
import { PaginationList } from "./types/pagination.type";
import MainAccount from "./MainAccount";
import BillScreen from "./BillScreen";
import ViewAccount from "./ViewAccount";
import Account from "./types/accountModel";

function LoginAccount() {
  const [currentPage, setCurrentPage] = useState<PaginationList>(
    PaginationList.Login
  );
  const [nickname, setNickname] = useState<string>("");
  const [accountData, setAccountData] = useState<Account|null>(null)

  const handleCreateAccountClick = () => {
    setCurrentPage(PaginationList.Create);
  };

  const handleAccessAccountClick = () => {
    setCurrentPage(PaginationList.Access);
  };

  return (
    <div>
      {currentPage === PaginationList.Login && (
        <div>
          <h1>Welcome</h1>
          <form>
            <input
              placeholder="Insert Your Nickname"
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </form>
          <br />
          <button onClick={handleCreateAccountClick}>Create Account</button>
          <br />
          <br />
          <button onClick={handleAccessAccountClick}>Access Account</button>
        </div>
      )}

      {currentPage === PaginationList.Create && (
        <div>
          <CreateAccount setCurrentPage={setCurrentPage} />
        </div>
      )}
      {currentPage === PaginationList.Access && (
        <div>
          <AccessAccount setAccountData={setAccountData} setCurrentPage={setCurrentPage} />
        </div>
      )}
      {currentPage === PaginationList.Main && (
        <div>
          <MainAccount accountData={accountData} setCurrentPage={setCurrentPage} />
        </div>
      )}
      {currentPage === PaginationList.Bill && (
        <div>
          <BillScreen setCurrentPage={setCurrentPage} />
        </div>
      )}
      {currentPage === PaginationList.View && (
        <div>
          <ViewAccount setCurrentPage={setCurrentPage} />
        </div>
      )}
    </div>
  );
}

export default LoginAccount;
