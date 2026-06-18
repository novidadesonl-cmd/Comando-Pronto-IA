import { FormEvent, useMemo, useState } from 'react';
import { promptTemplates } from '../data/promptTemplates';
import type { PromptCategory, PromptFormData, PromptTemplate } from '../types';

const initialForm: PromptFormData = {
  nicho: '',
  produto: '',
  publico: '',
  dor: '',
  desejo: '',
  tom: 'Direto, claro e humano',
  canal: 'Instagram',
  objetivo: 'Gerar interesse e levar para o WhatsApp',
  observacoes: '',
};

function buildPrompt(template: PromptTemplate, form: PromptFormData) {
  const data = {
    nicho: form.nicho || '[preencha o nicho]',
    produto: form.produto || '[preencha o produto ou serviço]',
    publico: form.publico || '[preencha o público-alvo]',
    dor: form.dor || '[preencha a principal dor]',
    desejo: form.desejo || '[preencha o principal desejo]',
    tom: form.tom || '[preencha o tom de voz]',
    canal: form.canal || '[preencha o canal]',
    objetivo: form.objetivo || '[preencha o objetivo]',
    observacoes: form.observacoes || 'Sem observações adicionais.',
  };

  return `${template.role}

Contexto do negócio:
- Nicho: ${data.nicho}
- Produto ou serviço: ${data.produto}
- Público-alvo: ${data.publico}
- Principal dor do público: ${data.dor}
- Principal desejo do público: ${data.desejo}
- Tom de voz: ${data.tom}
- Canal: ${data.canal}
- Objetivo: ${data.objetivo}
- Observações adicionais: ${data.observacoes}

Tarefa:
${template.output}

Regras obrigatórias:
- Não use linguagem genérica de IA.
- Não use palavras como "potencialize", "revolucionário", "desbloqueie", "jornada" e "transformador".
- Não prometa resultado garantido.
- Use exemplos práticos e situações reais do público.
- Escreva com clareza, sem enrolação.
- Adapte a estrutura ao canal informado.
- Termine com uma ação clara para o leitor.

Critérios de qualidade:
- O texto deve parecer escrito para o público informado, não para qualquer pessoa.
- A dor precisa aparecer de forma concreta.
- A resposta deve ter aplicação imediata.
- Se a informação estiver vaga, faça uma suposição simples e avise no final.`;
}

