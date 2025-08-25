import { ArrowRight, ChartLine, Check, Clock, Phone, Calendar, Globe, Search, Share2, Mail, Mic, Wand2 } from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";
import IndustryCard from "@/components/ui/IndustryCard";
import FAQ from "@/components/ui/FAQ";
import CTAButton from "@/components/ui/CTAButton";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  const services = [
    {
      title: "Webdesign & Development",
      description: "Responsive Websites mit CMS, DSGVO-Konformität und optimaler Performance für alle Endgeräte.",
      icon: Globe,
      href: "/leistungen/webdesign"
    },
    {
      title: "SEO & Local Marketing",
      description: "Google My Business Optimierung, lokale Sichtbarkeit und nachhaltige Suchmaschinenoptimierung.",
      icon: Search,
      href: "/leistungen/seo"
    },
    {
      title: "Social Media Management",
      description: "Redaktionsplanung, Content-Produktion und Community-Management für alle relevanten Kanäle.",
      icon: Share2,
      href: "/leistungen/social"
    },
    {
      title: "E-Mail Marketing",
      description: "DSGVO-konformer Listenaufbau, automatisierte Kampagnen und detailliertes Reporting.",
      icon: Mail,
      href: "/leistungen/email"
    },
    {
      title: "Voice & Chatbots",
      description: "Intelligente Sprachassistenten und Chatbots für verbesserten Kundensupport.",
      icon: Mic,
      href: "/leistungen/voice"
    },
    {
      title: "KI-Visual Produktion",
      description: "KI-gestützte Erstellung von Bildern, Videos und visuellen Inhalten für Ihr Marketing.",
      icon: Wand2,
      href: "/leistungen/ki-visuals"
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

  const solutionApproaches = [
    {
      title: "Handwerk & Bauwesen",
      description: "Digitale Terminbuchung, Projektgalerien und lokale Sichtbarkeit",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      tags: ["Terminbuchung", "Portfolio"]
    },
    {
      title: "Gastronomie & Hotels",
      description: "Online-Reservierungen, Speisekarten und Event-Marketing",
      imageUrl: "https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      tags: ["Reservierung", "Events"]
    },
    {
      title: "Lokale Dienstleister",
      description: "Kundenportale, Online-Termine und digitale Beratung",
      imageUrl: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      tags: ["Portal", "Beratung"]
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
                Digitale Lösungen für den <span className="text-sand">bayerischen Mittelstand</span>
              </h1>
              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                Wir bringen Ihr Unternehmen online nach vorne – mit maßgeschneiderten Websites, lokaler SEO-Optimierung und durchdachten Marketing-Strategien.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton 
                  href="/analyse" 
                  variant="sand" 
                  size="lg" 
                  icon={ChartLine}
                  testId="hero-analyse-button"
                >
                  Kostenlose Website-Analyse
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Digitales Marketing Team bei der Arbeit" 
                className="rounded-xl shadow-2xl"
                data-testid="hero-image"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Check className="text-green-600 h-8 w-8" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900" data-testid="hero-stat-customers">150+ zufriedene Kunden</div>
                    <div className="text-slate-600">in ganz Bayern</div>
                  </div>
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
              Unsere digitalen Lösungen
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Von der professionellen Website bis zur KI-gestützten Content-Produktion – 
              wir bieten alle Services aus einer Hand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

      {/* Solution Approaches */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Unsere Lösungsansätze
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Entdecken Sie, wie wir digitale Herausforderungen lösen und 
              maßgeschneiderte Strategien für verschiedene Branchen entwickeln.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {solutionApproaches.map((approach, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={approach.imageUrl} 
                  alt={approach.title} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-testid={`solution-image-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2" data-testid={`solution-title-${index}`}>{approach.title}</h3>
                  <p className="text-sm text-slate-200 mb-3" data-testid={`solution-description-${index}`}>{approach.description}</p>
                  <div className="flex space-x-2">
                    {approach.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-sand/20 text-sand px-2 py-1 rounded text-xs" data-testid={`solution-tag-${index}-${tagIndex}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton 
              href="/branchen" 
              size="lg"
              testId="solutions-cta"
            >
              Alle Branchen ansehen <ArrowRight className="ml-2 h-5 w-5" />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-navy mb-4">Warum CastellConnect?</h2>
            <p className="text-slate-600">Unsere Qualitätsstandards und Arbeitsweise</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-primary-blue/10 p-4 rounded-full inline-block mb-4">
                <Clock className="text-primary-blue h-8 w-8" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Schnelle Umsetzung</h3>
              <p className="text-slate-600 text-sm">Projekte werden zügig und effizient umgesetzt</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-primary-blue/10 p-4 rounded-full inline-block mb-4">
                <Check className="text-primary-blue h-8 w-8" />
              </div>
              <h3 className="font-semibold text-navy mb-2">DSGVO-Konformität</h3>
              <p className="text-slate-600 text-sm">Alle Lösungen entsprechen deutschen Datenschutzstandards</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-primary-blue/10 p-4 rounded-full inline-block mb-4">
                <Phone className="text-primary-blue h-8 w-8" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Persönlicher Support</h3>
              <p className="text-slate-600 text-sm">Direkter Ansprechpartner für alle Ihre Fragen</p>
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
            Lassen Sie uns gemeinsam Ihre digitale Präsenz auf das nächste Level bringen. 
            Starten Sie mit einer kostenlosen Analyse Ihrer aktuellen Website.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton 
              href="/analyse" 
              variant="sand" 
              size="lg" 
              icon={ChartLine}
              testId="final-cta-analyse"
            >
              Kostenlose Website-Analyse
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
