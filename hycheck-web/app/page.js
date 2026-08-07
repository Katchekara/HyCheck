"use client";
import { useState } from "react";
import Link from "next/link";
import OptionCard from "../components/OptionCard";
import Icon from "../components/Icon";

const OPTIONS = [
  { id: "texte", label: "Texte", icon: "file" },
  { id: "image", label: "Image", icon: "search" },
  { id: "video", label: "Vidéo", icon: "search" },
  { id: "audio", label: "Audio", icon: "mic" },
];

const ACCEPT = {
  image: "image/*",
  video: "video/*",
  audio: "audio/*",
};

export default function VerifierPage() {
  const [selected, setSelected] = useState("audio");
  const [description, setDescription] = useState("");
  const [fichier, setFichier] = useState(null);

  const besoinFichier = ["image", "video", "audio", "appel"].includes(selected);

  const handleFileChange = (e) => {
    setFichier(e.target.files?.[0] || null);
  };

  const handleSelect = (id) => {
    setSelected(id);
    setFichier(null);
  };

  return (
    <div className="space-y-6 pt-2">
      <div>
        <p className="text-teal font-heading font-bold text-xs tracking-widest uppercase mb-1">
          Avant de croire ou de payer
        </p>
        <h1 className="font-heading font-extrabold text-2xl text-navy mb-2">
          Vérifier un contenu
        </h1>
        <p className="text-muted text-sm leading-relaxed">
          Envoyez ce qui vous semble douteux. Nous expliquons les signaux et gardons votre dossier privé.
        </p>
      </div>

      <div className="bg-card rounded-2xl border border-line p-5 space-y-5 shadow-sm">
        <h2 className="font-heading font-bold text-navy text-base">Que voulez-vous vérifier ?</h2>

        <div className="grid grid-cols-3 gap-3">
          {OPTIONS.map((option) => (
            <OptionCard
              key={option.id}
              option={option}
              selected={selected === option.id}
              onSelect={() => handleSelect(option.id)}
            />
          ))}
        </div>

        {besoinFichier && (
          <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-line rounded-xl py-6 cursor-pointer hover:border-teal transition">
            <Icon name={selected === "image" || selected === "video" ? "search" : "mic"} className="w-6 h-6 text-muted" />
            <span className="text-sm text-muted text-center px-4">
              {fichier ? fichier.name : `Ajouter un fichier ${selected === "image" ? "image" : selected === "video" ? "vidéo" : "audio"}`}
            </span>
            <input
              type="file"
              accept={ACCEPT[selected]}
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        )}

        <textarea
          className="w-full border border-line rounded-xl px-4 py-3 text-sm placeholder:text-muted focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal-light"
          rows={2}
          placeholder={
            selected === "texte"
              ? "Collez le texte à vérifier"
              : "Ajoutez une description (facultatif)"
          }
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Link
          href="/verification/HY-2026-00482"
          className="block w-full text-center bg-navy hover:bg-navy-dark text-white font-heading font-bold py-3.5 rounded-xl transition"
        >
          Lancer la vérification
        </Link>

        <p className="flex items-start gap-2 text-xs text-muted">
          <Icon name="lock" className="w-4 h-4 flex-shrink-0 mt-0.5" />
          Vos preuves sont chiffrées et anonymisées avant toute publication.
        </p>
      </div>

      <div className="bg-card rounded-2xl border border-line p-5 shadow-sm">
        <div className="flex gap-3">
          <span className="w-9 h-9 rounded-full bg-teal-light flex items-center justify-center flex-shrink-0 text-teal">
            <Icon name="bell" className="w-5 h-5" />
          </span>
          <div>
            <h3 className="font-heading font-bold text-navy text-sm mb-1">À surveiller près de vous</h3>
            <p className="text-muted text-sm leading-relaxed mb-2">
              Des appels imitant un proche demandent un transfert Mobile Money urgent à Ouagadougou.
            </p>
            <Link href="/verification/HY-2026-00482" className="text-teal text-sm font-semibold">
              Voir l&apos;alerte vérifiée →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}