import React, { useState } from "react";
import { PaginationList } from "./types/pagination.type";
import Account from "./types/accountModel";
import axios from "axios";

type Props = {
  setCurrentPage: React.Dispatch<React.SetStateAction<PaginationList>>;
  setAccountData: React.Dispatch<React.SetStateAction<Account | null>>;
};

function AccessAccount(props: Props) {
  const [accountId, setAccountId] = useState<string>("");

  const fetchData = async () => {
    const baseUrl: string = import.meta.env.VITE_BASE_API_URL;
    const response = await axios.get(`${baseUrl}/api/account/${accountId}`);
    const accountData: Account = await response.data
    props.setAccountData(accountData)
  };

  const handleMainAccountClick = async () => {
    props.setCurrentPage(PaginationList.Main);
    await fetchData();
  };

  return (
    <div>
      <h1>Accessing Account</h1>
      <br />
      <h2>Please, insert the Account ID</h2>
      <input
        placeholder="ID"
        value={accountId}
        onChange={(e) => {
          setAccountId(e.target.value);
        }}
        type="text"
      />
      <br />
      <h2>Is there a password?</h2>
      <br />
      <input placeholder="Password" type="text" />
      <br />
      <button onClick={handleMainAccountClick}>Access Account</button>
      <br />
    </div>
  );
}

export default AccessAccount;
