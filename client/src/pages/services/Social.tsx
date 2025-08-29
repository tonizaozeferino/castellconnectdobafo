import { Share2, Calendar, Camera, Users, MessageCircle, BarChart3, CheckCircle, ArrowRight } from "lucide-react";
import FAQ from "@/components/ui/FAQ";
import CTAButton from "@/components/ui/CTAButton";

export default function Social() {
  const socialServices = [
    {
      icon: Calendar,
      title: "Redaktionsplan & Strategie",
      description: "Durchdachte Content-Planung mit branchenspezifischen Inhalten und optimalen Posting-Zeiten."
    },
    {
      icon: Camera,
      title: "Content-Produktion",
      description: "Professionelle Foto- und Videoproduktion sowie Grafikdesign für ansprechende Social Media Posts."
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Aktive Betreuung Ihrer Community mit schnellen Antworten und professionellem Kundenservice."
    },
    {
      icon: MessageCircle,
      title: "Social Media Advertising",
      description: "Gezielte Werbekampagnen auf Facebook, Instagram und TikTok für mehr Reichweite und Conversions."
    },
    {
      icon: BarChart3,
      title: "Monitoring & Analytics",
      description: "Detaillierte Auswertung der Performance mit monatlichen Reports und Optimierungsempfehlungen."
    }
  ];

  const platforms = [
    { name: "Facebook", description: "Reichweite und Community Building", features: ["Business-Seiten Setup", "Zielgruppenanalyse", "Event-Promotion"] },
    { name: "Instagram", description: "Visueller Content und Storytelling", features: ["Stories & Reels", "Shopping Integration", "Influencer Kooperationen"] },
    { name: "TikTok", description: "Junge Zielgruppen und Trends", features: ["Video-Content", "Hashtag-Strategien", "Trend-Monitoring"] }
  ];

  const contentTypes = [
    "Produktfotos und Behind-the-Scenes",
    "Erklärvideos und Tutorials",
    "Kundenbewertungen und Testimonials",
    "Veranstaltungen und Events",
    "Branchennews und Trends",
    "Mitarbeiter-Stories",
    "Saisonale Aktionen und Angebote",
    "User-Generated Content Kampagnen"
  ];

  const communityFeatures = [
    "24/7 Monitoring aller Kanäle",
    "Schnelle Reaktionszeiten (< 2 Stunden)",
    "Professionelles Beschwerdemanagement",
    "Positive Kundenbewertungen fördern",
    "Crisis Communication Strategien",
    "Community Guidelines entwickeln"
  ];

  const approvalProcess = [
    {
      step: 1,
      title: "Content-Erstellung",
      description: "Unser Team erstellt Posts entsprechend dem Redaktionsplan"
    },
    {
      step: 2,
      title: "Kundenfreigabe",
      description: "Sie erhalten alle Inhalte zur Freigabe über unser Portal"
    },
    {
      step: 3,
      title: "Scheduling",
      description: "Freigegebene Inhalte werden zum optimalen Zeitpunkt veröffentlicht"
    },
    {
      step: 4,
      title: "Performance Tracking",
      description: "Kontinuierliche Überwachung und Optimierung der Reichweite"
    }
  ];

  const faqItems = [
    {
      question: "Auf welchen Plattformen sind Sie aktiv?",
      answer: "Wir betreuen alle relevanten Plattformen: Facebook, Instagram, TikTok, YouTube und branchenspezifische Netzwerke. Die Auswahl richtet sich nach Ihrer Zielgruppe und Ihren Geschäftszielen."
    },
    {
      question: "Wie oft wird Content veröffentlicht?",
      answer: "Die Posting-Frequenz hängt von der Plattform und Ihrem Paket ab. Typischerweise 3-5 Posts pro Woche auf Facebook/Instagram und regelmäßige TikTok-Videos. Qualität steht vor Quantität."
    },
    {
      question: "Können wir eigene Inhalte einbringen?",
      answer: "Absolut! Wir integrieren gerne Ihre eigenen Fotos, Videos und Ideen in den Redaktionsplan. Ihre Expertise und authentischen Inhalte sind wertvoll für die Community."
    },
    {
      question: "Wie messen Sie den Erfolg unserer Social Media Aktivitäten?",
      answer: "Wir tracken relevante KPIs wie Reichweite, Engagement-Rate, Website-Traffic, Lead-Generierung und Conversions. Monatliche Reports zeigen die Entwicklung und ROI transparent auf."
    },
    {
      question: "Was passiert bei negativen Kommentaren oder Bewertungen?",
      answer: "Wir haben klare Richtlinien für Krisenmanagement. Berechtigte Kritik wird professionell und lösungsorientiert beantwortet. Bei unangemessenen Inhalten greifen wir entsprechend ein."
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
                <span className="text-sand">Social Media Management</span> für Bayern
              </h1>
              <p className="text-xl text-slate-200 mb-8">
                Professionelle Betreuung Ihrer Social Media Kanäle mit durchdachter Content-Strategie, 
                Community Management und messbaren Ergebnissen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton 
                  href="/kontakt" 
                  variant="sand" 
                  size="lg"
                  testId="social-hero-analyse"
                >
                  Social Media Audit
                </CTAButton>
                <CTAButton 
                  href="/kontakt" 
                  variant="secondary" 
                  size="lg"
                  testId="social-hero-contact"
                >
                  Strategie-Gespräch
                </CTAButton>
              </div>
            </div>
            <div className="relative">
              <img 
                src="@assets/AdobeStock_257538654_1756475809831.jpeg" 
                alt="Social Media Marketing" 
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
              Unsere Social Media Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Von der strategischen Planung bis zur täglichen Betreuung – 
              wir kümmern uns um alle Aspekte Ihrer Social Media Präsenz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialServices.map((service, index) => (
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

      {/* Platform Strategy */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Plattform-spezifische Strategien
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Jede Plattform hat ihre Eigenarten. Wir entwickeln maßgeschneiderte Ansätze 
              für maximale Reichweite und Engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-navy mb-4">{platform.name}</h3>
                <p className="text-slate-600 mb-6">{platform.description}</p>
                <ul className="space-y-3">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="text-primary-blue h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Production */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Content-Produktion
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Hochwertiger, authentischer Content, der Ihre Marke stärkt 
                und Ihre Zielgruppe begeistert.
              </p>
              <ul className="space-y-3">
                {contentTypes.map((type, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Camera className="text-primary-blue h-6 w-6 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{type}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Content Creation für Social Media" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Management */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Community Management & Moderation
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professionelle Betreuung Ihrer Online-Community für positive Kundenerfahrungen 
              und starke Kundenbindung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start space-x-3">
                  <Users className="text-primary-blue h-6 w-6 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Approval Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Content-Freigabe Prozess
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transparenter Workflow für maximale Kontrolle und Qualitätssicherung 
              bei allen Social Media Inhalten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approvalProcess.map((process, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-primary-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-xl font-bold">{process.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-4">{process.title}</h3>
                <p className="text-slate-600 text-sm">{process.description}</p>
                {index < approvalProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 text-primary-blue">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
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
              Häufige Fragen zu Social Media
            </h2>
          </div>

          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für professionelles Social Media Marketing?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Lassen Sie uns gemeinsam Ihre Social Media Präsenz aufbauen und optimieren.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              href="/kontakt" 
              variant="sand" 
              size="lg"
              testId="social-final-analyse"
            >
              Social Media Audit starten
            </CTAButton>
            <CTAButton 
              href="/kontakt" 
              variant="secondary" 
              size="lg"
              testId="social-final-contact"
            >
              Strategie-Beratung buchen
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
