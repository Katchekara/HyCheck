import Link from "next/link";
import { alertes } from "../../lib/mockData";
import AlertListItem from "../../components/AlertListItem";

export default function AlertesPage() {
  return (
    <div className="space-y-5 pt-2">
      <div>
        <h1 className="font-heading font-extrabold text-2xl text-navy mb-1">Alertes</h1>
        <p className="text-muted text-sm">Contenus suspects vérifiés dans votre zone.</p>
      </div>
      <div className="space-y-3">
        {alertes.map((alerte) => (
          <Link key={alerte.id} href={`/verification/${alerte.id}`}>
            <AlertListItem alerte={alerte} />
          </Link>
        ))}
      </div>
    </div>
  );
}