import React, { useState } from "react";
import Account from "./types/accountModel";

type Props = {
  onSave: (account: Account) => void;
};

const AddAccountForms = (props: Props) => {
  const [account, setAccount] = useState({
    id: "",
    groupId: "",
    from: "",
    to: "",
    amount: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSave(account);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={account.id}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="groupId">Group ID:</label>
        <input
          type="text"
          id="groupId"
          name="groupId"
          value={account.groupId}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="from">From:</label>
        <input
          type="text"
          id="from"
          name="from"
          value={account.from}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="to">To:</label>
        <input
          type="text"
          id="to"
          name="to"
          value={account.to}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="text"
          id="amount"
          name="amount"
          value={account.amount}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default AddAccountForms;
