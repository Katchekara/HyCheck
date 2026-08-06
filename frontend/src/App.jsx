import { useState } from 'react';
import AlertCard from './components/AlertCard';
import Pipeline from './components/Pipeline';
import './App.css';

const alertesInitiales = [
  { titre: "Voix clonée du président", score: 91, source: "Appel téléphonique", gravite: "critique", date: "18 nov. 2026" },
  { titre: "Fausse alerte sanitaire", score: 78, source: "Facebook", gravite: "critique", date: "20 juil. 2026" },
  { titre: "Vidéo virale élections", score: 62, source: "TikTok", gravite: "attention", date: "25 juil. 2026" },
  { titre: "Communiqué officiel", score: 12, source: "Site gouvernemental", gravite: "verifie", date: "26 juil. 2026" },
];

function App() {
  const [alertes, setAlertes] = useState(alertesInitiales);
  const [contenu, setContenu] = useState("");

  const totalAlertes = alertes.length;
  const totalCritiques = alertes.filter((a) => a.gravite === "critique").length;
  const totalAttention = alertes.filter((a) => a.gravite === "attention").length;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contenu.trim()) return;

    // 🔌 Point de connexion backend : remplacer par un vrai fetch() plus tard
    const gravitesPossibles = ["critique", "attention", "verifie"];
    const graviteAleatoire = gravitesPossibles[Math.floor(Math.random() * 3)];

    const nouvelleAlerte = {
      titre: contenu.slice(0, 50),
      score: Math.floor(Math.random() * 100),
      source: "Soumission manuelle",
      gravite: graviteAleatoire,
      date: new Date().toLocaleDateString("fr-FR"),
    };

    setAlertes([nouvelleAlerte, ...alertes]);
    setContenu("");
  };

  return (
    <div className="app">
      <header className="folder-header">
        <div className="folder-tab">DOSSIER N° HC-2026</div>
        <div className="folder-main">
          <div>
            <h1>HyCheck</h1>
            <p className="folder-tagline">Registre de vérification — voix clonées &amp; désinformation</p>
          </div>
          <div className="stamp stamp-status">Veille active</div>
        </div>

        <div className="log-line">
          <div className="log-item">
            <span className="log-number">{totalAlertes}</span>
            <span className="log-label">Entrées au dossier</span>
          </div>
          <div className="log-item">
            <span className="log-number" style={{ color: "#A63B2E" }}>{totalCritiques}</span>
            <span className="log-label">Faux confirmés</span>
          </div>
          <div className="log-item">
            <span className="log-number" style={{ color: "#B8862E" }}>{totalAttention}</span>
            <span className="log-label">À vérifier</span>
          </div>
        </div>
      </header>

      <Pipeline />

      <section className="intake">
        <p className="intake-label">Déposer une pièce à analyser</p>
        <form className="intake-form" onSubmit={handleSubmit}>
          <textarea
            placeholder="Texte, lien ou description du contenu suspect..."
            value={contenu}
            onChange={(e) => setContenu(e.target.value)}
          />
          <button type="submit">Ouvrir un dossier</button>
        </form>
      </section>

      <section className="register">
        <p className="register-label">Registre des entrées</p>
        <div className="dossier-list">
          {alertes.map((alerte, index) => (
            <AlertCard
              key={index}
              numero={String(alertes.length - index).padStart(3, "0")}
              titre={alerte.titre}
              score={alerte.score}
              source={alerte.source}
              gravite={alerte.gravite}
              date={alerte.date}
            />
          ))}
        </div>
      </section>

      <footer className="app-footer">HyCheck — Hackathon de la jeunesse de l'UNESCO</footer>
    </div>
  );
}

export default App;