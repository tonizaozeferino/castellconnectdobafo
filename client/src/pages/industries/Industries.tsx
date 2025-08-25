import { ArrowRight, Building2, Wrench, UtensilsCrossed, Stethoscope, MapPin } from "lucide-react";
import IndustryCard from "@/components/ui/IndustryCard";
import CTAButton from "@/components/ui/CTAButton";

export default function Industries() {
  const industries = [
    {
      title: "Handwerk",
      description: "Websites und Marketing für Handwerksbetriebe – von der Terminbuchung bis zur Galerie Ihrer Projekte.",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      imageAlt: "Handwerksbetrieb in Bayern",
      features: ["Online Terminbuchung", "Projektgalerien", "Lokale SEO", "Bewertungsmanagement"],
      href: "/branchen/handwerk"
    },
    {
      title: "Gastronomie",
      description: "Digitale Lösungen für Restaurants, Cafés und Hotels – von Online-Reservierungen bis zu Event-Marketing.",
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      imageAlt: "Moderne Gastronomie in Bayern",
      features: ["Tischreservierung", "Speisekarten online", "Event-Management", "Social Media"],
      href: "/branchen/gastro"
    },
    {
      title: "Lokale Dienste",
      description: "Maßgeschneiderte Websites für Dienstleister – Ärzte, Anwälte, Berater und mehr.",
      imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      imageAlt: "Lokale Dienstleister in Bayern",
      features: ["Terminvereinbarung", "Leistungsübersicht", "Kontaktformulare", "DSGVO-konform"],
      href: "/branchen/dienste"
    }
  ];

  const regionsExample = [
    { city: "München", description: "Digitale Lösungen für die bayerische Landeshauptstadt" },
    { city: "Nürnberg", description: "Online Marketing für Nordbayerns Metropole" },
    { city: "Augsburg", description: "Webdesign und SEO für die Fuggerstadt" },
    { city: "Würzburg", description: "Digitale Präsenz für Mainfranken" },
    { city: "Regensburg", description: "Modern Marketing für die UNESCO-Welterbestadt" },
    { city: "Ingolstadt", description: "Online-Lösungen für die Audi-Stadt" }
  ];

  const whySpecialization = [
    {
      title: "Branchenkenntnis",
      description: "Wir verstehen die spezifischen Herausforderungen und Chancen Ihrer Branche",
      icon: Building2
    },
    {
      title: "Zielgruppen-Expertise",
      description: "Unsere Strategien sind auf die Bedürfnisse Ihrer Kunden zugeschnitten",
      icon: Wrench
    },
    {
      title: "Bewährte Lösungen",
      description: "Erprobte Marketing-Ansätze die in Ihrer Branche nachweislich funktionieren",
      icon: UtensilsCrossed
    },
    {
      title: "Compliance & Recht",
      description: "Berücksichtigung branchenspezifischer rechtlicher Anforderungen",
      icon: Stethoscope
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-primary-blue to-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-sand">Branchenspezialisierung</span> für Bayern
          </h1>
          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Maßgeschneiderte digitale Lösungen für verschiedene Branchen – 
            entwickelt aus jahrelanger Erfahrung und tiefem Verständnis für branchenspezifische Anforderungen.
          </p>
          <CTAButton 
            href="/analyse" 
            variant="sand" 
            size="lg"
            testId="industries-hero-cta"
          >
            Branchenspezifische Analyse anfordern
          </CTAButton>
        </div>
      </section>

      {/* Why Specialization Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Warum Spezialisierung wichtig ist
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Jede Branche hat ihre eigenen Herausforderungen, Zielgruppen und Erfolgsfaktoren. 
              Unsere Spezialisierung ermöglicht zielgerichtete Lösungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whySpecialization.map((reason, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary-blue p-4 rounded-full inline-block mb-6">
                  <reason.icon className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">{reason.title}</h3>
                <p className="text-slate-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Industries */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Unsere Branchen-Schwerpunkte
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Diese Branchen kennen wir besonders gut und haben für sie 
              spezielle Lösungen und Strategien entwickelt.
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

      {/* Regional Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Regionale Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Lokales Wissen und regionale Vernetzung für optimale Ergebnisse 
              in verschiedenen bayerischen Städten und Regionen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regionsExample.map((region, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow group">
                <div className="bg-primary-blue/10 p-4 rounded-full inline-block mb-6 group-hover:bg-primary-blue/20 transition-colors">
                  <MapPin className="text-primary-blue h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">{region.city}</h3>
                <p className="text-slate-600 mb-6">{region.description}</p>
                <div className="text-primary-blue font-medium hover:text-navy inline-flex items-center group-hover:translate-x-1 transition-transform">
                  Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">
              Ihre Stadt ist nicht dabei? Wir arbeiten in ganz Bayern und darüber hinaus.
            </p>
            <CTAButton href="/kontakt" testId="regions-contact-cta">
              Regionale Beratung anfragen
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Erfolgsgeschichten aus verschiedenen Branchen
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Beispiele erfolgreicher Projekte zeigen, wie branchenspezifische Lösungen 
              zu messbaren Ergebnissen führen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl mb-4">🔨</div>
              <h3 className="text-xl font-semibold text-navy mb-4">Elektro Müller GmbH</h3>
              <p className="text-slate-600 mb-4">
                300% mehr Online-Terminbuchungen durch optimierte Website und lokale SEO.
              </p>
              <div className="bg-primary-blue/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary-blue">+300%</div>
                <div className="text-sm text-slate-600">Online-Termine</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold text-navy mb-4">Restaurant Alpenblick</h3>
              <p className="text-slate-600 mb-4">
                40% mehr Reservierungen durch Online-Buchungssystem und Social Media Marketing.
              </p>
              <div className="bg-primary-blue/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary-blue">+40%</div>
                <div className="text-sm text-slate-600">Reservierungen</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold text-navy mb-4">Anwaltskanzlei Wagner</h3>
              <p className="text-slate-600 mb-4">
                200% mehr qualifizierte Mandatsanfragen durch SEO-optimierte Website.
              </p>
              <div className="bg-primary-blue/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary-blue">+200%</div>
                <div className="text-sm text-slate-600">Mandatsanfragen</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für branchenspezifische Lösungen?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Lassen Sie uns gemeinsam eine maßgeschneiderte Strategie für Ihre Branche entwickeln.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              href="/analyse" 
              variant="sand" 
              size="lg"
              testId="industries-final-analyse"
            >
              Branchenspezifische Analyse
            </CTAButton>
            <CTAButton 
              href="/kontakt" 
              variant="secondary" 
              size="lg"
              testId="industries-final-contact"
            >
              Beratungsgespräch buchen
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
