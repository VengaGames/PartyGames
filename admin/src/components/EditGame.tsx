import React, { useEffect, useState } from 'react';
import { NavigateFunction, useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import api from '../utils/api';
import { GameFormType, GameResponse } from '../types/types';

export default function EditGame() {
  const { id } = useParams<{ id: string }>();
  const navigate: NavigateFunction = useNavigate();
  const [formData, setFormData] = useState<GameFormType>({
    title: '',
    playerNb: '',
    description: '',
    image: '',
    type: 'card',
  });

  const getGame = async () => {
    const res: GameResponse = await api.get(`/game/${id}`);
    if (!res.ok) return toast.error(res?.error || 'An error occurred');
    setFormData(res.data);
  };

  useEffect(() => {
    if (!id) return;
    getGame();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: GameFormType) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res: GameResponse = await api.put(`/game/${id}`, formData);
    if (!res.ok) return toast.error(res?.error || 'An error occurred');
    toast.success('Game updated');
    navigate('/');
  };

  if (!formData?.title) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-5">
      <h1 className="text-2xl font-semibold">Edit game</h1>
      <div className="flex flex-row w-full gap-5 ">
        <div>
          <label htmlFor="title" className="block text-gray-700">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div>
          <label htmlFor="playerNb" className="block text-gray-700">
            Number max of Players:
          </label>
          <input
            type="text"
            id="playerNb"
            name="playerNb"
            value={formData.playerNb}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block text-gray-700">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="mt-1 p-2 border rounded-md w-full h-fit"
        />
        {/* Display the description if there is one */}
        {formData.description && <ReactMarkdown remarkPlugins={[remarkGfm]}>{formData.description}</ReactMarkdown>}
      </div>

      <div className="flex flex-row w-full gap-5 ">
        <div>
          <label htmlFor="image" className="block text-gray-700">
            Image URL:
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
          {/* Display the image if there is one */}
          {formData.image && <img src={formData.image} alt={formData.title} className="mb-2 w-20" />}
        </div>
        <div>
          <label htmlFor="type" className="block text-gray-700">
            Type (card, tarot, board, dice, other)
          </label>
          {/* Create a select with the previous values */}
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded-md w-full"
          >
            <option value="card">Card</option>
            <option value="tarot">Tarot</option>
            <option value="board">Board</option>
            <option value="dice">Dice</option>
            <option value="nothing">Nothing</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Update
        </button>
      </div>
    </form>
  );
}
