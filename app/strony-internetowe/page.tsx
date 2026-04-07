"use client";

import { useState } from "react";
import FadeIn from "@/app/components/FadeIn";

export default function WebDevelopmentPage() {
  const [isLight, setIsLight] = useState(false);
  const [isEN, setIsEN] = useState(false);

  const logoSrc = isLight ? "/logo-black.png" : "/logo.png";

  const t = {
    navHome: isEN ? "Home" : "Start",
    navOffer: isEN ? "Services" : "Oferta",
    navContact: isEN ? "Contact" : "Kontakt",

    heroTitle: isEN
      ? "Website Development"
      : "Tworzenie stron internetowych",
    heroDesc: isEN
      ? "Modern, fast and effective websites designed to build trust, attract clients and support real business growth."
      : "Nowoczesne, szybkie i skuteczne strony internetowe projektowane tak, aby budować zaufanie, pozyskiwać klientów i realnie wspierać rozwój firmy.",

    sectionWhyTitle: isEN ? "Why a good website matters" : "Dlaczego dobra strona ma znaczenie",
    sectionWhyDesc: isEN
      ? "A website is often the first point of contact with your brand. It should look professional, work quickly, communicate clearly and make it easy for the client to take action."
      : "Strona internetowa jest bardzo często pierwszym punktem kontaktu klienta z marką. Powinna wyglądać profesjonalnie, działać szybko, jasno komunikować ofertę i ułatwiać podjęcie działania.",

    pricingTitle: isEN ? "Subscription offer" : "Oferta abonamentowa",
    pricingBadge: isEN ? "From 0 PLN upfront" : "Od 0 zł na start",
    pricingHeadline: isEN
      ? "Website for 0 PLN and 99 PLN / month"
      : "Strona za 0 zł i 99 zł / mc",
    pricingDesc: isEN
      ? "A convenient subscription model for businesses that want a professional website without a high upfront cost."
      : "Wygodny model abonamentowy dla firm, które chcą mieć profesjonalną stronę internetową bez wysokiego kosztu na start.",
    pricingIncludesTitle: isEN ? "What is included" : "Co zawiera abonament",
    pricingIncludes: isEN
      ? [
          "Website design and development included",
          "Server hosting included",
          "Technical maintenance included",
          "Ongoing website availability",
          "Modern, responsive design",
        ]
      : [
          "Budowa i wdrożenie strony w cenie",
          "Utrzymanie serwera w cenie",
          "Opieka techniczna w cenie",
          "Stała dostępność strony",
          "Nowoczesny i responsywny projekt",
        ],

    servicesTitle: isEN ? "What we can build" : "Co możemy stworzyć",
    services: isEN
      ? [
          "Business websites and company pages",
          "Landing pages focused on conversion",
          "Service presentation websites",
          "Modern redesigns of existing websites",
          "Responsive websites for mobile and desktop",
          "SEO-friendly page structures",
        ]
      : [
          "Strony firmowe i wizytówki biznesowe",
          "Landing page nastawione na konwersję",
          "Strony prezentujące usługi i ofertę",
          "Nowoczesne redesigny istniejących stron",
          "Responsywne strony na telefon i komputer",
          "Struktury przygotowane pod SEO",
        ],

    processTitle: isEN ? "How we work" : "Jak pracujemy",
    process: isEN
      ? [
          {
            title: "Analysis",
            desc: "We learn about your business, goals and target audience.",
          },
          {
            title: "Design",
            desc: "We create a clear structure and modern visual direction.",
          },
          {
            title: "Development",
            desc: "We build a fast, responsive and polished website.",
          },
          {
            title: "Launch",
            desc: "We publish the website and prepare it for further growth.",
          },
        ]
      : [
          {
            title: "Analiza",
            desc: "Poznajemy Twój biznes, cele i grupę docelową.",
          },
          {
            title: "Projekt",
            desc: "Tworzymy przejrzystą strukturę i nowoczesny kierunek wizualny.",
          },
          {
            title: "Wdrożenie",
            desc: "Budujemy szybką, responsywną i dopracowaną stronę.",
          },
          {
            title: "Publikacja",
            desc: "Uruchamiamy stronę i przygotowujemy ją do dalszego rozwoju.",
          },
        ],

    benefitsTitle: isEN ? "What you gain" : "Co zyskujesz",
    benefits: isEN
      ? [
          "Professional online presence",
          "Clear presentation of services",
          "Better trust and credibility",
          "Faster contact from potential clients",
          "Strong foundation for SEO and advertising",
          "A website aligned with your brand image",
        ]
      : [
          "Profesjonalną obecność w internecie",
          "Przejrzyste przedstawienie oferty",
          "Większe zaufanie i wiarygodność",
          "Szybszy kontakt od potencjalnych klientów",
          "Lepszą bazę pod SEO i reklamy",
          "Stronę spójną z wizerunkiem marki",
        ],

    ctaTitle: isEN ? "Let’s build your website" : "Stwórzmy Twoją stronę internetową",
    ctaDesc: isEN
      ? "If you want a modern website that looks professional and supports your business goals, get in touch."
      : "Jeśli chcesz nowoczesną stronę internetową, która wygląda profesjonalnie i wspiera cele Twojego biznesu, skontaktuj się z nami.",
    ctaWhatsapp: "WhatsApp",
    ctaCall: isEN ? "Call now" : "Zadzwoń",

    rights: `© ${new Date().getFullYear()} MRGEEK. All rights reserved ®`,
  };

  const theme = {
    main: isLight ? "bg-white text-black" : "bg-[#050505] text-white",
    header: isLight
      ? "bg-white/85 border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
      : "bg-white/8 border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.22)]",
    nav: isLight ? "text-gray-600" : "text-gray-300",
    navHover: isLight ? "hover:text-black" : "hover:text-white",
    heroBg: isLight
      ? "bg-[radial-gradient(circle_at_top,#ffffff_0%,#f7f7f7_40%,#ececec_100%)]"
      : "bg-[radial-gradient(circle_at_top,#1c1c1c_0%,#101010_38%,#050505_100%)]",
    heroText: isLight ? "text-gray-600" : "text-gray-400",
    card: isLight
      ? "bg-white/55 border-black/10 backdrop-blur-xl hover:bg-white/70 hover:border-black/20 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
      : "bg-white/8 border-white/15 backdrop-blur-xl hover:bg-white/12 hover:border-white/25 shadow-[0_8px_30px_rgba(0,0,0,0.22)]",
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
    "@type": "Service",
    serviceType: isEN ? "Website Development" : "Tworzenie stron internetowych",
    name: "MRGEEK - Tworzenie stron internetowych",
    provider: {
      "@type": "Organization",
      name: "MRGEEK",
      url: "https://mrgeek.pl",
      telephone: "+48 690 690 776",
    },
    areaServed: {
      "@type": "Country",
      name: "Poland",
    },
    url: "https://mrgeek.pl/strony-internetowe",
    description:
      "Nowoczesne strony internetowe, landing page, strony firmowe i wdrożenia przygotowane pod szybkość, czytelność i rozwój biznesu.",
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
        <a href="/" className="flex items-center gap-2 sm:gap-3">
          <img
            src={logoSrc}
            alt="MRGEEK"
            className="h-7 sm:h-8 w-auto object-contain"
          />
          <span className="text-sm md:text-base font-semibold tracking-wide">
            MRGEEK
          </span>
        </a>

        <nav className={`flex gap-3 sm:gap-4 md:gap-8 text-sm ${theme.nav}`}>
          <a href="/" className={`transition ${theme.navHover}`}>
            {t.navHome}
          </a>
          <a href="/#oferta" className={`transition ${theme.navHover}`}>
            {t.navOffer}
          </a>
          <a href="/#kontakt" className={`transition ${theme.navHover}`}>
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

      <section className="relative flex flex-col items-center justify-center text-center min-h-[100svh] px-6 pt-12 pb-32 md:pb-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute inset-0 transition-colors duration-300 ${theme.heroBg}`}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_22%,transparent_58%)]" />
          <div className="absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-orange-500/20 blur-[130px]" />
          <div className="absolute top-0 -left-24 h-[24rem] w-[24rem] rounded-full bg-sky-500/10 blur-[120px]" />
          <div className="absolute top-16 -right-20 h-[24rem] w-[24rem] rounded-full bg-violet-500/10 blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.35)_100%)]" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <img
            src={logoSrc}
            alt="MRGEEK"
            className="mx-auto mb-8 w-24 sm:w-28 md:w-36"
          />

          <h1 className="text-3xl sm:text-4xl md:text-7xl font-semibold tracking-tight mb-5 leading-tight">
            {t.heroTitle}
          </h1>

          <p className={`text-base sm:text-lg md:text-xl mb-8 leading-relaxed ${theme.heroText}`}>
            {t.heroDesc}
          </p>
        </div>
      </section>

      <section className="px-6 py-24 max-w-6xl mx-auto">
        <FadeIn>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className={`p-8 rounded-2xl border ${theme.card}`}>
              <h2 className="text-2xl md:text-3xl font-semibold mb-5">
                {t.sectionWhyTitle}
              </h2>
              <p className={`text-sm md:text-base leading-7 ${theme.muted}`}>
                {t.sectionWhyDesc}
              </p>
            </div>

            <div className={`p-8 rounded-2xl border ${theme.card}`}>
              <h2 className="text-2xl md:text-3xl font-semibold mb-5">
                {t.servicesTitle}
              </h2>
              <ul className={`space-y-4 text-sm md:text-base ${theme.muted}`}>
                {t.services.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1.5 block h-2 w-2 rounded-full bg-orange-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="px-6 py-24 max-w-6xl mx-auto border-t border-white/10">
        <FadeIn>
          <div className={`rounded-2xl border p-8 md:p-12 ${theme.card}`}>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500 text-white text-sm font-medium mb-5">
                {t.pricingBadge}
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold mb-5">
                {t.pricingHeadline}
              </h2>
              <p className={`text-sm md:text-base leading-7 ${theme.muted}`}>
                {t.pricingDesc}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className={`rounded-2xl border p-8 ${theme.card}`}>
                <p className={`text-sm uppercase tracking-[0.2em] mb-3 ${theme.muted}`}>
                  {t.pricingTitle}
                </p>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-4xl md:text-5xl font-semibold">0 zł</span>
                  <span className={`pb-1 ${theme.muted}`}>+ 99 zł / mc</span>
                </div>
                <p className={`text-sm leading-7 ${theme.muted}`}>
                  {isEN
                    ? "A low-entry subscription model that allows you to launch a professional website without a large upfront payment."
                    : "Model abonamentowy o niskim progu wejścia, który pozwala uruchomić profesjonalną stronę bez wysokiej opłaty początkowej."}
                </p>
              </div>

              <div className={`rounded-2xl border p-8 ${theme.card}`}>
                <h3 className="text-xl font-semibold mb-5">
                  {t.pricingIncludesTitle}
                </h3>
                <ul className={`space-y-4 text-sm md:text-base ${theme.muted}`}>
                  {t.pricingIncludes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1.5 block h-2 w-2 rounded-full bg-orange-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="px-6 py-24 max-w-6xl mx-auto border-t border-white/10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {t.processTitle}
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {t.process.map((step, index) => (
            <FadeIn key={index}>
              <div className={`p-8 rounded-2xl border ${theme.card}`}>
                <div className="mb-5 flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white text-sm font-semibold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-medium mb-3">{step.title}</h3>
                <p className={`text-sm leading-7 ${theme.muted}`}>{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 max-w-6xl mx-auto border-t border-white/10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {t.benefitsTitle}
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {t.benefits.map((benefit, index) => (
            <FadeIn key={index}>
              <div className={`p-8 rounded-2xl border ${theme.card}`}>
                <p className={`text-sm md:text-base leading-7 ${theme.muted}`}>
                  {benefit}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 border-t border-white/10">
        <FadeIn>
          <div className={`max-w-5xl mx-auto rounded-2xl border backdrop-blur p-8 md:p-12 text-center ${theme.card}`}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">
              {t.ctaTitle}
            </h2>

            <p className={`max-w-3xl mx-auto text-sm md:text-base leading-7 mb-8 ${theme.muted}`}>
              {t.ctaDesc}
            </p>

            <div className="hidden md:flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/48690690776"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full font-medium flex items-center gap-3 justify-center bg-[#25D366] text-white hover:scale-105 transition shadow-lg"
              >
                {t.ctaWhatsapp}
              </a>

              <a
                href="tel:+48690690776"
                className={`px-8 py-3 rounded-full text-center transition ${theme.buttonSecondary}`}
              >
                {t.ctaCall}
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className={`px-6 py-16 border-t ${theme.border}`}>
        <div className="max-w-6xl mx-auto">
          <p className={`text-sm text-center ${theme.footerText}`}>
            {t.rights}
          </p>
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
            {t.ctaWhatsapp}
          </a>

          <a
            href="tel:+48690690776"
            className={`flex items-center justify-center rounded-full py-2.5 text-sm font-medium ${theme.buttonSecondary}`}
          >
            {t.ctaCall}
          </a>
        </div>
      </div>
    </main>
  );
}