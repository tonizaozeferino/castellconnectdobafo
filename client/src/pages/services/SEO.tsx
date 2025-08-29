import { Search, MapPin, FileText, Building2, PenTool, BarChart3, CheckCircle, ArrowRight } from "lucide-react";
import FAQ from "@/components/ui/FAQ";
import CTAButton from "@/components/ui/CTAButton";

export default function SEO() {
  const seoServices = [
    {
      icon: Search,
      title: "SEO-Audit & Diagnose",
      description: "Umfassende Analyse Ihrer Website mit konkreten Handlungsempfehlungen für bessere Rankings."
    },
    {
      icon: MapPin,
      title: "Google My Business Setup",
      description: "Optimierung Ihres GMB-Profils für lokale Sichtbarkeit und mehr Kundenanfragen."
    },
    {
      icon: FileText,
      title: "OnPage-Optimierung",
      description: "Technische SEO-Optimierung, Meta-Daten, interne Verlinkung und Content-Struktur."
    },
    {
      icon: Building2,
      title: "Lokale Brancheneinträge",
      description: "Eintragung in relevante Branchenverzeichnisse und lokale Plattformen."
    },
    {
      icon: PenTool,
      title: "Content-Erstellung",
      description: "SEO-optimierte Texte, Blogbeiträge und Landingpages für bessere Rankings."
    },
    {
      icon: BarChart3,
      title: "Monitoring & Reporting",
      description: "Monatliche Reports mit Ranking-Entwicklung, Traffic-Analyse und Handlungsempfehlungen."
    }
  ];

  const gbpFeatures = [
    "Vollständige Profiloptimierung",
    "Regelmäßige Beiträge und Updates",
    "Bewertungsmanagement",
    "Lokale Keywords-Optimierung",
    "Google Posts für Events/Angebote",
    "FAQ-Bereich einrichten"
  ];

  const onpageElements = [
    "Title-Tags und Meta-Descriptions",
    "Header-Struktur (H1-H6) optimieren",
    "Interne Verlinkungsstrategie",
    "Bild-SEO und Alt-Texte",
    "URL-Struktur optimieren",
    "Schema Markup implementieren",
    "Ladezeiten-Optimierung",
    "Mobile-First Optimierung"
  ];

  const directoryList = [
    "Google My Business",
    "Bing Places for Business",
    "Apple Maps Connect",
    "Yelp für Unternehmen",
    "Das Örtliche",
    "Gelbe Seiten",
    "Branchenspezifische Portale",
    "IHK/HWK Verzeichnisse"
  ];

  const contentTypes = [
    "SEO-optimierte Landingpages",
    "Lokale Ratgeber-Artikel",
    "FAQ-Bereiche für häufige Fragen",
    "Leistungsseiten mit Keywords",
    "Blog-Artikel zu Branchenthemen",
    "Standort-spezifische Inhalte"
  ];

  const reportingMetrics = [
    "Google Rankings für Ziel-Keywords",
    "Lokale Suchergebnisse Monitoring",
    "Website-Traffic und Conversion-Rate",
    "Google My Business Insights",
    "Backlink-Profil Entwicklung",
    "Wettbewerbervergleich"
  ];

  const faqItems = [
    {
      question: "Wie lange dauert es, bis SEO-Maßnahmen wirken?",
      answer: "Erste Verbesserungen sind meist nach einem Monat sichtbar. Für stabile Top-Rankings sollten Sie 6-12 Monate einplanen. Lokale SEO-Maßnahmen wirken oft schneller als überregionale Optimierungen."
    },
    {
      question: "Kann ich SEO auch selbst machen?",
      answer: "Grundlegende SEO-Maßnahmen können Sie lernen, aber professionelle SEO erfordert ständige Weiterbildung, Tools und Erfahrung. Wir empfehlen die Zusammenarbeit mit Experten für nachhaltige Ergebnisse."
    },
    {
      question: "Welche Keywords sind für mein Unternehmen relevant?",
      answer: "Wir führen eine umfassende Keyword-Recherche durch, die lokale Suchanfragen, Suchvolumen, Wettbewerb und Conversion-Potential berücksichtigt. Dabei fokussieren wir uns auf commercial intent Keywords."
    },
    {
      question: "Arbeiten Sie mit White-Hat SEO-Methoden?",
      answer: "Ja, wir verwenden ausschließlich Google-konforme SEO-Techniken. Black-Hat Methoden können zu Abstrafungen führen und werden von uns kategorisch abgelehnt. Nachhaltigkeit steht im Vordergrund."
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
                <span className="text-sand">Lokale SEO</span> für Bayern
              </h1>
              <p className="text-xl text-slate-200 mb-8">
                Verbessern Sie Ihre Sichtbarkeit in lokalen Suchergebnissen und gewinnen Sie mehr Kunden 
                aus Ihrer Region durch professionelle Suchmaschinenoptimierung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton 
                  href="/kontakt" 
                  variant="sand" 
                  size="lg"
                  testId="seo-hero-analyse"
                >
                  SEO-Analyse anfordern
                </CTAButton>
                <CTAButton 
                  href="/kontakt" 
                  variant="secondary" 
                  size="lg"
                  testId="seo-hero-contact"
                >
                  SEO-Beratung buchen
                </CTAButton>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1562564055-71e051d33c19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="SEO Analytics und Suchmaschinenoptimierung" 
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEO Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Unsere SEO-Leistungen
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Von der technischen Analyse bis zum kontinuierlichen Monitoring – 
              wir optimieren alle Aspekte Ihrer Online-Sichtbarkeit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoServices.map((service, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="bg-primary-blue p-4 rounded-full inline-block mb-6">
                  <service.icon className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google My Business Setup */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Google My Business Optimierung
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Ihr GMB-Profil ist oft der erste Kontaktpunkt mit potenziellen Kunden. 
                Wir optimieren alle Aspekte für maximale lokale Sichtbarkeit.
              </p>
              <ul className="space-y-3">
                {gbpFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-primary-blue h-6 w-6 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Google My Business Optimierung" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OnPage Optimization */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              OnPage-Optimierung
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Technische und inhaltliche Optimierung Ihrer Website für bessere Suchmaschinen-Rankings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {onpageElements.map((element, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-lg text-center">
                <div className="bg-primary-blue/10 p-3 rounded-full inline-block mb-4">
                  <FileText className="text-primary-blue h-6 w-6" />
                </div>
                <div className="font-medium text-navy text-sm">{element}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directory Listings */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Brancheneinträge & Verzeichnisse
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Konsistente NAP-Daten (Name, Address, Phone) in allen relevanten Verzeichnissen 
              stärken Ihr lokales Ranking-Signal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {directoryList.map((directory, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-primary-blue/10 p-3 rounded-full inline-block mb-4">
                  <Building2 className="text-primary-blue h-6 w-6" />
                </div>
                <div className="font-medium text-navy">{directory}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Creation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Content-Erstellung für SEO" 
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                SEO-Content Erstellung
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Hochwertiger, suchmaschinenoptimierter Content, der Ihre Zielgruppe anspricht 
                und gleichzeitig für bessere Rankings sorgt.
              </p>
              <ul className="space-y-3">
                {contentTypes.map((type, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <PenTool className="text-primary-blue h-6 w-6 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{type}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Transparentes Reporting
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Monatliche Reports mit allen wichtigen KPIs und konkreten Handlungsempfehlungen 
              für die Weiterentwicklung Ihrer SEO-Strategie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reportingMetrics.map((metric, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start space-x-3">
                  <BarChart3 className="text-primary-blue h-6 w-6 mt-1 flex-shrink-0" />
                  <div className="font-medium text-navy">{metric}</div>
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
              Häufige Fragen zu SEO
            </h2>
          </div>

          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für bessere Rankings?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Lassen Sie uns Ihre SEO-Strategie gemeinsam entwickeln und umsetzen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              href="/kontakt" 
              variant="sand" 
              size="lg"
              testId="seo-final-analyse"
            >
              Kostenlose SEO-Analyse
            </CTAButton>
            <CTAButton 
              href="/kontakt" 
              variant="secondary" 
              size="lg"
              testId="seo-final-contact"
            >
              SEO-Beratung buchen
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
