import { Stethoscope, Scale, Calculator, GraduationCap, Calendar, Users, CheckCircle, ArrowRight } from "lucide-react";
import FAQ from "@/components/ui/FAQ";
import CTAButton from "@/components/ui/CTAButton";

export default function Dienste() {
  const serviceIndustries = [
    {
      icon: Stethoscope,
      title: "Ärzte & Praxen",
      description: "Terminbuchung, Patientenportale und DSGVO-konforme Websites für Arztpraxen",
      features: ["Online-Terminbuchung", "Patientenportal", "Praxisvorstellung", "Leistungsübersicht"]
    },
    {
      icon: Scale,
      title: "Anwälte & Kanzleien",
      description: "Professionelle Mandantengewinnung und vertrauensvolle Online-Präsenz",
      features: ["Fachgebiete-Darstellung", "Mandanten-Portal", "Beratungstermine", "Referenzen"]
    },
    {
      icon: Calculator,
      title: "Steuerberater & Wirtschaftsprüfer",
      description: "Digitale Mandantenbetreuung und automatisierte Terminvergabe",
      features: ["Dokumenten-Upload", "Terminplanung", "Service-Übersicht", "Mandanten-Login"]
    },
    {
      icon: GraduationCap,
      title: "Berater & Coaches",
      description: "Lead-Generierung und professionelle Selbstdarstellung für Beratungsdienstleister",
      features: ["Expertise-Darstellung", "Terminbuchung", "Erstberatung", "Testimonials"]
    }
  ];

  const dienstleisterGoals = [
    "Professionelle und vertrauensvolle Online-Präsenz",
    "Vereinfachte Terminvergabe für Klienten/Patienten",
    "DSGVO-konforme Datenverarbeitung",
    "Mehr qualifizierte Anfragen über die Website",
    "Entlastung bei administrativen Aufgaben",
    "Lokale Sichtbarkeit für 'in der Nähe' Suchanfragen"
  ];

  const websiteStructure = [
    {
      page: "Startseite",
      content: "Vertrauensvoller Erstkontakt mit klaren Leistungen und Kontaktmöglichkeiten",
      priority: "Hoch"
    },
    {
      page: "Über mich/uns",
      content: "Qualifikationen, Erfahrung, Philosophie und persönliche Vorstellung",
      priority: "Hoch"
    },
    {
      page: "Leistungen",
      content: "Detaillierte Darstellung der Fachgebiete und Dienstleistungen",
      priority: "Hoch"
    },
    {
      page: "Terminbuchung",
      content: "Online-Kalender mit Verfügbarkeiten und automatischer Bestätigung",
      priority: "Mittel"
    },
    {
      page: "Kontakt",
      content: "Adresse, Sprechzeiten, Anfahrt und Kontaktformular",
      priority: "Hoch"
    },
    {
      page: "Datenschutz & Impressum",
      content: "Rechtlich erforderliche Informationen, DSGVO-konform",
      priority: "Pflicht"
    }
  ];

  const complianceFeatures = [
    "DSGVO-konforme Datenverarbeitung",
    "SSL-Verschlüsselung für alle Formulare",
    "Cookie-Management und Einwilligungen",
    "Sichere Dokumenten-Uploads",
    "Datenschutzerklärung und Impressum",
    "Backup und Datensicherheit",
    "Berufsrechtliche Compliance",
    "Mandanten-/Patientenschutz"
  ];

  const showcaseProjects = [
    {
      title: "Anwaltskanzlei Wagner",
      description: "Familienrecht-Spezialist mit Online-Mandantenportal",
      imageUrl: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      results: ["200% mehr qualifizierte Anfragen", "50% weniger administrative Aufgaben", "Durchschnittlich 12 Online-Termine/Woche"]
    },
    {
      title: "Arztpraxis Dr. Schneider",
      description: "Hausarztpraxis mit digitalem Patientenservice",
      imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      results: ["80% weniger Telefonate", "90% Online-Terminbuchungen", "Verbesserte Patientenzufriedenheit"]
    },
    {
      title: "Steuerberatung Huber",
      description: "Digitale Mandantenbetreuung mit Dokumenten-Portal",
      imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      results: ["40% mehr Neukunden", "Papierlose Büro-Abläufe", "Ganzjährige Mandantenbetreuung"]
    }
  ];

  const faqItems = [
    {
      question: "Sind Websites für Ärzte und Anwälte rechtlich besonders geschützt?",
      answer: "Ja, für Heilberufe und Rechtsberufe gelten besondere Datenschutz- und Werberichtlinien. Wir berücksichtigen alle berufsrechtlichen Vorgaben und sorgen für vollständige Compliance."
    },
    {
      question: "Wie funktioniert Online-Terminbuchung für Arztpraxen?",
      answer: "Patienten können verfügbare Termine online einsehen und buchen. Das System ist DSGVO-konform und kann mit Praxissoftware integriert werden. Automatische Erinnerungen reduzieren No-Shows."
    },
    {
      question: "Was kostet eine professionelle Dienstleister-Website?",
      answer: "Websites für Dienstleister beginnen bei 2.990€ inklusive Terminbuchung, DSGVO-Setup und lokalem SEO. Monatliche Wartung ab 129€."
    },
    {
      question: "Können Mandanten/Patienten sicher Dokumente hochladen?",
      answer: "Ja, wir implementieren sichere Upload-Portale mit Ende-zu-Ende-Verschlüsselung. Alle Dokumente werden DSGVO-konform gespeichert und nur autorisierten Personen zugänglich gemacht."
    },
    {
      question: "Hilft eine Website wirklich bei der Mandanten-/Patientengewinnung?",
      answer: "Definitiv! 85% aller Menschen suchen heute online nach Ärzten, Anwälten oder Beratern. Eine professionelle Website mit positiven Bewertungen ist entscheidend für den ersten Eindruck."
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
                Digitale Lösungen für <span className="text-sand">lokale Dienstleister</span>
              </h1>
              <p className="text-xl text-slate-200 mb-8">
                Professionelle Websites mit Online-Terminbuchung und DSGVO-konformen Lösungen – 
                speziell für Ärzte, Anwälte, Berater und andere Dienstleister in Bayern.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton 
                  href="/analyse" 
                  variant="sand" 
                  size="lg"
                  testId="dienste-hero-analyse"
                >
                  Praxis-Analyse starten
                </CTAButton>
                <CTAButton 
                  href="/kontakt" 
                  variant="secondary" 
                  size="lg"
                  testId="dienste-hero-contact"
                >
                  Dienstleister-Beratung
                </CTAButton>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professionelle Dienstleister in Bayern" 
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Unsere Dienstleister-Branchen
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Spezialisierte Lösungen für verschiedene Dienstleistungsbranchen mit 
              branchenspezifischen Anforderungen und Compliance-Richtlinien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceIndustries.map((industry, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-primary-blue p-4 rounded-full flex-shrink-0">
                    <industry.icon className="text-white h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-2">{industry.title}</h3>
                    <p className="text-slate-600">{industry.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {industry.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="bg-primary-blue/10 text-primary-blue px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Ziele für Dienstleister
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Diese digitalen Ziele erreichen erfolgreiche Dienstleister mit unseren maßgeschneiderten Lösungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dienstleisterGoals.map((goal, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary-blue h-6 w-6 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{goal}</span>
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
              So strukturieren wir Dienstleister-Websites für Vertrauen, Professionalität und Conversion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteStructure.map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-primary-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.priority === 'Hoch' ? 'bg-red-100 text-red-700' :
                    item.priority === 'Mittel' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {item.priority}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-4">{item.page}</h3>
                <p className="text-slate-600 text-sm">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                DSGVO & Compliance
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Besondere Sorgfalt bei Datenschutz und rechtlichen Anforderungen – 
                speziell für Berufe mit erhöhter Schweigepflicht.
              </p>
              <ul className="space-y-3">
                {complianceFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-primary-blue h-6 w-6 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Datenschutz und Compliance für Dienstleister" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Erfolgreiche Dienstleister-Projekte
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Referenzen aus verschiedenen Dienstleistungsbranchen zeigen die Wirksamkeit unserer Lösungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {showcaseProjects.map((project, index) => (
              <div key={index} className="bg-slate-50 rounded-xl shadow-lg overflow-hidden">
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Häufige Fragen von Dienstleistern
            </h2>
          </div>

          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für professionelle Online-Präsenz?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Lassen Sie uns gemeinsam Ihre digitale Praxis oder Kanzlei erfolgreich aufbauen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              href="/analyse" 
              variant="sand" 
              size="lg"
              testId="dienste-final-analyse"
            >
              Praxis-Analyse starten
            </CTAButton>
            <CTAButton 
              href="/kontakt" 
              variant="secondary" 
              size="lg"
              testId="dienste-final-contact"
            >
              Dienstleister-Beratung buchen
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
