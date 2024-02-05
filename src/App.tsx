import "./index.css";

import { Routes, Route } from "react-router-dom";
import List from "./components/pages/List";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
    </Routes>
  );
};

export default App;
