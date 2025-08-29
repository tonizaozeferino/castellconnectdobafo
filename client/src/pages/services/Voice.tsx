import { Mic, MessageCircle, Phone, Settings, BarChart3, Zap, CheckCircle, ArrowRight } from "lucide-react";
import FAQ from "@/components/ui/FAQ";
import CTAButton from "@/components/ui/CTAButton";
import robotHand from "@assets/AdobeStock_489496398_1756476623151.jpeg";
import aiImage from "@assets/picture2jpeg_1756477373829.jpeg";

export default function Voice() {
  const voiceServices = [
    {
      icon: MessageCircle,
      title: "Website Chatbots",
      description: "Intelligente Chatbots für 24/7 Kundensupport, Lead-Qualifizierung und häufige Fragen."
    },
    {
      icon: Phone,
      title: "Telefon-Assistenten",
      description: "Automatisierte Anrufbeantworter für Terminbuchungen, Informationsabfragen und Weiterleitung."
    },
    {
      icon: Mic,
      title: "Voice Search Optimierung",
      description: "Optimierung Ihrer Inhalte für Sprachsuche via Alexa, Google Assistant und Siri."
    },
    {
      icon: Settings,
      title: "Custom Voice Solutions",
      description: "Maßgeschneiderte Sprachlösungen für spezielle Branchen-Anforderungen."
    }
  ];

  const useCases = [
    {
      title: "Terminbuchung & Reservierungen",
      description: "Automatisierte Buchung von Terminen für Ärzte, Friseure, Restaurants",
      icon: "📅",
      benefits: ["24/7 Verfügbarkeit", "Weniger Telefonate", "Weniger No-Shows"]
    },
    {
      title: "Kundensupport & FAQ",
      description: "Sofortige Antworten auf häufige Fragen und Weiterleitung an Experten",
      icon: "❓",
      benefits: ["Sofortige Hilfe", "Entlastung des Teams", "Bessere Kundenzufriedenheit"]
    },
    {
      title: "Lead-Qualifizierung",
      description: "Automatische Bewertung und Kategorisierung neuer Interessenten",
      icon: "🎯",
      benefits: ["Qualifizierte Leads", "Zeitersparnis", "Höhere Conversion"]
    },
    {
      title: "Bestellannahme",
      description: "Automatisierte Bestellprozesse für Restaurants, Lieferdienste, E-Commerce",
      icon: "🛒",
      benefits: ["Fehlerfreie Bestellungen", "Upselling-Möglichkeiten", "Mehr Umsatz"]
    }
  ];

  const conversationLogic = [
    "Natürliche Spracherkennung (NLP)",
    "Kontextbasierte Antworten",
    "Mehrsprachige Unterstützung",
    "Fallback-Strategien",
    "Eskalation an Menschen",
    "Lernende Algorithmen",
    "Personalisierte Responses",
    "Integration bestehender Daten"
  ];

  const integrationOptions = [
    { name: "CRM-Systeme", description: "HubSpot, Salesforce, Pipedrive" },
    { name: "Terminbuchung", description: "Calendly, Acuity, Google Calendar" },
    { name: "E-Commerce", description: "Shopify, Custom APIs, Magento" },
    { name: "Support-Tools", description: "Zendesk, Freshdesk, Intercom" },
    { name: "Analytics", description: "Google Analytics, Custom Dashboards" },
    { name: "Payment", description: "Stripe, PayPal, SEPA" }
  ];

  const reportingMetrics = [
    "Anzahl Gespräche/Chats pro Tag",
    "Erfolgreich gelöste Anfragen",
    "Durchschnittliche Gesprächsdauer",
    "Weiterleitung an menschliche Agents",
    "Kundenzufriedenheit (CSAT)",
    "Generierte Leads/Termine",
    "Kosten pro Interaction",
    "ROI der Voice-Lösung"
  ];

  const faqItems = [
    {
      question: "Wie intelligent sind moderne Chatbots?",
      answer: "Heutige KI-basierte Chatbots verstehen natürliche Sprache sehr gut und können komplexe Gespräche führen. Sie lernen kontinuierlich dazu und werden mit jedem Gespräch besser."
    },
    {
      question: "Können Chatbots auch telefonische Anfragen bearbeiten?",
      answer: "Ja, wir entwickeln auch Voice-Bots für Telefon-Hotlines. Diese können Anrufe entgegennehmen, weiterleiten und einfache Aufgaben wie Terminbuchungen übernehmen."
    },
    {
      question: "Was passiert, wenn der Bot eine Frage nicht beantworten kann?",
      answer: "Der Bot erkennt seine Grenzen und leitet das Gespräch nahtlos an einen menschlichen Mitarbeiter weiter. Alle bisherigen Informationen werden dabei übertragen."
    },
    {
      question: "Wie lange dauert die Entwicklung eines Chatbots?",
      answer: "Ein Standard-Chatbot ist in 2-4 Wochen einsatzbereit. Komplexere Lösungen mit vielen Integrationen benötigen 6-12 Wochen Entwicklungszeit."
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-primary-blue to-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-sand">Voice & Chatbots</span> für Bayern
              </h1>
              <p className="text-xl text-slate-200 mb-8">
                Intelligente Sprachassistenten und Chatbots für 24/7 Kundensupport, 
                automatisierte Terminbuchungen und verbesserte Kundenerfahrungen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton 
                  href="/kontakt" 
                  variant="sand" 
                  size="lg"
                  testId="voice-hero-analyse"
                >
                  Chatbot-Potential analysieren
                </CTAButton>
                <CTAButton 
                  href="/kontakt" 
                  variant="secondary" 
                  size="lg"
                  testId="voice-hero-contact"
                >
                  Demo vereinbaren
                </CTAButton>
              </div>
            </div>
            <div className="relative">
              <img 
                src={robotHand} 
                alt="Voice AI und Chatbot Technologie" 
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
              Unsere Voice & Chat Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Von einfachen Chatbots bis zu komplexen Voice-Assistenten – 
              wir entwickeln KI-Lösungen für Ihre individuellen Anforderungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {voiceServices.map((service, index) => (
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

      {/* Use Cases */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Anwendungsfälle & Use-Cases
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Praktische Einsatzmöglichkeiten für Voice-Technologie in verschiedenen Branchen 
              und Geschäftsbereichen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-4xl">{useCase.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-2">{useCase.title}</h3>
                    <p className="text-slate-600">{useCase.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="text-primary-blue h-5 w-5 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversation Logic */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Intelligente Gesprächslogik
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Modernste KI-Technologie für natürliche Gespräche und präzise Antworten – 
                zugeschnitten auf Ihre Branche und Kundenanfragen.
              </p>
              <ul className="space-y-3">
                {conversationLogic.map((logic, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Zap className="text-primary-blue h-6 w-6 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{logic}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src={aiImage} 
                alt="KI Gesprächslogik und Natural Language Processing" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* System Integrations */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              System-Integrationen
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Nahtlose Verbindung zu Ihren bestehenden Systemen für einen 
              durchgängigen Workflow und optimale Datennutzung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationOptions.map((integration, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="bg-primary-blue/10 p-4 rounded-full inline-block mb-6">
                  <Settings className="text-primary-blue h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-4">{integration.name}</h3>
                <p className="text-slate-600 text-sm">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics & Reporting */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Analytics & Reporting
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Umfassende Analyse der Bot-Performance mit detaillierten Insights 
              für kontinuierliche Optimierung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reportingMetrics.map((metric, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-lg text-center">
                <div className="bg-primary-blue/10 p-3 rounded-full inline-block mb-4">
                  <BarChart3 className="text-primary-blue h-6 w-6" />
                </div>
                <div className="font-medium text-navy text-sm">{metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Implementierungsprozess
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Von der ersten Idee bis zum erfolgreichen Go-Live – 
              unser strukturierter Ansatz für Ihren Chatbot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Analyse & Konzept", description: "Use-Case Definition und technische Anforderungen", duration: "1 Woche" },
              { step: 2, title: "Design & Training", description: "Gesprächsflows erstellen und KI trainieren", duration: "2-3 Wochen" },
              { step: 3, title: "Integration & Tests", description: "System-Integration und ausführliche Tests", duration: "1-2 Wochen" },
              { step: 4, title: "Launch & Optimierung", description: "Go-Live und kontinuierliche Verbesserung", duration: "Ongoing" }
            ].map((phase, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-primary-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-xl font-bold">{phase.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-4">{phase.title}</h3>
                <p className="text-slate-600 text-sm mb-2">{phase.description}</p>
                <span className="text-primary-blue text-xs font-medium">{phase.duration}</span>
                {index < 3 && (
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
              Häufige Fragen zu Voice & Chatbots
            </h2>
          </div>

          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für intelligente Automatisierung?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Lassen Sie uns gemeinsam die perfekte Voice-Lösung für Ihr Unternehmen entwickeln.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              href="/kontakt" 
              variant="sand" 
              size="lg"
              testId="voice-final-analyse"
            >
              Chatbot-Potential analysieren
            </CTAButton>
            <CTAButton 
              href="/kontakt" 
              variant="secondary" 
              size="lg"
              testId="voice-final-contact"
            >
              Demo-Termin vereinbaren
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
