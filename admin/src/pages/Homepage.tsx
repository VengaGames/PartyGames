import React, { useEffect, useState } from 'react';
import GameForm from '../components/GameForm';
import GameGrid from '../components/GameGrid';
import { Game, GamesResponse } from '../types/types';
import api from '../utils/api';

function Homepage() {
  const [games, setGames] = useState<Game[]>([]);

  const getGames = async (): Promise<void> => {
    const res: GamesResponse = await api.get<GamesResponse>('/games');
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
