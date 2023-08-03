import React from "react";
import { GameGridProps } from "../types/types";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const GameGrid: React.FC<GameGridProps> = ({ games }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-between flex-wrap gap-5">
      {games.map((game, index) => (
        <div key={index} className="p-4 border rounded-md max-w-[31%]">
          {game.image && <img src={game.image} alt={game.title} className="mb-2 w-20" />}
          <h3 className="text-lg font-semibold mb-2">{game.title}</h3>
          <div className=" h-[400px] overflow-scroll">
            <ReactMarkdown children={game.description} remarkPlugins={[remarkGfm]} />
          </div>
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
