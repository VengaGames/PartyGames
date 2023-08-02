export interface Game {
  title: string;
  playerNb: number;
  description: string;
  image: string;
  type: string;
}

export interface GameResponse {
  ok: boolean;
  data: Game[];
}

export interface GameFormProps {}

export interface GameFormData {
  title: string;
  playerNb: number;
  description: string;
  image?: string;
}
