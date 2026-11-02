import express, { type Express, type Request, type Response } from 'express';

import { env } from './config/env.js';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.listen(env.PORT, () => {
  console.log(`Server is running on PORT ${env.PORT}...`);
});