const ETAPES = [
  {
    num: "01",
    titre: "Détection",
    description: "L'IA analyse texte, audio et vidéo à la recherche de signaux de manipulation.",
  },
  {
    num: "02",
    titre: "Vérification",
    description: "Les cas incertains passent devant des vérificateurs formés, sources à l'appui.",
  },
  {
    num: "03",
    titre: "Verdict",
    description: "Démenti, avertissement ou blocage — chaque décision reste tracée dans le dossier.",
  },
];

function Pipeline() {
  return (
    <section className="custody">
      <p className="custody-label">Chaîne de traitement</p>
      <div className="custody-line">
        {ETAPES.map((etape) => (
          <div className="custody-station" key={etape.num}>
            <span className="custody-num">{etape.num}</span>
            <h3>{etape.titre}</h3>
            <p>{etape.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pipeline;