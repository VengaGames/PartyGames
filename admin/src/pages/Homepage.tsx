import { useEffect, useState } from "react";
import api from "../utils/api";
import GameForm from "../components/GameForm";
import { Game, GamesResponse } from "../types/types";
import GameGrid from "../components/GameGrid";

function Homepage() {
  const [games, setGames] = useState<Game[]>([]);

  const getGames = async (): Promise<void> => {
    const res: GamesResponse = await api.get("/game/all");
    if (!res.ok) return;
    setGames(res.data);
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div className="p-5">
      <div className="bg-green-500 text-center">Admin panel</div>
      <GameForm onComplete={getGames} />
      <div className="mt-5 text-center">Games list</div>
      <GameGrid games={games} />
    </div>
  );
}

export default Homepage;
