import "./styles.scss";
import Draggable from "react-draggable";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainComponent from "./MainComponent";
import InfoComponent from "./InfoComponent";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<MainComponent />} />
          <Route path="/info" element={<InfoComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
