import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <section className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-12">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-700">Prompts guiados para vender melhor</p>
        <h1 className="mt-4 text-5xl font-black tracking-tight text-slate-950 md:text-7xl">
          Você não precisa aprender IA. Só precisa copiar o comando certo.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Preencha campos simples e gere prompts profissionais para criar posts, roteiros, anúncios e mensagens de venda no ChatGPT, Gemini ou Claude.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/gerador" className="rounded-full bg-gradient-to-r from-blue-700 to-emerald-600 px-6 py-3 font-black text-white shadow-lg">
            Começar agora
          </Link>
          <Link to="/biblioteca" className="rounded-full bg-white px-6 py-3 font-black text-slate-800 ring-1 ring-slate-300">
            Ver biblioteca
          </Link>
        </div>
      </section>

      <section className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-red-300">Prompt fraco</p>
        <div className="mt-3 rounded-2xl bg-red-950/60 p-5 text-red-100">“Faça um post sobre meu produto.”</div>
        <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-emerald-300">Prompt profissional</p>
        <div className="mt-3 rounded-2xl bg-emerald-950/60 p-5 leading-7 text-emerald-50">
          Crie um post para [público], que sofre com [dor], deseja [resultado], usando tom [tom], com gancho forte, exemplo real e CTA para [ação].
        </div>
      </section>
    </div>
  );
}
