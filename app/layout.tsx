import type { Metadata } from "next";
import { Darker_Grotesque } from "next/font/google";
import "./globals.css";

const darkerGrotesque = Darker_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Siga seu atleta",
  description: "Lista de atletas olímpicos e paraolímpicos brasileiros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={ darkerGrotesque.className }> {children} </body>
    </html>
  );
}
