import { NavLink, Route, Routes } from 'react-router-dom';
import Gerador from './pages/Gerador';
import Home from './pages/Home';

function SimplePage({ title, description }: { title: string; description: string }) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Comando Pronto IA</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950">{title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">{description}</p>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 text-slate-950">
      <header className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-6 md:flex-row md:items-center md:justify-between">
        <NavLink to="/" className="flex items-center gap-3 font-black tracking-tight text-slate-950">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-blue-700 to-emerald-600 text-white shadow-lg">⌘</span>
          <span>Comando Pronto IA</span>
        </NavLink>
        <nav className="flex flex-wrap gap-2 text-sm font-bold text-slate-600">
          {[
            ['/', 'Início'],
            ['/gerador', 'Gerador'],
            ['/biblioteca', 'Biblioteca'],
            ['/guia', 'Guia'],
            ['/planos', 'Planos'],
          ].map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 transition ${isActive ? 'bg-blue-700 text-white' : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-blue-50'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-5 pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gerador" element={<Gerador />} />
          <Route path="/biblioteca" element={<SimplePage title="Biblioteca de Prompts" description="Em seguida, esta página receberá os 15 Prompts-Mestre e os 3 bônus do produto." />} />
          <Route path="/guia" element={<SimplePage title="Guia de Uso" description="Aqui ficará o passo a passo para usar os comandos no ChatGPT, Gemini ou Claude." />} />
          <Route path="/planos" element={<SimplePage title="Planos" description="Aqui ficarão os planos R$27, R$47 e R$97 com links de checkout da Kiwify." />} />
        </Routes>
      </main>

      <footer className="mx-auto w-full max-w-6xl border-t border-slate-200 px-5 py-6 text-sm text-slate-500">
        O Comando Pronto IA gera prompts para você usar na IA de sua preferência. Revise sempre antes de publicar.
      </footer>
    </div>
  );
}
