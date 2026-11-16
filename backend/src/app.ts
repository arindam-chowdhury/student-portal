import express, { type Express, type Request, type Response } from 'express';

import { env } from './config/env.js';
import prisma from './config/prisma.js';

const app: Express = express();

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

async function startServer() {
  try {
    await prisma.$connect();
    console.log(`Successfully connected with Postgresql on Prisma Console..`);
    
    app.listen(env.PORT, () => {
      console.log(`Server is running on PORT ${env.PORT}...`);
    });
  } catch(error) {
    console.error(`Database connections failed.\n\nError:\n${error}`);
    process.exit(1);
  }
}
startServer();