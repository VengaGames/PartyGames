export interface Game {
  _id?: number;
  title: string;
  playerNb: number;
  description: string;
  image: string;
  type: string;
}

export interface GamesResponse {
  ok: boolean;
  data: Game[];
}

export interface GameResponse {
  ok: boolean;
  data: Game;
  error?: string;
}

export interface GameFormProps {}

export interface EditGameProps {}

export interface GameGridProps {
  games: Game[];
}
