import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navegation from "@/components/navegation/Navegation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Barbershop</title>
      </head>

      <body className="selection:bg-golden selection:text-white">
        <Navegation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
