import { ArrowRight, Globe, Search, Share2, Mail, Mic, Wand2, Target, Users, Settings, BarChart3, Shield } from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";
import CTAButton from "@/components/ui/CTAButton";

export default function Services() {
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
    },
    {
      title: "Online Advertising",
      description: "Strategische Werbekampagnen auf Google, Facebook und anderen Plattformen für maximale Reichweite.",
      icon: Target,
      href: "/leistungen/ads"
    }
  ];

  const processSteps = [
    {
      icon: Users,
      title: "Beratung & Analyse",
      description: "Wir analysieren Ihre Ziele, Zielgruppe und den Wettbewerb für eine optimale Strategieentwicklung."
    },
    {
      icon: Settings,
      title: "Konzeption & Planung", 
      description: "Entwicklung einer maßgeschneiderten Strategie mit konkreten Maßnahmen und Zeitplänen."
    },
    {
      icon: BarChart3,
      title: "Umsetzung & Optimierung",
      description: "Professionelle Implementierung mit kontinuierlichem Monitoring und datenbasierten Optimierungen."
    }
  ];

  const tools = [
    "WordPress & Shopify",
    "Google Analytics & Search Console", 
    "Meta Business Manager",
    "Mailchimp & Klaviyo",
    "Zapier & Make",
    "Figma & Adobe Creative Suite",
    "ChatGPT & Midjourney",
    "HubSpot & Salesforce"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-primary-blue to-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Unsere digitalen Lösungen
          </h1>
          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Von der professionellen Website bis zur KI-gestützten Content-Produktion – 
            wir bieten alle Services aus einer Hand für Ihren digitalen Erfolg.
          </p>
          <CTAButton 
            href="/kontakt" 
            variant="sand" 
            size="lg"
            testId="services-hero-cta"
          >
            Kostenlose Beratung vereinbaren
          </CTAButton>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Leistungsraster
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Entdecken Sie unser komplettes Leistungsportfolio – speziell entwickelt 
              für die Bedürfnisse des bayerischen Mittelstands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Process & Collaboration */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Prozess & Zusammenarbeit
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Unser strukturierter Ansatz gewährleistet transparente Kommunikation 
              und messbare Ergebnisse in allen Projektphasen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm text-center">
                <div className="bg-primary-blue p-4 rounded-full inline-block mb-6">
                  <step.icon className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Tools & Integrationen
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Wir arbeiten mit den modernsten Tools und Plattformen, 
              um Ihnen die bestmöglichen Ergebnisse zu liefern.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={index} 
                className="bg-slate-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow"
                data-testid={`tool-${index}`}
              >
                <div className="bg-primary-blue/10 p-3 rounded-full inline-block mb-4">
                  <Shield className="text-primary-blue h-6 w-6" />
                </div>
                <div className="font-medium text-navy">{tool}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für Ihren digitalen Durchbruch?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Lassen Sie uns gemeinsam eine maßgeschneiderte Strategie für Ihr Unternehmen entwickeln.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              href="/kontakt" 
              variant="sand" 
              size="lg"
              testId="services-bottom-analyse-cta"
            >
              Kostenlose Analyse starten
            </CTAButton>
            <CTAButton 
              href="/kontakt" 
              variant="secondary" 
              size="lg"
              testId="services-bottom-contact-cta"
            >
              Beratungsgespräch buchen
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
