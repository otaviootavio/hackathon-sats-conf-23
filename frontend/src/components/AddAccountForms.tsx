import React, { useState } from "react";
import Account from "./types/accountModel";

type Props = {
  onSave: (account: Account) => void;
  currentGroupId: string;
};

const AddAccountForms = (props: Props) => {
  const [newId, setNewId] = useState<number>(0)

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
    setNewId(prev => prev + 1)
    e.preventDefault();
    props.onSave(account);
  };

  return (
    <form onSubmit={handleSubmit}>
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
