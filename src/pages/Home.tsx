import { Link } from 'react-router-dom';

const proofItems = [
  '18 tipos de comandos prontos',
  'Fluxo simples: preencher, gerar e copiar',
  'Criado para conteúdo, venda e WhatsApp',
];

const steps = [
  { number: '01', title: 'Escolha', text: 'Selecione o tipo de comando: Reels, anúncio, legenda, WhatsApp, oferta ou calendário.' },
  { number: '02', title: 'Preencha', text: 'Informe nicho, produto, público, dor, desejo, objetivo e tom de voz.' },
  { number: '03', title: 'Copie', text: 'Use o prompt pronto no ChatGPT, Gemini, Claude ou outra IA de texto.' },
];

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-10 text-white shadow-2xl ring-1 ring-white/10 md:px-12 md:py-14">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="absolute -bottom-24 left-20 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-200 ring-1 ring-white/15">
              Micro SaaS de prompts prontos
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight md:text-6xl lg:text-7xl">
              Crie comandos melhores para vender com IA em minutos.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              O Comando Pronto IA transforma campos simples em prompts estruturados para posts, roteiros, anúncios, WhatsApp e ofertas. Sem curso longo. Sem tela em branco.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/gerador" className="rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 px-7 py-4 font-black text-slate-950 shadow-xl shadow-emerald-950/30 transition hover:scale-[1.02]">
                Gerar meu primeiro comando
              </Link>
              <Link to="/planos" className="rounded-full bg-white/10 px-7 py-4 font-black text-white ring-1 ring-white/15 transition hover:bg-white/15">
                Ver planos
              </Link>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-slate-300 md:grid-cols-3">
              {proofItems.map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                  <span className="mr-2 text-emerald-300">✓</span>{item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-white p-4 text-slate-950 shadow-2xl ring-1 ring-white/20">
            <div className="rounded-[1.4rem] bg-slate-50 p-5 ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">Gerador</p>
                  <h2 className="mt-1 text-2xl font-black tracking-tight">Prompt de venda</h2>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">Pronto</span>
              </div>
              <div className="mt-5 space-y-3">
                {['Nicho: estética', 'Público: mulheres ocupadas', 'Dor: falta de constância', 'Objetivo: chamar no WhatsApp'].map((item) => (
                  <div key={item} className="rounded-2xl bg-white p-4 font-bold text-slate-700 ring-1 ring-slate-200">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-slate-950 p-5 text-sm leading-7 text-slate-100">
                Crie um post direto para Instagram com gancho forte, exemplo real, quebra de objeção e CTA para conversa no WhatsApp.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {steps.map((step) => (
          <article key={step.number} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
            <p className="text-sm font-black text-blue-700">{step.number}</p>
            <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950">{step.title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