export default function Gerador() {
  const [category, setCategory] = useState<PromptCategory>('reels');
  const [form, setForm] = useState<PromptFormData>(initialForm);
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [copyStatus, setCopyStatus] = useState('');

  const selectedTemplate = useMemo(
    () => promptTemplates.find((template) => template.id === category) ?? promptTemplates[0],
    [category],
  );

  const completedFields = Object.entries(form).filter(([, value]) => String(value).trim()).length;
  const progress = Math.round((completedFields / Object.keys(form).length) * 100);

  function updateField(field: keyof PromptFormData, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function generatePrompt(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setGeneratedPrompt(buildPrompt(selectedTemplate, form));
  }

  function loadExample() {
    setForm(selectedTemplate.example);
    setGeneratedPrompt('');
  }

  function clear() {
    setForm(initialForm);
    setGeneratedPrompt('');
    setCopyStatus('');
  }

  async function copyPrompt() {
    if (!generatedPrompt.trim()) return;

    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setCopyStatus('Prompt copiado.');
    } catch {
      setCopyStatus('Não foi possível copiar automaticamente. Selecione o texto e copie manualmente.');
    }

    window.setTimeout(() => setCopyStatus(''), 2600);
  }

  const fields: { key: keyof PromptFormData; label: string; placeholder: string; textarea?: boolean }[] = [
    { key: 'nicho', label: 'Nicho', placeholder: 'Ex.: estética, confeitaria, social media' },
    { key: 'produto', label: 'Produto ou serviço', placeholder: 'Ex.: limpeza de pele, consultoria, template' },
    { key: 'publico', label: 'Público-alvo', placeholder: 'Ex.: mulheres de 25 a 45 anos' },
    { key: 'dor', label: 'Principal dor do público', placeholder: 'Ex.: não sabe postar com constância' },
    { key: 'desejo', label: 'Principal desejo do público', placeholder: 'Ex.: atrair clientes pelo Instagram' },
    { key: 'tom', label: 'Tom de voz', placeholder: 'Ex.: direto, popular, elegante, consultivo' },
    { key: 'canal', label: 'Canal', placeholder: 'Ex.: Instagram, TikTok, WhatsApp, página de venda' },
    { key: 'objetivo', label: 'Objetivo', placeholder: 'Ex.: gerar leads, vender, educar, agendar' },
    { key: 'observacoes', label: 'Observações adicionais', placeholder: 'Ex.: não usar emojis; focar em dor financeira', textarea: true },
  ];

  return (
    <section className="space-y-8">
      <div className="overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-white shadow-2xl ring-1 ring-white/10 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-300">Gerador Interativo</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">Monte um prompt profissional sem começar do zero.</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              Escolha uma categoria, preencha os dados do negócio e gere um comando pronto para colar na sua IA favorita.
            </p>
          </div>
          <div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/10">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-bold text-slate-300">Preenchimento</span>
              <span className="text-2xl font-black text-emerald-300">{progress}%</span>
            </div>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-gradient-to-r from-blue-400 to-emerald-300 transition-all" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-300">Quanto mais contexto, mais específico fica o comando final.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.04fr_0.96fr]">
        <form onSubmit={generatePrompt} className="rounded-[2rem] bg-white p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-200 md:p-8">
          <label className="grid gap-2 font-bold text-slate-800">
            Categoria
            <select
              value={category}
              onChange={(event) => {
                setCategory(event.target.value as PromptCategory);
                setGeneratedPrompt('');
              }}
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            >
              {promptTemplates.map((template) => (
                <option key={template.id} value={template.id}>
                  {template.label}
                </option>
              ))}
            </select>
          </label>

          <p className="mt-4 rounded-2xl bg-blue-50 p-4 text-sm font-semibold leading-6 text-blue-950 ring-1 ring-blue-100">
            {selectedTemplate.description}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {fields.map((field) => (
              <label key={field.key} className={`grid gap-2 font-bold text-slate-800 ${field.textarea ? 'md:col-span-2' : ''}`}>
                {field.label}
                {field.textarea ? (
                  <textarea
                    value={form[field.key]}
                    onChange={(event) => updateField(field.key, event.target.value)}
                    placeholder={field.placeholder}
                    className="min-h-28 rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                ) : (
                  <input
                    value={form[field.key]}
                    onChange={(event) => updateField(field.key, event.target.value)}
                    placeholder={field.placeholder}
                    className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                )}
              </label>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button type="submit" className="rounded-full bg-gradient-to-r from-blue-700 to-emerald-600 px-6 py-3 font-black text-white shadow-lg transition hover:scale-[1.02]">
              Gerar comando
            </button>
            <button type="button" onClick={loadExample} className="rounded-full bg-blue-50 px-6 py-3 font-black text-blue-800 ring-1 ring-blue-100 transition hover:bg-blue-100">
              Usar exemplo
            </button>
            <button type="button" onClick={clear} className="rounded-full bg-white px-6 py-3 font-black text-slate-700 ring-1 ring-slate-300 transition hover:bg-slate-50">
              Limpar campos
            </button>
          </div>
        </form>

        <aside className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl md:p-8 lg:sticky lg:top-6 lg:self-start">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-300">Resultado</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight">Seu prompt pronto</h2>
          {generatedPrompt ? (
            <>
              <pre className="mt-5 max-h-[620px] overflow-auto whitespace-pre-wrap rounded-2xl bg-slate-900 p-5 text-sm leading-7 text-slate-100 ring-1 ring-white/10">
                {generatedPrompt}
              </pre>
              <button onClick={copyPrompt} className="mt-5 rounded-full bg-emerald-400 px-6 py-3 font-black text-slate-950 shadow-lg shadow-emerald-950/20 transition hover:bg-emerald-300">
                Copiar prompt
              </button>
              {copyStatus && <p className="mt-3 font-bold text-emerald-200">{copyStatus}</p>}
            </>
          ) : (
            <div className="mt-5 rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
              <p className="leading-8 text-slate-300">Preencha os campos e clique em “Gerar comando”. O prompt aparecerá aqui.</p>
              <div className="mt-5 space-y-3 text-sm text-slate-300">
                <p>✓ Sem texto genérico</p>
                <p>✓ Com regras de linguagem</p>
                <p>✓ Com objetivo e CTA claros</p>
              </div>
            </div>
          )}

          <div className="mt-6 rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
            <h3 className="font-black text-white">Como usar</h3>
            <p className="mt-2 leading-7 text-slate-300">
              Cole este comando na IA de sua preferência. Depois peça ajustes como “deixe mais humano”, “crie 3 variações” ou “remova clichês”.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
