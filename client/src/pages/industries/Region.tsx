import { useParams } from "wouter";
import { MapPin, Building2, Users, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";

export default function Region() {
  const { stadt } = useParams<{ stadt: string }>();
  
  // Decode URL parameter for display
  const cityName = stadt ? decodeURIComponent(stadt) : "Bayern";
  
  // City-specific data (in real implementation, this would come from a database or API)
  const getCityData = (city: string) => {
    const cities = {
      "münchen": {
        name: "München",
        description: "Digitale Lösungen für die bayerische Landeshauptstadt",
        population: "1,5 Millionen",
        businesses: "120.000",
        opportunities: [
          "Höchste Kaufkraft in Bayern",
          "Starke Tech- und Startup-Szene", 
          "Internationale Unternehmen und Konzerne",
          "Tourismus und Events",
          "Hochwertige Dienstleistungen"
        ],
        industries: ["IT & Software", "Finanzdienstleistungen", "Tourismus", "Medien", "Gesundheitswesen"],
        localSEO: "münchen",
        image: "https://images.unsplash.com/photo-1527359443443-84a48aec73d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
      },
      "nürnberg": {
        name: "Nürnberg",
        description: "Online Marketing für Nordbayerns Metropole",
        population: "520.000",
        businesses: "45.000",
        opportunities: [
          "Industriestandort mit Tradition",
          "Messe- und Kongresszentrum",
          "Logistik-Hub für Europa",
          "Starkes Handwerk und Mittelstand",
          "Wachsende IT-Branche"
        ],
        industries: ["Maschinenbau", "Logistik", "Handwerk", "IT", "Messe & Events"],
        localSEO: "nürnberg",
        image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
      },
      "augsburg": {
        name: "Augsburg",
        description: "Webdesign und SEO für die Fuggerstadt",
        population: "300.000",
        businesses: "28.000",
        opportunities: [
          "Universitätsstadt mit jungen Zielgruppen",
          "Textil- und Produktionsstandort",
          "Wachsende Technologiebranche",
          "Starker lokaler Handel",
          "Zentrale Lage in Bayern"
        ],
        industries: ["Textil & Mode", "Maschinenbau", "Bildung", "Handel", "Technologie"],
        localSEO: "augsburg",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
      }
    };
    
    const normalizedCity = city.toLowerCase();
    return cities[normalizedCity as keyof typeof cities] || {
      name: cityName,
      description: `Digitale Lösungen für ${cityName}`,
      population: "Unbekannt",
      businesses: "Viele",
      opportunities: [
        "Lokale Unternehmen stärken",
        "Digitale Transformation vorantreiben",
        "Online-Sichtbarkeit verbessern",
        "Neue Kunden gewinnen",
        "Wettbewerbsvorteile schaffen"
      ],
      industries: ["Verschiedene Branchen"],
      localSEO: cityName.toLowerCase(),
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    };
  };

  const cityData = getCityData(cityName);

  const localServices = [
    {
      service: "Lokale SEO",
      description: `Optimierung für "${cityData.localSEO}" und lokale Suchanfragen`,
      benefits: ["Top Rankings in lokalen Suchergebnissen", "Mehr Sichtbarkeit in Google Maps", "Höhere Anzahl lokaler Kunden"]
    },
    {
      service: "Google My Business",
      description: "Vollständige Optimierung Ihres lokalen Unternehmensprofils",
      benefits: ["Professionelles Firmenprofil", "Positive Bewertungen sammeln", "Lokale Kundenanfragen steigern"]
    },
    {
      service: "Regionales Content Marketing",
      description: `Inhalte mit lokalem Bezug zu ${cityData.name} und Umgebung`,
      benefits: ["Lokale Relevanz und Vertrauen", "Bessere Zielgruppenansprache", "Stärkere lokale Marke"]
    }
  ];

  const successStories = [
    {
      company: `Handwerk Müller - ${cityData.name}`,
      description: "Lokaler Handwerksbetrieb mit 300% mehr Online-Anfragen",
      results: ["Platz 1 für 'Elektriker " + cityData.name + "'", "15 Online-Termine pro Woche", "Verdopplung des Umsatzes"]
    },
    {
      company: `Restaurant Alpenblick - ${cityData.name}`,
      description: "Gastronomiebetrieb mit erfolgreicher digitaler Transformation",
      results: ["40% mehr Reservierungen", "Reduzierte Telefonate", "Starke Social Media Präsenz"]
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
                Digitale Lösungen für <span className="text-sand">{cityData.name}</span>
              </h1>
              <p className="text-xl text-slate-200 mb-8">
                {cityData.description} – Lokale Expertise für nachhaltigen digitalen Erfolg 
                in der Region.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton 
                  href="/analyse" 
                  variant="sand" 
                  size="lg"
                  testId="region-hero-analyse"
                >
                  Regionale Analyse starten
                </CTAButton>
                <CTAButton 
                  href="/kontakt" 
                  variant="secondary" 
                  size="lg"
                  testId="region-hero-contact"
                >
                  Lokale Beratung
                </CTAButton>
              </div>
            </div>
            <div className="relative">
              <img 
                src={cityData.image}
                alt={`Stadtansicht von ${cityData.name}`} 
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Local Market Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Der Markt in {cityData.name}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Verstehen Sie die lokalen Gegebenheiten und digitalen Chancen 
              für Ihr Unternehmen in der Region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-8 text-center">
              <div className="bg-primary-blue p-4 rounded-full inline-block mb-6">
                <Users className="text-white h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">{cityData.population}</h3>
              <p className="text-slate-600">Einwohner</p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-8 text-center">
              <div className="bg-primary-blue p-4 rounded-full inline-block mb-6">
                <Building2 className="text-white h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">{cityData.businesses}</h3>
              <p className="text-slate-600">Unternehmen</p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-8 text-center">
              <div className="bg-primary-blue p-4 rounded-full inline-block mb-6">
                <TrendingUp className="text-white h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">Wachstum</h3>
              <p className="text-slate-600">Digitalpotential</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Opportunities */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Digitale Chancen in {cityData.name}
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Diese lokalen Besonderheiten schaffen einzigartige Möglichkeiten 
                für Ihr digitales Marketing.
              </p>
              <ul className="space-y-3">
                {cityData.opportunities.map((opportunity, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-primary-blue h-6 w-6 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{opportunity}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-6">Wichtige Branchen:</h3>
              <div className="grid grid-cols-2 gap-4">
                {cityData.industries.map((industry, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="font-medium text-navy text-sm">{industry}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Lokale Digital-Marketing Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Speziell auf {cityData.name} zugeschnittene Marketing-Maßnahmen 
              für maximale lokale Sichtbarkeit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {localServices.map((service, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-navy mb-4">{service.service}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start space-x-2">
                      <CheckCircle className="text-primary-blue h-4 w-4 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Success Stories */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Erfolgsgeschichten aus {cityData.name}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Lokale Unternehmen, die mit unserer Hilfe digital durchgestartet sind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-navy mb-4">{story.company}</h3>
                <p className="text-slate-600 mb-6">{story.description}</p>
                <div className="space-y-3">
                  <h4 className="font-medium text-navy">Ergebnisse:</h4>
                  {story.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center space-x-3">
                      <CheckCircle className="text-primary-blue h-5 w-5 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Ihr lokaler Partner in {cityData.name}
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Als regionaler Experte kennen wir den Markt in {cityData.name} 
                und wissen, was bei Ihren Kunden ankommt.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-blue p-3 rounded-full">
                    <MapPin className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Lokale Präsenz</h3>
                    <p className="text-slate-600">Regelmäßige Vor-Ort-Termine und persönliche Betreuung in {cityData.name}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-blue p-3 rounded-full">
                    <Users className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Marktkenntnis</h3>
                    <p className="text-slate-600">Tiefes Verständnis für lokale Zielgruppen und Wettbewerbssituation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-blue p-3 rounded-full">
                    <TrendingUp className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Messbare Ergebnisse</h3>
                    <p className="text-slate-600">Transparente Erfolgsmessung mit lokalem Fokus und ROI-Nachweis</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-navy mb-6">Kontakt für {cityData.name}</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">Regionale Hotline</label>
                  <p className="text-lg font-semibold text-primary-blue">09325 391996</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">E-Mail</label>
                  <p className="text-lg font-semibold text-primary-blue">
                    {cityData.localSEO}@castellconnect.de
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Beratungszeiten</label>
                  <p className="text-slate-700">Mo-Fr 9:00-18:00 Uhr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für digitalen Erfolg in {cityData.name}?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Lassen Sie uns gemeinsam Ihre lokale Marktposition stärken und neue Kunden gewinnen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              href="/analyse" 
              variant="sand" 
              size="lg"
              testId="region-final-analyse"
            >
              Lokale Analyse für {cityData.name}
            </CTAButton>
            <CTAButton 
              href="/kontakt" 
              variant="secondary" 
              size="lg"
              testId="region-final-contact"
            >
              Regionale Beratung buchen
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
