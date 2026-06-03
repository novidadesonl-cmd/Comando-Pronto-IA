import { NavLink, Route, Routes } from 'react-router-dom';
import Gerador from './pages/Gerador';
import Home from './pages/Home';

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

const creativeScripts = [
  {
    title: 'Criativo 1 — Você está pedindo errado',
    hook: 'Você não está usando IA errado. Você só está pedindo do jeito errado.',
    scene: 'Tela dividida: de um lado “faça um post”, do outro o Comando Pronto IA gerando um comando completo.',
    speech: 'Quando você pede pouco contexto, a IA devolve texto genérico. O Comando Pronto IA te entrega comandos preenchíveis para criar posts, roteiros, anúncios e mensagens com mais clareza.',
    screenText: 'Pare de pedir qualquer coisa para a IA.',
    cta: 'Acesse o Comando Pronto IA e comece pelo plano que fizer sentido para você.',
  },
  {
    title: 'Criativo 2 — Texto com cara de robô',
    hook: 'Se o seu texto parece robô, o problema pode estar no comando.',
    scene: 'Mostre um texto genérico na tela e depois destaque o campo “tom de voz” no gerador.',
    speech: 'A maioria das pessoas pede: faça uma legenda. Só que isso não dá direção. O comando certo informa público, dor, desejo, canal e tom de voz.',
    screenText: 'Texto ruim nasce de comando fraco.',
    cta: 'Use o Comando Pronto IA para pedir melhor.',
  },
  {
    title: 'Criativo 3 — Tela em branco',
    hook: 'Travou na hora de postar? Comece pelo comando, não pela legenda.',
    scene: 'Pessoa olhando para uma tela vazia. Corte para biblioteca de comandos.',
    speech: 'Você escolhe o tipo de conteúdo, preenche campos simples e copia um comando pronto para usar no ChatGPT, Gemini ou Claude.',
    screenText: 'Da tela em branco para um comando pronto.',
    cta: 'Clique no link e veja os planos.',
  },
  {
    title: 'Criativo 4 — Antes e depois',
    hook: 'Olha a diferença entre pedir assim e pedir do jeito certo.',
    scene: 'Mostre “faça um anúncio” versus um prompt estruturado gerado pelo sistema.',
    speech: 'Um pedido solto gera resposta solta. Um comando com contexto, objetivo e regras gera uma resposta muito mais aproveitável.',
    screenText: 'Prompt fraco x comando profissional.',
    cta: 'Teste com o Comando Pronto IA.',
  },
  {
    title: 'Criativo 5 — Para quem posta todo dia',
    hook: 'Se você precisa postar para vender, não pode depender de inspiração.',
    scene: 'Calendário, celular e gerador aberto no notebook.',
    speech: 'O Comando Pronto IA organiza o pedido para a IA criar ideias, roteiros, legendas, mensagens e anúncios. Você copia, cola e ajusta.',
    screenText: 'Conteúdo precisa de sistema, não só inspiração.',
    cta: 'Comece pelo Kit Inicial ou pelo Gerador Interativo.',
  },
  {
    title: 'Criativo 6 — WhatsApp parado',
    hook: 'O cliente chamou no WhatsApp e você não sabe como responder?',
    scene: 'Print fictício de conversa: “quanto custa?” e “vou pensar”.',
    speech: 'Na biblioteca, você encontra comandos para resposta inicial, objeção de preço, follow-up e fechamento consultivo.',
    screenText: 'Mensagens melhores para WhatsApp.',
    cta: 'Use os comandos do Comando Pronto IA.',
  },
  {
    title: 'Criativo 7 — Dono de negócio local',
    hook: 'Você tem um negócio, mas não tem tempo para virar especialista em IA.',
    scene: 'Salão, loja ou serviço local. Depois tela do gerador com campos preenchidos.',
    speech: 'Você só precisa responder campos simples: nicho, produto, público, dor e objetivo. O sistema monta o comando para você.',
    screenText: 'IA simples para quem precisa vender.',
    cta: 'Acesse o Gerador Interativo.',
  },
  {
    title: 'Criativo 8 — R$27 de entrada',
    hook: 'Quer começar barato? Comece com os comandos prontos.',
    scene: 'Mostrar card do plano R$27 e lista de entregas.',
    speech: 'O Kit Inicial traz 15 Prompts-Mestre, exemplos preenchidos, guia rápido e bônus para tirar cara de robô dos textos.',
    screenText: 'Kit Inicial — R$27.',
    cta: 'Clique em comprar e comece hoje.',
  },
  {
    title: 'Criativo 9 — Gerador R$47',
    hook: 'O plano mais recomendado é para quem quer preencher e copiar.',
    scene: 'Mostre o plano R$47 e depois o gerador funcionando.',
    speech: 'No Gerador Interativo, você preenche os campos, gera o comando e copia para usar na sua IA favorita.',
    screenText: 'Gerador Interativo — R$47.',
    cta: 'Acesse o plano recomendado.',
  },
  {
    title: 'Criativo 10 — Prova visual',
    hook: 'Isso aqui não é curso longo. É ferramenta de uso rápido.',
    scene: 'Gravação de tela navegando por Home, Gerador, Biblioteca, Guia e Planos.',
    speech: 'O Comando Pronto IA foi feito para reduzir esforço: você entra, escolhe o comando, preenche, copia e cola na IA.',
    screenText: 'Pronto para aplicar.',
    cta: 'Acesse a página de planos e escolha por onde começar.',
  },
];

