import Account from "../models/accountModel";

class AccountRepository {
  private accounts: Account[] = [];

  create(account: Account): Account {
    console.log(account)
    this.accounts.push(account);
    return account;
  }

  read(id: string): Account | null {
    const account = this.accounts.find(account => account.id === id);
    return account || null;
  }

  update(id: string, updatedAccountData: Partial<Account>): Account | null {
    const accountIndex = this.accounts.findIndex(account => account.id === id);
    if (accountIndex === -1) return null;

    const existingAccount = this.accounts[accountIndex];
    const updatedAccount = { ...existingAccount, ...updatedAccountData, id };
    this.accounts[accountIndex] = updatedAccount;
    
    return updatedAccount;
  }

  delete(id: string): boolean {
    const accountIndex = this.accounts.findIndex(account => account.id === id);
    if (accountIndex === -1) return false;

    this.accounts.splice(accountIndex, 1);
    return true;
  }

  getAll(): Account[] {
    return this.accounts;
  }
}

export default new AccountRepository();
