import express from 'express';
import accountRepository from '../repositories/accountRepository';

const accountController = express.Router();

accountController.get('/hello', (req, res) => {
  res.json("Ola");
});

accountController.post('/', (req, res) => {
  const newAccount = accountRepository.create(req.body);
  res.json(newAccount);
});

accountController.get('/all', async (req, res) => {
  const accounts = await accountRepository.getAll();
  if (accounts && accounts.length > 0) {
    res.json(accounts);
  } else {
    res.status(404).send('No accounts found');
  }
})

accountController.get('/:id', async (req, res) => {
  const account = await accountRepository.read(req.params.id);
  console.log(account)
  if (account) {
    res.json(account);
  } else {
    res.status(404).send('Account not found');
  }
});

// DEPRECATED
// accountController.put('/:id', (req, res) => {
//   const updatedAccount = accountRepository.update(req.params.id, req.body);
//   if (updatedAccount) {
//     res.json(updatedAccount);
//   } else {
//     res.status(404).send('Account not found');
//   }
// });

accountController.delete('/:id', (req, res) => {
  const deleted = accountRepository.delete(req.body);
  if (deleted) {
    res.status(200).send('Account deleted');
  } else {
    res.status(404).send('Account not found');
  }
});

export default accountController;
