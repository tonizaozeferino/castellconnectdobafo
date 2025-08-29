import { Mail, Users, Zap, BarChart3, Shield, Clock, CheckCircle, ArrowRight } from "lucide-react";
import FAQ from "@/components/ui/FAQ";
import CTAButton from "@/components/ui/CTAButton";

export default function Email() {
  const emailServices = [
    {
      icon: Users,
      title: "DSGVO-konformer Listenaufbau",
      description: "Sicherer Aufbau Ihrer E-Mail-Liste mit Double-Opt-In und vollständiger DSGVO-Compliance."
    },
    {
      icon: Zap,
      title: "Automatisierte Kampagnen",
      description: "Setup von E-Mail-Automation für Welcome-Serien, Nurturing-Kampagnen und Lifecycle-Marketing."
    },
    {
      icon: Mail,
      title: "Newsletter & Kampagnen",
      description: "Professionelle Newsletter-Gestaltung und zielgerichtete E-Mail-Kampagnen für mehr Conversions."
    },
    {
      icon: BarChart3,
      title: "Detailliertes Reporting",
      description: "Umfassende Analyse von Öffnungsraten, Klicks, Conversions und ROI mit handlungsorientierten Insights."
    },
    {
      icon: Shield,
      title: "Tool-Integration",
      description: "Nahtlose Integration mit CRM-Systemen, Online-Shops und anderen Marketing-Tools."
    }
  ];

  const listBuildingStrategies = [
    "Lead Magnets und kostenlose Downloads",
    "Newsletter-Anmeldung auf der Website",
    "Social Media Kampagnen",
    "Webinar und Event-Registrierungen",
    "Kontaktformulare und Landing Pages",
    "Kundenumfragen und Gewinnspiele",
    "Offline-Events und Messen",
    "Referral-Programme"
  ];

  const automationFlows = [
    {
      name: "Welcome-Serie",
      description: "Begrüßung neuer Abonnenten mit Unternehmensvorstellung",
      emails: "3-5 E-Mails"
    },
    {
      name: "Abandoned Cart",
      description: "Rückgewinnung von Website-Besuchern mit abgebrochenen Käufen",
      emails: "2-3 E-Mails"
    },
    {
      name: "Re-Engagement",
      description: "Reaktivierung inaktiver Abonnenten",
      emails: "2-4 E-Mails"
    },
    {
      name: "Customer Onboarding",
      description: "Begleitung neuer Kunden durch den ersten Monat",
      emails: "4-6 E-Mails"
    },
    {
      name: "Birthday/Anniversary",
      description: "Personalisierte Grüße mit speziellen Angeboten",
      emails: "1-2 E-Mails"
    }
  ];

  const campaignTypes = [
    "Produktankündigungen und Neuheiten",
    "Saisonale Aktionen und Rabatte",
    "Event-Einladungen und Webinare",
    "Kundenbewertungen und Testimonials",
    "Behind-the-Scenes Content",
    "Branchennews und Tipps",
    "Umfragen und Feedback-Anfragen",
    "Cross-Selling und Up-Selling"
  ];

  const reportingMetrics = [
    { metric: "Öffnungsrate", description: "Anteil der geöffneten E-Mails", benchmark: "20-25%" },
    { metric: "Klickrate", description: "Klicks auf Links in der E-Mail", benchmark: "2-5%" },
    { metric: "Conversion Rate", description: "Abschlüsse durch E-Mail-Traffic", benchmark: "1-3%" },
    { metric: "Abmelderate", description: "Unsubscribes pro Kampagne", benchmark: "< 0.5%" },
    { metric: "Bounce Rate", description: "Unzustellbare E-Mails", benchmark: "< 2%" },
    { metric: "List Growth", description: "Wachstum der E-Mail-Liste", benchmark: "5-10%/Monat" }
  ];

  const integrations = [
    "Mailchimp & Klaviyo",
    "HubSpot & Salesforce",
    "Shopify & WooCommerce",
    "WordPress & Webflow",
    "Google Analytics",
    "Facebook Pixel",
    "Zapier & Make",
    "CRM-Systeme"
  ];

  const faqItems = [
    {
      question: "Wie baue ich DSGVO-konform eine E-Mail-Liste auf?",
      answer: "Wir implementieren Double-Opt-In Verfahren, klare Datenschutzerklärungen und dokumentieren alle Anmeldungen. Bestehende Listen werden auf Compliance geprüft und bereinigt."
    },
    {
      question: "Welche E-Mail-Marketing Tools verwenden Sie?",
      answer: "Wir arbeiten mit führenden Plattformen wie Mailchimp, Klaviyo, HubSpot und branchenspezifischen Lösungen. Die Auswahl richtet sich nach Ihren Anforderungen und dem Budget."
    },
    {
      question: "Wie oft sollte ich Newsletter versenden?",
      answer: "Die optimale Frequenz hängt von Ihrer Branche und Zielgruppe ab. Typisch sind 1-2 Newsletter pro Monat plus automatisierte E-Mails. Qualität ist wichtiger als Quantität."
    },
    {
      question: "Was kostet professionelles E-Mail-Marketing?",
      answer: "Unsere E-Mail-Marketing Pakete beginnen bei 199€/Monat inklusive Tool-Kosten, Setup und Betreuung. Der Preis richtet sich nach Listengröße und Kampagnen-Umfang."
    },
    {
      question: "Wie messe ich den Erfolg meiner E-Mail-Kampagnen?",
      answer: "Wir tracken alle relevanten KPIs wie Öffnungsraten, Klickraten, Conversions und ROI. Monatliche Reports zeigen die Performance und Optimierungspotentiale transparent auf."
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
                <span className="text-sand">E-Mail Marketing</span> für Bayern
              </h1>
              <p className="text-xl text-slate-200 mb-8">
                DSGVO-konformer Listenaufbau, automatisierte Kampagnen und nachhaltige Kundenbindung 
                durch professionelles E-Mail Marketing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton 
                  href="/kontakt" 
                  variant="sand" 
                  size="lg"
                  testId="email-hero-analyse"
                >
                  E-Mail Audit starten
                </CTAButton>
                <CTAButton 
                  href="/kontakt" 
                  variant="secondary" 
                  size="lg"
                  testId="email-hero-contact"
                >
                  Strategie-Gespräch
                </CTAButton>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="E-Mail Marketing Kampagnen" 
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
              Unsere E-Mail Marketing Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Von der strategischen Planung bis zur Automation – 
              wir entwickeln nachhaltige E-Mail Marketing Strategien für Ihr Unternehmen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emailServices.map((service, index) => (
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

      {/* List Building */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                DSGVO-konformer Listenaufbau
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Wir bauen Ihre E-Mail-Liste organisch und rechtssicher auf – 
                mit qualifizierten Interessenten, die wirklich an Ihrem Angebot interessiert sind.
              </p>
              <ul className="space-y-3">
                {listBuildingStrategies.map((strategy, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Users className="text-primary-blue h-6 w-6 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{strategy}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="E-Mail Liste aufbauen" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Automation Flows */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Standard E-Mail Automation Flows
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Automatisierte E-Mail-Serien, die im Hintergrund arbeiten und 
              kontinuierlich Leads zu Kunden entwickeln.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationFlows.map((flow, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8">
                <div className="bg-primary-blue/10 p-4 rounded-full inline-block mb-6">
                  <Zap className="text-primary-blue h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">{flow.name}</h3>
                <p className="text-slate-600 mb-4">{flow.description}</p>
                <div className="bg-white p-3 rounded-lg">
                  <span className="text-sm font-medium text-primary-blue">{flow.emails}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Types */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Newsletter & Kampagnen-Arten
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Vielfältige E-Mail-Formate für jede Phase der Customer Journey 
              und verschiedene Marketing-Ziele.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {campaignTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-primary-blue/10 p-3 rounded-full inline-block mb-4">
                  <Mail className="text-primary-blue h-6 w-6" />
                </div>
                <div className="font-medium text-navy text-sm">{type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting & Analytics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Detailliertes Reporting
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transparente Erfolgsmessung mit allen wichtigen KPIs und 
              branchenspezifischen Benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reportingMetrics.map((item, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-lg">
                <div className="flex items-start justify-between mb-4">
                  <BarChart3 className="text-primary-blue h-8 w-8" />
                  <span className="bg-primary-blue/10 text-primary-blue px-3 py-1 rounded-full text-sm font-medium">
                    {item.benchmark}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{item.metric}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Integrations */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Tool-Integrationen
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Nahtlose Integration mit Ihren bestehenden Systemen 
              für einen reibungslosen Workflow.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((tool, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-primary-blue/10 p-3 rounded-full inline-block mb-4">
                  <Shield className="text-primary-blue h-6 w-6" />
                </div>
                <div className="font-medium text-navy text-sm">{tool}</div>
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
              Häufige Fragen zu E-Mail Marketing
            </h2>
          </div>

          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für erfolgreiches E-Mail Marketing?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Lassen Sie uns gemeinsam Ihre E-Mail Marketing Strategie entwickeln und umsetzen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              href="/kontakt" 
              variant="sand" 
              size="lg"
              testId="email-final-analyse"
            >
              E-Mail Audit starten
            </CTAButton>
            <CTAButton 
              href="/kontakt" 
              variant="secondary" 
              size="lg"
              testId="email-final-contact"
            >
              Kampagnen-Beratung buchen
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
