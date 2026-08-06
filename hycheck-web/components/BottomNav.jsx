"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";

const TABS = [
  { href: "/", label: "Vérifier", icon: "shieldCheck" },
  { href: "/alertes", label: "Alertes", icon: "bell" },
  { href: "/dossiers", label: "Dossiers", icon: "file" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white border-t border-line">
      <div className="max-w-md mx-auto grid grid-cols-3">
        {TABS.map((tab) => {
          const active = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-col items-center gap-1 py-3 text-xs font-medium ${
                active ? "text-navy" : "text-muted"
              }`}
            >
              <Icon name={tab.icon} className="w-5 h-5" />
              {tab.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}