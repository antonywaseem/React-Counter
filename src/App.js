import { Routes, Route } from "react-router-dom";
import { Counter } from "./pages";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Counter />} />
    </Routes>
  );
}

export default App;
