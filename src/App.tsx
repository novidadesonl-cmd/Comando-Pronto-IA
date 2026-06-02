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
  plan27: 'https://pay.kiwify.com.br/fto850R',
  plan47: 'https://pay.kiwify.com.br/5sI8ZPh',
  plan97: 'https://pay.kiwify.com.br/kUOZJi1',
};

const libraryItems = [
  { category: 'Conteúdo', title: 'Gerador de ideias de Reels', when: 'Quando você precisa de ideias rápidas para vídeos curtos.' },
  { category: 'Conteúdo', title: 'Gerador de roteiro curto', when: 'Quando já tem uma ideia, mas não sabe estruturar a fala.' },
  { category: 'Conteúdo', title: 'Gerador de legenda com CTA', when: 'Quando o post está pronto, mas falta texto para chamar ação.' },
  { category: 'Conteúdo', title: 'Gerador de carrossel', when: 'Quando quer ensinar algo em formato simples e passo a passo.' },
  { category: 'Conteúdo', title: 'Gerador de calendário de 7 dias', when: 'Quando precisa postar sem pensar tudo do zero.' },
  { category: 'Venda', title: 'Gerador de oferta simples', when: 'Quando tem um serviço ou ideia, mas ainda não tem promessa clara.' },
  { category: 'Venda', title: 'Gerador de post de venda', when: 'Quando precisa vender sem parecer insistente.' },
  { category: 'Venda', title: 'Gerador de anúncio curto', when: 'Quando quer testar uma copy simples para anúncio ou criativo.' },
  { category: 'Venda', title: 'Gerador de quebra de objeções', when: 'Quando o cliente diz caro, vou pensar ou não tenho tempo.' },
  { category: 'Venda', title: 'Gerador de CTA', when: 'Quando o conteúdo está bom, mas falta chamada para ação.' },
  { category: 'WhatsApp', title: 'Resposta para interessado', when: 'Quando alguém chama pedindo informação e você quer responder melhor.' },
  { category: 'WhatsApp', title: 'Mensagem para “vou pensar”', when: 'Quando a conversa esfria depois do preço.' },
  { category: 'WhatsApp', title: 'Mensagem para objeção de preço', when: 'Quando o cliente compara só valor e não entende a entrega.' },
  { category: 'WhatsApp', title: 'Mensagem de follow-up', when: 'Quando precisa retomar contato sem parecer chata.' },
  { category: 'WhatsApp', title: 'Mensagem de fechamento consultivo', when: 'Quando o cliente demonstrou interesse, mas ainda não decidiu.' },
  { category: 'Bônus', title: 'Humanizador de texto de IA', when: 'Quando o texto ficou bonito, mas com cara de robô.' },
  { category: 'Bônus', title: 'Removedor de clichês de IA', when: 'Quando aparecem palavras genéricas e frases vazias.' },
  { category: 'Bônus', title: 'Transformador de prompt fraco em prompt profissional', when: 'Quando você sabe o que quer, mas não sabe pedir direito.' },
];

