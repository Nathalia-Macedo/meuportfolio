import { X } from "lucide-react"

const VSCodeSimulation = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-[#1e1e1e] text-white z-50 overflow-auto">
      <div className="p-4 h-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <div className="flex-grow overflow-auto font-mono text-sm">
          <pre className="whitespace-pre-wrap">
            <code className="language-javascript">
              {`// Se alguém me encontrasse com 14 anos e dissesse 
// que eu me tornaria professora e programadora, 
// eu jamais acreditaria...

const minhaJornada = {
  inicio: "vendedora ambulante",
  meio: "estudante dedicada",
  agora: "professora e programadora",
  futuro: "inspiração para outros"
};

function transformarVidas(dedicacao, perseveranca) {
  return dedicacao * perseveranca;
}

// Sua jornada pode ser tão incrível quanto a minha!
// Vamos trabalhar juntos e criar algo extraordinário?

const seuPotencial = transformarVidas(100, 100);
console.log("Seu potencial é infinito!");

// Interessado em uma parceria ou em meus serviços?
// Clique no botão abaixo para iniciar uma conversa!`}
            </code>
          </pre>
        </div>
        <div className="mt-4 text-center">
          <a
            href="https://wa.me/71987257532?text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20parceria%20ou%20servi%C3%A7o."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#007acc] text-white px-4 py-2 rounded hover:bg-[#005999] transition-colors"
          >
            Iniciar Conversa no WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

export default VSCodeSimulation

