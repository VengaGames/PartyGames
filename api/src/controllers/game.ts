import { Request, Response, Router } from 'express';
import GameModel from '../models/game';
import { Game } from '../types/types';
import { Document } from 'mongoose';

const router: Router = Router();

router.get('/random', async (req: Request, res: Response) => {
  try {
    const games: Game[] = await GameModel.find({});
    const total: number = games.length;
    const game: Game = games[Math.floor(Math.random() * total)];
    return res.status(200).json({ ok: true, data: game, total });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
});

router.get('/', async (req: Request, res: Response) => {
  try {
    const games: Game[] = await GameModel.find({});
    const total: number = games.length;
    return res.status(200).json({ ok: true, data: games, total });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const game: Game | null = await GameModel.findById(req.params.id);
    return res.status(200).json({ ok: true, data: game });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const game: Game = await GameModel.create(req.body);
    return res.status(201).json({ ok: true, data: game });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const game: Document<Game> | null = await GameModel.findById(req.params.id);
    if (!game) return res.status(404).json({ ok: false, error: 'Game not found' });
    game.set(req.body);
    await game.save();
    res.status(200).json({ ok: true, data: game });
  } catch (error) {
    res.status(500).json({ ok: false, error });
  }
});

export default router;
