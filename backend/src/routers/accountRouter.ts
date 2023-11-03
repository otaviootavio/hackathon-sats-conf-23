import express from 'express';
import accountController from '../controller/accountController';

const accountRouter = express.Router();

accountRouter.use('/account', accountController);

export default accountRouter;
