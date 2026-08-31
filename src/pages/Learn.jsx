import { useState } from "react";
import { useNavigate } from "react-router-dom";

const cursos = [
  {
    id: "basico",
    label: "Básico",
    sub: "Fundamentos de sustentabilidade",
    icone: <img src="/semente-de-mao.png" style={{ width: "40px", filter: "invert(1)" }} />,
    cor: "#16a34a",
    corClara: "#4ade80",
    capitulos: 3,
    descCaps: ["O que é sustentabilidade?", "Lixo e reciclagem", "Hábitos do dia a dia"],
    rota: "/curso-basico",
  },
  {
    id: "medio",
    label: "Médio",
    sub: "Aprofunde seu conhecimento",
    icone: <img src="/plantar.png" style={{ width: "40px", filter: "invert(1)" }} />,
    cor: "#0d9488",
    corClara: "#5eead4",
    capitulos: 5,
    descCaps: ["Mudanças climáticas", "Energia renovável", "Água e recursos naturais", "Consumo consciente", "Cidades sustentáveis"],
    rota: "/curso-medio",
  },
  {
    id: "avancado",
    label: "Avançado",
    sub: "Para quem quer ir além",
    icone: <img src="/arvores.png" style={{ width: "40px", filter: "invert(1)" }} />,
    cor: "#1d4ed8",
    corClara: "#93c5fd",
    capitulos: 10,
    descCaps: [
      "Política ambiental global", "Acordos climáticos internacionais",
      "Economia circular", "Pegada de carbono", "Biodiversidade",
      "Oceanos e ecossistemas", "Tecnologia verde", "ESG nas empresas",
      "Agricultura sustentável", "Ativismo e cidadania ambiental"
    ],
    rota: "/curso-avancado",
  },
  {
    id: "animais",
    label: "Animais em Extinção",
    sub: "Conheça espécies ameaçadas",
    icone: <img src="/patas.png" style={{ width: "40px", filter: "invert(1)" }} />,
    cor: "#b45309",
    corClara: "#fcd34d",
    capitulos: 5,
    descCaps: ["Por que espécies somem?", "Animais do Brasil em risco", "Fauna marinha ameaçada", "Projetos de conservação", "Como você pode ajudar"],
    rota: "/animais-extincao",
  },
];

export default function Learn() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);
  const [expandido, setExpandido] = useState(null);

  return (
    <div style={{
      minHeight: "100vh",
      backgroundImage: "url('/araucarias2.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "60px 24px",
      color: "white",
    }}>
      <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "900px" }}>
        <h1 style={{ fontSize: "clamp(36px,7vw,80px)", fontWeight: 800, textAlign: "center", margin: "0 0 12px" }}>
          TerraMetric<span style={{ color: "#4ade80" }}>Learn</span>
        </h1>
        <p style={{ textAlign: "center", fontSize: "18px", color: "rgba(255,255,255,0.75)", marginBottom: "56px" }}>
          Conteúdo educativo sobre sustentabilidade e impacto ambiental.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "24px" }}>
          {cursos.map((c, i) => {
            const isHov = hovered === i;
            const isExp = expandido === i;
            return (
              <div key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: isHov ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.6)",
                  border: isHov ? `2px solid ${c.cor}` : "2px solid rgba(255,255,255,0.15)",
                  borderRadius: "20px",
                  padding: "28px 20px",
                  cursor: "pointer",
                  transition: "all 0.25s",
                  transform: isHov ? "translateY(-6px)" : "translateY(0)",
                  boxShadow: isHov ? `0 12px 40px ${c.cor}44` : "0 4px 20px rgba(0,0,0,0.4)",
                  backdropFilter: "blur(12px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>{c.icone}</div>

                <div>
                  <h2 style={{ fontSize: "18px", fontWeight: 800, color: isHov ? c.corClara : "#fff", margin: "0 0 4px", textAlign: "center" }}>{c.label}</h2>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", textAlign: "center", margin: 0 }}>{c.sub}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "center", gap: "6px", flexWrap: "wrap" }}>
                  {Array.from({ length: c.capitulos }).map((_, j) => (
                    <div key={j} style={{ width: "8px", height: "8px", borderRadius: "50%", background: c.cor, opacity: 0.7 }} />
                  ))}
                </div>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", textAlign: "center", margin: 0 }}>{c.capitulos} capítulos</p>

                <button
                  onClick={(e) => { e.stopPropagation(); setExpandido(isExp ? null : i); }}
                  style={{ background: "rgba(255,255,255,0.08)", border: "none", color: "rgba(255,255,255,0.6)", fontSize: "12px", borderRadius: "8px", padding: "4px 10px", cursor: "pointer" }}
                >
                  {isExp ? "Fechar" : "Ver capítulos"}
                </button>

                {isExp && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {c.descCaps.map((cap, k) => (
                      <div key={k} style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)", padding: "6px 10px", background: "rgba(255,255,255,0.06)", borderRadius: "8px" }}>
                        {k + 1}. {cap}
                      </div>
                    ))}
                  </div>
                )}

                <button
                  onClick={() => navigate(c.rota)}
                  style={{
                    marginTop: "auto",
                    padding: "10px",
                    borderRadius: "12px",
                    border: "none",
                    background: c.cor,
                    color: "white",
                    fontWeight: 700,
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  Começar
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}