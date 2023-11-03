import express from 'express';
import accountController from '../controllers/accountController';

const accountRouter = express.Router();

accountRouter.use('/account', accountController);

export default accountRouter;
