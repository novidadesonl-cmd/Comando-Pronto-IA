import { NavLink } from 'react-router-dom';

const navigation = [
  { label: 'Início', to: '/' },
  { label: 'Gerador', to: '/gerador' },
  { label: 'Planos', to: '/planos' },
  { label: 'Guia', to: '/guia' },
  { label: 'Biblioteca', to: '/biblioteca' },
];

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <NavLink to="/" className="text-xl font-bold text-slate-950">
          Comando Pronto IA
        </NavLink>

        <nav aria-label="Navegação principal" className="flex flex-wrap gap-2">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-slate-950 text-white'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                }`
              }
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
