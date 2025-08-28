import { ArrowRight, ChartLine, Check, Clock, Phone, Calendar, Globe, Search, Share2, Mail, Mic, Wand2 } from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";
import IndustryCard from "@/components/ui/IndustryCard";
import FAQ from "@/components/ui/FAQ";
import CTAButton from "@/components/ui/CTAButton";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/AdobeStock_274670989_1756372521807.jpeg";

export default function Home() {
  const services = [
    {
      title: "Das Digitale Schaufenster",
      description: "Wir bauen Ihnen eine moderne, professionelle Webseite, die auf jedem Gerät perfekt aussieht und Besucher in Kunden verwandelt.",
      icon: Globe,
      href: "/leistungen/webdesign"
    },
    {
      title: "Die Lokale Auffindbarkeit",
      description: "Wir sorgen dafür, dass Sie auf Google Maps korrekt erscheinen, damit Kunden in Ihrer Umgebung Sie auch wirklich finden.",
      icon: Search,
      href: "/leistungen/seo"
    },
    {
      title: "Der Schutz des Guten Rufs",
      description: "Wir helfen Ihnen, Online-Bewertungen zu managen und Ihren wertvollen Ruf im Internet zu schützen.",
      icon: Check,
      href: "/leistungen/reputation"
    }
  ];

  const industries = [
    {
      title: "Handwerk",
      description: "Websites und Marketing für Handwerksbetriebe – von der Terminbuchung bis zur Galerie Ihrer Projekte.",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      imageAlt: "Handwerksbetrieb in Bayern",
      features: ["Online Terminbuchung", "Projektgalerien", "Lokale SEO"],
      href: "/branchen/handwerk"
    },
    {
      title: "Gastronomie",
      description: "Digitale Lösungen für Restaurants, Cafés und Hotels – von Online-Reservierungen bis zu Event-Marketing.",
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      imageAlt: "Moderne Gastronomie in Bayern",
      features: ["Tischreservierung", "Speisekarten online", "Event-Management"],
      href: "/branchen/gastro"
    },
    {
      title: "Lokale Dienste",
      description: "Maßgeschneiderte Websites für Dienstleister – Ärzte, Anwälte, Berater und mehr.",
      imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      imageAlt: "Lokale Dienstleister in Bayern",
      features: ["Terminvereinbarung", "Leistungsübersicht", "Kontaktformulare"],
      href: "/branchen/dienste"
    }
  ];

  const faqItems = [
    {
      question: "Wie lange dauert die Erstellung einer Website?",
      answer: "Die Entwicklungszeit hängt vom Umfang ab. Eine einfache Website ist in 2-3 Wochen fertig, komplexere Projekte mit Online-Shop oder Buchungssystem benötigen 4-8 Wochen."
    },
    {
      question: "Sind die Websites DSGVO-konform?",
      answer: "Ja, alle unsere Websites entsprechen den aktuellen DSGVO-Richtlinien. Wir implementieren Cookie-Banner, Datenschutzerklärung und sichere Datenverarbeitung."
    },
    {
      question: "Kann ich meine Website selbst bearbeiten?",
      answer: "Absolut! Wir setzen auf benutzerfreundliche Content-Management-Systeme wie WordPress. Nach einer kurzen Einführung können Sie Inhalte eigenständig pflegen."
    },
    {
      question: "Was kostet SEO für lokale Unternehmen?",
      answer: "Unsere SEO-Pakete beginnen bei 299€/Monat und beinhalten Google My Business Optimierung, lokale Suchmaschinenoptimierung und monatliche Reports."
    },
    {
      question: "Bieten Sie auch Wartung und Support?",
      answer: "Ja, wir bieten umfassende Wartungsverträge mit regelmäßigen Updates, Backups, Sicherheitschecks und technischem Support – damit Sie sich auf Ihr Business konzentrieren können."
    }
  ];

  const trustSignals = [
    "Google Partner",
    "HWK Bayern",
    "IHK München",
    "DSGVO Zertifiziert",
    "WordPress Partner",
    "Shopify Partner"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-primary-blue to-light-blue text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Digitale Sichtbarkeit. <span className="text-sand">Echt Bayerisch.</span> Ergebnis garantiert.
              </h1>
              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                Wir helfen traditionellen, inhabergeführten Betrieben in Bayern, online mehr Kunden zu gewinnen – einfach, verständlich und ohne technischen Aufwand für Sie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton 
                  href="/analyse" 
                  variant="sand" 
                  size="lg" 
                  icon={ChartLine}
                  testId="hero-analyse-button"
                >
                  Kostenloses Erstgespräch anfordern
                </CTAButton>
                <CTAButton 
                  href="/leistungen" 
                  variant="secondary" 
                  size="lg"
                  testId="hero-services-button"
                >
                  Unsere Leistungen
                </CTAButton>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professioneller bayerischer Betriebsinhaber" 
                className="rounded-xl shadow-2xl"
                data-testid="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems/Pain Points Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Kommt Ihnen das bekannt vor?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                  <Search className="text-red-600 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">Unsichtbar bei Google?</h3>
                  <p className="text-slate-600">Ihre Konkurrenten erscheinen bei Google Maps ganz oben, und Kunden können Sie nicht finden.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                  <Globe className="text-red-600 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">Veralteter Online-Auftritt?</h3>
                  <p className="text-slate-600">Ihre Webseite ist über 10 Jahre alt, sieht peinlich aus und bringt kein neues Geschäft.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                  <Phone className="text-red-600 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">Zu viel Zeit am Telefon?</h3>
                  <p className="text-slate-600">Sie und Ihre Mitarbeiter verschwenden wertvolle Zeit mit der Beantwortung der immer gleichen Fragen.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                  <Clock className="text-red-600 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">Keine Zeit für Marketing?</h3>
                  <p className="text-slate-600">Sie wissen, dass Sie mehr tun sollten, aber Sie müssen ein Geschäft führen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="leistungen" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Ihr Weg zu mehr Erfolg im Internet – Einfach und unkompliziert.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
              />
            ))}
          </div>

          <div className="text-center">
            <CTAButton 
              href="/leistungen" 
              size="lg"
              testId="services-overview-cta"
            >
              Alle Leistungen ansehen <ArrowRight className="ml-2 h-5 w-5" />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Industry Teaser */}
      <section className="py-20 bg-gradient-to-r from-slate-100 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Branchenspezialisierung
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Wir kennen die besonderen Anforderungen verschiedener Branchen und entwickeln 
              passende Lösungen für Ihren Erfolg.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <IndustryCard
                key={index}
                title={industry.title}
                description={industry.description}
                imageUrl={industry.imageUrl}
                imageAlt={industry.imageAlt}
                features={industry.features}
                href={industry.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Ihr Partner aus Bayern, für Bayern.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-primary-blue/10 p-4 rounded-full inline-block mb-4">
                <Globe className="text-primary-blue h-8 w-8" />
              </div>
              <h3 className="font-semibold text-navy mb-4">Fokus auf Bayern</h3>
              <p className="text-slate-600">Wir sind Spezialisten für den bayerischen Markt. Wir verstehen die Kultur und die Herausforderungen lokaler Betriebe.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-primary-blue/10 p-4 rounded-full inline-block mb-4">
                <Check className="text-primary-blue h-8 w-8" />
              </div>
              <h3 className="font-semibold text-navy mb-4">Klare, Feste Preise</h3>
              <p className="text-slate-600">Keine undurchsichtigen Stundensätze. Sie wählen aus klaren Paketen mit festen Preisen, damit Sie immer planen können.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-primary-blue/10 p-4 rounded-full inline-block mb-4">
                <ChartLine className="text-primary-blue h-8 w-8" />
              </div>
              <h3 className="font-semibold text-navy mb-4">Fokus auf Ergebnisse</h3>
              <p className="text-slate-600">Wir verkaufen keine Dienstleistungen, wir liefern Resultate. Ihr Erfolg ist unser Maßstab.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              So einfach funktioniert's
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Drei klare Schritte zu Ihrem digitalen Erfolg – transparent, effizient und ergebnisorientiert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center relative" data-testid="process-step-1">
              <div className="bg-primary-blue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">Kostenlose Analyse</h3>
              <p className="text-slate-600 mb-6">
                Wir analysieren Ihre aktuelle Online-Präsenz und identifizieren Optimierungspotenziale für Ihr Unternehmen.
              </p>
              <div className="hidden md:block absolute top-10 -right-6 text-primary-blue">
                <ArrowRight className="h-8 w-8" />
              </div>
            </div>

            <div className="text-center relative" data-testid="process-step-2">
              <div className="bg-primary-blue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">Maßgeschneiderte Strategie</h3>
              <p className="text-slate-600 mb-6">
                Basierend auf der Analyse entwickeln wir eine individuelle Digital-Marketing-Strategie für Ihre Branche.
              </p>
              <div className="hidden md:block absolute top-10 -right-6 text-primary-blue">
                <ArrowRight className="h-8 w-8" />
              </div>
            </div>

            <div className="text-center" data-testid="process-step-3">
              <div className="bg-primary-blue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">Erfolgreiche Umsetzung</h3>
              <p className="text-slate-600 mb-6">
                Wir setzen alle Maßnahmen professionell um und betreuen Sie langfristig für nachhaltigen Erfolg.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <CTAButton 
              href="/kontakt" 
              variant="sand" 
              size="lg" 
              icon={Calendar}
              testId="process-consultation-cta"
            >
              Kostenloses Beratungsgespräch
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Micro FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Häufige Fragen
            </h2>
            <p className="text-xl text-slate-600">
              Die wichtigsten Antworten auf einen Blick
            </p>
          </div>

          <FAQ items={faqItems} />

          <div className="text-center mt-12">
            <Link href="/faq" data-testid="all-faqs-link">
              <div className="text-primary-blue font-medium hover:text-navy inline-flex items-center text-lg">
                Alle FAQs ansehen <ArrowRight className="ml-2 h-5 w-5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-navy to-primary-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl text-slate-200 mb-8 leading-relaxed">
            Lassen Sie uns in einem unverbindlichen Gespräch herausfinden, wie wir Ihrem Betrieb helfen können. Wir sprechen Klartext, ohne Fachchinesisch.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton 
              href="/analyse" 
              variant="sand" 
              size="lg" 
              icon={ChartLine}
              testId="final-cta-analyse"
            >
              Jetzt kostenloses Gespräch vereinbaren
            </CTAButton>
            <span className="text-slate-300">oder</span>
            <a 
              href="tel:+498912345678" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-navy transition-colors inline-flex items-center"
              data-testid="final-cta-phone"
            >
              <Phone className="mr-2 h-5 w-5" />
              089 / 123 456 78
            </a>
          </div>

          <div className="mt-8 text-sm text-slate-300">
            <p data-testid="consultation-hours">
              <Clock className="inline mr-2 h-4 w-4" />
              Beratung: Mo-Fr 9:00-18:00 Uhr
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
