"use client";

import { useEffect, useState } from "react";
import FadeIn from "./components/FadeIn";

export default function Home() {
  const [pages, setPages] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://wp.mrgeek.pl/wp-json/wp/v2/pages")
      .then((res) => res.json())
      .then((data) => setPages(data))
      .catch(() => setPages([]));
  }, []);

  return (
    <main className="text-white min-h-screen">
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-black/60 backdrop-blur-md border-b border-white/10">

  {/* LEWA STRONA */}
  <div className="flex items-center gap-3">
    <img
      src="/logo.png"
      alt="MRGEEK"
      className="h-8 w-auto object-contain"
    />

    <span className="text-sm md:text-base font-semibold tracking-wide">
      MRGEEK
    </span>
  </div>

  {/* PRAWA STRONA */}
  <nav className="flex gap-4 md:gap-8 text-sm text-gray-300">
    <a href="#oferta" className="hover:text-white transition">Oferta</a>
    <a href="#kontakt" className="hover:text-white transition">Kontakt</a>
  </nav>

</header>
      {/* HERO */}
      <section
        id="top"
        className="relative flex flex-col items-center justify-center text-center h-screen px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#0a0a0a] to-[#050505]" />

        <FadeIn>
          <div className="relative z-10 max-w-4xl">
            <img
            src="/logo.png"
            alt="MRGEEK"
             className="mx-auto mb-8 w-28 md:w-36"
            />
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
              STREFA WSPARCIA TECH-IT
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
              SERWIS ELEKTRONIKI - BUDOWA KOMPUTERÓW - STRONY INTERNETOWE - SIECI
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#oferta"
                className="bg-white text-black px-8 py-3 rounded-full font-medium hover:scale-105 transition"
              >
                Zobacz ofertę
              </a>

              <a
                href="#kontakt"
                className="border border-white/20 px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
              >
                Skontaktuj się
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* USŁUGI */}
      <section id="oferta" className="px-6 py-24 max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-center">
            Co robimy
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Naprawa Elektroniki",
              desc: "Ponad 25 lat doświadczenia. Naprawa komuterów PC, laptopów oraz urządzeń Apple.",
            },
            {
              title: "Projektowanie stron internetowych",
              desc: "Budowa nowoczesnych i zoptymlizowanych stron - dedykowanych pod zamówienie i potrzeby klienta.",
            },
            {
              title: "BUDOWA KOMPUTERÓW",
              desc: "Składamy sysytemy gamingowe pod celowane wymagania gracza.",
            },
          ].map((item, i) => (
            <FadeIn key={i}>
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition hover:scale-[1.02]">
                <h3 className="text-xl font-medium mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* WORDPRESS DATA 
      <section className="px-6 py-24 max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Treści z WordPress
          </h2>
        </FadeIn>

        <div className="space-y-12">
          {pages.map((page) => (
            <FadeIn key={page.id}>
              <div className="border-b border-white/10 pb-8">
                <h3 className="text-2xl font-semibold mb-4">
                  {page.title.rendered}
                </h3>

                <div
                  className="text-gray-400 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: page.excerpt.rendered,
                  }}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>*/}

      {/* KONTAKT */}
      {/* KONTAKT */}
{/* KONTAKT */}
<section
  id="kontakt"
  className="px-6 py-24 border-t border-white/10"
>
  <FadeIn>
    <div className="max-w-5xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-semibold">
        Kontakt
      </h2>
    </div>
  </FadeIn>

  <FadeIn>
    <div className="max-w-5xl mx-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 md:p-12">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

        {/* LEWA */}
        <div className="flex flex-col gap-6 text-left">

          {/* TELEFON */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a1.5 1.5 0 001.5-1.5v-1.372c0-.516-.351-.966-.852-1.09l-4.423-1.106a1.5 1.5 0 00-1.465.417l-.97 1.293a12.042 12.042 0 01-5.658-5.658l1.293-.97a1.5 1.5 0 00.417-1.465L8.212 4.102a1.125 1.125 0 00-1.09-.852H5.75a1.5 1.5 0 00-1.5 1.5v2z" />
              </svg>
            </div>

            <a href="tel:+48690690776" className="text-white text-lg font-medium hover:text-gray-300 transition">
              +48 690 690 776
            </a>
          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.914A2.25 2.25 0 012.25 6.993V6.75" />
              </svg>
            </div>

            <a href="mailto:kontakt@asperion.pl" className="text-white text-lg font-medium hover:text-gray-300 transition break-all">
              kontakt@asperion.pl
            </a>
          </div>

        </div>

        {/* PRAWA */}
        <div className="text-left md:text-right text-gray-400 text-sm leading-relaxed">
          <p className="text-white font-medium mb-2">
            ASPERION Łukasz Korgul
          </p>
          <p>ul. Karola Darwina 62GE/2</p>
          <p>31-764 Kraków</p>
          <p className="mt-3">NIP: 5562441108</p>
          <p>REGON: —</p>
        </div>

      </div>

    </div>
  </FadeIn>
</section>

    </main>
  );
}