import { Target, TrendingUp, BarChart3, Users, MapPin, DollarSign, CheckCircle, ArrowRight } from "lucide-react";
import FAQ from "@/components/ui/FAQ";
import CTAButton from "@/components/ui/CTAButton";

export default function Ads() {
  const adsPlatforms = [
    {
      name: "Google Ads",
      icon: Target,
      description: "Search, Display, Shopping und YouTube Kampagnen",
      features: ["Keyword-Targeting", "Local Search Ads", "Shopping Campaigns", "Performance Max"]
    },
    {
      name: "Meta Ads",
      icon: Users,
      description: "Facebook und Instagram Werbeanzeigen",
      features: ["Audience Targeting", "Lookalike Audiences", "Retargeting", "Story & Reel Ads"]
    },
    {
      name: "LinkedIn Ads",
      icon: TrendingUp,
      description: "B2B Marketing und Lead-Generierung",
      features: ["Job Title Targeting", "Company Targeting", "Lead Gen Forms", "Sponsored Content"]
    },
    {
      name: "Local Advertising",
      icon: MapPin,
      description: "Regionale und lokale Werbekampagnen",
      features: ["Geo-Targeting", "Local Extensions", "Store Visits", "Location-based Ads"]
    }
  ];

  const campaignTypes = [
    {
      title: "Brand Awareness",
      description: "Bekanntheit steigern und Reichweite aufbauen",
      metrics: ["Impressionen", "Reach", "Brand Recall", "Video Views"],
      bestFor: "Neue Unternehmen, Produktlaunches"
    },
    {
      title: "Lead Generation", 
      description: "Qualifizierte Interessenten gewinnen",
      metrics: ["Cost per Lead", "Conversion Rate", "Lead Quality Score", "LTV"],
      bestFor: "B2B Services, Beratungsunternehmen"
    },
    {
      title: "Sales & E-Commerce",
      description: "Direkter Verkauf und Umsatz generieren", 
      metrics: ["ROAS", "Cost per Sale", "Cart Abandonment", "Revenue"],
      bestFor: "Online-Shops, E-Commerce"
    },
    {
      title: "Local Traffic",
      description: "Kunden in Ihr Geschäft bringen",
      metrics: ["Store Visits", "Driving Directions", "Phone Calls", "Local Actions"],
      bestFor: "Einzelhandel, Gastronomie, Services"
    }
  ];

  const optimizationStrategies = [
    "A/B Testing von Anzeigentexten und Bildern",
    "Audience-Segmentierung und Targeting-Optimierung",
    "Bid-Strategien und Budget-Allokation",
    "Landing Page Optimierung",
    "Conversion Tracking Setup",
    "Negative Keywords Management",
    "Automated Rules und Scripts",
    "Cross-Platform Attribution"
  ];

  const landingPageElements = [
    {
      element: "Headlines & Copy",
      description: "Überzeugende Texte die zur Anzeige passen"
    },
    {
      element: "Trust Signals",
      description: "Testimonials, Bewertungen, Zertifikate"
    },
    {
      element: "Clear CTAs",
      description: "Eindeutige Handlungsaufforderungen"
    },
    {
      element: "Mobile Optimization",
      description: "Perfekte Darstellung auf allen Geräten"
    },
    {
      element: "Fast Loading",
      description: "Optimierte Ladezeiten für bessere Conversion"
    },
    {
      element: "Form Optimization",
      description: "Einfache und kurze Formulare"
    }
  ];

  const reportingMetrics = [
    { metric: "Return on Ad Spend (ROAS)", description: "Umsatz pro investiertem Euro", target: "4:1 - 8:1" },
    { metric: "Cost per Acquisition (CPA)", description: "Kosten pro Neukunde", target: "< 20% LTV" },
    { metric: "Click-Through Rate (CTR)", description: "Anteil der Klicks bei Impressionen", target: "2-5%" },
    { metric: "Conversion Rate", description: "Anteil der Käufe bei Website-Besuchern", target: "2-4%" },
    { metric: "Quality Score", description: "Google's Bewertung der Anzeigenrelevanz", target: "7-10" },
    { metric: "Impression Share", description: "Anteil der möglichen Impressionen", target: "> 80%" }
  ];

  const managementServices = [
    "Kampagnen-Setup und Strukturierung",
    "Keyword-Recherche und -Optimierung", 
    "Anzeigentexte und Creative-Erstellung",
    "Audience-Entwicklung und -Management",
    "Budget-Optimierung und Bid-Management",
    "Landing Page Entwicklung",
    "Conversion Tracking Implementation",
    "Wöchentliche Performance-Überwachung",
    "Monatliche Reports und Strategieberatung",
    "Competitor Analysis und Market Research"
  ];

  const faqItems = [
    {
      question: "Wie hoch sollte mein Werbebudget sein?",
      answer: "Das hängt von Ihrer Branche und Ihren Zielen ab. Für lokale Unternehmen empfehlen wir mindestens 500-1.000€/Monat für messbare Ergebnisse. Größere Märkte und konkurrierende Branchen benötigen höhere Budgets."
    },
    {
      question: "Wie schnell sehe ich Ergebnisse bei Google Ads?",
      answer: "Erste Daten sehen Sie sofort, aussagekräftige Optimierungen sind nach 2-4 Wochen möglich. Für stabile Performance und optimale Ergebnisse sollten Sie 3 Monate einplanen."
    },
    {
      question: "Ist Google Ads oder Facebook Ads besser für mein Business?",
      answer: "Das hängt von Ihrer Zielgruppe ab. Google Ads eignet sich für aktive Suchende (Pull-Marketing), Facebook/Instagram für passive Zielgruppen (Push-Marketing). Oft ist eine Kombination optimal."
    },
    {
      question: "Welche Kosten entstehen zusätzlich zum Werbebudget?",
      answer: "Zusätzlich zum Werbebudget berechnen wir eine Management-Fee von 15-20% des Budgets (min. 299€/Monat). Dies beinhaltet Kampagnen-Management, Optimierung und Reporting."
    },
    {
      question: "Können Sie garantierte Ergebnisse versprechen?",
      answer: "Seriöse Agenturen können keine garantierten Ergebnisse versprechen, da zu viele Faktoren außerhalb unserer Kontrolle liegen. Wir arbeiten jedoch mit klaren KPIs und optimieren kontinuierlich für bestmögliche Performance."
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
                <span className="text-sand">Online Advertising</span> für Bayern
              </h1>
              <p className="text-xl text-slate-200 mb-8">
                Strategische Werbekampagnen auf Google, Facebook und LinkedIn für maximale Reichweite, 
                qualifizierte Leads und messbaren ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton 
                  href="/analyse" 
                  variant="sand" 
                  size="lg"
                  testId="ads-hero-analyse"
                >
                  Ads-Audit starten
                </CTAButton>
                <CTAButton 
                  href="/kontakt" 
                  variant="secondary" 
                  size="lg"
                  testId="ads-hero-contact"
                >
                  Strategie-Gespräch
                </CTAButton>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Online Advertising und Performance Marketing" 
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Unsere Advertising-Plattformen
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Strategische Kanalwahl basierend auf Ihrer Zielgruppe, 
              Ihren Zielen und dem verfügbaren Budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {adsPlatforms.map((platform, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-primary-blue p-4 rounded-full">
                    <platform.icon className="text-white h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-2">{platform.name}</h3>
                    <p className="text-slate-600">{platform.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="text-primary-blue h-5 w-5 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Strategy */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Kampagnen-Strategien
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Verschiedene Ansätze für unterschiedliche Geschäftsziele – 
              von Markenbekanntheit bis Direct Sales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {campaignTypes.map((campaign, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-navy mb-4">{campaign.title}</h3>
                <p className="text-slate-600 mb-6">{campaign.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-medium text-navy mb-3">Wichtige Metriken:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {campaign.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-sm text-slate-700 bg-slate-50 px-3 py-2 rounded">
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-primary-blue/10 p-4 rounded-lg">
                  <span className="text-sm font-medium text-primary-blue">Ideal für: </span>
                  <span className="text-sm text-slate-700">{campaign.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Optimization */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Kontinuierliche Optimierung
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Datengetriebene Verbesserungen für maximale Performance 
                und beste Return on Investment.
              </p>
              <ul className="space-y-3">
                {optimizationStrategies.map((strategy, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <TrendingUp className="text-primary-blue h-6 w-6 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{strategy}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Campaign Optimization und Performance Analytics" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Landing Pages */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Optimierte Landing Pages
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Speziell entwickelte Zielseiten für maximale Conversion-Raten 
              und beste User Experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {landingPageElements.map((element, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="bg-primary-blue/10 p-4 rounded-full inline-block mb-6">
                  <Target className="text-primary-blue h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-4">{element.element}</h3>
                <p className="text-slate-600 text-sm">{element.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Performance-Metriken
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transparente Erfolgsmessung mit branchenspezifischen Benchmarks 
              und kontinuierlicher Optimierung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reportingMetrics.map((item, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-lg">
                <div className="flex items-start justify-between mb-4">
                  <BarChart3 className="text-primary-blue h-8 w-8" />
                  <span className="bg-primary-blue/10 text-primary-blue px-3 py-1 rounded-full text-sm font-medium">
                    {item.target}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{item.metric}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Full-Service Management
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Komplette Betreuung Ihrer Werbekampagnen von der Strategie 
              bis zur Optimierung – damit Sie sich auf Ihr Business konzentrieren können.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {managementServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-primary-blue/10 p-3 rounded-full inline-block mb-4">
                  <DollarSign className="text-primary-blue h-6 w-6" />
                </div>
                <div className="font-medium text-navy text-sm">{service}</div>
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
              Häufige Fragen zu Online Advertising
            </h2>
          </div>

          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für erfolgreiche Werbekampagnen?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Lassen Sie uns gemeinsam Ihre Online Advertising Strategie entwickeln und umsetzen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              href="/analyse" 
              variant="sand" 
              size="lg"
              testId="ads-final-analyse"
            >
              Ads-Performance analysieren
            </CTAButton>
            <CTAButton 
              href="/kontakt" 
              variant="secondary" 
              size="lg"
              testId="ads-final-contact"
            >
              Kampagnen-Beratung buchen
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
