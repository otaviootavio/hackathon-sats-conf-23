import React from "react";
import Account from "./types/accountModel";

type Props = {
  accountArray: Account[];
};

const AccountsView = (props: Props) => {
  return (
    <div>
      {props.accountArray.map((account, index) => (
        <div key={account.id} className="account">
          <h3><b>Transaction Number</b> {index + 1}</h3>
          <span><b>Group</b> ID: {account.groupId}</span>
          <span><b>From</b>: {account.from}</span>
          <span><b>To</b>: {account.to}</span>
          <span className="amount"><b>Amount</b>: {account.amount}</span>
        </div>
      ))}
    </div>
  );
};

export default AccountsView;