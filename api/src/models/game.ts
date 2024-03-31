import { model, Model, Schema } from 'mongoose';
import { Game } from '../types/types';

const MODEL_NAME: string = 'Game';

const gameSchema: Schema = new Schema<Game>(
  {
    title: { type: String, required: true },
    playerNb: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    type: {
      type: String,
      enums: ['card', 'tarot', 'board', 'dice', 'other', 'nothing'],
      required: true,
      description: 'If the game is with cards, board, dices, etc...',
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

const GameModel: Model<Game> = model<Game>(MODEL_NAME, gameSchema);

export default GameModel;