function BibliotecaPage() {
  const categories = ['Conteúdo', 'Venda', 'WhatsApp', 'Bônus'];
  return (
    <section className="space-y-8">
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">Biblioteca</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Biblioteca de comandos simples para conteúdo, venda e WhatsApp</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">Use esta página como vitrine do produto. O cliente vê o que existe no kit e escolhe qual comando quer usar no gerador.</p>
      </div>
      {categories.map((category) => (
        <div key={category} className="space-y-4">
          <h2 className="text-2xl font-black tracking-tight text-slate-950">{category}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {libraryItems.filter((item) => item.category === category).map((item) => (
              <article key={item.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-blue-700">{item.category}</span>
                <h3 className="mt-4 text-xl font-black tracking-tight text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.when}</p>
                <NavLink to="/gerador" className="mt-5 inline-flex rounded-full bg-white px-5 py-2 font-black text-slate-800 ring-1 ring-slate-300 hover:bg-blue-50">Usar no gerador</NavLink>
              </article>
            ))}
          </div>
        </div>
      ))}
      <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl md:p-10">
        <h2 className="text-2xl font-black tracking-tight">Entrega do kit</h2>
        <p className="mt-4 max-w-4xl leading-8 text-slate-300">A promessa principal é simples: o cliente copia comandos melhores para usar no ChatGPT, Gemini, Claude ou outra IA de texto.</p>
      </div>
    </section>
  );
}

function CriativosPage() {
  return (
    <section className="space-y-8">
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">Criativos</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">10 criativos curtos para divulgar o Comando Pronto IA</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">Use estes roteiros em Reels, TikTok, Shorts ou anúncios simples. Grave com tela do produto, narração e texto grande na tela.</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {creativeScripts.map((creative) => (
          <article key={creative.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-black tracking-tight text-slate-950">{creative.title}</h2>
            <div className="mt-5 space-y-4">
              <div className="rounded-2xl bg-blue-50 p-4 ring-1 ring-blue-100"><p className="text-xs font-black uppercase tracking-[0.16em] text-blue-700">Gancho</p><p className="mt-2 font-bold leading-7 text-blue-950">{creative.hook}</p></div>
              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200"><p className="text-xs font-black uppercase tracking-[0.16em] text-slate-600">Cena</p><p className="mt-2 leading-7 text-slate-700">{creative.scene}</p></div>
              <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200"><p className="text-xs font-black uppercase tracking-[0.16em] text-slate-600">Fala</p><p className="mt-2 leading-7 text-slate-700">{creative.speech}</p></div>
              <div className="rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-100"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-700">Texto na tela</p><p className="mt-2 font-bold leading-7 text-emerald-950">{creative.screenText}</p></div>
              <div className="rounded-2xl bg-slate-950 p-4 text-white"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-300">CTA</p><p className="mt-2 font-bold leading-7 text-white">{creative.cta}</p></div>
            </div>
          </article>
        ))}
      </div>
      <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl md:p-10"><h2 className="text-2xl font-black tracking-tight">Direção de gravação</h2><p className="mt-4 max-w-4xl leading-8 text-slate-300">Grave vídeos verticais, com tela do produto, cortes rápidos e texto grande. O objetivo dos primeiros criativos é validar clique e interesse, não explicar tudo.</p></div>
    </section>
  );
}

