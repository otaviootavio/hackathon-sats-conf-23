import Account from "../models/accountModel";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebaseConfig.json";
import { getDatabase, ref, set, get, child, remove } from "firebase/database";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

class AccountRepository {
  private accounts: Account[] = [];

  create(account: Account): Account {
    set(ref(database, "accounts/" + account.id), account);
    return account;
  }

  async read(id: string): Promise<Account | null> {
    try {
      const dbRef = ref(database);
      const snapshot = await get(child(dbRef, `accounts/${id}`));
      if (snapshot.exists()) {
        const account: Account = <Account>snapshot.val();
        return account;
      } else {
        console.log("No data available");
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  delete(account: Account): boolean {
    remove(ref(database, "accounts/" + account.id));
    return true;
  }

  async getAll(): Promise<Account[] | null> {
    try {
      const dbRef = ref(database);
      const snapshot = await get(child(dbRef, "accounts"));
      if (snapshot.exists()) {
        const account: Account[] = <Account[]>snapshot.val();
        return account;
      } else {
        console.log("No data available");
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default new AccountRepository();
