export const verifications = {
  "HY-2026-00482": {
    id: "HY-2026-00482",
    titre: "Appel imitant un fils blessé",
    resume:
      "La demande de transfert présente des signes forts d'arnaque à la voix clonée.",
    consigne:
      "Ne transférez pas d'argent. Ne communiquez aucun code Mobile Money ou code bancaire.",
    indices: [
      {
        niveau: "fort",
        titre: "Script d'arnaque connu",
        description: "Demande urgente de 150 000 FCFA et isolement de la victime.",
        couleur: "danger",
      },
      {
        niveau: "fort",
        titre: "Voix synthétique possible",
        description: "Ruptures acoustiques détectées sur 7 passages de l'enregistrement.",
        couleur: "danger",
      },
      {
        niveau: "modéré",
        titre: "Numéro non vérifié",
        description: "Le numéro n'est pas associé au contact habituel de votre proche.",
        couleur: "warning",
      },
    ],
    chaine: [
      { heure: "10:42", label: "Aujourd'hui", texte: "Appel signalé, enregistrement conservé en privé." },
      { heure: "10:43", label: "Analyse IA", texte: "Transcription et détection vocale terminées." },
      { heure: "10:45", label: "Protection", texte: "Recommandation de blocage générée." },
    ],
  },
};

export const alertes = [
  { id: "HY-2026-00482", titre: "Appel imitant un fils blessé", zone: "Ouagadougou", gravite: "critique", date: "31 juil. 2026" },
  { id: "HY-2026-00390", titre: "Fausse alerte sanitaire", zone: "Bobo", gravite: "critique", date: "20 juil. 2026" },
  { id: "HY-2026-00355", titre: "Vidéo virale élections", zone: "National", gravite: "attention", date: "12 juil. 2026" },
];