import Link from "next/link";
import { verifications } from "../../../lib/mockData";
import IndiceCard from "../../../components/IndiceCard";
import EvidenceTimeline from "../../../components/EvidenceTimeline";
import Icon from "../../../components/Icon";

export default function VerificationPage({ params }) {
  const data = verifications[params.id] || verifications["HY-2026-00482"];

  return (
    <div className="space-y-6 pt-2">
      <div className="flex items-center justify-between text-sm">
        <Link href="/" className="text-muted font-medium">‹ Vérifications</Link>
        <span className="font-mono text-xs text-muted">{data.id}</span>
      </div>

      <div className="bg-card rounded-2xl border-t-4 border-danger border-x border-b border-line p-5 shadow-sm space-y-4">
        <p className="text-danger font-heading font-bold text-xs tracking-widest uppercase">
          Blocage recommandé
        </p>
        <h1 className="font-heading font-extrabold text-xl text-navy">{data.titre}</h1>
        <p className="text-muted text-sm leading-relaxed">{data.resume}</p>

        <div className="bg-danger-light text-danger text-sm font-medium rounded-xl p-4 leading-relaxed">
          {data.consigne}
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

      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-heading font-bold text-navy text-base">Pourquoi ce résultat ?</h2>
          <span className="text-xs text-muted">{data.indices.length} indices</span>
        </div>
        <div className="space-y-3">
          {data.indices.map((indice, i) => (
            <IndiceCard key={i} indice={indice} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-heading font-bold text-navy text-base">Chaîne de preuve</h2>
          <span className="text-xs text-teal font-medium">Voir le dossier</span>
        </div>
        <EvidenceTimeline etapes={data.chaine} />
      </div>

      <p className="flex items-start gap-2 text-xs text-muted bg-teal-light rounded-xl p-4">
        <Icon name="lock" className="w-4 h-4 flex-shrink-0 mt-0.5" />
        Votre enregistrement reste anonymisé. Seule une synthèse de sécurité peut être partagée.
      </p>

      <button className="w-full flex items-center justify-center gap-2 bg-navy text-white font-heading font-bold py-3.5 rounded-xl">
        <Icon name="share" className="w-4 h-4" /> Partager une alerte WhatsApp
      </button>
    </div>
  );
}