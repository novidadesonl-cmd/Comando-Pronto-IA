import { Route, Routes } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';
import Biblioteca from './pages/Biblioteca';
import Gerador from './pages/Gerador';
import Guia from './pages/Guia';
import Home from './pages/Home';
import Planos from './pages/Planos';

export default function App() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/gerador" element={<Gerador />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/guia" element={<Guia />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
      </Route>
    </Routes>
  );
}
