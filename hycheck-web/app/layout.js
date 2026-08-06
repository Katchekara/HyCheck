import "./globals.css";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

export const metadata = {
  title: "HyCheck",
  description: "Vérifier un contenu avant de croire ou de payer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main className="max-w-md mx-auto px-4 pb-24 pt-4">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}