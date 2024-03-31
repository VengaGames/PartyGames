export type Game = {
  id: string;
  title: string;
  playerNb: string;
  description: string;
  image: string;
  type: string;
};

export type GameFormType = {
  title: string;
  playerNb: string;
  description: string;
  image: string;
  type: string;
};

export type GamesResponse = {
  ok: boolean;
  data: Game[];
};

export type GameResponse = {
  ok: boolean;
  data: Game;
  error?: string;
};

export type ApiError = {
  error: string;
  ok: boolean;
};
