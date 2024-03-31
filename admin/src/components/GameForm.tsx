import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { ApiError, GameFormType } from '../types/types';
import api from '../utils/api';

type Props = {
  onComplete: () => void;
};

export default function GameForm({ onComplete }: Props) {
  const [formData, setFormData] = useState<GameFormType>({
    title: '',
    playerNb: '',
    description: '',
    image: '',
    type: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: GameFormType) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res: ApiError = await api.post<ApiError>('/game', formData);
    if (!res.ok) return toast.error(res?.error || 'An error occurred');
    toast.success('Game created');
    setFormData({
      title: '',
      playerNb: '',
      description: '',
      image: '',
      type: '',
    });
    onComplete();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
          className="mt-1 p-2 border rounded-md w-full"
        />
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
          {formData.image && <img src={formData.image} alt={formData.title} className="mt-2 w-20" />}
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
            <option disabled value="">
              Select a type
            </option>
            <option value="card">Card</option>
            <option value="tarot">Tarot</option>
            <option value="board">Board</option>
            <option value="nothing">Nothing</option>
            <option value="dice">Dice</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Create a new one
        </button>
      </div>
    </form>
  );
}
