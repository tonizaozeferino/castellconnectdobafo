import { MapPin, Phone, Mail, Calendar } from "lucide-react";

export default function Contact() {

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-primary-blue to-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-sand">Kontakt</span> aufnehmen
          </h1>
          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Buchen Sie direkt einen Beratungstermin für Ihr digitales Projekt. 
            Kostenlose Erstberatung und unverbindliches Gespräch.
          </p>
        </div>
      </section>

      {/* Calendar Booking - TidyCal Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="bg-primary-blue p-4 rounded-full inline-block mb-6">
                <Calendar className="text-white h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold text-navy mb-4">
                Beratungstermin buchen
              </h2>
              <p className="text-slate-600 mb-6 text-lg">
                Buchen Sie direkt einen kostenlosen Beratungstermin. 
                Wir besprechen Ihr Projekt und finden gemeinsam die beste Lösung.
              </p>
            </div>
            
            {/* TidyCal Embed */}
            <div className="w-full" style={{ minHeight: '600px' }}>
              <iframe
                src="https://tidycal.com/antoniovonstrachwitz/castellconnect"
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                title="Beratungstermin buchen"
                className="rounded-lg"
                data-testid="tidycal-booking-iframe"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-navy mb-8 text-center">Kontaktinformationen</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-blue p-4 rounded-full inline-block mb-4">
                  <Phone className="text-white h-6 w-6" />
                </div>
                <h4 className="font-medium text-navy mb-2">Telefon</h4>
                <a href="tel:+4909325391996" className="text-slate-600 hover:text-primary-blue" data-testid="contact-phone-link">
                  09325 391996
                </a>
              </div>

              <div className="text-center">
                <div className="bg-primary-blue p-4 rounded-full inline-block mb-4">
                  <Mail className="text-white h-6 w-6" />
                </div>
                <h4 className="font-medium text-navy mb-2">E-Mail</h4>
                <a href="mailto:info@castellconnect.de" className="text-slate-600 hover:text-primary-blue" data-testid="contact-email-link">
                  info@castellconnect.de
                </a>
              </div>

              <div className="text-center">
                <div className="bg-primary-blue p-4 rounded-full inline-block mb-4">
                  <MapPin className="text-white h-6 w-6" />
                </div>
                <h4 className="font-medium text-navy mb-2">Adresse</h4>
                <p className="text-slate-600">
                  Wüstenfelden 3<br />
                  97355 Castell<br />
                  Bayern
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
