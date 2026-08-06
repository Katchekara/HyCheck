const GRAVITE_CONFIG = {
  critique: { label: "Faux confirmé", color: "#A63B2E" },
  attention: { label: "À vérifier", color: "#B8862E" },
  verifie: { label: "Authentique", color: "#2B6357" },
};

function AlertCard({ titre, score, source, gravite, date, numero }) {
  const config = GRAVITE_CONFIG[gravite] || GRAVITE_CONFIG.attention;

  return (
    <article className="dossier-entry">
      <div className="dossier-entry-num">N° {numero}</div>

      <div className="dossier-entry-body">
        <div className="dossier-entry-top">
          <h3>{titre}</h3>
          <span className="dossier-entry-score">{score}<small>%</small></span>
        </div>

        <div className="dossier-entry-meta">
          <span>{source}</span>
          <span className="sep">/</span>
          <span>{date}</span>
        </div>
      </div>

      <div className="stamp" style={{ color: config.color, borderColor: config.color }}>
        {config.label}
      </div>
    </article>
  );
}

export default AlertCard;