import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Home";
import Bandung from "./pages/Bandung";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/bandung" element={<Bandung />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
