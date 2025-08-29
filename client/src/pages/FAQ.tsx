import { useState } from "react";
import { Search, HelpCircle, MessageCircle, Shield, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FAQ from "@/components/ui/FAQ";
import CTAButton from "@/components/ui/CTAButton";

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories = [
    {
      id: "allgemein",
      title: "Allgemein",
      icon: HelpCircle,
      description: "Grundlegende Fragen zu unseren Leistungen und Abläufen"
    },
    {
      id: "technik",
      title: "Technik",
      icon: Settings,
      description: "Technische Fragen zu Websites, Hosting und Tools"
    },
    {
      id: "inhalte",
      title: "Inhalte & Marketing",
      icon: MessageCircle,
      description: "Fragen zu Content, SEO und Online-Marketing"
    },
    {
      id: "datenschutz",
      title: "Datenschutz",
      icon: Shield,
      description: "DSGVO, Datenschutz und rechtliche Aspekte"
    }
  ];

  const allgemeineFAQs = [
    {
      question: "Wie läuft eine Zusammenarbeit mit CastellConnect ab?",
      answer: "Unsere Zusammenarbeit beginnt mit einer kostenlosen Beratung, in der wir Ihre Ziele und Anforderungen verstehen. Anschließend erstellen wir ein maßgeschneidertes Angebot. Nach Auftragserteilung entwickeln wir Ihre Lösung in enger Abstimmung mit Ihnen und stehen auch nach dem Launch für Support und Optimierungen zur Verfügung."
    },
    {
      question: "Welche Unternehmen betreuen Sie hauptsächlich?",
      answer: "Wir spezialisieren uns auf kleine und mittlere Unternehmen in Bayern, insbesondere Handwerksbetriebe, Gastronomie, lokale Dienstleister wie Ärzte und Anwälte, sowie Einzelhändler. Unsere Lösungen sind speziell auf die Bedürfnisse des bayerischen Mittelstands zugeschnitten."
    },
    {
      question: "Bieten Sie auch Wartung und Support an?",
      answer: "Ja, wir bieten umfassende Wartungsverträge. Diese beinhalten regelmäßige Updates, Backups, Sicherheitsüberwachung, technischen Support und kleinere Anpassungen. Für größere Projekte gibt es erweiterte Wartungspakete."
    },
    {
      question: "Arbeiten Sie nur mit Unternehmen aus Bayern?",
      answer: "Obwohl wir uns auf Bayern spezialisiert haben, betreuen wir auch Kunden aus ganz Deutschland und Österreich. Bei Kunden außerhalb Bayerns finden Beratungstermine primär online statt, was sich in der Praxis sehr bewährt hat."
    },
    {
      question: "Kann ich meine bestehende Website zu Ihnen umziehen?",
      answer: "Ja, wir übernehmen gerne den Umzug Ihrer bestehenden Website. Dabei migrieren wir alle Inhalte, richten neue Hosting-Lösungen ein und sorgen dafür, dass alle E-Mail-Adressen und Funktionen weiterhin verfügbar sind. Der Umzug erfolgt ohne Ausfallzeiten."
    },
    {
      question: "Welche Zahlungskonditionen haben Sie?",
      answer: "Bei größeren Projekten arbeiten wir mit Teilzahlungen: 50% bei Projektstart, 30% bei Zwischenabnahme und 20% bei Fertigstellung. Kleinere Projekte bis 3.000€ werden zur Hälfte bei Start und zur Hälfte bei Abschluss bezahlt. Wir akzeptieren Überweisung und für Stammkunden auch Lastschrift."
    }
  ];

  const technikFAQs = [
    {
      question: "Welches Content Management System verwenden Sie?",
      answer: "Wir arbeiten hauptsächlich mit WordPress, da es benutzerfreundlich, SEO-optimiert und sehr flexibel ist. Für E-Commerce-Projekte setzen wir auf WooCommerce oder Shopify. Bei speziellen Anforderungen entwickeln wir auch maßgeschneiderte Lösungen mit modernen Frameworks wie React oder Next.js."
    },
    {
      question: "Sind die Websites für Mobilgeräte optimiert?",
      answer: "Ja, alle unsere Websites werden responsive entwickelt und funktionieren optimal auf Smartphones, Tablets und Desktop-Computern. Wir testen ausführlich auf verschiedenen Geräten und Browsern, um eine perfekte Darstellung sicherzustellen."
    },
    {
      question: "Wo werden die Websites gehostet?",
      answer: "Wir arbeiten mit deutschen Hosting-Partnern zusammen, deren Server ausschließlich in Deutschland stehen. Das garantiert DSGVO-Konformität, schnelle Ladezeiten für deutsche Besucher und deutschen Support. Bei Bedarf können Sie auch Ihr eigenes Hosting nutzen."
    },
    {
      question: "Kann ich meine Website selbst bearbeiten?",
      answer: "Absolut! Alle unsere Websites haben ein benutzerfreundliches Admin-Interface. Nach der Fertigstellung erhalten Sie eine persönliche Einführung. Die meisten Inhalte wie Texte, Bilder und Preise können Sie ohne technische Kenntnisse selbst aktualisieren."
    },
    {
      question: "Wie schnell laden die Websites?",
      answer: "Performance ist uns sehr wichtig. Unsere Websites laden in der Regel unter 3 Sekunden. Wir optimieren Bilder, verwenden Caching-Technologien, Content Delivery Networks (CDN) und achten auf schlanken Code. Regelmäßige Performance-Tests gehören zu unserem Standard."
    },
    {
      question: "Was passiert, wenn die Website gehackt wird?",
      answer: "Unsere Websites haben mehrere Sicherheitsebenen: regelmäßige Updates, Firewall-Schutz, sichere Passwörter und tägliche Backups. Sollte dennoch etwas passieren, können wir die Website schnell aus einem Backup wiederherstellen. Wartungskunden erhalten zusätzlichen Malware-Schutz."
    },
    {
      question: "Können Sie auch E-Commerce-Shops erstellen?",
      answer: "Ja, wir entwickeln Online-Shops mit WooCommerce oder Shopify. Diese beinhalten Produktkataloge, Warenkorb, verschiedene Zahlungsmethoden, Versandkostenberechnung und Anbindung an Buchhaltungssysteme. Auch B2B-Shops mit speziellen Preisen sind möglich."
    },
    {
      question: "Ist eine Anbindung an mein Kassensystem möglich?",
      answer: "Ja, wir können Websites mit den meisten gängigen Kassensystemen und ERP-Lösungen verbinden. Das ermöglicht automatische Produktaktualisierungen, Lagerbestandsanzeige und einheitliche Kundendatenbanken. Wir beraten gerne zu den technischen Möglichkeiten."
    }
  ];

  const inhalteFAQs = [
    {
      question: "Erstellen Sie auch die Texte für die Website?",
      answer: "Ja, wir bieten professionelle Texterstellung an. Unsere Texter sind spezialisiert auf SEO-optimierte Inhalte und kennen sich in verschiedenen Branchen aus. Alternativ können Sie eigene Texte liefern, die wir dann für Suchmaschinen optimieren."
    },
    {
      question: "Wie funktioniert SEO bei lokalen Unternehmen?",
      answer: "Lokale SEO fokussiert sich auf Suchanfragen mit Ortsbezug wie 'Friseur München' oder 'Zahnarzt in der Nähe'. Wir optimieren Ihr Google My Business Profil, erstellen lokale Inhalte, bauen lokale Backlinks auf und sorgen für konsistente NAP-Daten (Name, Adresse, Telefon) im Internet."
    },
    {
      question: "Können Sie auch Fotos und Videos produzieren?",
      answer: "Ja, wir haben ein Netzwerk aus professionellen Fotografen und Videografen. Für Restaurants erstellen wir appetitliche Food-Fotos, für Handwerker dokumentieren wir Projekte und für Dienstleister produzieren wir authentische Unternehmensfotos. Auch Drohnenaufnahmen sind möglich."
    },
    {
      question: "Wie messe ich den Erfolg meiner Website?",
      answer: "Wir installieren Google Analytics und andere Tracking-Tools, um Website-Besucher, Conversions und Nutzerverhalten zu messen. Unsere monatlichen Reports zeigen verständlich auf, wie sich Ihre Online-Präsenz entwickelt. Bei SEO-Projekten tracken wir auch Rankings und lokale Sichtbarkeit."
    },
    {
      question: "Was ist der Unterschied zwischen SEO und Google Ads?",
      answer: "SEO (Suchmaschinenoptimierung) sorgt für kostenlose, organische Rankings in Google-Suchergebnissen. Das dauert 3-6 Monate, hält aber langfristig an. Google Ads zeigt bezahlte Anzeigen sofort an, kostet aber pro Klick. Ideal ist eine Kombination aus beiden Strategien."
    },
    {
      question: "Wie oft sollte ich neue Inhalte auf der Website veröffentlichen?",
      answer: "Das hängt von Ihrer Branche ab. Ein Blog-Artikel pro Monat ist ein guter Start. Wichtiger als Häufigkeit ist Qualität und Relevanz für Ihre Zielgruppe. Wir entwickeln gerne einen Content-Plan, der zu Ihren Ressourcen und Zielen passt."
    },
    {
      question: "Können Sie auch Social Media für uns übernehmen?",
      answer: "Ja, wir bieten komplettes Social Media Management. Das beinhaltet Strategie-Entwicklung, Content-Erstellung, regelmäßige Posts, Community-Management und Werbekampagnen. Wir betreuen Facebook, Instagram, LinkedIn und andere relevante Plattformen."
    },
    {
      question: "Was sind die wichtigsten SEO-Faktoren für lokale Unternehmen?",
      answer: "Die wichtigsten Faktoren sind: vollständiges Google My Business Profil, positive Kundenbewertungen, lokale Keywords in Website-Inhalten, konsistente Unternehmensdaten im Web, lokale Backlinks und mobile Optimierung. Wir kümmern uns um alle diese Aspekte."
    }
  ];

  const datenschutzFAQs = [
    {
      question: "Sind Ihre Websites DSGVO-konform?",
      answer: "Ja, alle unsere Websites entsprechen den DSGVO-Anforderungen. Das beinhaltet Cookie-Banner mit Einwilligungsmöglichkeit, Datenschutzerklärung, SSL-Verschlüsselung, sichere Datenverarbeitung und die Möglichkeit für Nutzer, ihre Daten einzusehen oder löschen zu lassen."
    },
    {
      question: "Benötige ich einen Cookie-Banner auf meiner Website?",
      answer: "Ja, wenn Ihre Website Cookies verwendet (was bei den meisten der Fall ist), benötigen Sie einen DSGVO-konformen Cookie-Banner. Dieser muss vor dem Setzen von nicht-technisch notwendigen Cookies die Einwilligung der Nutzer einholen. Wir implementieren das standardmäßig."
    },
    {
      question: "Was muss in die Datenschutzerklärung?",
      answer: "Die Datenschutzerklärung muss alle Datenverarbeitungen transparent auflisten: welche Daten erhoben werden, zu welchem Zweck, Rechtsgrundlage, Speicherdauer und Nutzerrechte. Wir erstellen diese individuell für Ihre Website und halten sie bei Änderungen aktuell."
    },
    {
      question: "Wie gehen Sie mit Kontaktformular-Daten um?",
      answer: "Alle Daten aus Kontaktformularen werden SSL-verschlüsselt übertragen und nur für die Bearbeitung Ihrer Anfrage verwendet. Wir speichern sie nicht länger als nötig und geben sie niemals an Dritte weiter. Nutzer können jederzeit Auskunft oder Löschung ihrer Daten verlangen."
    },
    {
      question: "Wo werden meine Website-Daten gespeichert?",
      answer: "Alle Daten werden auf Servern in Deutschland gespeichert. Unsere Hosting-Partner sind DSGVO-zertifiziert und unterliegen deutschem Datenschutzrecht. Es findet keine Datenübertragung in Drittländer statt, es sei denn, Sie wünschen explizit Tools wie Google Analytics."
    },
    {
      question: "Was ist mit Google Analytics und anderen Tracking-Tools?",
      answer: "Google Analytics und ähnliche Tools können datenschutzkonform verwendet werden, erfordern aber eine Einwilligung der Nutzer und spezielle Konfiguration. Wir können auch datenschutzfreundlichere Alternativen wie Matomo implementieren, die alle Daten in Deutschland speichern."
    },
    {
      question: "Benötige ich ein Impressum auf meiner Website?",
      answer: "Ja, gewerblich genutzte Websites benötigen ein vollständiges Impressum mit Name, Adresse, Kontaktdaten und bei Unternehmen weitere Angaben wie Handelsregisternummer oder Umsatzsteuer-ID. Wir erstellen das Impressum entsprechend Ihrer Unternehmensform."
    },
    {
      question: "Wie halte ich meine Website rechtlich aktuell?",
      answer: "Rechtliche Anforderungen ändern sich regelmäßig. Unsere Wartungsverträge beinhalten die Aktualisierung von Datenschutzerklärung und Impressum bei Rechtsänderungen. Zusätzlich empfehlen wir eine jährliche rechtliche Überprüfung durch einen spezialisierten Anwalt."
    }
  ];

  const allFAQs = [
    ...allgemeineFAQs.map(faq => ({ ...faq, category: "allgemein" })),
    ...technikFAQs.map(faq => ({ ...faq, category: "technik" })),
    ...inhalteFAQs.map(faq => ({ ...faq, category: "inhalte" })),
    ...datenschutzFAQs.map(faq => ({ ...faq, category: "datenschutz" }))
  ];

  const filteredFAQs = allFAQs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-primary-blue to-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-sand">Häufige Fragen</span> & Antworten
          </h1>
          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Finden Sie schnell Antworten auf die wichtigsten Fragen zu unseren Leistungen, 
            Abläufen und technischen Aspekten.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Frage oder Stichwort suchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 bg-white/10 border-white/20 text-white placeholder-slate-300"
              data-testid="faq-search-input"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchTerm ? (
            /* Search Results */
            <div>
              <h2 className="text-2xl font-bold text-navy mb-8">
                Suchergebnisse für "{searchTerm}" ({filteredFAQs.length} gefunden)
              </h2>
              {filteredFAQs.length > 0 ? (
                <FAQ items={filteredFAQs} />
              ) : (
                <div className="text-center py-12">
                  <HelpCircle className="mx-auto h-16 w-16 text-slate-300 mb-4" />
                  <h3 className="text-lg font-semibold text-slate-600 mb-2">
                    Keine Ergebnisse gefunden
                  </h3>
                  <p className="text-slate-500 mb-6">
                    Versuchen Sie es mit anderen Suchbegriffen oder kontaktieren Sie uns direkt.
                  </p>
                  <CTAButton href="/kontakt" testId="faq-no-results-contact">
                    Direkt kontaktieren
                  </CTAButton>
                </div>
              )}
            </div>
          ) : (
            /* Category Tabs */
            <Tabs defaultValue="allgemein" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4">
                {faqCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    data-testid={`faq-tab-${category.id}`}
                  >
                    <category.icon className="h-4 w-4 mr-2" />
                    {category.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {faqCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-navy mb-4">{category.title}</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">{category.description}</p>
                  </div>

                  <FAQ 
                    items={category.id === "allgemein" ? allgemeineFAQs :
                           category.id === "technik" ? technikFAQs :
                           category.id === "inhalte" ? inhalteFAQs :
                           datenschutzFAQs} 
                  />
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">
            Ihre Frage ist nicht dabei?
          </h2>
          <p className="text-slate-600 mb-8">
            Kontaktieren Sie uns direkt. Wir beantworten Ihre Fragen gerne persönlich 
            und erweitern unsere FAQ-Sammlung kontinuierlich.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-navy mb-2">E-Mail Support</h3>
              <p className="text-sm text-slate-600 mb-3">
                Antwort innerhalb von 24 Stunden
              </p>
              <a 
                href="mailto:info@castellconnect.de" 
                className="text-primary-blue hover:underline text-sm"
                data-testid="faq-email-support"
              >
                info@castellconnect.de
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-navy mb-2">Telefon-Hotline</h3>
              <p className="text-sm text-slate-600 mb-3">
                Mo-Fr 9:00-18:00 Uhr
              </p>
              <a 
                href="tel:+49932539199" 
                className="text-primary-blue hover:underline text-sm"
                data-testid="faq-phone-support"
              >
                09325 391 99 63
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-navy mb-2">Live-Chat</h3>
              <p className="text-sm text-slate-600 mb-3">
                Sofortige Antworten online
              </p>
              <button className="text-primary-blue hover:underline text-sm" data-testid="faq-live-chat">
                Chat starten
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für Ihr digitales Projekt?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Lassen Sie uns Ihre Fragen in einem persönlichen Gespräch klären 
            und gemeinsam Ihre digitale Strategie entwickeln.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              href="/kontakt" 
              variant="sand" 
              size="lg"
              testId="faq-final-contact"
            >
              Kostenlose Beratung
            </CTAButton>
            <CTAButton 
              href="/analyse" 
              variant="secondary" 
              size="lg"
              testId="faq-final-analyse"
            >
              Website analysieren
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
