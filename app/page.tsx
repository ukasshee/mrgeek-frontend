"use client";

import { useState } from "react";
import FadeIn from "./components/FadeIn";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="text-white min-h-screen pt-20">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-black/60 backdrop-blur-md border-b border-white/10">

        <div className="flex items-center gap-3">
          <img src="/logo.png" className="h-8 w-auto object-contain" />
          <span className="text-sm md:text-base font-semibold tracking-wide">
            MRGEEK
          </span>
        </div>

        <nav className="flex gap-4 md:gap-8 text-sm text-gray-300">
          <a href="#oferta" className="hover:text-white transition">Oferta</a>
          <a href="#kontakt" className="hover:text-white transition">Kontakt</a>
        </nav>

      </header>

      {/* HERO */}
      <section className="relative flex items-center justify-center text-center h-screen px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-[#050505]" />

        <FadeIn>
          <div className="relative z-10 max-w-4xl">

            <img src="/logo.png" className="mx-auto mb-8 w-28 md:w-36" />

            <h1 className="text-5xl md:text-7xl font-semibold mb-6">
              STREFA WSPARCIA TECH-IT
            </h1>

            <p className="text-gray-400 mb-10">
              SERWIS ELEKTRONIKI - BUDOWA KOMPUTERÓW - STRONY INTERNETOWE
            </p>

            <div className="flex gap-4 justify-center">
              <a href="#oferta" className="bg-white text-black px-8 py-3 rounded-full">
                Oferta
              </a>
              <a href="tel:+48690690776" className="border px-8 py-3 rounded-full">
                Zadzwoń
              </a>
            </div>

          </div>
        </FadeIn>
      </section>

      {/* USŁUGI */}
      <section id="oferta" className="px-6 py-24 max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-center">
          Co robimy
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Naprawa elektroniki",
              desc: "Serwis PC, laptopów i urządzeń Apple.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 7h14v10H5z"/>
                </svg>
              ),
            },
            {
              title: "Strony internetowe",
              desc: "Nowoczesne realizacje.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3"/>
                </svg>
              ),
            },
            {
              title: "Budowa komputerów",
              desc: "Zestawy dopasowane do potrzeb.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="12" height="16" rx="2"/>
                </svg>
              ),
            },
          ].map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <FadeIn key={i}>
                <div
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 cursor-pointer"
                >
                  <div className="flex justify-between items-center">

                    <div className="flex items-center gap-4">
                      {item.icon}
                      <h3>{item.title}</h3>
                    </div>

                    <div className={`${isOpen ? "rotate-180" : ""} transition`}>
                      ▼
                    </div>

                  </div>

                  <div className={`overflow-hidden transition-all ${isOpen ? "max-h-40 mt-4" : "max-h-0"}`}>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>

                </div>
              </FadeIn>
            );
          })}

        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="px-6 py-24 border-t border-white/10">

        <h2 className="text-3xl text-center mb-12">
          Kontakt
        </h2>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-8">

          <div className="flex flex-col gap-4">
            <a href="tel:+48690690776">+48 690 690 776</a>
            <a href="mailto:kontakt@asperion.pl">kontakt@asperion.pl</a>
          </div>

          <div className="text-gray-400 text-sm">
            ASPERION Łukasz Korgul<br/>
            Kraków<br/>
            NIP: 5562441108
          </div>

        </div>

      </section>

    </main>
  );
}