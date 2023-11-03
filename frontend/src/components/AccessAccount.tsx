import React, { useState } from "react";
import { PaginationList } from "./types/pagination.type";

type Props = {
  setCurrentPage: React.Dispatch<React.SetStateAction<PaginationList>>;
};

function AccessAccount(props: Props) {
  const handleMainAccountClick = () => {
    props.setCurrentPage(PaginationList.Main);
  };

  return (
    <div>
      <h1>Accessing Account</h1>
      <br />
      <h2>Plese, insert the Account ID</h2>
      <form>
        <input placeholder="ID" type="text" />
      </form>
      <br />
      <h2>Is there a password?</h2>
      <br />
      <form>
        <input placeholder="Password" type="text" />
      </form>
      <br />
      <button onClick={handleMainAccountClick}>Access Account</button>
      <br />
    </div>
  );
}

export default AccessAccount;
