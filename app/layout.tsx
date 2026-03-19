import "./globals.css";

export const metadata = {
  title: "Singular Crochet",
  description: "Piezas únicas tejidas a mano"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
