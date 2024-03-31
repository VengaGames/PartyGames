import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EditGame from './components/EditGame';
import Homepage from './pages/Homepage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/edit/:id" element={<EditGame />} />
    </Routes>
  );
}
