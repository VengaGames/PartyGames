import 'dotenv/config';
import type { Request, Response, Express } from 'express';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { PORT } from './config';
import connectToDb from './connectToDb';
import gameController from './controllers/game';

connectToDb();
const app: Express = express();
const allowedOrigins: string[] = ['http://localhost:5173', 'http://localhost:19006'];

app.use(helmet());
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}
app.use(cors({ credentials: true, origin: allowedOrigins }));
app.use(express.json());

app.use('/games', gameController);

const now: Date = new Date();

app.get('/', (req: Request, res: Response) =>
  res.status(200).json({
    message: 'Welcome to the game API',
    startedAt: now.toISOString(),
  }),
);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
