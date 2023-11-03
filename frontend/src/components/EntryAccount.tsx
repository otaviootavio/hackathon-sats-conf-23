import React, { useState } from "react";
import Accounts from "./types/accountsModel";
import AccountsView from "./AccountsView";
import AddAccountForms from "./AddAccountForms";
import Account from "./types/accountModel";

const myAccounts: Accounts = {
  id: [
    {
      id: "1",
      groupId: "group1",
      from: "AccountA",
      to: "AccountB",
      amount: "100",
    },
    {
      id: "2",
      groupId: "group1",
      from: "AccountA",
      to: "AccountB",
      amount: "100",
    },
    {
      id: "3",
      groupId: "group1",
      from: "AccountA",
      to: "AccountB",
      amount: "100",
    },
  ],
};

const myArrayAccounts: Account[] = myAccounts.id;

const EntryAccount = () => {
  const [accounts, setAccounts] = useState<Account[]>(myArrayAccounts);
  const [currentAccountGroup, setCurretnAccountGroup] = useState<string>("");
  const [newAccountGroupId, setNewAccountGroupId] = useState<string>("");

  const onSave = (newAccount: Account) => {
    setAccounts([...accounts, newAccount]);
    console.log(accounts);
  };

  const searchAccountGroup = () => {
    setCurretnAccountGroup(newAccountGroupId);
    setAccounts(myArrayAccounts.filter((e) => {return e.groupId === newAccountGroupId}))
    console.log(newAccountGroupId);
  };

  return (
    <>
      <section>
        <header>
          <h2>DutchLight</h2>
        </header>
        <aside>
          <h3>Entry the account address</h3>
          <div>
            <input
              type="text"
              value={newAccountGroupId}
              onChange={(e) => {
                setNewAccountGroupId(e.target.value);
              }}
            />
            <input
              type="button"
              value={"LetsGo!"}
              onClick={searchAccountGroup}
            />
          </div>
        </aside>
      </section>
      {currentAccountGroup && (
        <section>
          <aside>
            <AccountsView accountArray={accounts} />
          </aside>
          <>
            <AddAccountForms onSave={onSave} />
          </>
        </section>
      )}
    </>
  );
};

export default EntryAccount;
