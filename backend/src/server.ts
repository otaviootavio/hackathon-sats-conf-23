import dotenv from 'dotenv';
dotenv.config();

const PORT = parseInt(`${process.env.SERVER_PORT || 3000}`);

import app from './app';

app.listen(PORT, () => console.log(`Server is running at ${PORT}.`));