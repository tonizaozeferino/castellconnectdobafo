import { Users, Heart, TrendingUp, MapPin, Clock, ArrowRight, Mail, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CTAButton from "@/components/ui/CTAButton";

export default function Career() {
  const benefits = [
    {
      icon: Coffee,
      title: "Flexible Arbeitszeiten",
      description: "Work-Life-Balance mit flexiblen Arbeitszeiten und Home-Office-Möglichkeiten"
    },
    {
      icon: TrendingUp,
      title: "Weiterbildung",
      description: "Regelmäßige Schulungen, Konferenzen und Zertifizierungen auf Firmenkosten"
    },
    {
      icon: Users,
      title: "Flache Hierarchien",
      description: "Kurze Entscheidungswege und direkter Austausch mit der Geschäftsleitung"
    },
    {
      icon: Heart,
      title: "Teamgeist",
      description: "Familiäres Arbeitsklima mit regelmäßigen Team-Events und gemeinsamen Aktivitäten"
    }
  ];

  const openPositions = [
    {
      title: "Senior Web Developer",
      type: "Vollzeit",
      location: "München / Remote",
      department: "Entwicklung",
      description: "Entwicklung moderner Websites und Web-Anwendungen mit React, Node.js und modernen Technologien.",
      requirements: [
        "3+ Jahre Erfahrung in Webentwicklung",
        "Expertise in React, TypeScript, Node.js",
        "Erfahrung mit CMS-Systemen (WordPress, Shopify)",
        "Kenntnisse in SEO und Performance-Optimierung"
      ],
      tags: ["React", "TypeScript", "WordPress", "SEO"]
    },
    {
      title: "SEO Manager",
      type: "Vollzeit",
      location: "München",
      department: "Marketing",
      description: "Strategische SEO-Betreuung für mittelständische Kunden mit Fokus auf lokale Suchmaschinenoptimierung.",
      requirements: [
        "2+ Jahre Erfahrung im SEO-Bereich",
        "Kenntnisse in Google Analytics, Search Console",
        "Erfahrung mit lokaler SEO",
        "Deutsch und Englisch fließend"
      ],
      tags: ["SEO", "Analytics", "Local SEO", "Content"]
    },
    {
      title: "Social Media Manager",
      type: "Vollzeit / Teilzeit",
      location: "München / Remote",
      department: "Marketing",
      description: "Betreuung von Social Media Kanälen für unsere Kunden und Entwicklung kreativer Content-Strategien.",
      requirements: [
        "Erfahrung im Social Media Marketing",
        "Kreativität und Gespür für Trends",
        "Kenntnisse in Design-Tools (Canva, Photoshop)",
        "Kommunikationsstarke Persönlichkeit"
      ],
      tags: ["Social Media", "Content", "Design", "Community"]
    },
    {
      title: "Werkstudent Marketing",
      type: "Werkstudent",
      location: "München",
      department: "Marketing", 
      description: "Unterstützung in verschiedenen Marketing-Bereichen und eigenständige Projektarbeit.",
      requirements: [
        "Studium im Bereich Marketing, BWL oder ähnlich",
        "Interesse an digitalem Marketing",
        "Erste Erfahrungen erwünscht, aber nicht Bedingung",
        "Motivation und Lernbereitschaft"
      ],
      tags: ["Teilzeit", "Einstieg", "Flexibel", "Lernen"]
    }
  ];

  const networkOpportunities = [
    {
      title: "Freelancer-Netzwerk",
      description: "Regelmäßige Projekte für spezialisierte Freelancer",
      areas: ["Webdesign", "Content-Erstellung", "Fotografie", "Videoproduktion"]
    },
    {
      title: "Agentur-Partnerschaften",
      description: "Kooperationen mit ergänzenden Agenturen",
      areas: ["Print-Design", "PR & Kommunikation", "Event-Marketing", "Branding"]
    },
    {
      title: "Technologie-Partner",
      description: "Zusammenarbeit mit Tech-Experten",
      areas: ["App-Entwicklung", "E-Commerce", "Hosting", "Security"]
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Bewerbung",
      description: "Online-Bewerbung oder E-Mail mit Lebenslauf und Anschreiben"
    },
    {
      step: 2,
      title: "Erstgespräch",
      description: "15-minütiges Kennenlernen per Telefon oder Video-Call"
    },
    {
      step: 3,
      title: "Persönliches Interview",
      description: "Ausführliches Gespräch in unserem Büro oder online"
    },
    {
      step: 4,
      title: "Probearbeiten",
      description: "Bezahlter Testtag oder kleines Probeprojekt"
    },
    {
      step: 5,
      title: "Entscheidung",
      description: "Feedback innerhalb einer Woche nach dem Gespräch"
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
                Karriere bei <span className="text-sand">CastellConnect</span>
              </h1>
              <p className="text-xl text-slate-200 mb-8">
                Werden Sie Teil unseres Teams und gestalten Sie die digitale Zukunft 
                des bayerischen Mittelstands mit. Wir suchen talentierte Menschen, 
                die mit Leidenschaft digitale Lösungen entwickeln.
              </p>
              <CTAButton 
                href="#open-positions" 
                variant="sand" 
                size="lg"
                testId="career-hero-cta"
              >
                Offene Stellen ansehen
              </CTAButton>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Das CastellConnect Team bei der Arbeit" 
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why CastellConnect */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Warum CastellConnect?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Wir bieten mehr als nur einen Job – wir bieten eine Karriere in einem 
              innovativen Umfeld mit ausgezeichneten Entwicklungsmöglichkeiten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary-blue p-4 rounded-full inline-block mb-6">
                  <benefit.icon className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Offene Stellen
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Entdecken Sie spannende Karrieremöglichkeiten in unserem wachsenden Team.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <CardTitle className="text-xl text-navy mb-2" data-testid={`position-${index}-title`}>
                        {position.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600">
                        {position.description}
                      </CardDescription>
                    </div>
                    <div className="mt-4 md:mt-0 space-y-2">
                      <div className="flex items-center text-sm text-slate-600">
                        <Clock className="h-4 w-4 mr-2" />
                        {position.type}
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {position.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-navy mb-3">Anforderungen:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-700 text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {position.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="bg-primary-blue/10 text-primary-blue">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                      <div className="text-sm text-slate-600">
                        Abteilung: {position.department}
                      </div>
                      <Button className="bg-primary-blue hover:bg-navy" data-testid={`apply-position-${index}`}>
                        Jetzt bewerben <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              So läuft der Bewerbungsprozess
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transparent, fair und persönlich – so gestalten wir unseren Bewerbungsprozess.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {applicationProcess.map((phase, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-primary-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-xl font-bold">{phase.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-4">{phase.title}</h3>
                <p className="text-slate-600 text-sm">{phase.description}</p>
                {index < applicationProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 text-primary-blue">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Opportunities */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Netzwerk & Partnerschaften
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Auch ohne Festanstellung können Sie Teil unseres Netzwerks werden und 
              an spannenden Projekten mitarbeiten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {networkOpportunities.map((opportunity, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-navy">{opportunity.title}</CardTitle>
                  <CardDescription>{opportunity.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-medium text-navy">Bereiche:</h4>
                    <div className="flex flex-wrap gap-2">
                      {opportunity.areas.map((area, areaIndex) => (
                        <Badge key={areaIndex} variant="outline" className="text-xs">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-xl p-8 text-center">
            <div className="bg-primary-blue p-4 rounded-full inline-block mb-6">
              <Mail className="text-white h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              Initiativbewerbung
            </h2>
            <p className="text-slate-600 mb-8">
              Sie haben nicht die passende Stelle gefunden, sind aber überzeugt, 
              dass Sie zu unserem Team gehören? Senden Sie uns eine Initiativbewerbung!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-navy mb-4">Bewerbung per E-Mail</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <div>📧 jobs@castellconnect.de</div>
                  <div>📄 Lebenslauf + Anschreiben (PDF)</div>
                  <div>💼 Portfolio / Arbeitsproben</div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-navy mb-4">Direkter Kontakt</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <div>📞 09325 391996</div>
                  <div>👤 Lisa Schneider (Geschäftsführung)</div>
                  <div>⏰ Mo-Fr 9:00-18:00 Uhr</div>
                </div>
              </div>
            </div>

            <Button className="bg-primary-blue hover:bg-navy text-white px-8 py-3" data-testid="career-contact-button">
              Jetzt bewerben
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für den nächsten Karriereschritt?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Werden Sie Teil eines Teams, das die digitale Zukunft aktiv mitgestaltet.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              href="mailto:jobs@castellconnect.de" 
              variant="sand" 
              size="lg"
              testId="career-final-apply"
            >
              Jetzt bewerben
            </CTAButton>
            <CTAButton 
              href="/kontakt" 
              variant="secondary" 
              size="lg"
              testId="career-final-contact"
            >
              Fragen stellen
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
