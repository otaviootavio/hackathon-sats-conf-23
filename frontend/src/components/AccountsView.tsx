import Account from "./types/accountModel";

type Props = {
  accountArray: Account[];
};

const AccountsView = (props: Props) => {
  return (
    <div>
      {props.accountArray.map((account, index) => (
        <div key={account.id}>
          <h3><b>Account</b> {index + 1}</h3>
          <span><b>Group</b> ID: {account.groupId}</span>
          <span><b>From</b>: {account.from}</span>
          <span><b>To</b>: {account.to}</span>
          <span><b>Amount</b>: {account.amount}</span>
        </div>
      ))}
    </div>
  );
};

export default AccountsView;
