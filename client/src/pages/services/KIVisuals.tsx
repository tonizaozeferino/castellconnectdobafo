import { Wand2, Image, Video, Palette, Download, Layers, CheckCircle, ArrowRight } from "lucide-react";
import FAQ from "@/components/ui/FAQ";
import CTAButton from "@/components/ui/CTAButton";

export default function KIVisuals() {
  const visualServices = [
    {
      icon: Image,
      title: "KI-Bildgenerierung",
      description: "Professionelle Bilder für Marketing, Social Media und Website-Content – erstellt mit modernster KI-Technologie."
    },
    {
      icon: Video,
      title: "Kurzvideo-Produktion",
      description: "Animierte Videos, Erklärvideos und Social Media Content für TikTok, Instagram Reels und YouTube Shorts."
    },
    {
      icon: Palette,
      title: "Brand Styleguides",
      description: "Konsistente visuelle Identität mit KI-generierten Assets entsprechend Ihrer Corporate Identity."
    },
    {
      icon: Layers,
      title: "Design-Variationen",
      description: "Automatische Erstellung von Design-Varianten für A/B-Tests und verschiedene Zielgruppen."
    }
  ];

  const visualPackages = [
    {
      name: "Starter Paket",
      price: "299€/Monat",
      description: "Ideal für kleine Unternehmen",
      features: [
        "50 KI-generierte Bilder",
        "10 Social Media Posts",
        "2 Kurzvideo-Animationen",
        "Standard-Styleguide",
        "Basic Asset-Bibliothek"
      ]
    },
    {
      name: "Professional Paket",
      price: "599€/Monat", 
      description: "Für wachsende Unternehmen",
      features: [
        "150 KI-generierte Bilder",
        "30 Social Media Posts",
        "8 Kurzvideo-Animationen",
        "Custom Styleguide",
        "Premium Asset-Bibliothek",
        "A/B-Test Varianten"
      ]
    },
    {
      name: "Enterprise Paket",
      price: "1.299€/Monat",
      description: "Für große Unternehmen",
      features: [
        "Unlimited KI-Bilder",
        "100 Social Media Posts",
        "20 Kurzvideo-Animationen",
        "Full Brand Suite",
        "Enterprise Asset-Management",
        "Priority Support",
        "Custom KI-Training"
      ]
    }
  ];

  const videoTypes = [
    "Produkt-Präsentationen",
    "Explainer Videos",
    "Social Media Stories",
    "Instagram Reels",
    "TikTok Content",
    "YouTube Shorts",
    "Werbe-Animationen",
    "Logo-Animationen",
    "Infografik-Videos",
    "Tutorial-Videos"
  ];

  const styleguideElements = [
    "Farbpaletten und Gradients",
    "Typografie und Schriftarten",
    "Logo-Variationen und Icons",
    "Bildstile und Filter",
    "Layout-Templates",
    "Social Media Vorlagen",
    "Präsentations-Templates",
    "Brand Guidelines Document"
  ];

  const assetManagement = [
    {
      title: "Kategorisierte Bibliothek",
      description: "Alle Assets sortiert nach Typ, Kampagne und Verwendungszweck"
    },
    {
      title: "Lizenz-Management",
      description: "Übersicht über Nutzungsrechte und kommerzielle Lizenzen"
    },
    {
      title: "Version Control",
      description: "Verschiedene Versionen und Varianten eines Assets verwalten"
    },
    {
      title: "Team-Zugriff",
      description: "Rollenbasierte Zugriffsrechte für verschiedene Teammitglieder"
    },
    {
      title: "Download-Center",
      description: "Einfacher Download in verschiedenen Formaten und Auflösungen"
    },
    {
      title: "Usage Analytics",
      description: "Tracking welche Assets am häufigsten verwendet werden"
    }
  ];

  const creativeProcess = [
    {
      step: 1,
      title: "Briefing & Analyse",
      description: "Ihre Brand, Zielgruppe und Content-Anforderungen verstehen"
    },
    {
      step: 2,
      title: "KI-Konzeptentwicklung",
      description: "Prompt-Engineering und erste Testgenerierungen"
    },
    {
      step: 3,
      title: "Asset-Produktion",
      description: "Erstellung der finalen Bilder, Videos und Designs"
    },
    {
      step: 4,
      title: "Review & Optimization",
      description: "Feedback-Integration und Feinabstimmung der Assets"
    }
  ];

  const faqItems = [
    {
      question: "Sind KI-generierte Bilder urheberrechtlich geschützt?",
      answer: "KI-generierte Bilder fallen in eine rechtliche Grauzone. Wir arbeiten nur mit kommerziell nutzbaren KI-Tools und klären alle Lizenzfragen für Sie. Bei kritischen Projekten empfehlen wir zusätzliche Absicherung."
    },
    {
      question: "Können Sie unseren bestehenden Brand-Style nachbilden?",
      answer: "Ja, wir trainieren die KI auf Ihre Corporate Identity, Farbpalette und Design-Sprache. So entstehen Assets, die perfekt zu Ihrer bestehenden Marke passen."
    },
    {
      question: "Wie schnell können Sie KI-Visuals erstellen?",
      answer: "Einfache Bilder entstehen in wenigen Minuten, komplexere Assets in 1-2 Stunden. Video-Content benötigt 1-3 Tage je nach Komplexität und Länge."
    },
    {
      question: "Welche Qualität haben KI-generierte Inhalte?",
      answer: "Moderne KI-Tools wie Midjourney und DALL-E erstellen professionelle Qualität, die oft nicht von menschlicher Arbeit zu unterscheiden ist. Wir kuratieren und optimieren alle Outputs."
    },
    {
      question: "Können wir eigene Fotos in die KI-Generierung einbinden?",
      answer: "Ja, wir können Ihre eigenen Bilder, Produkte oder Personen als Basis für KI-Generierungen verwenden. Dies ermöglicht sehr authentische und markenspezifische Ergebnisse."
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
                <span className="text-sand">KI-Visual Produktion</span> für Bayern
              </h1>
              <p className="text-xl text-slate-200 mb-8">
                Professionelle Bilder, Videos und Design-Assets erstellt mit modernster KI-Technologie – 
                schnell, kosteneffizient und perfekt auf Ihre Marke abgestimmt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton 
                  href="/kontakt" 
                  variant="sand" 
                  size="lg"
                  testId="ki-visuals-hero-analyse"
                >
                  Content-Audit starten
                </CTAButton>
                <CTAButton 
                  href="/kontakt" 
                  variant="secondary" 
                  size="lg"
                  testId="ki-visuals-hero-contact"
                >
                  Portfolio ansehen
                </CTAButton>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="KI-generierte Kunst und Design" 
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Unsere KI-Visual Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Von einzelnen Bildern bis zu kompletten Visual-Kampagnen – 
              wir erstellen professionelle Inhalte mit KI-Technologie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visualServices.map((service, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow text-center">
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

      {/* Visual Packages */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Visual-Pakete
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Skalierbare Lösungen für jede Unternehmensgröße – 
              von Startup bis Enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visualPackages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-xl p-8 shadow-lg ${index === 1 ? 'ring-2 ring-primary-blue transform scale-105' : ''}`}>
                {index === 1 && (
                  <div className="bg-primary-blue text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                    Beliebtestes Paket
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-navy mb-2">{pkg.name}</h3>
                <p className="text-slate-600 mb-4">{pkg.description}</p>
                <div className="text-3xl font-bold text-primary-blue mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="text-primary-blue h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <CTAButton 
                  href="/kontakt"
                  className="w-full"
                  testId={`package-${index}-cta`}
                >
                  Paket auswählen
                </CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Kurzvideo-Produktion
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Animierte Videos und Micro-Content für Social Media, 
                Website und Werbeanzeigen – optimiert für jede Plattform.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {videoTypes.map((type, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Video className="text-primary-blue h-5 w-5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{type}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1536431311719-398b6704d4cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Video-Produktion und Animation" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Styleguide */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Brand Styleguide Entwicklung
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Konsistente visuelle Identität für alle Ihre Marketing-Materialien 
              mit KI-generierten Brand-Assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {styleguideElements.map((element, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-primary-blue/10 p-3 rounded-full inline-block mb-4">
                  <Palette className="text-primary-blue h-6 w-6" />
                </div>
                <div className="font-medium text-navy text-sm">{element}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Asset Management */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Professionelle Asset-Ablage
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Zentrale Verwaltung aller Visual-Assets mit intelligenter 
              Organisation und einfachem Team-Zugriff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assetManagement.map((feature, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8">
                <div className="bg-primary-blue/10 p-4 rounded-full inline-block mb-6">
                  <Download className="text-primary-blue h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-4">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Unser Kreativ-Prozess
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Von der ersten Idee bis zum finalen Asset – 
              so entstehen Ihre KI-generierten Visuals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {creativeProcess.map((process, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-primary-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-xl font-bold">{process.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-4">{process.title}</h3>
                <p className="text-slate-600 text-sm">{process.description}</p>
                {index < creativeProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 text-primary-blue">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
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
              Häufige Fragen zu KI-Visuals
            </h2>
          </div>

          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für KI-powered Visuals?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Lassen Sie uns gemeinsam beeindruckende Visual-Inhalte für Ihr Marketing erstellen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              href="/kontakt" 
              variant="sand" 
              size="lg"
              testId="ki-visuals-final-analyse"
            >
              Content-Audit starten
            </CTAButton>
            <CTAButton 
              href="/kontakt" 
              variant="secondary" 
              size="lg"
              testId="ki-visuals-final-contact"
            >
              Portfolio-Termin buchen
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
