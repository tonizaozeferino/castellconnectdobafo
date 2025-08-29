import { Users, Target, Award, Handshake, MapPin, Mail, Phone, CheckCircle, ArrowRight } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Zielorientiert",
      description: "Wir entwickeln Strategien, die messbare Ergebnisse liefern und Ihre Geschäftsziele erreichen."
    },
    {
      icon: Handshake,
      title: "Partnerschaftlich",
      description: "Langfristige Zusammenarbeit auf Augenhöhe mit transparenter Kommunikation und fairen Preisen."
    },
    {
      icon: Award,
      title: "Qualitätsbewusst",
      description: "Höchste Ansprüche an Design, Technik und Service für nachhaltige digitale Lösungen."
    },
    {
      icon: Users,
      title: "Persönlich",
      description: "Direkter Kontakt zu Ihren Ansprechpartnern ohne Callcenter oder anonyme Hotlines."
    }
  ];


  const workingMethod = [
    {
      step: 1,
      title: "Analysephase",
      description: "Umfassende Analyse Ihrer aktuellen Situation, Zielgruppe und Wettbewerber"
    },
    {
      step: 2,
      title: "Strategieentwicklung",
      description: "Entwicklung einer maßgeschneiderten Digital-Marketing-Strategie"
    },
    {
      step: 3,
      title: "Umsetzung",
      description: "Professionelle Implementierung mit regelmäßigen Updates und Feedback"
    },
    {
      step: 4,
      title: "Optimierung",
      description: "Kontinuierliche Verbesserung basierend auf Daten und Performance-Analyse"
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
                Über <span className="text-sand">CastellConnect</span>
              </h1>
              <p className="text-xl text-slate-200 mb-8">
                Wir sind Ihr verlässlicher Partner für digitale Transformation im bayerischen Mittelstand. 
                Mit Leidenschaft und Expertise bringen wir Unternehmen online erfolgreich nach vorne.
              </p>
              <CTAButton 
                href="/kontakt" 
                variant="sand" 
                size="lg"
                testId="about-hero-contact"
              >
                Lassen Sie uns sprechen
              </CTAButton>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Das CastellConnect Team bei der Arbeit" 
                className="rounded-xl shadow-2xl"
                data-testid="about-hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Mission & Werte
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Unser Ziel ist es, den bayerischen Mittelstand digital zu stärken und 
              nachhaltigen Erfolg im Online-Marketing zu schaffen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary-blue p-4 rounded-full inline-block mb-6">
                  <value.icon className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Working Method */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Unsere Arbeitsweise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Strukturiertes Vorgehen für messbare Ergebnisse und langfristigen Erfolg.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workingMethod.map((phase, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-primary-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-xl font-bold">{phase.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-4">{phase.title}</h3>
                <p className="text-slate-600 text-sm">{phase.description}</p>
                {index < workingMethod.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 text-primary-blue">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Press & Media */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Presse & Medien
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Pressematerial, Logos und Unternehmensinformationen für Medienvertreter.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-navy mb-4">Pressekontakt</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-primary-blue h-5 w-5" />
                  <span className="text-slate-700">presse@castellconnect.de</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-primary-blue h-5 w-5" />
                  <span className="text-slate-700">09325 391996</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für eine Zusammenarbeit?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Lassen Sie uns persönlich sprechen und gemeinsam Ihre digitale Zukunft gestalten.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              href="/kontakt" 
              variant="sand" 
              size="lg"
              testId="about-final-contact"
            >
              Jetzt Kontakt aufnehmen
            </CTAButton>
            <CTAButton 
              href="/analyse" 
              variant="secondary" 
              size="lg"
              testId="about-final-analyse"
            >
              Kostenlose Analyse
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
