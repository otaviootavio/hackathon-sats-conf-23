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

accountController.get('/all', (req, res) => {
  const accounts = accountRepository.getAll();
  if (accounts && accounts.length > 0) {
    res.json(accounts);
  } else {
    res.status(404).send('No accounts found');
  }
})

accountController.get('/:id', (req, res) => {
  const account = accountRepository.read(req.params.id);
  if (account) {
    res.json(account);
  } else {
    res.status(404).send('Account not found');
  }
});

accountController.put('/:id', (req, res) => {
  const updatedAccount = accountRepository.update(req.params.id, req.body);
  if (updatedAccount) {
    res.json(updatedAccount);
  } else {
    res.status(404).send('Account not found');
  }
});

accountController.delete('/:id', (req, res) => {
  const deleted = accountRepository.delete(req.params.id);
  if (deleted) {
    res.status(200).send('Account deleted');
  } else {
    res.status(404).send('Account not found');
  }
});

export default accountController;
