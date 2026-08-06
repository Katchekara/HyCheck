const BADGES = {
  critique: { label: "Faux confirmé", classes: "bg-danger-light text-danger" },
  attention: { label: "À vérifier", classes: "bg-warning-light text-warning" },
};

export default function AlertListItem({ alerte }) {
  const badge = BADGES[alerte.gravite] || BADGES.attention;
  return (
    <div className="bg-card border border-line rounded-xl p-4 flex items-center justify-between gap-3">
      <div>
        <p className="font-heading font-bold text-navy text-sm mb-1">{alerte.titre}</p>
        <p className="text-xs text-muted">{alerte.zone} · {alerte.date}</p>
      </div>
      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${badge.classes}`}>
        {badge.label}
      </span>
    </div>
  );
}