function GuidePage() {
  const steps = [
    { title: '1. Escolha o tipo de comando', text: 'Entre no gerador e escolha se quer criar roteiro curto, post, legenda, anúncio, mensagem de WhatsApp, objeções, página de venda, calendário, humanização de texto ou oferta.' },
    { title: '2. Preencha os campos simples', text: 'Informe nicho, produto ou serviço, público, dor, desejo, tom de voz, canal, objetivo e observações. Não precisa escrever perfeito. O comando usa essas informações para orientar a IA.' },
    { title: '3. Clique em gerar comando', text: 'O sistema monta um prompt estruturado com papel da IA, contexto, tarefa, regras de linguagem e critérios de qualidade.' },
    { title: '4. Copie e cole na sua IA', text: 'Use o botão copiar e cole o comando no ChatGPT, Gemini, Claude ou outra IA de texto. A resposta final será gerada dentro da IA que você usa.' },
    { title: '5. Peça ajustes se precisar', text: 'Depois da primeira resposta, peça para a IA deixar mais curto, mais humano, mais direto, com mais emoção ou com mais exemplos práticos.' },
  ];
  const quickCommands = ['Deixe mais direto e com menos palavras.', 'Crie 3 variações com ganchos diferentes.', 'Reescreva sem parecer texto de IA.', 'Adapte para Instagram Reels.', 'Transforme em mensagem curta para WhatsApp.', 'Remova palavras genéricas e deixe mais natural.'];
  return (
    <section className="space-y-8">
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10"><p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">Guia de uso</p><h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Como usar o Comando Pronto IA</h1><p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">O sistema gera comandos profissionais para você copiar e colar na IA. Ele não substitui o ChatGPT, Gemini ou Claude: ele ajuda você a pedir melhor.</p></div>
      <div className="grid gap-4 md:grid-cols-2">{steps.map((step) => <article key={step.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><h2 className="text-xl font-black tracking-tight text-slate-950">{step.title}</h2><p className="mt-3 leading-7 text-slate-600">{step.text}</p></article>)}</div>
      <div className="grid gap-6 lg:grid-cols-2"><div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200"><h2 className="text-2xl font-black tracking-tight text-slate-950">Exemplo de uso</h2><div className="mt-5 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200"><p className="font-black text-slate-950">Prompt fraco:</p><p className="mt-2 text-slate-600">Faça um post sobre meu produto.</p></div><div className="mt-4 rounded-2xl bg-emerald-50 p-5 ring-1 ring-emerald-100"><p className="font-black text-emerald-950">Comando melhor:</p><p className="mt-2 leading-7 text-emerald-950">Crie um post para um público específico, considerando a dor, o desejo, o canal, o tom de voz e uma chamada para ação clara.</p></div></div><div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl"><h2 className="text-2xl font-black tracking-tight">Comandos rápidos para ajustar a resposta</h2><ul className="mt-5 space-y-3">{quickCommands.map((command) => <li key={command} className="rounded-2xl bg-white/10 p-4 font-bold leading-7 text-slate-100 ring-1 ring-white/10">{command}</li>)}</ul></div></div>
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10"><h2 className="text-2xl font-black tracking-tight text-slate-950">Erros comuns</h2><div className="mt-5 grid gap-4 md:grid-cols-3"><div className="rounded-2xl bg-red-50 p-5 ring-1 ring-red-100"><h3 className="font-black text-red-950">Pedir sem contexto</h3><p className="mt-2 leading-7 text-red-900">Quanto menos contexto você dá, mais genérica fica a resposta.</p></div><div className="rounded-2xl bg-red-50 p-5 ring-1 ring-red-100"><h3 className="font-black text-red-950">Não informar o público</h3><p className="mt-2 leading-7 text-red-900">Texto para todo mundo geralmente não convence ninguém.</p></div><div className="rounded-2xl bg-red-50 p-5 ring-1 ring-red-100"><h3 className="font-black text-red-950">Aceitar a primeira resposta</h3><p className="mt-2 leading-7 text-red-900">Use a primeira resposta como base e peça ajustes simples.</p></div></div></div>
    </section>
  );
}

function PlanosPage() {
  const plans = [
    { name: 'Kit Inicial', price: 'R$27', description: 'Para começar com prompts prontos e exemplos preenchidos.', link: checkoutLinks.plan27, features: ['15 Prompts-Mestre', 'Exemplos preenchidos', 'Guia rápido de uso', 'Bônus anti-texto-robótico'] },
    { name: 'Gerador Interativo', price: 'R$47', description: 'Para usar o sistema preenchível com botão copiar.', link: checkoutLinks.plan47, recommended: true, features: ['Tudo do plano R$27', 'Gerador de prompts preenchíveis', 'Botão copiar', 'Biblioteca organizada', 'Exemplos por categoria'] },
    { name: 'Comando Pro', price: 'R$97', description: 'Para estruturar conteúdo e vendas com mais profundidade.', link: checkoutLinks.plan97, features: ['Tudo do plano R$47', 'Prompts para calendário de conteúdo', 'Prompts para página de venda', 'Prompts para WhatsApp', 'Prompts para oferta e objeções', 'Estrutura para 30 dias de conteúdo'] },
  ];
  return (
    <section className="space-y-8">
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10"><p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">Planos</p><h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Escolha o melhor jeito de começar a usar IA com comandos prontos</h1><p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">Comece com o kit de prompts, use o gerador interativo ou avance para uma estrutura completa de conteúdo e vendas.</p></div>
      <div className="grid gap-6 lg:grid-cols-3">{plans.map((plan) => <article key={plan.name} className={`relative rounded-3xl bg-white p-7 shadow-sm ring-1 ${plan.recommended ? 'ring-emerald-300 shadow-emerald-100' : 'ring-slate-200'}`}>{plan.recommended && <span className="absolute right-5 top-5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-black uppercase tracking-wide text-emerald-800">Mais recomendado</span>}<p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">{plan.name}</p><h2 className="mt-5 text-5xl font-black tracking-tight text-slate-950">{plan.price}</h2><p className="mt-4 min-h-14 leading-7 text-slate-600">{plan.description}</p><ul className="mt-6 space-y-3 text-slate-700">{plan.features.map((feature) => <li key={feature} className="flex gap-3"><span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-xs font-black text-emerald-700">✓</span><span>{feature}</span></li>)}</ul><a href={plan.link} target="_blank" rel="noreferrer" className="mt-7 inline-flex w-full justify-center rounded-full bg-gradient-to-r from-blue-700 to-emerald-600 px-6 py-3 font-black text-white shadow-lg">Comprar {plan.price}</a></article>)}</div>
      <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl md:p-10"><h2 className="text-2xl font-black tracking-tight">Importante</h2><p className="mt-4 max-w-4xl leading-8 text-slate-300">O Comando Pronto IA gera prompts profissionais para você copiar e colar no ChatGPT, Gemini, Claude ou outra IA de texto. Nesta versão, ele não gera o conteúdo final automaticamente dentro da plataforma.</p><p className="mt-6 rounded-2xl bg-white/10 p-5 font-bold leading-8 text-white ring-1 ring-white/10">Comece pelo plano de R$27 se você quer validar rápido. Escolha o R$47 se quer usar o gerador interativo.</p></div>
    </section>
  );
}

