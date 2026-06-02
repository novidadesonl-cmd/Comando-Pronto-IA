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

const checkoutLinks = {
  plan27: '#link-checkout-27',
  plan47: '#link-checkout-47',
  plan97: '#link-checkout-97',
};

function PlanosPage() {
  const plans = [
    {
      name: 'Kit Inicial',
      price: 'R$27',
      description: 'Para começar com prompts prontos e exemplos preenchidos.',
      link: checkoutLinks.plan27,
      features: ['15 Prompts-Mestre', 'Exemplos preenchidos', 'Guia rápido de uso', 'Bônus anti-texto-robótico'],
    },
    {
      name: 'Gerador Interativo',
      price: 'R$47',
      description: 'Para usar o sistema preenchível com botão copiar.',
      link: checkoutLinks.plan47,
      recommended: true,
      features: ['Tudo do plano R$27', 'Gerador de prompts preenchíveis', 'Botão copiar', 'Biblioteca organizada', 'Exemplos por categoria'],
    },
    {
      name: 'Comando Pro',
      price: 'R$97',
      description: 'Para estruturar conteúdo e vendas com mais profundidade.',
      link: checkoutLinks.plan97,
      features: ['Tudo do plano R$47', 'Prompts para calendário de conteúdo', 'Prompts para página de venda', 'Prompts para WhatsApp', 'Prompts para oferta e objeções', 'Estrutura para 30 dias de conteúdo'],
    },
  ];

  return (
    <section className="space-y-8">
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">Planos</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Escolha o melhor jeito de começar a usar IA com comandos prontos
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Comece com o kit de prompts, use o gerador interativo ou avance para uma estrutura completa de conteúdo e vendas.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`relative rounded-3xl bg-white p-7 shadow-sm ring-1 ${plan.recommended ? 'ring-emerald-300 shadow-emerald-100' : 'ring-slate-200'}`}
          >
            {plan.recommended && (
              <span className="absolute right-5 top-5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-black uppercase tracking-wide text-emerald-800">
                Mais recomendado
              </span>
            )}
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">{plan.name}</p>
            <h2 className="mt-5 text-5xl font-black tracking-tight text-slate-950">{plan.price}</h2>
            <p className="mt-4 min-h-14 leading-7 text-slate-600">{plan.description}</p>
            <ul className="mt-6 space-y-3 text-slate-700">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-xs font-black text-emerald-700">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={plan.link}
              className="mt-7 inline-flex w-full justify-center rounded-full bg-gradient-to-r from-blue-700 to-emerald-600 px-6 py-3 font-black text-white shadow-lg"
            >
              Comprar {plan.price}
            </a>
          </article>
        ))}
      </div>

      <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl md:p-10">
        <h2 className="text-2xl font-black tracking-tight">Importante</h2>
        <p className="mt-4 max-w-4xl leading-8 text-slate-300">
          O Comando Pronto IA gera prompts profissionais para você copiar e colar no ChatGPT, Gemini, Claude ou outra IA de texto. Nesta versão, ele não gera o conteúdo final automaticamente dentro da plataforma.
        </p>
        <p className="mt-6 rounded-2xl bg-white/10 p-5 font-bold leading-8 text-white ring-1 ring-white/10">
          Comece pelo plano de R$27 se você quer validar rápido. Escolha o R$47 se quer usar o gerador interativo.
        </p>
      </div>
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
          <Route path="/planos" element={<PlanosPage />} />
        </Routes>
      </main>

      <footer className="mx-auto w-full max-w-6xl border-t border-slate-200 px-5 py-6 text-sm text-slate-500">
        O Comando Pronto IA gera prompts para você usar na IA de sua preferência. Revise sempre antes de publicar.
      </footer>
    </div>
  );
}
