import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import EditGame from "./components/EditGame";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/edit/:id" element={<EditGame />} />
    </Routes>
  );
}

export default App;
