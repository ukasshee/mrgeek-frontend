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
              SERWIS ELEKTRONIKI - BUDOWA KOMPUTERÓW - STRONY INTERNETOWE - SIECI + iPhony iPady MacBooki.
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
              title: "Strony internetowe",
              desc: "Nowoczesne, szybkie i zoptymalizowane pod SEO.",
            },
            {
              title: "Automatyzacje",
              desc: "Oszczędzaj czas dzięki inteligentnym procesom.",
            },
            {
              title: "Rozwiązania IT",
              desc: "Dedykowane systemy dopasowane do Twojego biznesu.",
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

      {/* WORDPRESS DATA */}
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
      </section>

      {/* KONTAKT */}
      <section
        id="kontakt"
        className="px-6 py-32 text-center border-t border-white/10"
      >
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Porozmawiajmy o projekcie
          </h2>

          <p className="text-gray-400 mb-10">
            Skontaktuj się i zobacz, co możemy razem stworzyć.
          </p>

          <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:scale-105 transition">
            Kontakt
          </button>
        </FadeIn>
      </section>

    </main>
  );
}