import { useEffect, useState } from "react";
import api from "./utils/api";
import GameForm from "./components/GameForm";
import { Game, GameResponse } from "./types/types";

function App() {
  const [games, setGames] = useState<Game[]>([]);

  const getGames = async (): Promise<void> => {
    const res: GameResponse = await api.get("/game/all");
    if (!res.ok) return;
    setGames(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div className="p-5">
      <div className="bg-green-500 text-center">Admin panel</div>
      <GameForm />
      <div>
        {games.map((game) => (
          <div key={game.title}>{game.title}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
