import React, { useState } from "react";
import Accounts from "./types/accountsModel";
import AccountsView from "./AccountsView";
import AddAccountForms from "./AddAccountForms";
import Account from "./types/accountModel";
import logo from "../assets/logo.png";

async function calculateDebtAndCredit(
  transList: Account[]
): Promise<Record<string, number>> {
  const balances: Record<string, number> = {};

  transList.forEach((transaction: Account) => {
    const { from, to, amount } = transaction;

    // Initialize or update the balance for the 'from' account
    balances[from] = (balances[from] || 0) - parseFloat(amount);

    // Initialize or update the balance for the 'to' account
    balances[to] = (balances[to] || 0) + parseFloat(amount);
  });

  return balances;
}

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
  const [balances, setBalances] = useState<Record<string, number>>({});

  const onSave = (newAccount: Account) => {
    setAccounts([...accounts, newAccount]);
    console.log(accounts);
  };

  const searchAccountGroup = () => {
    setCurretnAccountGroup(newAccountGroupId);
    setAccounts(
      myArrayAccounts.filter((e) => {
        return e.groupId === newAccountGroupId;
      })
    );
    console.log(newAccountGroupId);
  };

  const handleEndTheSplit = async () => {
    const result: Record<string, number> = await calculateDebtAndCredit(
      accounts
    );
    setBalances(result);
    console.log(result);
  };

  return (
    <>
      <section>
        <header>
          <h2>DutchLight</h2>
          <img src={logo} alt="Logo" className="corner-image"></img>
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
              value={"Lets Go!"}
              className="button-main"
              onClick={searchAccountGroup}
            />
          </div>
        </aside>
      </section>
      {currentAccountGroup && (
        <section>
          <aside>
            <AccountsView accountArray={accounts} />
            <br />
            <input
              type="button"
              className="button-main"
              onClick={handleEndTheSplit}
              value={"End the split!"}
            />
          </aside>
          <>
            <AddAccountForms onSave={onSave} />
          </>
        </section>
      )}
      <section>
        <aside>
          <div>
            <h3>Account Balances</h3>
            <button className="button-main" onClick={handleEndTheSplit}>
              Calculate Debts and Credits
            </button>
            <div>
              <h3>Results:</h3>
              {Object.entries(balances).map(([account, balance]) => (
                <div key={account}>
                  {account}:{" "}
                  {balance < 0
                    ? `Debt: ${Math.abs(balance)}`
                    : `Credit: ${balance}`}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </>
  );
};

export default EntryAccount;
