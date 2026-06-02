import { useState } from 'react';

const example = {
  objetivo: 'Criar uma legenda para divulgar um novo serviço de consultoria de IA.',
  publico: 'Pequenos empreendedores que querem economizar tempo com automações.',
  formato: 'Legenda curta para Instagram com chamada para ação.',
  tom: 'Profissional, claro e persuasivo.',
};

export default function Gerador() {
  const [objetivo, setObjetivo] = useState('');
  const [publico, setPublico] = useState('');
  const [formato, setFormato] = useState('');
  const [tom, setTom] = useState('');
  const [prompt, setPrompt] = useState('');
  const [copyMessage, setCopyMessage] = useState('');

  const generatePrompt = () => {
    const generatedPrompt = `Crie um prompt profissional seguindo estas informações:\n\nObjetivo: ${objetivo || 'Não informado'}\nPúblico-alvo: ${publico || 'Não informado'}\nFormato desejado: ${formato || 'Não informado'}\nTom de voz: ${tom || 'Não informado'}\n\nEntregue uma resposta clara, prática e pronta para uso.`;

    setPrompt(generatedPrompt);
    setCopyMessage('');
  };

  const useExample = () => {
    setObjetivo(example.objetivo);
    setPublico(example.publico);
    setFormato(example.formato);
    setTom(example.tom);
    setPrompt('');
    setCopyMessage('');
  };

  const clearFields = () => {
    setObjetivo('');
    setPublico('');
    setFormato('');
    setTom('');
    setPrompt('');
    setCopyMessage('');
  };

  const copyPrompt = async () => {
    if (!prompt) {
      setCopyMessage('Gere um prompt antes de copiar.');
      return;
    }

    try {
      await navigator.clipboard.writeText(prompt);
      setCopyMessage('Prompt copiado!');
    } catch {
      setCopyMessage('Não foi possível copiar automaticamente.');
    }
  };

  return (
    <section className="space-y-8">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
          Ferramenta
        </p>
        <h1 className="text-4xl font-bold text-slate-950">Gerador de Prompts</h1>
      </div>

      <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
        <div className="space-y-5">
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-700">Objetivo</span>
            <textarea
              className="min-h-28 w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-950 focus:ring-2 focus:ring-slate-200"
              placeholder="O que você quer criar?"
              value={objetivo}
              onInput={(event: any) => setObjetivo(event.currentTarget.value)}
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-700">Público-alvo</span>
            <input
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-950 focus:ring-2 focus:ring-slate-200"
              placeholder="Para quem é este prompt?"
              value={publico}
              onInput={(event: any) => setPublico(event.currentTarget.value)}
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-700">Formato</span>
            <input
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-950 focus:ring-2 focus:ring-slate-200"
              placeholder="Ex.: e-mail, post, roteiro, anúncio..."
              value={formato}
              onInput={(event: any) => setFormato(event.currentTarget.value)}
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-700">Tom de voz</span>
            <input
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-950 focus:ring-2 focus:ring-slate-200"
              placeholder="Ex.: direto, amigável, técnico..."
              value={tom}
              onInput={(event: any) => setTom(event.currentTarget.value)}
            />
          </label>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800" type="button" id="gerar-comando" onClick={generatePrompt}>
              Gerar comando
            </button>
            <button className="rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200" type="button" id="usar-exemplo" onClick={useExample}>
              Usar exemplo
            </button>
            <button className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50" type="button" id="limpar-campos" onClick={clearFields}>
              Limpar campos
            </button>
          </div>
        </div>

        <div className="flex flex-col rounded-2xl bg-slate-950 p-5 text-white">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold">Prompt gerado</h2>
            <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200" type="button" id="copiar-prompt" onClick={copyPrompt}>
              Copiar prompt
            </button>
          </div>

          <pre className="min-h-72 flex-1 whitespace-pre-wrap rounded-2xl bg-slate-900 p-4 text-sm leading-6 text-slate-100">
            {prompt || 'Preencha os campos e clique em “Gerar comando” para criar um prompt.'}
          </pre>

          {copyMessage && <p className="mt-3 text-sm text-slate-200">{copyMessage}</p>}
        </div>
      </div>
    </section>
  );
}
