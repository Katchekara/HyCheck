export default function EvidenceTimeline({ etapes }) {
  return (
    <div className="bg-card border border-line rounded-2xl p-5">
      <ol className="relative border-l-2 border-line ml-2 space-y-5">
        {etapes.map((etape, i) => (
          <li key={i} className="ml-4 relative">
            {/* Puce colorée */}
            <span className="absolute -left-[23px] top-1 w-3 h-3 rounded-full bg-teal border-2 border-white" />
            
            {/* Label + heure */}
            <p className="text-xs font-heading font-bold text-navy">
              {etape.heure} · {etape.label}
            </p>
            
            {/* Texte descriptif */}
            <p className="text-sm text-muted mt-0.5">{etape.texte}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
