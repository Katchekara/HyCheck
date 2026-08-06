const STYLES = {
  danger: { border: "border-danger", text: "text-danger" },
  warning: { border: "border-warning", text: "text-warning" },
  teal: { border: "border-teal", text: "text-teal" },
};

export default function IndiceCard({ indice }) {
  const style = STYLES[indice.couleur] || STYLES.teal;
  return (
    <div className={`bg-card border-l-4 ${style.border} border-y border-r border-line rounded-r-xl rounded-l-sm p-4`}>
      <p className={`text-xs font-heading font-bold uppercase tracking-wide ${style.text} mb-1`}>
        Indice {indice.niveau} · {indice.titre}
      </p>
      <p className="text-sm text-muted leading-relaxed">{indice.description}</p>
    </div>
  );
}