import { Globe, Smartphone, Lock, Zap, Search, Wrench, CheckCircle, ArrowRight } from "lucide-react";
import FAQ from "@/components/ui/FAQ";
import CTAButton from "@/components/ui/CTAButton";

export default function Webdesign() {
  const functionModules = [
    {
      icon: Globe,
      title: "Content Management System",
      description: "Benutzerfreundliche CMS-Lösung für einfache Inhaltspflege ohne technische Kenntnisse."
    },
    {
      icon: Lock,
      title: "DSGVO-Konformität",
      description: "Vollständige Compliance mit Datenschutzbestimmungen inklusive Cookie-Management."
    },
    {
      icon: Zap,
      title: "Performance-Optimierung",
      description: "Schnelle Ladezeiten durch optimierte Bilder, Caching und moderne Webtechnologien."
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Perfekte Darstellung auf allen Endgeräten von Smartphone bis Desktop."
    }
  ];

  const uxElements = [
    "Intuitive Navigation und Menüstrukturen",
    "Klare Call-to-Action Buttons für Conversions",
    "Optimierte Formulare mit Spam-Schutz",
    "Barrierefreie Gestaltung (WCAG 2.1)",
    "Suchfunktion für bessere Nutzererfahrung",
    "Kontaktmöglichkeiten auf jeder Seite"
  ];

  const maintenanceServices = [
    "Regelmäßige System- und Sicherheitsupdates",
    "Tägliche automatische Backups",
    "Sicherheits-Monitoring und Malware-Schutz",
    "Performance-Überwachung und Optimierung",
    "Content-Updates und Texterstellung",
    "Technischer Support per E-Mail & Telefon"
  ];

  const onboardingChecklist = [
    "Domain & Hosting Setup",
    "SSL-Zertifikat Installation",
    "CMS-Einrichtung und Konfiguration",
    "Design-Implementierung nach Corporate Identity",
    "Content-Migration aus bestehender Website",
    "SEO-Grundeinstellungen und Meta-Daten",
    "Cookie-Banner und Datenschutz-Setup",
    "Testing auf verschiedenen Endgeräten",
    "Google Analytics & Search Console",
    "Schulung für Content-Management"
  ];

  const faqItems = [
    {
      question: "Welches Content Management System verwenden Sie?",
      answer: "Wir entwickeln moderne, maßgeschneiderte Websites mit aktuellen Webtechnologien wie React und Next.js. Diese sind schnell, sicher und perfekt für Suchmaschinen optimiert. Für E-Commerce setzen wir auf Shopify oder individuelle Lösungen."
    },
    {
      question: "Kann ich meine Website selbst bearbeiten?",
      answer: "Ja, absolut! Nach Projektabschluss erhalten Sie eine detaillierte Einführung in das CMS. Die meisten Inhalte können Sie ohne technische Kenntnisse eigenständig pflegen und aktualisieren."
    },
    {
      question: "Was passiert mit meinen bestehenden Inhalten?",
      answer: "Wir migrieren alle wichtigen Inhalte Ihrer bestehenden Website. Dabei optimieren wir Texte für SEO und passen sie an das neue Design an. Ihre Domain bleibt bestehen."
    },
    {
      question: "Wie lange dauert die Website-Entwicklung?",
      answer: "Eine Standard-Website benötigt 3-4 Wochen, komplexere Projekte mit Online-Shop oder Buchungssystem 6-8 Wochen. Der genaue Zeitrahmen wird im Beratungsgespräch definiert."
    },
    {
      question: "Ist die Website für Suchmaschinen optimiert?",
      answer: "Ja, alle Websites werden von Grund auf SEO-optimiert erstellt. Das beinhaltet technische SEO, optimierte Ladezeiten, mobile Optimierung und grundlegende On-Page-Optimierungen."
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
                Professionelles <span className="text-sand">Webdesign</span> für Bayern
              </h1>
              <p className="text-xl text-slate-200 mb-8">
                Moderne, responsive Websites mit CMS, DSGVO-Konformität und optimaler Performance – 
                perfekt abgestimmt auf die Bedürfnisse bayerischer Unternehmen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton 
                  href="/kontakt" 
                  variant="sand" 
                  size="lg"
                  testId="webdesign-hero-analyse"
                >
                  Website analysieren lassen
                </CTAButton>
                <CTAButton 
                  href="/kontakt" 
                  variant="secondary" 
                  size="lg"
                  testId="webdesign-hero-contact"
                >
                  Beratungsgespräch
                </CTAButton>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Moderne Website-Entwicklung" 
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Function Modules */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Funktionsmodule
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ihre Website wird mit allen wichtigen Funktionen ausgestattet, 
              die moderne Unternehmen benötigen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {functionModules.map((module, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary-blue p-4 rounded-full inline-block mb-6">
                  <module.icon className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">{module.title}</h3>
                <p className="text-slate-600">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UX Elements */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                UX-Bausteine für maximale Benutzerfreundlichkeit
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Jede Website wird nach bewährten UX-Prinzipien gestaltet, 
                um Ihre Besucher optimal zu führen und zu Kunden zu konvertieren.
              </p>
              <ul className="space-y-4">
                {uxElements.map((element, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-primary-blue h-6 w-6 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{element}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="UX Design Prozess" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance & Development */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Wartung & Weiterentwicklung
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ihre Website bleibt sicher, aktuell und performant – 
              mit unseren professionellen Wartungsverträgen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {maintenanceServices.map((service, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Wrench className="text-primary-blue h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-navy">{service}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">
              Wartungsverträge ab 89€/Monat – damit Sie sich auf Ihr Business konzentrieren können.
            </p>
            <CTAButton href="/kontakt" testId="maintenance-cta">
              Wartungsvertrag anfragen
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Onboarding Checklist */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Onboarding-Checkliste
            </h2>
            <p className="text-xl text-slate-600">
              So läuft Ihr Website-Projekt von der ersten Idee bis zum erfolgreichen Launch.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {onboardingChecklist.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-primary-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Häufige Fragen zum Webdesign
            </h2>
          </div>

          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für Ihre neue Website?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Lassen Sie uns gemeinsam Ihre digitale Präsenz auf das nächste Level bringen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              href="/kontakt" 
              variant="sand" 
              size="lg"
              testId="webdesign-final-analyse"
            >
              Kostenlose Website-Analyse
            </CTAButton>
            <CTAButton 
              href="/kontakt" 
              variant="secondary" 
              size="lg"
              testId="webdesign-final-contact"
            >
              Projekt besprechen
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
