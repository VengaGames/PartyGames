import React from "react";
import { GameGridProps } from "../types/types";
import { useNavigate } from "react-router-dom";

const GameGrid: React.FC<GameGridProps> = ({ games }) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-3 gap-4">
      {games.map((game, index) => (
        <div key={index} className="p-4 border rounded-md">
          {game.image && <img src={game.image} alt={game.title} className="mb-2 w-20" />}
          <h3 className="text-lg font-semibold mb-2">{game.title}</h3>
          <p className="text-gray-700">{game.description}</p>
          <p className="text-gray-600 mt-2">Players: {game.playerNb}</p>
          <p className="text-gray-600 mt-2">Type: {game.type}</p>
          <button onClick={() => navigate(`/edit/${game._id}`)} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default GameGrid;
