import { Wrench, Calendar, Image, Search, Star, Users, CheckCircle, ArrowRight } from "lucide-react";
import FAQ from "@/components/ui/FAQ";
import CTAButton from "@/components/ui/CTAButton";

export default function Handwerk() {
  const handwerkGoals = [
    "Mehr qualifizierte Kundenanfragen über die Website",
    "Einfache Online-Terminbuchung für Kunden",
    "Professionelle Darstellung der Handwerksleistungen",
    "Lokale Sichtbarkeit in Google-Suchergebnissen",
    "Positive Online-Bewertungen sammeln und verwalten",
    "Mobile-optimierte Website für unterwegs"
  ];

  const handwerkServices = [
    {
      icon: Calendar,
      title: "Online-Terminbuchung",
      description: "24/7 Terminvereinbarung für Kunden mit automatischer Kalender-Integration"
    },
    {
      icon: Image,
      title: "Projekt-Galerien",
      description: "Beeindruckende Darstellung Ihrer handwerklichen Arbeiten mit Vorher-Nachher-Bildern"
    },
    {
      icon: Search,
      title: "Lokale SEO",
      description: "Optimierung für lokale Suchanfragen wie 'Elektriker München' oder 'Dachdecker in der Nähe'"
    },
    {
      icon: Star,
      title: "Bewertungsmanagement",
      description: "Systematische Sammlung und Verwaltung von Kundenbewertungen"
    }
  ];

  const websiteStructure = [
    { page: "Startseite", content: "Leistungsübersicht, Kontaktmöglichkeiten, Vertrauenssignale" },
    { page: "Über uns", content: "Firmengeschichte, Team, Qualifikationen, Zertifikate" },
    { page: "Leistungen", content: "Detaillierte Leistungsbeschreibungen mit Preisindikationen" },
    { page: "Projekte", content: "Galerie erfolgreicher Projekte mit Beschreibungen" },
    { page: "Kontakt", content: "Terminbuchung, Kontaktformular, Anfahrt, Notdienst" },
    { page: "Karriere", content: "Stellenangebote, Ausbildungsplätze, Bewerbungsformular" }
  ];

  const showcaseProjects = [
    {
      title: "Elektro Huber GmbH",
      description: "Komplette Website mit Online-Terminbuchung und Notdienst-Hotline",
      imageUrl: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      results: ["250% mehr Online-Anfragen", "40% weniger Telefonate", "Durchschnittlich 15 Online-Termine/Woche"]
    },
    {
      title: "Dachdeckerei Müller",
      description: "SEO-optimierte Website mit umfangreicher Projekt-Galerie",
      imageUrl: "https://images.unsplash.com/photo-1581092446380-4b4b033c9138?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      results: ["Top 3 Rankings für 'Dachdecker München'", "180% mehr organischer Traffic", "35% Steigerung der Anfragen"]
    }
  ];

  const faqItems = [
    {
      question: "Brauche ich als Handwerker wirklich eine professionelle Website?",
      answer: "Ja, definitiv! 89% aller Kunden suchen heute online nach Handwerkern. Ohne professionelle Website verlieren Sie täglich potenzielle Aufträge an die Konkurrenz."
    },
    {
      question: "Wie funktioniert die Online-Terminbuchung für Handwerker?",
      answer: "Kunden können direkt auf Ihrer Website freie Termine einsehen und buchen. Sie erhalten automatisch eine Benachrichtigung und können den Termin bestätigen oder anpassen."
    },
    {
      question: "Wie lange dauert die Erstellung einer Handwerker-Website?",
      answer: "Eine Standard-Handwerker-Website ist in 3-4 Wochen einsatzbereit. Mit Terminbuchung und umfangreicher Galerie 4-6 Wochen."
    },
    {
      question: "Kann ich meine Website selbst pflegen?",
      answer: "Ja! Sie erhalten eine Einführung in das benutzerfreundliche Content-Management-System und können Projekte, Preise und Inhalte selbst aktualisieren."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-primary-blue to-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Digitale Lösungen für <span className="text-sand">Handwerksbetriebe</span>
              </h1>
              <p className="text-xl text-slate-200 mb-8">
                Professionelle Websites mit Online-Terminbuchung, Projekt-Galerien und lokaler SEO-Optimierung – 
                speziell entwickelt für bayerische Handwerksbetriebe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton 
                  href="/analyse" 
                  variant="sand" 
                  size="lg"
                  testId="handwerk-hero-analyse"
                >
                  Kostenlose Website-Analyse
                </CTAButton>
                <CTAButton 
                  href="/kontakt" 
                  variant="secondary" 
                  size="lg"
                  testId="handwerk-hero-contact"
                >
                  Handwerk-Beratung
                </CTAButton>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Handwerker bei der Arbeit in Bayern" 
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Goals & Objectives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Ziele für Handwerksbetriebe
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Diese digitalen Ziele erreichen erfolgreiche Handwerksbetriebe mit unseren maßgeschneiderten Lösungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {handwerkGoals.map((goal, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-lg">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary-blue h-6 w-6 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{goal}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Handwerk Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Speziell für Handwerker entwickelt
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Unsere digitalen Lösungen sind perfekt auf die Bedürfnisse von Handwerksbetrieben abgestimmt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {handwerkServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-blue p-4 rounded-full flex-shrink-0">
                    <service.icon className="text-white h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-4">{service.title}</h3>
                    <p className="text-slate-600">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Optimale Seitenstruktur
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              So strukturieren wir Handwerker-Websites für maximale Benutzerfreundlichkeit und Conversion-Rate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteStructure.map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8">
                <div className="bg-primary-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-navy mb-4">{item.page}</h3>
                <p className="text-slate-600 text-sm">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Projects */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Handwerk-Lösungen in der Praxis
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Typische Szenarien zeigen, wie digitale Lösungen Handwerksbetriebe erfolgreich machen können.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {showcaseProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-navy mb-4">{project.title}</h3>
                  <p className="text-slate-600 mb-6">{project.description}</p>
                  <div className="space-y-3">
                    <h4 className="font-medium text-navy">Ergebnisse:</h4>
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center space-x-3">
                        <CheckCircle className="text-primary-blue h-5 w-5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Häufige Fragen von Handwerkern
            </h2>
          </div>

          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für mehr Online-Aufträge?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Lassen Sie uns gemeinsam Ihre digitale Präsenz aufbauen und mehr Kunden gewinnen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              href="/analyse" 
              variant="sand" 
              size="lg"
              testId="handwerk-final-analyse"
            >
              Kostenlose Website-Analyse
            </CTAButton>
            <CTAButton 
              href="/kontakt" 
              variant="secondary" 
              size="lg"
              testId="handwerk-final-contact"
            >
              Handwerk-Beratung buchen
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
