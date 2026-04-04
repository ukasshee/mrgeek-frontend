"use client";

import { useState } from "react";
import FadeIn from "@/app/components/FadeIn";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isLight, setIsLight] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const services = [
    {
      title: isLight ? "Naprawa elektroniki" : "Naprawa elektroniki",
      desc: "Kompleksowa diagnostyka i naprawa komputerów stacjonarnych, laptopów oraz urządzeń Apple. Identyfikujemy rzeczywistą przyczynę problemu zamiast maskować jego objawy, co pozwala uniknąć niepotrzebnych kosztów. Realizujemy zarówno drobne naprawy, jak i bardziej zaawansowane serwisy sprzętowe, dbając o stabilność i bezpieczeństwo urządzenia po wykonanej usłudze.",
    },
    {
      title: "Strony internetowe",
      desc: "Projektujemy i wdrażamy nowoczesne strony internetowe dopasowane do realnych potrzeb biznesu. Tworzymy rozwiązania szybkie, responsywne i intuicyjne dla użytkownika, a jednocześnie przygotowane pod widoczność w wyszukiwarkach. Skupiamy się na funkcjonalności, estetyce i przejrzystej komunikacji oferty.",
    },
    {
      title: "Budowa komputerów",
      desc: "Składamy komputery od podstaw, dobierając komponenty precyzyjnie pod konkretne zastosowanie – od pracy biurowej po zaawansowane zestawy gamingowe. Każda konfiguracja jest zoptymalizowana pod kątem wydajności, kompatybilności i budżetu, bez przypadkowych elementów i zbędnych kosztów.",
    },
  ];

  const theme = {
    main: isLight ? "bg-white text-black" : "bg-[#050505] text-white",
    header: isLight
      ? "bg-white/80 border-black/10"
      : "bg-black/60 border-white/10",
    nav: isLight ? "text-gray-600" : "text-gray-300",
    navHover: isLight ? "hover:text-black" : "hover:text-white",
    heroBg: isLight
      ? "bg-gradient-to-b from-[#ffffff] via-[#f7f7f7] to-[#efefef]"
      : "bg-gradient-to-b from-[#111111] via-[#0a0a0a] to-[#050505]",
    heroText: isLight ? "text-gray-600" : "text-gray-400",
    card: isLight
      ? "bg-black/[0.03] border-black/10 hover:bg-black/[0.05] hover:border-black/20"
      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20",
    iconWrap: isLight ? "bg-black/10" : "bg-white/10",
    muted: isLight ? "text-gray-600" : "text-gray-400",
    border: isLight ? "border-black/10" : "border-white/10",
    buttonPrimary: isLight
      ? "bg-black text-white hover:scale-105"
      : "bg-white text-black hover:scale-105",
    buttonSecondary: isLight
      ? "border border-black/20 hover:bg-black hover:text-white"
      : "border border-white/20 hover:bg-white hover:text-black",
    footerText: isLight ? "text-gray-500" : "text-gray-500",
    toggleBg: isLight ? "bg-black text-white" : "bg-white text-black",
  };

  const logoSrc = isLight ? "/logo-black.png" : "/logo.png";

  return (
    <main className={`${theme.main} min-h-screen pt-20 transition-colors duration-300`}>
      <header
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md border-b transition-colors duration-300 ${theme.header}`}
      >
        <div className="flex items-center gap-3">
          <img
            src={logoSrc}
            alt="MRGEEK"
            className="h-8 w-auto object-contain"
          />
          <span className="text-sm md:text-base font-semibold tracking-wide">
            MRGEEK
          </span>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <nav className={`flex gap-4 md:gap-8 text-sm ${theme.nav}`}>
            <a href="#oferta" className={`transition ${theme.navHover}`}>
              Oferta
            </a>
            <a href="#kontakt" className={`transition ${theme.navHover}`}>
              Kontakt
            </a>
          </nav>

          <button
            onClick={() => setIsLight(!isLight)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${theme.toggleBg}`}
            aria-label="Przełącz motyw"
          >
            {isLight ? "Dark" : "Light"}
          </button>
        </div>
      </header>

      <section
        id="top"
        className="relative flex flex-col items-center justify-center text-center h-screen px-6 overflow-hidden"
      >
        <div
          className={`absolute inset-0 transition-colors duration-300 ${theme.heroBg}`}
        />

        <FadeIn>
          <div className="relative z-10 max-w-4xl">
            <img
              src={logoSrc}
              alt="MRGEEK"
              className="mx-auto mb-8 w-28 md:w-36"
            />

            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
              STREFA WSPARCIA TECH-IT
            </h1>

            <p className={`text-lg md:text-xl mb-10 leading-relaxed ${theme.heroText}`}>
              SERWIS ELEKTRONIKI • BUDOWA KOMPUTERÓW • STRONY INTERNETOWE • SIECI
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#oferta"
                className={`px-8 py-3 rounded-full font-medium transition ${theme.buttonPrimary}`}
              >
                Zobacz ofertę
              </a>

              <a
                href="tel:+48690690776"
                className={`px-8 py-3 rounded-full transition ${theme.buttonSecondary}`}
              >
                Zadzwoń
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      <section id="oferta" className="px-6 py-24 max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-center">
            Co robimy
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <FadeIn key={i}>
                <div
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`group p-8 rounded-2xl border transition cursor-pointer ${theme.card}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition group-hover:scale-110 ${theme.iconWrap}`}
                      >
                        {i === 0 && (
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 7h14v10H5z" />
                          </svg>
                        )}
                        {i === 1 && (
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
                          </svg>
                        )}
                        {i === 2 && (
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                          >
                            <rect x="6" y="4" width="12" height="16" rx="2" />
                          </svg>
                        )}
                      </div>

                      <h3 className="text-lg font-medium">{item.title}</h3>
                    </div>

                    <div className={`transition transform ${isOpen ? "rotate-180" : ""}`}>
                      <svg
                        className={`w-5 h-5 ${theme.muted}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  <div
                    style={{ maxHeight: isOpen ? "1000px" : "0px" }}
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                  >
                    <div className="pt-4">
                      <p className={`text-sm leading-relaxed ${theme.muted}`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section id="kontakt" className={`px-6 py-24 border-t ${theme.border}`}>
        <FadeIn>
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold">Kontakt</h2>
          </div>
        </FadeIn>

        <FadeIn>
          <div
            className={`max-w-5xl mx-auto rounded-2xl border backdrop-blur p-8 md:p-12 ${theme.card}`}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${theme.iconWrap}`}
                  >
                    <svg
                      className="w-5 h-5"
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
                    className="text-lg font-medium hover:opacity-70 transition"
                  >
                    +48 690 690 776
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${theme.iconWrap}`}
                  >
                    <svg
                      className="w-5 h-5"
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
                    className="text-lg font-medium hover:opacity-70 transition"
                  >
                    kontakt@asperion.pl
                  </a>
                </div>

                <div className={`text-sm mt-4 ${theme.muted}`}>
                  <p className="font-medium mb-2 text-current">ASPERION Łukasz Korgul</p>
                  <p>ul. Karola Darwina 62GE/2</p>
                  <p>31-764 Kraków</p>
                  <p className="mt-2">NIP: 5562441108</p>
                  <p>REGON: —</p>
                </div>
              </div>

              <div className="w-full md:w-[50%]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2343.2398750975967!2d19.965508776075474!3d50.08819841338131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b8f90b9a18b%3A0xe0d6c030a6cb336c!2sMrGeek!5e1!3m2!1sen!2spl!4v1774817099268!5m2!1sen!2spl"
                  className={`w-full h-[260px] md:h-[320px] rounded-xl border ${theme.border}`}
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
                    className={`inline-block px-6 py-2 rounded-full text-sm transition ${theme.buttonSecondary}`}
                  >
                    Otwórz w Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className={`px-6 py-16 border-t ${theme.border}`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className={`text-sm text-center md:text-left ${theme.footerText}`}>
            © {new Date().getFullYear()} MRGEEK. All rights reserved ®
          </p>

          <button
            onClick={() => setPrivacyOpen(!privacyOpen)}
            className={`text-sm transition flex items-center gap-2 ${theme.nav} ${theme.navHover}`}
          >
            Polityka prywatności
            <span className={`transition ${privacyOpen ? "rotate-180" : ""}`}>▼</span>
          </button>
        </div>

        <div
          className={`max-w-6xl mx-auto overflow-hidden transition-all duration-500 ${
            privacyOpen ? "max-h-[2200px] mt-10 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`rounded-2xl p-8 text-sm leading-relaxed space-y-6 border ${theme.card}`}
          >
            <p className="font-medium">Polityka prywatności</p>

            <p>
              Administratorem danych osobowych jest ASPERION Łukasz Korgul, z siedzibą w Krakowie.
              Kontakt w sprawach dotyczących danych osobowych: kontakt@asperion.pl.
            </p>

            <p>
              Dane osobowe przekazywane za pośrednictwem strony internetowej, poczty elektronicznej
              lub kontaktu telefonicznego są przetwarzane wyłącznie w celu obsługi zapytania,
              udzielenia odpowiedzi, przedstawienia oferty oraz realizacji usług.
            </p>

            <p>
              Podstawą przetwarzania danych jest zgoda użytkownika, działania podejmowane na żądanie
              osoby, której dane dotyczą, przed zawarciem umowy, a także prawnie uzasadniony interes
              administratora polegający na prowadzeniu kontaktu z klientami i zabezpieczeniu roszczeń.
            </p>

            <p>
              Podanie danych jest dobrowolne, jednak może być niezbędne do uzyskania odpowiedzi
              lub realizacji usługi.
            </p>

            <p>
              Dane nie są sprzedawane ani udostępniane podmiotom trzecim, z wyjątkiem podmiotów
              wspierających działanie strony i realizację usług, takich jak dostawcy hostingu,
              poczty elektronicznej lub narzędzi technicznych, wyłącznie w zakresie niezbędnym
              do prawidłowego świadczenia usług.
            </p>

            <p>
              Dane przechowywane są przez okres niezbędny do realizacji celu kontaktu, wykonania
              usługi, a także przez czas wynikający z obowiązujących przepisów prawa lub do momentu
              przedawnienia ewentualnych roszczeń.
            </p>

            <p>
              Każdej osobie, której dane dotyczą, przysługuje prawo dostępu do danych, ich
              sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych, wniesienia
              sprzeciwu oraz cofnięcia zgody w dowolnym momencie, bez wpływu na zgodność z prawem
              przetwarzania dokonanego przed jej cofnięciem.
            </p>

            <p>
              W przypadku uznania, że przetwarzanie danych narusza przepisy prawa, użytkownik ma
              prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.
            </p>

            <p>
              Strona może wykorzystywać pliki cookies niezbędne do jej prawidłowego działania,
              poprawy bezpieczeństwa oraz podstawowej analizy technicznej. Szczegółowe ustawienia
              cookies zależą od używanej przeglądarki internetowej.
            </p>

            <p>
              Administrator dokłada należytej staranności, aby chronić dane osobowe przed
              nieuprawnionym dostępem, utratą, zniszczeniem lub nieuprawnioną modyfikacją.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}