type Entry = {
  description: string;
  amount: number;
}

type Account = {
  id: string;
  entries: Entry[];
  outputs: Entry[];
  originName: string;
}

export default Account;
