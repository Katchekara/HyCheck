"use client";
import { useState } from "react";
import Link from "next/link";
import IndiceCard from "../../../components/IndiceCard";
import EvidenceTimeline from "../../../components/EvidenceTimeline";
import Icon from "../../../components/Icon";

export default function VerifierClient({ id }) {
  const [selected, setSelected] = useState("texte");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  async function handleVerify() {
    let endpoint = "";
    let options = {};

    if (selected === "texte") {
      endpoint = "http://localhost:8000/api/text/analyze";
      options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: description }),
      };
    } else if (selected === "audio") {
      endpoint = "http://localhost:8000/api/audio/transcribe";
      const formData = new FormData();
      formData.append("file", file);
      options = { method: "POST", body: formData };
    } else if (selected === "image") {
      endpoint = "http://localhost:8000/api/image/analyze-image";
      const formData = new FormData();
      formData.append("file", file);
      options = { method: "POST", body: formData };
    }

    try {
      const res = await fetch(endpoint, options);
      const data = await res.json();
      console.log("Réponse API:", data); // 🔎 Vérifie la structure ici
      setResult(data);
    } catch (err) {
      console.error("Erreur API:", err);
      alert("Impossible de contacter l'API");
    }
  }

  return (
    <div className="space-y-6 pt-2">
      {/* Header */}
      <div className="flex items-center justify-between text-sm">
        <Link href="/" className="text-muted font-medium">‹ Vérifications</Link>
        <span className="font-mono text-xs text-muted">
          {result?.id || id}
        </span>
      </div>

      {/* Résultat principal */}
      <div className="bg-card rounded-2xl border-t-4 border-danger border-x border-b border-line p-5 shadow-sm space-y-4">
        <p className="text-danger font-heading font-bold text-xs tracking-widest uppercase">
          Blocage recommandé
        </p>
        <h1 className="font-heading font-extrabold text-xl text-navy">
          {result?.titre || "Titre en attente"}
        </h1>
        <p className="text-muted text-sm leading-relaxed">
          {result?.resume || "Résumé en attente"}
        </p>

        <div className="bg-danger-light text-danger text-sm font-medium rounded-xl p-4 leading-relaxed">
          {result?.consigne || "Consigne en attente"}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 bg-navy text-white font-heading font-bold text-sm py-3 rounded-xl">
            <Icon name="scissors" className="w-4 h-4" /> Bloquer le numéro
          </button>
          <button className="flex items-center justify-center gap-2 border border-line text-navy font-heading font-bold text-sm py-3 rounded-xl">
            Prévenir ma famille
          </button>
        </div>
      </div>

      {/* Indices */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-heading font-bold text-navy text-base">Pourquoi ce résultat ?</h2>
          <span className="text-xs text-muted">{result?.indices?.length || 0} indices</span>
        </div>
        <div className="space-y-3">
          {result?.indices?.map((indice, i) => (
            <IndiceCard key={i} indice={indice} />
          ))}
        </div>
      </div>

      {/* Chaîne de preuve */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-heading font-bold text-navy text-base">Chaîne de preuve</h2>
          <span className="text-xs text-teal font-medium">Voir le dossier</span>
        </div>
        <EvidenceTimeline etapes={result?.chaine || []} />
      </div>

      {/* Bouton de vérification */}
      <button
        onClick={handleVerify}
        className="w-full flex items-center justify-center gap-2 bg-navy text-white font-heading font-bold py-3.5 rounded-xl"
      >
        <Icon name="share" className="w-4 h-4" /> Lancer la vérification
      </button>
    </div>
  );
}
