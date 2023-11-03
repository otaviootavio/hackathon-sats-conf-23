import React, { useState } from "react";
import { PaginationList } from "./types/pagination.type";

type Props = {
  setCurrentPage: React.Dispatch<React.SetStateAction<PaginationList>>;
};

function CreateAccount(props: Props) {
  const handleMainAccountClick = () => {
    props.setCurrentPage(PaginationList.Main);
  };

  return (
    <div>
      <h1>Creating Account</h1>
      <br />
      <h2>Do you wanna to put a password?</h2>
      <form>
        <input placeholder="Insert Password" type="text" />
      </form>
      <br />
      <button onClick={handleMainAccountClick}>Create Account</button>
    </div>
  );
}

export default CreateAccount;
