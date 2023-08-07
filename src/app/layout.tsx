import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lista de lectura",
  description: "Catálogo de libros con lista de lectura.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <main className="px-4 m-auto grid min-h-screen max-w-screen-lg grid-rows-[60px,1fr,60px] gap-4">
          <nav className="flex items-center text-2xl">Catálogo de Libros📚</nav>
          <section>{children}</section>
          <footer className="flex items-center justify-center">
            made with ♥️ by Pablo
          </footer>
        </main>
      </body>
    </html>
  );
}
