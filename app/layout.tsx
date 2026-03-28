import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="text-white bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#050505]">

        {/* NAVBAR */}
        <header className="fixed top-0 left-0 w-full z-50">
          <div className="w-full px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between bg-white/5 backdrop-blur-md border-b border-white/10">

            {/* LOGO */}
            <div className="text-lg font-semibold tracking-tight">
              MRGEEK
            </div>

            {/* MENU */}
           <nav className="hidden md:flex gap-8 text-sm text-gray-300">
  <a href="#oferta" className="hover:text-white">Oferta</a>
  <a href="#realizacje" className="hover:text-white">Realizacje</a>
  <a href="#onas" className="hover:text-white">O nas</a>
  <a href="#kontakt" className="hover:text-white">Kontakt</a>
</nav>

            {/* CTA */}
            <button className="hidden md:block bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition">
              Wycena
            </button>
          </div>
        </header>

        {/* CONTENT */}
        <div className="pt-24">
          {children}
        </div>

      </body>
    </html>
  );
}