function BibliotecaPage() {
  const categories = ['Conteúdo', 'Venda', 'WhatsApp', 'Bônus'];

  return (
    <section className="space-y-8">
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">Biblioteca</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Biblioteca de comandos simples para conteúdo, venda e WhatsApp
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Use esta página como vitrine do produto. O cliente vê o que existe no kit e escolhe qual comando quer usar no gerador.
        </p>
      </div>

      {categories.map((category) => (
        <div key={category} className="space-y-4">
          <h2 className="text-2xl font-black tracking-tight text-slate-950">{category}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {libraryItems
              .filter((item) => item.category === category)
              .map((item) => (
                <article key={item.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-blue-700">
                    {item.category}
                  </span>
                  <h3 className="mt-4 text-xl font-black tracking-tight text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.when}</p>
                  <NavLink
                    to="/gerador"
                    className="mt-5 inline-flex rounded-full bg-white px-5 py-2 font-black text-slate-800 ring-1 ring-slate-300 hover:bg-blue-50"
                  >
                    Usar no gerador
                  </NavLink>
                </article>
              ))}
          </div>
        </div>
      ))}

      <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl md:p-10">
        <h2 className="text-2xl font-black tracking-tight">Entrega do kit</h2>
        <p className="mt-4 max-w-4xl leading-8 text-slate-300">
          A promessa principal é simples: o cliente copia comandos melhores para usar no ChatGPT, Gemini, Claude ou outra IA de texto.
        </p>
      </div>
    </section>
  );
}

function GuidePage() {
  const steps = [
    {
      title: '1. Escolha o tipo de comando',
      text: 'Entre no gerador e escolha se quer criar roteiro curto, post, legenda, anúncio, mensagem de WhatsApp, objeções, página de venda, calendário, humanização de texto ou oferta.',
    },
    {
      title: '2. Preencha os campos simples',
      text: 'Informe nicho, produto ou serviço, público, dor, desejo, tom de voz, canal, objetivo e observações. Não precisa escrever perfeito. O comando usa essas informações para orientar a IA.',
    },
    {
      title: '3. Clique em gerar comando',
      text: 'O sistema monta um prompt estruturado com papel da IA, contexto, tarefa, regras de linguagem e critérios de qualidade.',
    },
    {
      title: '4. Copie e cole na sua IA',
      text: 'Use o botão copiar e cole o comando no ChatGPT, Gemini, Claude ou outra IA de texto. A resposta final será gerada dentro da IA que você usa.',
    },
    {
      title: '5. Peça ajustes se precisar',
      text: 'Depois da primeira resposta, peça para a IA deixar mais curto, mais humano, mais direto, com mais emoção ou com mais exemplos práticos.',
    },
  ];

  const quickCommands = [
    'Deixe mais direto e com menos palavras.',
    'Crie 3 variações com ganchos diferentes.',
    'Reescreva sem parecer texto de IA.',
    'Adapte para Instagram Reels.',
    'Transforme em mensagem curta para WhatsApp.',
    'Remova palavras genéricas e deixe mais natural.',
  ];

  return (
    <section className="space-y-8">
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">Guia de uso</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Como usar o Comando Pronto IA
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          O sistema gera comandos profissionais para você copiar e colar na IA. Ele não substitui o ChatGPT, Gemini ou Claude: ele ajuda você a pedir melhor.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {steps.map((step) => (
          <article key={step.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-black tracking-tight text-slate-950">{step.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-black tracking-tight text-slate-950">Exemplo de uso</h2>
          <div className="mt-5 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
            <p className="font-black text-slate-950">Prompt fraco:</p>
            <p className="mt-2 text-slate-600">Faça um post sobre meu produto.</p>
          </div>
          <div className="mt-4 rounded-2xl bg-emerald-50 p-5 ring-1 ring-emerald-100">
            <p className="font-black text-emerald-950">Comando melhor:</p>
            <p className="mt-2 leading-7 text-emerald-950">
              Crie um post para um público específico, considerando a dor, o desejo, o canal, o tom de voz e uma chamada para ação clara.
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl">
          <h2 className="text-2xl font-black tracking-tight">Comandos rápidos para ajustar a resposta</h2>
          <ul className="mt-5 space-y-3">
            {quickCommands.map((command) => (
              <li key={command} className="rounded-2xl bg-white/10 p-4 font-bold leading-7 text-slate-100 ring-1 ring-white/10">
                {command}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
        <h2 className="text-2xl font-black tracking-tight text-slate-950">Erros comuns</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-red-50 p-5 ring-1 ring-red-100">
            <h3 className="font-black text-red-950">Pedir sem contexto</h3>
            <p className="mt-2 leading-7 text-red-900">Quanto menos contexto você dá, mais genérica fica a resposta.</p>
          </div>
          <div className="rounded-2xl bg-red-50 p-5 ring-1 ring-red-100">
            <h3 className="font-black text-red-950">Não informar o público</h3>
            <p className="mt-2 leading-7 text-red-900">Texto para todo mundo geralmente não convence ninguém.</p>
          </div>
          <div className="rounded-2xl bg-red-50 p-5 ring-1 ring-red-100">
            <h3 className="font-black text-red-950">Aceitar a primeira resposta</h3>
            <p className="mt-2 leading-7 text-red-900">Use a primeira resposta como base e peça ajustes simples.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

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
              target="_blank"
              rel="noreferrer"
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
          <Route path="/biblioteca" element={<BibliotecaPage />} />
          <Route path="/guia" element={<GuidePage />} />
          <Route path="/planos" element={<PlanosPage />} />
        </Routes>
      </main>

      <footer className="mx-auto w-full max-w-6xl border-t border-slate-200 px-5 py-6 text-sm text-slate-500">
        O Comando Pronto IA gera prompts para você usar na IA de sua preferência. Revise sempre antes de publicar.
      </footer>
    </div>
  );
}
