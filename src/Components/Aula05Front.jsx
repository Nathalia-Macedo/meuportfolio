import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, Move, Layers, AlignHorizontalSpaceAround, Sun, Moon, ClipboardCopy } from "lucide-react";

export default function AulaLayoutsDidatica() {
  // ======== PALETA (ajuste rápido se precisar) ========
  const CREAM = "#FDF6EC";
  const GRID = "#F4E7D8";
  const GREEN = "#1D3C34";        // ↙ se quiser trocar o verde do seu brand, altere aqui
  const TERRACOTTA = "#E07A5F";   // tom pedido para o laranja terracota

  // ======== ESTADO ========
  const [dark, setDark] = useState(false);

  const [display, setDisplay] = useState("block");
  const [visibility, setVisibility] = useState("visible");
  const [zIndex1, setZIndex1] = useState(1);
  const [zIndex2, setZIndex2] = useState(2);
  const [zIndex3, setZIndex3] = useState(0);
  const [flexDir, setFlexDir] = useState("row");
  const [relativeMove, setRelativeMove] = useState({ top: 0, left: 0 });

  // Quiz
  const questions = [
    {
      q: "Qual propriedade remove completamente o elemento da tela (sem ocupar espaço)?",
      options: ["visibility: hidden", "display: none", "opacity: 0"],
      correct: "display: none",
    },
    {
      q: "O position absolute se posiciona em relação a quê?",
      options: ["Ao body sempre", "Ao primeiro pai com position definido", "Ao último elemento da página"],
      correct: "Ao primeiro pai com position definido",
    },
    {
      q: "Qual position é usado para deixar algo preso na tela mesmo rolando?",
      options: ["relative", "sticky", "fixed"],
      correct: "fixed",
    },
    {
      q: "O sticky funciona quando você define qual propriedade?",
      options: ["top/left/bottom/right (ex.: top: 0)", "z-index", "display: sticky"],
      correct: "top/left/bottom/right (ex.: top: 0)",
    },
    {
      q: "O position relative faz o elemento…",
      options: [
        "sair do fluxo e ignorar vizinhos",
        "manter seu espaço e permitir ajuste com top/left",
        "colar na janela do navegador",
      ],
      correct: "manter seu espaço e permitir ajuste com top/left",
    },
    {
      q: "Qual a diferença entre inline e inline-block?",
      options: [
        "inline-block aceita width/height; inline não",
        "inline e inline-block são iguais",
        "inline-block quebra linha automaticamente",
      ],
      correct: "inline-block aceita width/height; inline não",
    },
    {
      q: "Para controlar quem fica na frente, usamos…",
      options: ["gap", "z-index", "order"],
      correct: "z-index",
    },
    {
      q: "No Flexbox, 'row-reverse' faz o quê?",
      options: [
        "Inverte a ordem dos itens na horizontal",
        "Alinha itens no eixo vertical",
        "Cria novas linhas automaticamente",
      ],
      correct: "Inverte a ordem dos itens na horizontal",
    },
  ];
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const correctCount = questions.reduce(
    (acc, q, i) => acc + (answers[i] === q.correct ? 1 : 0),
    0
  );
  const score = Math.round((correctCount / questions.length) * 100);

  const handleAnswer = (i, opt) => {
    setAnswers({ ...answers, [i]: opt });
  };

  const copy = async (txt) => {
    try {
      await navigator.clipboard.writeText(txt);
      alert("Boilerplate copiado! 🚀");
    } catch {
      alert("Não foi possível copiar automaticamente. Selecione e copie manualmente 🙂");
    }
  };

  // ======== THEMING ========
  const baseClass = dark
    ? `min-h-screen bg-[${GREEN}] text-[${CREAM}]`
    : `min-h-screen bg-[${CREAM}] text-[${GREEN}]`;

  const cardClass = dark
    ? `bg-[${CREAM}] text-[${GREEN}]`
    : `bg-white text-[${GREEN}]`;

  const gridOverlay = (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `linear-gradient(to right, ${GRID} 1px, transparent 1px), linear-gradient(to bottom, ${GRID} 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
        opacity: dark ? 0.18 : 1,
      }}
    />
  );

  return (
    <div className={`${baseClass} relative overflow-x-hidden transition-colors`}>
      {/* Fundo quadriculado */}
      {gridOverlay}

      {/* Toggle tema */}
      <button
        onClick={() => setDark(!dark)}
        className={`fixed top-4 right-4 z-50 p-3 rounded-full shadow-lg ${dark ? `bg-[${CREAM}]` : "bg-white"}`}
        aria-label="Alternar tema"
        title="Alternar tema"
      >
        {dark ? <Sun color={TERRACOTTA} /> : <Moon color={TERRACOTTA} />}
      </button>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 space-y-28">
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center"
          style={{ color: TERRACOTTA }}
        >
          Aula 05 — Layouts com CSS
        </motion.h1>

        {/* DISPLAY */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold flex items-center gap-2" style={{ color: TERRACOTTA }}>
            <Eye color={TERRACOTTA} /> Display & Visibility
          </h2>
          <p className="text-lg">
            <code>display</code> controla como o elemento aparece (linha inteira, somente o conteúdo, etc).
            <br />
            <code>visibility</code> define se ele aparece ou não, <strong>mantendo</strong> o espaço.
          </p>

          {/* Controles */}
          <div className="flex flex-wrap gap-4">
            {["block", "inline", "inline-block", "none"].map((opt) => (
              <button
                key={opt}
                onClick={() => setDisplay(opt)}
                className={`px-4 py-2 rounded-lg border ${cardClass} ${
                  display === opt ? "shadow" : ""
                }`}
                style={{ borderColor: TERRACOTTA, background: display === opt ? TERRACOTTA : undefined, color: display === opt ? "#fff" : undefined }}
              >
                display: {opt}
              </button>
            ))}
            {["visible", "hidden"].map((opt) => (
              <button
                key={opt}
                onClick={() => setVisibility(opt)}
                className={`px-4 py-2 rounded-lg border ${cardClass} ${
                  visibility === opt ? "shadow" : ""
                }`}
                style={{ borderColor: GREEN, background: visibility === opt ? GREEN : undefined, color: visibility === opt ? "#fff" : undefined }}
              >
                visibility: {opt}
              </button>
            ))}
          </div>

          {/* Demo */}
          <div className={`border-2 border-dashed p-4 min-h-[120px] rounded-lg ${cardClass}`} style={{ borderColor: TERRACOTTA }}>
            <span
              className="px-4 py-2 rounded-md"
              style={{ display: display, visibility: visibility, background: GREEN, color: "#fff" }}
            >
              Elemento de teste
            </span>
            <span className="ml-4">Outro texto para comparar</span>
          </div>
        </section>

        {/* POSITION */}
        <section className="space-y-10">
          <h2 className="text-3xl font-semibold flex items-center gap-2" style={{ color: TERRACOTTA }}>
            <Move color={TERRACOTTA} /> Position
          </h2>
          <p className="text-lg">
            <code>position</code> é como dar uma <strong>camada</strong> ao elemento. Assim, você pode movê-lo (com
            <code> top/left/bottom/right</code>) e também controlar quem fica na frente com <code>z-index</code>.
          </p>

          {/* Static */}
          <div className={`p-4 rounded-lg shadow ${cardClass}`}>
            <h3 className="font-bold mb-2">Static (padrão)</h3>
            <p className="text-sm opacity-80 mb-3">
              Segue o fluxo normal da página. <code>top/left</code> não têm efeito.
            </p>
            <div className="p-4 rounded-lg border-2 border-dashed" style={{ borderColor: TERRACOTTA }}>
              <div className="px-3 py-1 rounded" style={{ background: GREEN, color: "#fff" }}>
                Eu sou static
              </div>
            </div>
          </div>

          {/* Relative sozinho */}
          <div className={`p-4 rounded-lg shadow ${cardClass}`}>
            <h3 className="font-bold mb-2">Relative</h3>
            <p className="text-sm opacity-80 mb-3">
              Fica <em>no mesmo lugar</em> do fluxo, mas você pode deslocar usando <code>top/left/bottom/right</code>.
              Ele <strong>mantém</strong> o espaço original.
            </p>
            <div className="relative h-32 p-6 flex items-center justify-center rounded-lg border-2 border-dashed" style={{ borderColor: TERRACOTTA }}>
              <motion.div
                className="w-28 h-16 flex items-center justify-center rounded-md"
                style={{ position: "relative", background: GREEN, color: "#fff" }}
                animate={{ top: relativeMove.top, left: relativeMove.left }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                Eu sou relative
              </motion.div>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <button onClick={() => setRelativeMove((m) => ({ ...m, top: m.top - 10 }))} className="px-3 py-1 rounded text-white" style={{ background: TERRACOTTA }}>
                Top -10
              </button>
              <button onClick={() => setRelativeMove((m) => ({ ...m, top: m.top + 10 }))} className="px-3 py-1 rounded text-white" style={{ background: TERRACOTTA }}>
                Top +10
              </button>
              <button onClick={() => setRelativeMove((m) => ({ ...m, left: m.left - 10 }))} className="px-3 py-1 rounded text-white" style={{ background: GREEN }}>
                Left -10
              </button>
              <button onClick={() => setRelativeMove((m) => ({ ...m, left: m.left + 10 }))} className="px-3 py-1 rounded text-white" style={{ background: GREEN }}>
                Left +10
              </button>
              <button onClick={() => setRelativeMove({ top: 0, left: 0 })} className="px-3 py-1 rounded text-white" style={{ background: "#777" }}>
                Reset
              </button>
            </div>
          </div>

          {/* Absolute sozinho */}
          <div className={`p-4 rounded-lg shadow ${cardClass}`}>
            <h3 className="font-bold mb-2">Absolute</h3>
            <p className="text-sm opacity-80 mb-3">
              Sai do fluxo e se prende ao <strong>primeiro pai com position</strong>. Se nenhum pai tiver, usa a tela
              (documento) como referência.
            </p>
            <div className="relative h-32 rounded-lg border-2 border-dashed" style={{ borderColor: TERRACOTTA }}>
              <div className="absolute top-2 left-2 px-3 py-1 rounded text-white" style={{ background: TERRACOTTA }}>
                Eu sou absolute
              </div>
            </div>
          </div>

          {/* Relative + Absolute */}
          <div className={`p-4 rounded-lg shadow ${cardClass}`}>
            <h3 className="font-bold mb-2">Relative + Absolute</h3>
            <p className="text-sm opacity-80 mb-3">
              O <code>relative</code> cria a <strong>referência</strong>. O filho com <code>absolute</code> fica preso a
              ela.
            </p>
            <div className="relative h-32 rounded-lg border-2 border-dashed" style={{ borderColor: TERRACOTTA }}>
              <div className="absolute bottom-2 right-2 px-3 py-1 rounded text-white" style={{ background: TERRACOTTA }}>
                Eu sou absolute dentro do relative
              </div>
            </div>
          </div>

          {/* Fixed */}
          <div className={`p-4 rounded-lg shadow ${cardClass}`}>
            <h3 className="font-bold mb-2">Fixed</h3>
            <p className="text-sm opacity-80 mb-3">
              Fica preso na janela (viewport). Mesmo rolando, continua no lugar.
            </p>
            <div className="fixed bottom-4 right-4 px-3 py-2 rounded shadow-lg text-white" style={{ background: GREEN }}>
              Eu sou fixed
            </div>
          </div>

          {/* Sticky */}
          <div className={`p-4 rounded-lg shadow ${cardClass}`}>
            <h3 className="font-bold mb-2">Sticky</h3>
            <p className="text-sm opacity-80 mb-3">
              Começa como relative e, ao rolar, <strong>gruda</strong> quando encosta no limite definido (ex.:{" "}
              <code>top: 0</code>).
            </p>
            <div className="h-40 overflow-y-scroll rounded-lg border-2 border-dashed" style={{ borderColor: TERRACOTTA }}>
              <div className="sticky top-0 px-3 py-1 text-white" style={{ background: TERRACOTTA }}>
                Eu sou sticky
              </div>
              <p className="p-4">Conteúdo longo...</p>
              <p className="p-4">Mais conteúdo...</p>
              <p className="p-4">Role mais para ver...</p>
            </div>
          </div>
        </section>

        {/* Z-INDEX (camadas) */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold flex items-center gap-2" style={{ color: TERRACOTTA }}>
            <Layers color={TERRACOTTA} /> Z-index (Camadas)
          </h2>
          <p className="text-lg">Ajuste o <code>z-index</code> de cada caixa para ver quem fica na frente.</p>

          <div className="flex flex-wrap gap-6">
            {[
              { label: "Caixa 1", z: zIndex1, set: setZIndex1, color: GREEN },
              { label: "Caixa 2", z: zIndex2, set: setZIndex2, color: TERRACOTTA },
              { label: "Caixa 3", z: zIndex3, set: setZIndex3, color: dark ? CREAM : "#E5DECF" },
            ].map(({ label, z, set, color }) => (
              <div key={label} className={`flex items-center gap-2 px-3 py-2 rounded border ${cardClass}`} style={{ borderColor: TERRACOTTA }}>
                <span className="text-sm font-medium w-20">{label}</span>
                <button onClick={() => set(z + 1)} className="px-2 py-1 rounded text-white" style={{ background: TERRACOTTA }}>
                  + Frente
                </button>
                <button onClick={() => set(z - 1)} className="px-2 py-1 rounded text-white" style={{ background: GREEN }}>
                  - Atrás
                </button>
                <span className="text-sm ml-2">z-index: {z}</span>
              </div>
            ))}
          </div>

          <div className={`relative h-56 rounded-lg border-2 border-dashed ${cardClass}`} style={{ borderColor: TERRACOTTA }}>
            <div
              className="absolute top-8 left-8 w-28 h-28 rounded-lg flex items-center justify-center text-white"
              style={{ zIndex: zIndex1, background: GREEN }}
            >
              1
            </div>
            <div
              className="absolute top-16 left-16 w-28 h-28 rounded-lg flex items-center justify-center text-white"
              style={{ zIndex: zIndex2, background: TERRACOTTA }}
            >
              2
            </div>
            <div
              className="absolute top-24 left-24 w-28 h-28 rounded-lg flex items-center justify-center"
              style={{ zIndex: zIndex3, background: dark ? CREAM : "#E5DECF", color: dark ? GREEN : GREEN, border: `2px solid ${TERRACOTTA}` }}
            >
              3
            </div>
          </div>
        </section>

        {/* FLEXBOX */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold flex items-center gap-2" style={{ color: TERRACOTTA }}>
            <AlignHorizontalSpaceAround color={TERRACOTTA} /> Flexbox
          </h2>
          <p className="text-lg">Troque a direção para ver a ordem mudar (os blocos estão numerados).</p>

          <div className="flex gap-4 flex-wrap">
            {["row", "row-reverse", "column", "column-reverse"].map((opt) => (
              <button
                key={opt}
                onClick={() => setFlexDir(opt)}
                className={`px-4 py-2 rounded-lg border ${cardClass}`}
                style={{
                  borderColor: TERRACOTTA,
                  background: flexDir === opt ? TERRACOTTA : undefined,
                  color: flexDir === opt ? "#fff" : undefined,
                }}
              >
                {opt}
              </button>
            ))}
          </div>

          <div
            className={`p-6 min-h-[150px] flex gap-4 rounded-lg border-2 border-dashed ${cardClass}`}
            style={{ borderColor: GREEN, flexDirection: flexDir }}
          >
            <div className="w-20 h-20 rounded-lg flex items-center justify-center text-white" style={{ background: GREEN }}>
              1
            </div>
            <div className="w-20 h-20 rounded-lg flex items-center justify-center text-white" style={{ background: TERRACOTTA }}>
              2
            </div>
            <div className="w-20 h-20 rounded-lg flex items-center justify-center" style={{ background: "#F2C94C", color: "#1C1C1C" }}>
              3
            </div>
          </div>
        </section>

        {/* EXERCÍCIOS PRÁTICOS */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold" style={{ color: TERRACOTTA }}>Exercícios Práticos</h2>
          <p className="text-lg">Siga o passo a passo. Você pode copiar o boilerplate e testar no seu editor.</p>

          {/* Exercício 1 */}
          <div className={`p-6 rounded-lg shadow ${cardClass}`}>
            <h3 className="font-bold mb-2">1) Display: block vs inline vs inline-block</h3>
            <ol className="list-decimal list-inside space-y-2 opacity-90">
              <li>Crie um <code>&lt;p&gt;</code> e um <code>&lt;span&gt;</code> com algum texto.</li>
              <li>Aplique <code>display: block</code> no <code>p</code> e veja que ocupa toda a linha.</li>
              <li>Aplique <code>display: inline</code> no <code>span</code> e note que ele não aceita <code>width/height</code>.</li>
              <li>Troque para <code>inline-block</code> no <code>span</code> e defina <code>width</code> e <code>height</code>.</li>
            </ol>
            <div className="mt-4 flex gap-2">
              <button
                className="px-3 py-2 rounded text-white flex items-center gap-2"
                style={{ background: TERRACOTTA }}
                onClick={() =>
                  copy(`<p class="um">Parágrafo</p>
<span class="dois">Span</span>
<style>
  p.um { display:block; background:${GRID}; padding:8px; }
  span.dois { display:inline-block; width:120px; height:40px; background:${TERRACOTTA}; color:#fff; }
</style>`)
                }
              >
                <ClipboardCopy size={18} /> Copiar boilerplate
              </button>
            </div>
          </div>

          {/* Exercício 2 */}
          <div className={`p-6 rounded-lg shadow ${cardClass}`}>
            <h3 className="font-bold mb-2">2) Relative + Absolute (card com badge)</h3>
            <ol className="list-decimal list-inside space-y-2 opacity-90">
              <li>Crie um contêiner com <code>position: relative</code>.</li>
              <li>Dentro dele, crie um badge com <code>position: absolute</code> no canto superior direito.</li>
              <li>Use <code>top/right</code> ou <code>bottom/left</code> e ajuste os valores.</li>
            </ol>
            <div className="mt-4 flex gap-2">
              <button
                className="px-3 py-2 rounded text-white flex items-center gap-2"
                style={{ background: TERRACOTTA }}
                onClick={() =>
                  copy(`<div class="card">
  <span class="badge">Novo</span>
  <p>Produto destaque</p>
</div>
<style>
  .card { position:relative; padding:16px; border:2px dashed ${TERRACOTTA}; }
  .badge { position:absolute; top:8px; right:8px; background:${TERRACOTTA}; color:#fff; padding:4px 8px; border-radius:8px; }
</style>`)
                }
              >
                <ClipboardCopy size={18} /> Copiar boilerplate
              </button>
            </div>
          </div>

          {/* Exercício 3 */}
          <div className={`p-6 rounded-lg shadow ${cardClass}`}>
            <h3 className="font-bold mb-2">3) Header fixo (Fixed)</h3>
            <ol className="list-decimal list-inside space-y-2 opacity-90">
              <li>Crie um <code>header</code> com <code>position: fixed; top: 0; left: 0; right: 0;</code>.</li>
              <li>Adicione um <code>padding-top</code> no <code>body</code> para o conteúdo não ficar coberto.</li>
              <li>Role a página e confirme que o header fica sempre visível.</li>
            </ol>
            <div className="mt-4 flex gap-2">
              <button
                className="px-3 py-2 rounded text-white flex items-center gap-2"
                style={{ background: TERRACOTTA }}
                onClick={() =>
                  copy(`<header class="fixo">Meu Header</header>
<main class="conteudo">...conteúdo longo...</main>
<style>
  .fixo { position:fixed; top:0; left:0; right:0; background:${GREEN}; color:#fff; padding:12px; }
  body { padding-top:56px; }
</style>`)
                }
              >
                <ClipboardCopy size={18} /> Copiar boilerplate
              </button>
            </div>
          </div>

          {/* Exercício 4 */}
          <div className={`p-6 rounded-lg shadow ${cardClass}`}>
            <h3 className="font-bold mb-2">4) Galeria Flex (row / row-reverse / column / column-reverse)</h3>
            <ol className="list-decimal list-inside space-y-2 opacity-90">
              <li>Crie um contêiner com <code>display: flex</code> e alguns blocos.</li>
              <li>Altere <code>flex-direction</code> para ver a ordem mudar.</li>
              <li>Use <code>gap</code> para espaçar os itens.</li>
            </ol>
            <div className="mt-4 flex gap-2">
              <button
                className="px-3 py-2 rounded text-white flex items-center gap-2"
                style={{ background: TERRACOTTA }}
                onClick={() =>
                  copy(`<div class="galeria">
  <div class="b">1</div><div class="t">2</div><div class="y">3</div>
</div>
<style>
  .galeria { display:flex; gap:12px; }
  .b { width:60px; height:60px; background:${GREEN}; color:#fff; display:grid; place-items:center; }
  .t { width:60px; height:60px; background:${TERRACOTTA}; color:#fff; display:grid; place-items:center; }
  .y { width:60px; height:60px; background:#F2C94C; color:#222; display:grid; place-items:center; }
</style>`)
                }
              >
                <ClipboardCopy size={18} /> Copiar boilerplate
              </button>
            </div>
          </div>
        </section>

        {/* QUIZ DE REVISÃO */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold" style={{ color: TERRACOTTA }}>Quiz de Revisão</h2>
          <p className="text-lg">Responda tudo e clique em “Corrigir”.</p>

          <div className="space-y-6">
            {questions.map((q, i) => {
              const answered = answers[i];
              const isCorrect = answered === q.correct;
              const show = showResult;
              return (
                <div key={i} className={`p-6 rounded-lg shadow ${cardClass} border`} style={{ borderColor: TERRACOTTA }}>
                  <h3 className="font-bold mb-3">{i + 1}. {q.q}</h3>
                  <div className="grid sm:grid-cols-3 gap-2">
                    {q.options.map((opt) => {
                      const selected = answers[i] === opt;
                      const bg =
                        show && opt === q.correct
                          ? TERRACOTTA
                          : selected
                          ? GREEN
                          : dark
                          ? CREAM
                          : "#F3F3F3";
                      const color =
                        show && opt === q.correct
                          ? "#fff"
                          : selected
                          ? "#fff"
                          : dark
                          ? GREEN
                          : "#222";
                      return (
                        <button
                          key={opt}
                          onClick={() => handleAnswer(i, opt)}
                          className="px-4 py-2 rounded border"
                          style={{ background: bg, color, borderColor: TERRACOTTA }}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {show && (
                    <p className="mt-3 text-sm" style={{ color: isCorrect ? GREEN : TERRACOTTA }}>
                      {isCorrect ? "✔ Resposta correta!" : `✱ Correto: ${q.correct}`}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowResult(true)}
              className="px-6 py-3 rounded-lg text-white font-bold shadow"
              style={{ background: TERRACOTTA }}
            >
              Corrigir
            </button>
            <button
              onClick={() => { setAnswers({}); setShowResult(false); }}
              className={`px-6 py-3 rounded-lg font-bold shadow ${cardClass}`}
              style={{ border: `2px solid ${TERRACOTTA}` }}
            >
              Limpar respostas
            </button>
            {showResult && (
              <span className="ml-2 text-lg font-semibold">
                Pontuação: <span style={{ color: TERRACOTTA }}>{score}%</span>
              </span>
            )}
          </div>

          {showResult && (
            <div className={`mt-6 p-6 rounded-lg shadow ${cardClass}`}>
              {score >= 70 ? (
                <p className="text-lg" style={{ color: GREEN }}>
                  Mandou bem! 🎉 Você está pronto para avançar!
                </p>
              ) : (
                <p className="text-lg" style={{ color: TERRACOTTA }}>
                  Quase lá! 🚀 Revise rapidinho as seções de <em>position</em> e <em>display</em> e tente de novo. Você tá no caminho certo! 💪
                </p>
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
