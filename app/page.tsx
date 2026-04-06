"use client";

import { useState } from "react";
import FadeIn from "@/app/components/FadeIn";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [isEN, setIsEN] = useState(false);

  const logoSrc = isLight ? "/logo-black.png" : "/logo.png";

  const t = {
    navOffer: isEN ? "Services" : "Oferta",
    navContact: isEN ? "Contact" : "Kontakt",

    heroTitle: isEN
      ? "Laptop & PC Repair Krakow"
      : "Serwis laptopów i komputerów Kraków",
    heroDesc: isEN
      ? "Laptop repair, PC repair, custom PCs, websites and network support in Krakow."
      : "Naprawa laptopów, serwis komputerów PC, budowa komputerów na zamówienie, strony internetowe i wsparcie sieciowe w Krakowie.",
    heroCall: isEN ? "Call now" : "Zadzwoń",

    servicesTitle: isEN ? "What we do" : "Czym się zajmujemy ?",
    servicesIntro: isEN
      ? "Click any service to expand more details."
      : "Kliknij wybraną usługę, aby rozwinąć szczegóły.",

    contactTitle: isEN ? "Contact" : "Kontakt",
    openMaps: isEN ? "Open in Google Maps" : "Otwórz w Google Maps",

    stationary: isEN ? "Service location:" : "Serwis stacjonarny:",
    brandOwner: isEN ? "Brand owner:" : "Właścicielem marki jest:",

    privacyTitle: isEN ? "Privacy Policy" : "Polityka prywatności",
    rights: `© ${new Date().getFullYear()} MRGEEK. All rights reserved ®`,
  };

  const services = [
    {
      title: isEN ? "Computer repair" : "Naprawa komputerów",
      desc: isEN
        ? "Comprehensive diagnostics and repair of desktop computers, laptops, and Apple devices. We identify the real cause of the issue instead of masking its symptoms, helping you avoid unnecessary costs. We handle both minor repairs and more advanced hardware service, with a strong focus on stability, safety, and long-term reliability after the work is completed."
        : "Kompleksowa diagnostyka i naprawa komputerów stacjonarnych, laptopów oraz urządzeń Apple. Identyfikujemy rzeczywistą przyczynę problemu zamiast maskować jego objawy, co pozwala uniknąć niepotrzebnych kosztów. Realizujemy zarówno drobne naprawy, jak i bardziej zaawansowane serwisy sprzętowe, dbając o stabilność i bezpieczeństwo urządzenia po wykonanej usłudze.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M5 7v10h14V7M9 21h6" />
        </svg>
      ),
    },
    {
      title: isEN ? "Web development" : "Strony internetowe",
      desc: isEN
        ? "We design and deliver modern websites tailored to real business needs. Our solutions are fast, responsive, and intuitive for users, while also being built with visibility, performance, and clarity in mind. We focus on functionality, aesthetics, and effective presentation, so the website not only looks professional but also supports the growth of your business."
        : "Projektujemy i wdrażamy nowoczesne strony internetowe dopasowane do realnych potrzeb biznesu. Tworzymy rozwiązania szybkie, responsywne i intuicyjne dla użytkownika, a jednocześnie przygotowane pod widoczność w wyszukiwarkach. Skupiamy się na funkcjonalności, estetyce i przejrzystej komunikacji oferty.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3M10 4l4 16" />
        </svg>
      ),
    },
    {
      title: isEN ? "Custom PC builds" : "Budowa komputerów PC na zamówienie",
      desc: isEN
        ? "We build computers from the ground up, selecting components precisely for the intended purpose — from office workstations to advanced gaming systems. Every configuration is optimized for performance, compatibility, and budget, without random parts or unnecessary cost. The end result is a reliable machine matched to the real expectations of the user."
        : "Składamy komputery od podstaw, dobierając komponenty precyzyjnie pod konkretne zastosowanie – od pracy biurowej po zaawansowane zestawy gamingowe. Każda konfiguracja jest zoptymalizowana pod kątem wydajności, kompatybilności i budżetu, bez przypadkowych elementów i zbędnych kosztów.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <rect x="6" y="3" width="12" height="18" rx="2" />
          <circle cx="12" cy="17" r="1" />
        </svg>
      ),
    },
  ];

  const theme = {
    main: isLight ? "bg-white text-black" : "bg-[#050505] text-white",
    header: isLight
      ? "bg-white/90 border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
      : "bg-white/10 border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.25)]",
    nav: isLight ? "text-gray-600" : "text-gray-300",
    navHover: isLight ? "hover:text-black" : "hover:text-white",
    heroBg: isLight
      ? "bg-gradient-to-b from-[#ffffff] via-[#f7f7f7] to-[#efefef]"
      : "bg-gradient-to-b from-[#111111] via-[#0a0a0a] to-[#050505]",
    heroText: isLight ? "text-gray-600" : "text-gray-400",
    card: isLight
      ? "bg-white/55 border-black/10 backdrop-blur-xl hover:bg-white/70 hover:border-black/20 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
      : "bg-white/8 border-white/15 backdrop-blur-xl hover:bg-white/12 hover:border-white/25 shadow-[0_8px_30px_rgba(0,0,0,0.22)]",
    iconWrap: isLight ? "bg-black/8" : "bg-white/10",
    muted: isLight ? "text-gray-600" : "text-gray-400",
    border: isLight ? "border-black/10" : "border-white/10",
    buttonSecondary: isLight
      ? "border border-black/20 hover:bg-black hover:text-white"
      : "border border-white/20 hover:bg-white hover:text-black",
    footerText: "text-gray-500",
    mobileBar: isLight
      ? "bg-white/95 border-black/10"
      : "bg-[#0b0b0b]/95 border-white/10",
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ComputerRepair",
    name: "MRGEEK",
    image: "https://mrgeek.pl/og-image.jpg",
    url: "https://mrgeek.pl",
    telephone: "+48 690 690 776",
    email: "kontakt@mrgeek.pl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Dobrego Pasterza 100",
      addressLocality: "Kraków",
      postalCode: "31-416",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "50.0881984",
      longitude: "19.9655088",
    },
    areaServed: {
      "@type": "City",
      name: "Kraków",
    },
    sameAs: ["https://maps.app.goo.gl/gbQpkC2T9vomrhKE6"],
    priceRange: "$$",
    description:
      "Serwis laptopów i komputerów PC w Krakowie, budowa komputerów na zamówienie, tworzenie stron internetowych i wsparcie IT.",
  };

  return (
    <main className={`${theme.main} min-h-screen pt-20 pb-32 md:pb-0 transition-colors duration-300`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header
        className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 flex items-center justify-between backdrop-blur-md border-b transition-colors duration-300 ${theme.header}`}
      >
        <a href="#top" className="flex items-center gap-2 sm:gap-3">
          <img
            src={logoSrc}
            alt="MRGEEK Kraków - serwis laptopów i komputerów"
            className="h-7 sm:h-8 w-auto object-contain"
          />
          <span className="text-sm md:text-base font-semibold tracking-wide">
            MRGEEK
          </span>
        </a>

        <nav className={`flex gap-3 sm:gap-4 md:gap-8 text-sm ${theme.nav}`}>
          <a href="#oferta" className={`transition ${theme.navHover}`}>
            {t.navOffer}
          </a>
          <a href="#kontakt" className={`transition ${theme.navHover}`}>
            {t.navContact}
          </a>
        </nav>
      </header>

      <div className="fixed right-0 top-20 sm:top-24 z-50 flex flex-col items-end gap-2 sm:gap-3">
        <button
          onClick={() => setIsEN((prev) => !prev)}
          className="group flex items-center justify-center bg-orange-500 p-1.5 sm:p-2 rounded-l-xl shadow-lg hover:bg-orange-600 transition"
          aria-label="Toggle language"
          type="button"
        >
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border border-white/30">
            {isEN ? (
              <div className="w-full h-full flex flex-col">
                <div className="w-full h-1/2 bg-white" />
                <div className="w-full h-1/2 bg-red-600" />
              </div>
            ) : (
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-blue-700" />
                <div className="absolute w-[140%] h-[20%] bg-white rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute w-[140%] h-[20%] bg-white -rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute w-[140%] h-[10%] bg-red-600 rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute w-[140%] h-[10%] bg-red-600 -rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute top-1/2 left-0 w-full h-[22%] bg-white -translate-y-1/2" />
                <div className="absolute top-0 left-1/2 h-full w-[22%] bg-white -translate-x-1/2" />
                <div className="absolute top-1/2 left-0 w-full h-[12%] bg-red-600 -translate-y-1/2" />
                <div className="absolute top-0 left-1/2 h-full w-[12%] bg-red-600 -translate-x-1/2" />
              </div>
            )}
          </div>
        </button>

        <button
          onClick={() => setIsLight((prev) => !prev)}
          className="group flex items-center justify-center bg-orange-500 p-1.5 sm:p-2 rounded-l-xl shadow-lg hover:bg-orange-600 transition"
          aria-label="Toggle theme"
          type="button"
        >
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border border-white/30 flex">
            <div className="w-1/2 h-full bg-black" />
            <div className="w-1/2 h-full bg-white" />
          </div>
        </button>
      </div>

      <section
  id="top"
  className="relative flex flex-col items-center justify-center text-center min-h-[100svh] px-6 pt-24 pb-32 md:pb-0 overflow-hidden"
>
  <div
    className={`absolute inset-0 transition-colors duration-300 ${theme.heroBg}`}
  />

  <div className="relative z-10 max-w-4xl">
    <img
      src={logoSrc}
      alt="MRGEEK Kraków - serwis laptopów i komputerów"
      className="mx-auto mb-8 w-24 sm:w-28 md:w-36"
    />

    <h1 className="text-3xl sm:text-4xl md:text-7xl font-semibold tracking-tight mb-5 leading-tight">
      {t.heroTitle}
    </h1>
    
    

    <p className={`text-base sm:text-lg md:text-xl mb-8 leading-relaxed ${theme.heroText}`}>
      {t.heroDesc}
    </p>

    <div className="flex items-center justify-center gap-5 mb-6 opacity-70 hover:opacity-100 transition">
  
  <a
    href="https://www.linkedin.com/company/112795322"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:scale-110"
    aria-label="LinkedIn"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.84-2.2 3.8-2.2 4.06 0 4.8 2.67 4.8 6.15V24h-4v-8.1c0-1.93-.03-4.42-2.7-4.42-2.7 0-3.12 2.1-3.12 4.27V24h-4V8z" />
    </svg>
  </a>

  <a
    href="https://share.google/TwWvD4eQ11OMH7RsD"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:scale-110"
    aria-label="Google"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21.35 11.1h-9.18v2.92h5.27c-.23 1.3-1.56 3.82-5.27 3.82-3.17 0-5.75-2.63-5.75-5.87s2.58-5.87 5.75-5.87c1.8 0 3 .77 3.69 1.44l2.52-2.44C16.7 3.5 14.65 2.5 12.17 2.5 6.92 2.5 2.5 6.92 2.5 12.17s4.42 9.67 9.67 9.67c5.58 0 9.28-3.92 9.28-9.45 0-.64-.07-1.13-.1-1.29z"/>
    </svg>
  </a>

  <a
    href="https://www.facebook.com/mrgeek.tech"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:scale-110"
    aria-label="Facebook"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.8v-2.9h2.8V9.7c0-2.8 1.7-4.3 4.2-4.3 1.2 0 2.4.2 2.4.2v2.7h-1.4c-1.4 0-1.8.9-1.8 1.7v2.1h3l-.5 2.9h-2.5v7A10 10 0 0022 12z"/>
    </svg>
  </a>

  <a
    href="https://x.com"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:scale-110"
    aria-label="X"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2H21l-6.54 7.47L22 22h-6.828l-5.35-7.02L3.5 22H1l7.03-8.03L2 2h6.828l4.87 6.41L18.244 2z"/>
    </svg>
  </a>

</div>
  </div>
</section>

      <section id="oferta" className="px-6 py-24 max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {t.servicesTitle}
            </h2>
            <p className={`text-sm md:text-base ${theme.muted}`}>
              {t.servicesIntro}
            </p>
          </div>
        </FadeIn>
        

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, i) => {
            const isOpen = openIndex === i;
            const previewLength = isEN ? 110 : 120;
            const preview =
              item.desc.length > previewLength
                ? `${item.desc.slice(0, previewLength).trim()}...`
                : item.desc;

            return (
              <FadeIn key={i}>
                <div
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`group p-8 rounded-2xl border transition cursor-pointer relative overflow-hidden ${theme.card}`}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center transition duration-300 group-hover:scale-105 ${theme.iconWrap}`}
                      >
                        {item.icon}
                      </div>

                      <h3 className="text-lg font-medium">
                        {item.title}
                      </h3>
                    </div>

                    <div
                      className={`transition transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    >
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

                  <div className="min-h-[72px]">
                    {!isOpen ? (
                      <p className={`text-sm leading-relaxed ${theme.muted}`}>
                        {preview}
                      </p>
                    ) : (
                      <div className="pt-1">
                        <p className={`text-sm leading-relaxed ${theme.muted}`}>
                          {item.desc}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
        

        <div className={`mt-14 max-w-4xl mx-auto text-center ${theme.muted}`}>
          <p className="text-sm md:text-base leading-7">
            {isEN
              ? "MRGEEK provides laptop repair, desktop PC service, custom computer builds and website development in Krakow. We help individual clients and small businesses looking for reliable local IT support."
              : "MRGEEK oferuje serwis laptopów, naprawę komputerów stacjonarnych, budowę komputerów na zamówienie oraz tworzenie stron internetowych w Krakowie. Pomagamy klientom indywidualnym i małym firmom, które szukają sprawdzonego lokalnego wsparcia IT."}
          </p>
        </div>
        
      </section>

      

      <section id="kontakt" className={`px-6 py-24 border-t ${theme.border}`}>
        <FadeIn>
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold">
              {t.contactTitle}
            </h2>
          </div>
        </FadeIn>

        <FadeIn>
          <div
            className={`max-w-5xl mx-auto rounded-2xl border backdrop-blur p-8 md:p-12 ${theme.card}`}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
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
                    href="mailto:kontakt@mrgeek.pl"
                    className="text-lg font-medium hover:opacity-70 transition break-all"
                  >
                    kontakt@mrgeek.pl
                  </a>
                </div>

                <div className={`text-sm mt-4 ${theme.muted}`}>
                  {t.stationary}
                  <p className="font-medium mb-2 text-current">
                    MRGEEK
                  </p>
                  <p>ul. Dobrego Pasterza 100</p>
                  <p>31-416 Kraków</p>
                  <p>tel: +48 690 690 776</p>
                  <p>email: kontakt@mrgeek.pl</p>
                </div>

                <div className={`text-sm mt-4 ${theme.muted}`}>
                  {t.brandOwner}
                  <p className="font-medium mb-2 text-current">
                    ASPERION Łukasz Korgul
                  </p>
                  <p>ul. Karola Darwina 62GE/2</p>
                  <p>31-764 Kraków</p>
                  <p className="mt-2">NIP: 5562441108</p>
                  <p>REGON: 093214846 </p>
                  <p>tel: +48 690 690 776</p>
                  <p>email: kontakt@asperion.pl</p>
                </div>

                <div className="hidden md:flex flex-col sm:flex-row gap-4 pt-2">
                  <a
                    href="https://wa.me/48690690776"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-3 rounded-full font-medium flex items-center gap-3 justify-center bg-[#25D366] text-white hover:scale-105 transition shadow-lg"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.52 0 .25 5.27.25 11.79c0 2.08.54 4.12 1.57 5.92L0 24l6.49-1.7a11.76 11.76 0 005.55 1.41h.01c6.52 0 11.79-5.27 11.79-11.79 0-3.15-1.23-6.12-3.32-8.44zM12.05 21.4h-.01a9.6 9.6 0 01-4.88-1.33l-.35-.21-3.85 1.01 1.03-3.75-.23-.38a9.6 9.6 0 01-1.47-5.11c0-5.32 4.33-9.65 9.65-9.65 2.58 0 5 1.01 6.83 2.84a9.58 9.58 0 012.82 6.81c0 5.32-4.33 9.65-9.64 9.65zm5.29-7.2c-.29-.15-1.7-.84-1.97-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.35-1.44-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.51.07-.77.36-.26.29-1 1-.99 2.43 0 1.43 1.02 2.81 1.16 3 .14.19 2 3.05 4.85 4.27.68.29 1.21.46 1.63.59.68.22 1.3.19 1.79.12.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.24.17-1.37-.07-.12-.26-.19-.55-.34z" />
                    </svg>
                    WhatsApp
                  </a>

                  <a
                    href="tel:+48690690776"
                    className={`w-full sm:w-auto px-8 py-3 rounded-full text-center transition ${theme.buttonSecondary}`}
                  >
                    {t.heroCall}
                  </a>
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
                    {t.openMaps}
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
            {t.rights}
          </p>

          <button
            onClick={() => setPrivacyOpen(!privacyOpen)}
            className={`text-sm transition flex items-center gap-2 ${theme.nav} ${theme.navHover}`}
          >
            {t.privacyTitle}
            <span className={`transition ${privacyOpen ? "rotate-180" : ""}`}>
              ▼
            </span>
          </button>
        </div>

        <div
          className={`max-w-6xl mx-auto overflow-hidden transition-all duration-500 ${
            privacyOpen ? "max-h-[2400px] mt-10 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`rounded-2xl p-8 text-sm leading-relaxed space-y-6 border ${theme.card}`}
          >
            {isEN ? (
              <>
                <p className="font-medium">Privacy Policy</p>

                <p>
                  The controller of personal data is ASPERION Łukasz Korgul, based in Kraków.
                  Contact regarding personal data matters: kontakt@asperion.pl.
                </p>

                <p>
                  Personal data provided via the website, e-mail, or phone contact is processed
                  solely for the purpose of handling inquiries, responding to messages, presenting
                  offers, and delivering services.
                </p>

                <p>
                  The legal basis for processing is the user’s consent, actions taken at the
                  request of the data subject prior to entering into a contract, and the legitimate
                  interest of the controller consisting of communication with clients and protection
                  against potential claims.
                </p>

                <p>
                  Providing data is voluntary, but it may be necessary in order to receive a reply
                  or use our services.
                </p>

                <p>
                  Data is not sold or shared with third parties, except for entities supporting the
                  operation of the website and the provision of services, such as hosting, e-mail,
                  or technical service providers, only to the extent necessary for proper service delivery.
                </p>

                <p>
                  Data is stored for the period necessary to fulfill the purpose of contact, provide
                  the service, and for the period resulting from applicable law or until the expiry
                  of potential claims.
                </p>

                <p>
                  Every data subject has the right to access their data, rectify it, erase it,
                  restrict processing, transfer data, object to processing, and withdraw consent
                  at any time, without affecting the lawfulness of processing carried out before
                  the withdrawal.
                </p>

                <p>
                  If you believe that the processing of your personal data violates the law, you
                  have the right to lodge a complaint with the President of the Personal Data
                  Protection Office.
                </p>

                <p>
                  The website may use cookies necessary for proper operation, improved security,
                  and basic technical analytics. Detailed cookie settings depend on the browser used.
                </p>

                <p>
                  The controller makes every effort to protect personal data against unauthorized
                  access, loss, destruction, or unauthorized modification.
                </p>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </section>

      <div
        className={`md:hidden fixed bottom-0 left-0 w-full z-50 border-t backdrop-blur-md ${theme.mobileBar}`}
      >
        <div className="grid grid-cols-2 gap-2 p-2.5">
          <a
            href="https://wa.me/48690690776"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white py-2.5 text-sm font-medium"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.52 0 .25 5.27.25 11.79c0 2.08.54 4.12 1.57 5.92L0 24l6.49-1.7a11.76 11.76 0 005.55 1.41h.01c6.52 0 11.79-5.27 11.79-11.79 0-3.15-1.23-6.12-3.32-8.44zM12.05 21.4h-.01a9.6 9.6 0 01-4.88-1.33l-.35-.21-3.85 1.01 1.03-3.75-.23-.38a9.6 9.6 0 01-1.47-5.11c0-5.32 4.33-9.65 9.65-9.65 2.58 0 5 1.01 6.83 2.84a9.58 9.58 0 012.82 6.81c0 5.32-4.33 9.65-9.64 9.65zm5.29-7.2c-.29-.15-1.7-.84-1.97-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.35-1.44-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.51.07-.77.36-.26.29-1 1-.99 2.43 0 1.43 1.02 2.81 1.16 3 .14.19 2 3.05 4.85 4.27.68.29 1.21.46 1.63.59.68.22 1.3.19 1.79.12.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.24.17-1.37-.07-.12-.26-.19-.55-.34z" />
            </svg>
            WhatsApp
          </a>

          <a
            href="tel:+48690690776"
            className={`flex items-center justify-center rounded-full py-2.5 text-sm font-medium ${theme.buttonSecondary}`}
          >
            {t.heroCall}
          </a>
        </div>
      </div>
    </main>
  );
}