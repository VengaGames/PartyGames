export interface Game {
  _id?: string;
  title: string;
  playerNb: string;
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

export interface GameFormProps {
  onComplete: () => void;
}

export interface EditGameProps {}

export interface GameGridProps {
  games: Game[];
}
