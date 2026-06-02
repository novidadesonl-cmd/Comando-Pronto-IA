const example = {
  objetivo: 'Criar uma legenda para divulgar um novo serviço de consultoria de IA.',
  publico: 'Pequenos empreendedores que querem economizar tempo com automações.',
  formato: 'Legenda curta para Instagram com chamada para ação.',
  tom: 'Profissional, claro e persuasivo.',
};

const navigation = [
  ['Início', '/'],
  ['Gerador', '/gerador'],
  ['Planos', '/planos'],
  ['Guia', '/guia'],
  ['Biblioteca', '/biblioteca'],
];

const state = { objetivo: '', publico: '', formato: '', tom: '', prompt: '', copyMessage: '' };

function routeFor(pathname) {
  return ['/', '/gerador', '/planos', '/guia', '/biblioteca'].includes(pathname) ? pathname : '/';
}

function navClass(pathname, to) {
  const active = to === '/' ? pathname === '/' : pathname.startsWith(to);
  return 'rounded-full px-4 py-2 text-sm font-medium transition ' +
    (active ? 'bg-slate-950 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950');
}

function header(pathname) {
  const links = navigation.map(([label, to]) => `<a class="${navClass(pathname, to)}" href="${to}" data-link>${label}</a>`).join('');
  return `<header class="border-b border-slate-200 bg-white/90 backdrop-blur"><div class="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"><a href="/" class="text-xl font-bold text-slate-950" data-link>Comando Pronto IA</a><nav aria-label="Navegação principal" class="flex flex-wrap gap-2">${links}</nav></div></header>`;
}

function home() {
  return `<section class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12"><p class="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Plataforma de prompts</p><h1 class="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">Comando Pronto IA</h1><p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Crie comandos profissionais para usar com ferramentas de inteligência artificial de forma simples, organizada e eficiente.</p></section>`;
}

function simplePage(title) {
  return `<h1 class="text-4xl font-bold text-slate-950">${title}</h1>`;
}

function generator() {
  const output = state.prompt || 'Preencha os campos e clique em “Gerar comando” para criar um prompt.';
  return `<section class="space-y-8"><div><p class="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Ferramenta</p><h1 class="text-4xl font-bold text-slate-950">Gerador de Prompts</h1></div><div class="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-8"><div class="space-y-5"><label class="block"><span class="mb-2 block text-sm font-semibold text-slate-700">Objetivo</span><textarea id="objetivo" class="min-h-28 w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-950 focus:ring-2 focus:ring-slate-200" placeholder="O que você quer criar?">${state.objetivo}</textarea></label><label class="block"><span class="mb-2 block text-sm font-semibold text-slate-700">Público-alvo</span><input id="publico" class="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-950 focus:ring-2 focus:ring-slate-200" placeholder="Para quem é este prompt?" value="${state.publico}" /></label><label class="block"><span class="mb-2 block text-sm font-semibold text-slate-700">Formato</span><input id="formato" class="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-950 focus:ring-2 focus:ring-slate-200" placeholder="Ex.: e-mail, post, roteiro, anúncio..." value="${state.formato}" /></label><label class="block"><span class="mb-2 block text-sm font-semibold text-slate-700">Tom de voz</span><input id="tom" class="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-950 focus:ring-2 focus:ring-slate-200" placeholder="Ex.: direto, amigável, técnico..." value="${state.tom}" /></label><div class="flex flex-wrap gap-3"><button class="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800" type="button" id="gerar-comando">Gerar comando</button><button class="rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200" type="button" id="usar-exemplo">Usar exemplo</button><button class="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50" type="button" id="limpar-campos">Limpar campos</button></div></div><div class="flex flex-col rounded-2xl bg-slate-950 p-5 text-white"><div class="mb-4 flex items-center justify-between gap-3"><h2 class="text-lg font-bold">Prompt gerado</h2><button class="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200" type="button" id="copiar-prompt">Copiar prompt</button></div><pre id="prompt-output" class="min-h-72 flex-1 whitespace-pre-wrap rounded-2xl bg-slate-900 p-4 text-sm leading-6 text-slate-100">${output}</pre>${state.copyMessage ? `<p class="mt-3 text-sm text-slate-200">${state.copyMessage}</p>` : ''}</div></div></section>`;
}

function page(pathname) {
  if (pathname === '/') return home();
  if (pathname === '/gerador') return generator();
  if (pathname === '/planos') return simplePage('Planos');
  if (pathname === '/guia') return simplePage('Guia de Uso');
  return simplePage('Biblioteca de Prompts');
}

function footer() {
  return `<footer class="border-t border-slate-200 bg-white"><div class="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-500">© ${new Date().getFullYear()} Comando Pronto IA. Todos os direitos reservados.</div></footer>`;
}

function syncStateFromFields() {
  ['objetivo', 'publico', 'formato', 'tom'].forEach((field) => {
    const element = document.getElementById(field);
    if (element) state[field] = element.value;
  });
}

function render() {
  const pathname = routeFor(window.location.pathname);
  document.getElementById('root').innerHTML = `<div class="flex min-h-screen flex-col bg-slate-50 text-slate-900">${header(pathname)}<main class="mx-auto w-full max-w-6xl flex-1 px-6 py-12">${page(pathname)}</main>${footer()}</div>`;
}

window.addEventListener('input', (event) => {
  if (['objetivo', 'publico', 'formato', 'tom'].includes(event.target.id)) {
    state[event.target.id] = event.target.value;
  }
});

window.addEventListener('click', async (event) => {
  const link = event.target.closest('a[data-link]');
  if (link) {
    event.preventDefault();
    history.pushState({}, '', link.getAttribute('href'));
    render();
    return;
  }

  if (event.target.id === 'gerar-comando') {
    syncStateFromFields();
    state.prompt = `Crie um prompt profissional seguindo estas informações:\n\nObjetivo: ${state.objetivo || 'Não informado'}\nPúblico-alvo: ${state.publico || 'Não informado'}\nFormato desejado: ${state.formato || 'Não informado'}\nTom de voz: ${state.tom || 'Não informado'}\n\nEntregue uma resposta clara, prática e pronta para uso.`;
    state.copyMessage = '';
    render();
  }

  if (event.target.id === 'usar-exemplo') {
    Object.assign(state, example, { prompt: '', copyMessage: '' });
    render();
  }

  if (event.target.id === 'limpar-campos') {
    Object.assign(state, { objetivo: '', publico: '', formato: '', tom: '', prompt: '', copyMessage: '' });
    render();
  }

  if (event.target.id === 'copiar-prompt') {
    if (!state.prompt) {
      state.copyMessage = 'Gere um prompt antes de copiar.';
      render();
      return;
    }
    try {
      await navigator.clipboard.writeText(state.prompt);
      state.copyMessage = 'Prompt copiado!';
    } catch {
      state.copyMessage = 'Não foi possível copiar automaticamente.';
    }
    render();
  }
});

window.addEventListener('popstate', render);
render();
