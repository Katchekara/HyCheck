export default function DossiersPage() {
  return (
    <div className="space-y-5 pt-2">
      <div>
        <h1 className="font-heading font-extrabold text-2xl text-navy mb-1">Mes dossiers</h1>
        <p className="text-muted text-sm">Retrouvez l&apos;historique de vos vérifications.</p>
      </div>
      <div className="bg-card border border-dashed border-line rounded-2xl p-8 text-center">
        <p className="text-muted text-sm">
          Vous n&apos;avez pas encore de dossier. Lancez une vérification depuis l&apos;onglet « Vérifier ».
        </p>
      </div>
    </div>
  );
}