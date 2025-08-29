import { UtensilsCrossed, Calendar, Users, Camera, Star, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import FAQ from "@/components/ui/FAQ";
import CTAButton from "@/components/ui/CTAButton";

export default function Gastro() {
  const gastroGoals = [
    "Online-Tischreservierungen direkt über die Website",
    "Attraktive Präsentation von Speisekarten und Angeboten",
    "Event-Marketing für Veranstaltungen und Feiern",
    "Social Media Präsenz für Food-Content",
    "Positive Bewertungen und Reputation Management",
    "Lokale Sichtbarkeit für 'Restaurant in der Nähe' Suchanfragen"
  ];

  const gastroServices = [
    {
      icon: Calendar,
      title: "Reservierungssystem",
      description: "24/7 Online-Tischreservierung mit Echtzeit-Verfügbarkeit und automatischen Bestätigungen"
    },
    {
      icon: UtensilsCrossed,
      title: "Digitale Speisekarten",
      description: "Ansprechende Online-Speisekarten mit Bildern, Allergenen und aktuellen Preisen"
    },
    {
      icon: Users,
      title: "Event-Management",
      description: "Buchung von Veranstaltungen, Feiern und privaten Events mit Online-Anfrage"
    },
    {
      icon: Camera,
      title: "Food-Fotografie & Social Media",
      description: "Professionelle Food-Fotos und strategisches Social Media Marketing"
    },
    {
      icon: Star,
      title: "Bewertungsmanagement",
      description: "Systematische Sammlung von Google- und TripAdvisor-Bewertungen"
    },
    {
      icon: MapPin,
      title: "Lokale SEO",
      description: "Optimierung für lokale Suchanfragen und Google My Business"
    }
  ];

  const websiteFeatures = [
    "Responsive Design für alle Endgeräte",
    "Online-Reservierungssystem mit Kalender-Integration",
    "Bildergalerien für Ambiente und Gerichte",
    "Aktuelle Speise- und Getränkekarten",
    "Event-Buchungsformulare",
    "Integration von Google Maps und Kontaktdaten",
    "Social Media Integration",
    "Newsletter-Anmeldung für Stammgäste"
  ];

  const showcaseProjects = [
    {
      title: "Restaurant Alpenblick",
      description: "Traditionelle bayerische Küche mit modernem Online-Auftritt",
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      features: ["Online-Reservierung", "Digitale Speisekarte", "Event-Buchungen"],
      results: ["40% mehr Reservierungen", "60% weniger Telefonate", "25% mehr Event-Buchungen"]
    },
    {
      title: "Café Münchner Freiheit",
      description: "Urbanes Café mit starker Social Media Präsenz",
      imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      features: ["Instagram Integration", "Online-Catering", "Loyalty-Programm"],
      results: ["300% mehr Instagram Follower", "50% mehr Catering-Anfragen", "Täglich 20+ Online-Reservierungen"]
    },
    {
      title: "Gasthof zur Post",
      description: "Traditionshaus mit Hotel und Restaurant",
      imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      features: ["Hotel-Buchung", "Restaurant-Reservierung", "Event-Location"],
      results: ["80% mehr Hotel-Buchungen", "35% höhere Auslastung", "Verdopplung der Event-Anfragen"]
    }
  ];

  const socialMediaContent = [
    "Food-Fotografie und Styling",
    "Behind-the-Scenes Content aus der Küche",
    "Saisonale Menü-Highlights",
    "Mitarbeiter und Team-Stories",
    "Event- und Veranstaltungsankündigungen",
    "Kundenbewertungen und Testimonials",
    "Live-Cooking und Rezept-Videos",
    "Lokale Kooperationen und Partnerschaften"
  ];

  const faqItems = [
    {
      question: "Wie funktioniert ein Online-Reservierungssystem für Restaurants?",
      answer: "Gäste können auf Ihrer Website freie Tische einsehen und direkt reservieren. Sie erhalten automatisch Bestätigungen und können Reservierungen verwalten. Das System ist mit Ihrem bestehenden Kassensystem kompatibel."
    },
    {
      question: "Brauchen Restaurants wirklich Social Media Marketing?",
      answer: "Ja! 73% der Gäste entscheiden sich für ein Restaurant basierend auf Social Media Posts. Food-Content auf Instagram und Facebook generiert nachweislich mehr Besucher."
    },
    {
      question: "Was kostet eine professionelle Restaurant-Website?",
      answer: "Restaurant-Websites mit Reservierungssystem beginnen bei 3.490€. Inklusive Food-Fotografie, Social Media Setup und lokalem SEO. Monatliche Betreuung ab 199€."
    },
    {
      question: "Wie kann ich mehr positive Bewertungen bekommen?",
      answer: "Wir implementieren automatische Bewertungsanfragen nach dem Besuch, optimieren Ihr Google My Business Profil und helfen bei der professionellen Antwort auf Bewertungen."
    },
    {
      question: "Funktioniert Online-Marketing auch für kleine Gasthäuser?",
      answer: "Absolut! Gerade kleine, lokale Restaurants profitieren besonders von digitaler Sichtbarkeit. Viele Gäste suchen heute online nach 'Restaurants in der Nähe'."
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
                Digitale Lösungen für die <span className="text-sand">Gastronomie</span>
              </h1>
              <p className="text-xl text-slate-200 mb-8">
                Online-Reservierungen, digitale Speisekarten und Social Media Marketing – 
                maßgeschneidert für Restaurants, Cafés und Hotels in Bayern.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton 
                  href="/kontakt" 
                  variant="sand" 
                  size="lg"
                  testId="gastro-hero-analyse"
                >
                  Restaurant-Analyse starten
                </CTAButton>
                <CTAButton 
                  href="/kontakt" 
                  variant="secondary" 
                  size="lg"
                  testId="gastro-hero-contact"
                >
                  Gastro-Beratung
                </CTAButton>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modernes Restaurant in Bayern" 
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Ziele für Gastronomiebetriebe
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Diese digitalen Ziele erreichen erfolgreiche Restaurants und Cafés mit unseren Lösungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gastroGoals.map((goal, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-lg">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary-blue h-6 w-6 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{goal}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Unsere Gastro-Leistungen
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Speziell entwickelte Lösungen für die besonderen Anforderungen der Gastronomie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gastroServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
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

      {/* Website Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Website-Features für Restaurants
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Alle wichtigen Funktionen für eine erfolgreiche Restaurant-Website – 
                von der Reservierung bis zum Event-Management.
              </p>
              <ul className="space-y-3">
                {websiteFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-primary-blue h-6 w-6 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Restaurant Website auf verschiedenen Geräten" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Projects */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Gastro-Lösungen in der Praxis
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Praxisnahe Szenarien aus der Gastronomie zeigen die Wirksamkeit digitaler Lösungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {showcaseProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-navy mb-4">{project.title}</h3>
                  <p className="text-slate-600 mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-navy mb-3">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="bg-primary-blue/10 text-primary-blue px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-navy">Ergebnisse:</h4>
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center space-x-3">
                        <CheckCircle className="text-primary-blue h-4 w-4 flex-shrink-0" />
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

      {/* Social Media Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Social Media für Restaurants
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Appetitlicher Content, der Ihre Gäste begeistert und neue Kunden anzieht.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialMediaContent.map((content, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-lg text-center">
                <div className="bg-primary-blue/10 p-3 rounded-full inline-block mb-4">
                  <Camera className="text-primary-blue h-6 w-6" />
                </div>
                <div className="font-medium text-navy text-sm">{content}</div>
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
              Häufige Fragen aus der Gastronomie
            </h2>
          </div>

          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für mehr Gäste?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Lassen Sie uns gemeinsam Ihr Restaurant digital erfolgreich machen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              href="/kontakt" 
              variant="sand" 
              size="lg"
              testId="gastro-final-analyse"
            >
              Restaurant-Analyse starten
            </CTAButton>
            <CTAButton 
              href="/kontakt" 
              variant="secondary" 
              size="lg"
              testId="gastro-final-contact"
            >
              Gastro-Beratung buchen
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