function ObrigadoPage() {
  return (
    <section className="space-y-8">
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">Compra confirmada</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Seu acesso ao Comando Pronto IA está liberado</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">Comece pelo gerador. Preencha os campos, copie o comando e cole no ChatGPT, Gemini, Claude ou outra IA de texto.</p>
        <div className="mt-8 flex flex-wrap gap-3"><NavLink to="/gerador" className="rounded-full bg-gradient-to-r from-blue-700 to-emerald-600 px-6 py-3 font-black text-white shadow-lg">Acessar gerador</NavLink><NavLink to="/biblioteca" className="rounded-full bg-white px-6 py-3 font-black text-slate-800 ring-1 ring-slate-300">Ver biblioteca</NavLink><NavLink to="/guia" className="rounded-full bg-white px-6 py-3 font-black text-slate-800 ring-1 ring-slate-300">Ver guia rápido</NavLink></div>
      </div>
      <div className="grid gap-4 md:grid-cols-3"><article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><h2 className="text-xl font-black text-slate-950">1. Escolha</h2><p className="mt-3 leading-7 text-slate-600">Selecione o tipo de comando que quer criar.</p></article><article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><h2 className="text-xl font-black text-slate-950">2. Preencha</h2><p className="mt-3 leading-7 text-slate-600">Coloque nicho, produto, público, dor, desejo e objetivo.</p></article><article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><h2 className="text-xl font-black text-slate-950">3. Copie</h2><p className="mt-3 leading-7 text-slate-600">Cole o comando na IA e peça ajustes se necessário.</p></article></div>
      <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl md:p-10"><h2 className="text-2xl font-black tracking-tight">Importante</h2><p className="mt-4 leading-8 text-slate-300">Esta página pode ser usada como URL de entrega pós-compra na Kiwify. Ela leva o cliente direto para o gerador, biblioteca e guia.</p></div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 text-slate-950">
      <header className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-6 md:flex-row md:items-center md:justify-between">
        <NavLink to="/" className="flex items-center gap-3 font-black tracking-tight text-slate-950"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-blue-700 to-emerald-600 text-white shadow-lg">⌘</span><span>Comando Pronto IA</span></NavLink>
        <nav className="flex flex-wrap gap-2 text-sm font-bold text-slate-600">
          {[
            ['/', 'Início'],
            ['/gerador', 'Gerador'],
            ['/biblioteca', 'Biblioteca'],
            ['/criativos', 'Criativos'],
            ['/guia', 'Guia'],
            ['/planos', 'Planos'],
          ].map(([to, label]) => <NavLink key={to} to={to} className={({ isActive }) => `rounded-full px-4 py-2 transition ${isActive ? 'bg-blue-700 text-white' : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-blue-50'}`}>{label}</NavLink>)}
        </nav>
      </header>
      <main className="mx-auto w-full max-w-6xl px-5 pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gerador" element={<Gerador />} />
          <Route path="/biblioteca" element={<BibliotecaPage />} />
          <Route path="/criativos" element={<CriativosPage />} />
          <Route path="/guia" element={<GuidePage />} />
          <Route path="/planos" element={<PlanosPage />} />
          <Route path="/obrigado" element={<ObrigadoPage />} />
        </Routes>
      </main>
      <footer className="mx-auto w-full max-w-6xl border-t border-slate-200 px-5 py-6 text-sm text-slate-500">O Comando Pronto IA gera prompts para você usar na IA de sua preferência. Revise sempre antes de publicar.</footer>
    </div>
  );
}
