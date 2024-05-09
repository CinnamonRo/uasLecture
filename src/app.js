import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Home";
import Bandung from "./pages/bandungLink";
import BandungBarat from "./pages/bandungbaratLink";
import Bekasi from "./pages/bekasiLink";
import Bogor from "./pages/bogorLink";
import Ciamis from "./pages/ciamisLink";
import Cianjur from "./pages/cianjurLink";
import Cirebon from "./pages/cirebonLink";
import Garut from "./pages/garutLink";
import Indramayu from "./pages/indramayuLink";
import Karawang from "./pages/karawangLink";
import Kuningan from "./pages/kuninganLink";
import Majalengka from "./pages/majalengkaLink";
import Pangandaran from "./pages/pangandaranLink";
import Purwakarta from "./pages/purwakartaLink";
import Subang from "./pages/subangLink";
import Sukabumi from "./pages/sukabumiLink";
import Sumedang from "./pages/sumedangLink";
import Tasikmalaya from "./pages/tasikmalayaLink";

import NoPage from "./pages/noPage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/bandungLink" element={<Bandung />} />
          <Route path="/bandungbaratLink" element={<BandungBarat />} />
          <Route path="/bekasiLink" element={<Bekasi />} />
          <Route path="/bogorLink" element={<Bogor />} />
          <Route path="/ciamisLink" element={<Ciamis />} />
          <Route path="/cianjurLink" element={<Cianjur />} />
          <Route path="/cirebonLink" element={<Cirebon />} />
          <Route path="/garutLink" element={<Garut />} />
          <Route path="/indramayuLink" element={<Indramayu />} />
          <Route path="/karawangLink" element={<Karawang />} />
          <Route path="/kuninganLink" element={<Kuningan />} />
          <Route path="/majalengkaLink" element={<Majalengka />} />
          <Route path="/pangandaranLink" element={<Pangandaran />} />
          <Route path="/purwakartaLink" element={<Purwakarta />} />
          <Route path="/subangLink" element={<Subang />} />
          <Route path="/sukabumiLink" element={<Sukabumi />} />
          <Route path="/sumedangLink" element={<Sumedang />} />
          <Route path="/tasikmalayaLink" element={<Tasikmalaya />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
