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
            MrGeek
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
      
{/* KONTAKT */}
<section id="kontakt" className="px-6 py-24 border-t border-white/10">
  <FadeIn>
    <div className="max-w-5xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-semibold">
        Kontakt
      </h2>
    </div>
  </FadeIn>

  <FadeIn>
    <div className="max-w-5xl mx-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 md:p-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 5.25a2.25 2.25 0 012.25-2.25h2.1c.52 0 .99.34 1.15.84l1.2 3.6c.14.42.02.88-.31 1.18l-1.27 1.27a12.06 12.06 0 005.66 5.66l1.27-1.27c.3-.33.76-.45 1.18-.31l3.6 1.2c.5.16.84.63.84 1.15v2.1A2.25 2.25 0 0118.75 21h-.5C9.82 21 3 14.18 3 5.75v-.5z"
                />
              </svg>
            </div>

            <a
              href="tel:+48690690776"
              className="text-lg font-medium hover:text-gray-300 transition"
            >
              +48 690 690 776
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.914A2.25 2.25 0 012.25 6.993V6.75"
                />
              </svg>
            </div>

            <a
              href="mailto:kontakt@asperion.pl"
              className="text-lg font-medium hover:text-gray-300 transition"
            >
              kontakt@asperion.pl
            </a>
          </div>

          <div className="text-gray-400 text-sm mt-4">
            <p className="text-white font-medium mb-2">
              ASPERION Łukasz Korgul
            </p>
            <p>ul. Karola Darwina 62GE/2</p>
            <p>31-764 Kraków</p>
            <p className="mt-2">NIP: 5562441108</p>
            <p>REGON: —</p>
          </div>
        </div>

        <div className="w-full md:w-[50%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2343.2398750975967!2d19.965508776075474!3d50.08819841338131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b8f90b9a18b%3A0xe0d6c030a6cb336c!2sMrGeek!5e1!3m2!1sen!2spl!4v1774817099268!5m2!1sen!2spl"
            className="w-full h-[260px] md:h-[320px] rounded-xl border border-white/10"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="mt-4 text-center">
            <a
              href="https://maps.app.goo.gl/gbQpkC2T9vomrhKE6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/20 px-6 py-2 rounded-full text-sm hover:bg-white hover:text-black transition"
            >
              Otwórz w Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  </FadeIn>
</section>

    </main>
  );
}