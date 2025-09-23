// Lesson01_HTML.jsx
import { useState } from "react";

export default function Lesson01_HTML() {
  const [completed, setCompleted] = useState({});
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResult, setQuizResult] = useState(null);

  // Exercícios (checklist simples)
  const exercises = [
    { id: "ex1", text: "Criar um arquivo chamado index.html" },
    { id: "ex2", text: "Adicionar a estrutura básica (<!DOCTYPE>, <html>, <head>, <body>)" },
    { id: "ex3", text: "Colocar um <h1> com o nome da sua página" },
    { id: "ex4", text: "Adicionar um parágrafo <p> e uma imagem <img> (pode ser local ou URL)" },
    { id: "ex5", text: "Abrir com Live Server (extensão) e ver a página no navegador" },
  ];

  // Quiz (simples)
  const quiz = [
    {
      id: "q1",
      question: "O que significa 'HTML'?",
      options: [
        { id: "a", text: "HyperText Markup Language" },
        { id: "b", text: "HighText Machine Language" },
        { id: "c", text: "Hyperlinking and Text Listing" },
      ],
      answer: "a",
    },
    {
      id: "q2",
      question: "Qual tag envolve o conteúdo principal visível da página?",
      options: [
        { id: "a", text: "<head>" },
        { id: "b", text: "<body>" },
        { id: "c", text: "<meta>" },
      ],
      answer: "b",
    },
    {
      id: "q3",
      question: "Qual atributo usamos para definir o destino de um link?",
      options: [
        { id: "a", text: "src" },
        { id: "b", text: "href" },
        { id: "c", text: "alt" },
      ],
      answer: "b",
    },
  ];

  function toggleExercise(id) {
    setCompleted((s) => ({ ...s, [id]: !s[id] }));
  }

  function handleQuizChange(qid, opt) {
    setQuizAnswers((s) => ({ ...s, [qid]: opt }));
  }

  function submitQuiz() {
    let correct = 0;
    quiz.forEach((q) => {
      if (quizAnswers[q.id] === q.answer) correct++;
    });
    setQuizResult({ correct, total: quiz.length, score: Math.round((correct / quiz.length) * 100) });
  }

  return (
    <div className="min-h-screen py-12 px-6 bg-white dark:bg-[#071814]">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#0f3b2f] dark:text-[#FDF6EC]">Aula 01 — HTML (Simples e sem enrolação)</h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-[#DCEAE4]">
            Nesta aula você vai entender o que é HTML, como a internet mostra páginas simples e as tags mais básicas.
          </p>
        </header>

        {/* Seção: O que é HTML */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#1D3C34] dark:text-[#FDF6EC]">O que é HTML?</h2>
          <p className="mt-2 text-zinc-700 dark:text-[#DCEAE4]">
            HTML (HyperText Markup Language) é a linguagem de marcação usada para estruturar páginas na web.
            Pense no HTML como o esqueleto de uma página: ele diz ao navegador quais são títulos, parágrafos, links, imagens e seções.
          </p>
        </section>

        {/* Seção: Como funciona a Internet (simples) */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-[#1D3C34] dark:text-[#FDF6EC]">Como a internet mostra uma página (explicação simples)</h3>
          <ol className="list-decimal pl-5 mt-2 space-y-2 text-zinc-700 dark:text-[#DCEAE4]">
            <li>Você cria um arquivo HTML (ex: <code>index.html</code>).</li>
            <li>O navegador (Chrome, Firefox) carrega esse arquivo e interpreta as tags HTML.</li>
            <li>O navegador renderiza o conteúdo: texto, imagens, links e aplica estilo (CSS) se houver.</li>
          </ol>
        </section>

        {/* Seção: Estrutura básica (com exemplo) */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-[#1D3C34] dark:text-[#FDF6EC]">Estrutura básica de um arquivo HTML</h3>
          <p className="mt-2 text-zinc-700 dark:text-[#DCEAE4]">Crie um arquivo chamado <code>index.html</code> e cole isto:</p>

          <pre className="mt-3 bg-zinc-100 dark:bg-[#04231d] rounded-md p-4 overflow-auto text-sm">
{`<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Minha primeira página</title>
  </head>
  <body>
    <h1>Olá, mundo!</h1>
    <p>Primeira página em HTML.</p>
  </body>
</html>`}
          </pre>

          <p className="mt-2 text-zinc-600 dark:text-[#BFD8CF] text-sm">
            Explicação rápida:
            <strong> &lt;!DOCTYPE html&gt;</strong> diz que o arquivo é HTML5.
            <strong> &lt;html&gt;</strong> é a raiz; <strong>&lt;head&gt;</strong> tem dados (metadados); <strong>&lt;body&gt;</strong> tem o que aparece.
          </p>
        </section>

        {/* Seção: Tags básicas (p, br, a, img) */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-[#1D3C34] dark:text-[#FDF6EC]">Tags básicas e atributos (tradução fácil)</h3>

          <div className="mt-3 grid gap-3">
            <div className="p-4 rounded-md bg-zinc-50 dark:bg-[#062a23]">
              <h4 className="font-medium">&lt;p&gt; — Parágrafo</h4>
              <p className="text-sm text-zinc-700 dark:text-[#DCEAE4] mt-1">Usado para blocos de texto.</p>
              <pre className="mt-2 text-sm bg-zinc-100 dark:bg-[#04231d] rounded p-2">&lt;p&gt;Esse é um parágrafo.&lt;/p&gt;</pre>
            </div>

            <div className="p-4 rounded-md bg-zinc-50 dark:bg-[#062a23]">
              <h4 className="font-medium">&lt;br&gt; — Quebra de linha (não fecha)</h4>
              <p className="text-sm text-zinc-700 dark:text-[#DCEAE4] mt-1">Insere uma nova linha. Não precisa de fechamento (&lt;br /&gt; é comum).</p>
              <pre className="mt-2 text-sm bg-zinc-100 dark:bg-[#04231d] rounded p-2">&lt;p&gt;Linha 1&lt;br /&gt;Linha 2&lt;/p&gt;</pre>
            </div>

            <div className="p-4 rounded-md bg-zinc-50 dark:bg-[#062a23]">
              <h4 className="font-medium">&lt;a&gt; — Link (ancora)</h4>
              <p className="text-sm text-zinc-700 dark:text-[#DCEAE4] mt-1">Atributos: <code>href</code> (onde o link aponta), <code>target</code> (ex: <code>"_blank"</code> abre em nova aba).</p>
              <pre className="mt-2 text-sm bg-zinc-100 dark:bg-[#04231d] rounded p-2">&lt;a href="https://exemplo.com" target="_blank"&gt;Visitar&lt;/a&gt;</pre>
            </div>

            <div className="p-4 rounded-md bg-zinc-50 dark:bg-[#062a23]">
              <h4 className="font-medium">&lt;img&gt; — Imagem (não fecha)</h4>
              <p className="text-sm text-zinc-700 dark:text-[#DCEAE4] mt-1">Atributos: <code>src</code> (fonte), <code>alt</code> (texto alternativo — importante para acessibilidade).</p>
              <pre className="mt-2 text-sm bg-zinc-100 dark:bg-[#04231d] rounded p-2">&lt;img src="foto.jpg" alt="Descrição da imagem" /&gt;</pre>
            </div>
          </div>
        </section>

        {/* Seção: Por que algumas tags fecham e outras não */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-[#1D3C34] dark:text-[#FDF6EC]">Por que algumas tags fecham e outras não?</h3>
          <p className="mt-2 text-zinc-700 dark:text-[#DCEAE4]">
            Algumas tags são <strong>auto-fecháveis</strong> (como <code>&lt;img&gt;</code> ou <code>&lt;br&gt;</code>) porque não precisam de conteúdo interno.
            Outras (como <code>&lt;p&gt;</code> ou <code>&lt;div&gt;</code>) delimitam um bloco de conteúdo, então precisam de uma tag de fechamento (<code>&lt;/p&gt;</code>).
          </p>
        </section>

        {/* Seção: Live Server — como rodar */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-[#1D3C34] dark:text-[#FDF6EC]">Live Server (Visual Studio Code)</h3>
          <ol className="list-decimal pl-5 mt-2 text-zinc-700 dark:text-[#DCEAE4] space-y-2">
            <li>Abra o VSCode.</li>
            <li>Instale a extensão <strong>Live Server</strong> (search: <code>ritwickdey.liveserver</code> ou apenas "Live Server").</li>
            <li>Com o arquivo <code>index.html</code> aberto, clique em "Go Live" (canto inferior direito) — ou botão direito → Open with Live Server.</li>
            <li>Seu navegador abrirá uma URL local (ex: <code>http://127.0.0.1:5500/index.html</code>).</li>
          </ol>
        </section>

        {/* Exercícios interativos */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-[#1D3C34] dark:text-[#FDF6EC]">Exercícios</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-[#DCEAE4]">Marque quando concluir cada item.</p>
          <div className="mt-3 space-y-2">
            {exercises.map((ex) => (
              <label key={ex.id} className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-[#062a23] rounded">
                <input
                  type="checkbox"
                  checked={!!completed[ex.id]}
                  onChange={() => toggleExercise(ex.id)}
                  className="w-4 h-4 rounded"
                />
                <span className="text-sm text-zinc-800 dark:text-[#DCEAE4]">{ex.text}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Quiz interativo */}
        <section className="mb-12">
          <h3 className="text-lg font-semibold text-[#1D3C34] dark:text-[#FDF6EC]">Quiz — teste rápido</h3>
          <div className="mt-3 space-y-4">
            {quiz.map((q) => (
              <div key={q.id} className="p-4 rounded-md bg-zinc-50 dark:bg-[#04231d]">
                <div className="text-sm font-medium text-zinc-800 dark:text-[#FDF6EC]">{q.question}</div>
                <div className="mt-2 space-y-2">
                  {q.options.map((opt) => (
                    <label key={opt.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name={q.id}
                        checked={quizAnswers[q.id] === opt.id}
                        onChange={() => handleQuizChange(q.id, opt.id)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-zinc-700 dark:text-[#DCEAE4]">{opt.text}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex gap-3">
              <button
                onClick={submitQuiz}
                className="px-4 py-2 rounded-md text-white"
                style={{ background: "#E07A5F" }}
              >
                Enviar quiz
              </button>
              <button
                onClick={() => { setQuizAnswers({}); setQuizResult(null); }}
                className={`px-4 py-2 rounded-md ${/* secondary */ ""}`}
              >
                Resetar
              </button>
            </div>

            {quizResult && (
              <div className="mt-4 p-4 rounded-md bg-green-50 dark:bg-[#153b34]">
                <div className="text-sm font-semibold text-green-800 dark:text-[#FDF6EC]">
                  Resultado: {quizResult.correct} / {quizResult.total} — {quizResult.score}%.
                </div>
                <p className="text-xs text-zinc-700 dark:text-[#BFD8CF] mt-1">
                  {quizResult.score >= 70 ? "Ótimo — você entendeu os fundamentos!" : "Revise as partes com dúvida e tente novamente."}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Navegação / ação final */}
        <div className="flex items-center justify-between gap-4">
          <div className="text-sm text-zinc-600 dark:text-[#BFD8CF]">
            Pronto — quando terminar, crie mais arquivos HTML e experimente.
          </div>
          <div className="flex gap-2">
            <a
              href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-md bg-[#E07A5F] text-white"
            >
              Mais sobre HTML (MDN)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
