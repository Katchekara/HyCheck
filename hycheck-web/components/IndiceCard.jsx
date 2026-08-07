export default function IndiceCard({ indice }) {
  return (
    <div className="border border-line rounded-xl p-3 text-sm text-navy">
      {typeof indice === "string" ? indice : JSON.stringify(indice)}
    </div>
  );
}
