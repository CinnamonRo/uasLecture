import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Home";
import Bandung from "./pages/bandungLink";
import NoPage from "./pages/noPage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/bandungLink" element={<Bandung />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
