import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Home";
import Bandung from "./pages/kota-bandung";
import BandungBarat from "./pages/kota-bandungbarat";
import Bekasi from "./pages/kota-bekasi";
import Bogor from "./pages/kota-bogor";
import Ciamis from "./pages/kota-ciamis";
import Cianjur from "./pages/kota-cianjur";
import Cirebon from "./pages/kota-cirebon";
import Garut from "./pages/kota-garut";
import Indramayu from "./pages/kota-indramayu";
import Karawang from "./pages/kota-karawang";
import Kuningan from "./pages/kota-kuningan";
import Majalengka from "./pages/kota-majalengka";
import Pangandaran from "./pages/kota-pangandaran";
import Purwakarta from "./pages/kota-purwakarta";
import Subang from "./pages/kota-subang";
import Sukabumi from "./pages/kota-sukabumi";
import Sumedang from "./pages/kota-sumedang";
import Tasikmalaya from "./pages/kota-tasikmalaya";
import Depok from "./pages/kota-depok";
import NoPage from "./pages/noPage";
import Cimahi from "./pages/kota-cimahi";
import Banjar from "./pages/kota-banjar";
import AboutUS from "./pages/AboutUS";
import NewsPage from "./pages/newsPage";
import MoneyConvert from "./pages/moneyConvert";
import Form from "./pages/review";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/bandung" element={<Bandung />} />
          <Route path="/bandung-barat" element={<BandungBarat />} />
          <Route path="/bekasi" element={<Bekasi />} />
          <Route path="/bogor" element={<Bogor />} />
          <Route path="/ciamis" element={<Ciamis />} />
          <Route path="/cianjur" element={<Cianjur />} />
          <Route path="/cirebon" element={<Cirebon />} />
          <Route path="/garut" element={<Garut />} />
          <Route path="/indramayu" element={<Indramayu />} />
          <Route path="/karawang" element={<Karawang />} />
          <Route path="/kuningan" element={<Kuningan />} />
          <Route path="/majalengka" element={<Majalengka />} />
          <Route path="/pangandaran" element={<Pangandaran />} />
          <Route path="/purwakarta" element={<Purwakarta />} />
          <Route path="/subang" element={<Subang />} />
          <Route path="/sukabumi" element={<Sukabumi />} />
          <Route path="/sumedang" element={<Sumedang />} />
          <Route path="/tasikmalaya" element={<Tasikmalaya />} />
          <Route path="/depok" element={<Depok />} />
          <Route path="/cimahi" element={<Cimahi />} />
          <Route path="/banjar" element={<Banjar />} />
          <Route path="/AboutUS" element={<AboutUS />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/newsPage" element={<NewsPage />} />
          <Route path="/money-convert" element={<MoneyConvert />} />
          <Route path="/review" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
