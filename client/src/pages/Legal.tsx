import { useState } from "react";
import { Scale, Shield, FileText, Settings, Download, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function Legal() {
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  const legalSections = [
    {
      id: "impressum",
      title: "Impressum",
      icon: Scale,
      description: "Rechtliche Angaben gemäß §5 TMG"
    },
    {
      id: "datenschutz",
      title: "Datenschutz",
      icon: Shield,
      description: "Datenschutzerklärung nach DSGVO"
    },
    {
      id: "agb",
      title: "AGB",
      icon: FileText,
      description: "Allgemeine Geschäftsbedingungen"
    },
    {
      id: "cookies",
      title: "Cookie-Einstellungen",
      icon: Settings,
      description: "Verwalten Sie Ihre Cookie-Präferenzen"
    }
  ];

  const handleCookieUpdate = (type: string, value: boolean) => {
    setCookieSettings(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const cookieTypes = [
    {
      id: "necessary",
      title: "Notwendige Cookies",
      description: "Diese Cookies sind für das Funktionieren der Website erforderlich und können nicht deaktiviert werden.",
      locked: true
    },
    {
      id: "analytics",
      title: "Analyse-Cookies",
      description: "Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.",
      locked: false
    },
    {
      id: "marketing",
      title: "Marketing-Cookies",
      description: "Diese Cookies werden verwendet, um Ihnen relevante Werbung und Marketing-Inhalte anzuzeigen.",
      locked: false
    },
    {
      id: "preferences",
      title: "Präferenz-Cookies",
      description: "Diese Cookies speichern Ihre Einstellungen und Präferenzen für zukünftige Besuche.",
      locked: false
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-primary-blue to-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-sand">Rechtliche</span> Informationen
          </h1>
          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Alle wichtigen rechtlichen Informationen zu unserer Website, Datenschutz 
            und Geschäftsbedingungen transparent und DSGVO-konform.
          </p>
        </div>
      </section>

      {/* Legal Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="impressum" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              {legalSections.map((section) => (
                <TabsTrigger 
                  key={section.id} 
                  value={section.id}
                  data-testid={`legal-tab-${section.id}`}
                >
                  <section.icon className="h-4 w-4 mr-2" />
                  {section.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Impressum */}
            <TabsContent value="impressum" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-navy mb-4">Impressum</h2>
                <p className="text-slate-600">Angaben gemäß § 5 TMG</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Anbieter</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <strong>CastellConnect GmbH</strong><br />
                      Wüstenfelden 3<br />
                      97355 Castell<br />
                      Deutschland
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Kontakt</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <strong>Telefon:</strong> 09325 391996<br />
                      <strong>E-Mail:</strong> info@castellconnect.de<br />
                      <strong>Website:</strong> www.castellconnect.de
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Vertretungsberechtigte</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <strong>Geschäftsführung:</strong><br />
                      Lisa Schneider<br />
                      Michael Weber
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Registereintrag</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <strong>Handelsregister:</strong> HRB 123456<br />
                      <strong>Registergericht:</strong> Würzburg<br />
                      <strong>Umsatzsteuer-ID:</strong> DE123456789
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Haftungsausschluss</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Haftung für Inhalte</h4>
                    <p className="text-slate-600">
                      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
                      Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Haftung für Links</h4>
                    <p className="text-slate-600">
                      Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                      Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Datenschutz */}
            <TabsContent value="datenschutz" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-navy mb-4">Datenschutzerklärung</h2>
                <p className="text-slate-600">Gemäß Art. 13 DSGVO</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>1. Verantwortlicher</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Verantwortlicher für die Datenverarbeitung auf dieser Website ist:<br /><br />
                    <strong>CastellConnect GmbH</strong><br />
                    Wüstenfelden 3<br />
                    97355 Castell<br />
                    Deutschland<br /><br />
                    E-Mail: datenschutz@castellconnect.de<br />
                    Telefon: 09325 391996
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Erhebung und Speicherung personenbezogener Daten</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Website-Besuch</h4>
                    <p className="text-slate-700 text-sm">
                      Bei jedem Aufruf unserer Website erfasst unser System automatisiert Daten und Informationen vom Computersystem des aufrufenden Rechners:
                    </p>
                    <ul className="list-disc list-inside text-slate-700 text-sm mt-2 space-y-1">
                      <li>IP-Adresse des zugreifenden Rechners</li>
                      <li>Datum und Uhrzeit des Zugriffs</li>
                      <li>Browser-Typ und Version</li>
                      <li>Betriebssystem des zugreifenden Rechners</li>
                      <li>Aufgerufene Seiten</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Kontaktformular</h4>
                    <p className="text-slate-700 text-sm">
                      Bei Nutzung unseres Kontaktformulars erheben wir folgende Daten: Name, E-Mail-Adresse, 
                      Telefonnummer (optional), Unternehmen (optional) und Ihre Nachricht.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Zweck der Datenverarbeitung</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-slate-700 text-sm space-y-2">
                    <li>Bereitstellung der Website und ihrer Funktionalitäten</li>
                    <li>Gewährleistung der Systemsicherheit und -stabilität</li>
                    <li>Bearbeitung von Anfragen über das Kontaktformular</li>
                    <li>Verbesserung unserer Website (bei Einwilligung in Analytics)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Rechtsgrundlage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-sm">
                    Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) 
                    für die technische Bereitstellung der Website und Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) 
                    für die Bearbeitung von Anfragen.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5. Ihre Rechte</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-sm mb-4">Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
                  <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
                    <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                    <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                    <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                    <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                    <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                    <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
                  </ul>
                </CardContent>
              </Card>

              <div className="bg-primary-blue/10 p-6 rounded-lg">
                <h3 className="font-semibold text-navy mb-2">Kontakt Datenschutz</h3>
                <p className="text-slate-700 text-sm">
                  Bei Fragen zum Datenschutz kontaktieren Sie uns unter:<br />
                  E-Mail: datenschutz@castellconnect.de<br />
                  Telefon: 09325 391996
                </p>
              </div>
            </TabsContent>

            {/* AGB */}
            <TabsContent value="agb" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-navy mb-4">Allgemeine Geschäftsbedingungen</h2>
                <p className="text-slate-600">Gültig ab 01.01.2024</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>§ 1 Geltungsbereich</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-sm">
                    Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der CastellConnect GmbH 
                    und ihren Kunden über die Erbringung von Dienstleistungen im Bereich Webdesign, Online-Marketing und verwandten Services.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>§ 2 Vertragsschluss</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-sm">
                    Der Vertrag kommt durch die Annahme unseres schriftlichen Angebots durch den Kunden zustande. 
                    Mündliche Nebenabreden bedürfen der schriftlichen Bestätigung.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>§ 3 Leistungsumfang</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-700 text-sm">
                    Der Umfang unserer Leistungen ergibt sich aus der jeweiligen Projektbeschreibung. 
                    Änderungen und Ergänzungen bedürfen einer schriftlichen Vereinbarung.
                  </p>
                  <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
                    <li>Webdesign und -entwicklung</li>
                    <li>Suchmaschinenoptimierung (SEO)</li>
                    <li>Online-Marketing Services</li>
                    <li>Wartung und Support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>§ 4 Mitwirkungspflichten des Kunden</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-sm">
                    Der Kunde ist verpflichtet, alle für die Durchführung des Projekts erforderlichen Informationen, 
                    Materialien und Zugänge rechtzeitig zur Verfügung zu stellen. Verzögerungen durch fehlende 
                    Mitwirkung gehen zu Lasten des Kunden.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>§ 5 Vergütung und Zahlungsbedingungen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-700 text-sm">
                    Die Vergütung ergibt sich aus dem jeweiligen Angebot. Bei Projekten über 3.000€ erfolgt die Zahlung in Raten:
                  </p>
                  <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
                    <li>50% bei Projektbeginn</li>
                    <li>30% bei Zwischenabnahme</li>
                    <li>20% bei Projektabschluss</li>
                  </ul>
                  <p className="text-slate-700 text-sm">
                    Rechnungen sind innerhalb von 14 Tagen ohne Abzug zur Zahlung fällig.
                  </p>
                </CardContent>
              </Card>

              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Vollständige AGB</h3>
                    <p className="text-slate-600 text-sm">
                      Die kompletten Geschäftsbedingungen können Sie als PDF herunterladen.
                    </p>
                  </div>
                  <Button variant="outline" data-testid="download-agb">
                    <Download className="h-4 w-4 mr-2" />
                    PDF Download
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Cookie Settings */}
            <TabsContent value="cookies" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-navy mb-4">Cookie-Einstellungen</h2>
                <p className="text-slate-600">Verwalten Sie Ihre Cookie-Präferenzen</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Was sind Cookies?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-sm">
                    Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie eine Website besuchen. 
                    Sie helfen uns, die Website zu verbessern und Ihnen eine bessere Nutzererfahrung zu bieten.
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-4">
                {cookieTypes.map((type) => (
                  <Card key={type.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{type.title}</CardTitle>
                          <CardDescription className="text-sm mt-1">
                            {type.description}
                          </CardDescription>
                        </div>
                        <Switch
                          checked={cookieSettings[type.id as keyof typeof cookieSettings]}
                          onCheckedChange={(checked) => handleCookieUpdate(type.id, checked)}
                          disabled={type.locked}
                          data-testid={`cookie-${type.id}-switch`}
                        />
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-primary-blue hover:bg-navy"
                  data-testid="save-cookie-settings"
                >
                  Einstellungen speichern
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setCookieSettings({
                    necessary: true,
                    analytics: false,
                    marketing: false,
                    preferences: false
                  })}
                  data-testid="reject-all-cookies"
                >
                  Alle ablehnen
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setCookieSettings({
                    necessary: true,
                    analytics: true,
                    marketing: true,
                    preferences: true
                  })}
                  data-testid="accept-all-cookies"
                >
                  Alle akzeptieren
                </Button>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="font-semibold text-navy mb-4">Verwendete Cookie-Tools</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Google Analytics</h4>
                    <p className="text-slate-600">
                      Zur Analyse des Nutzerverhaltens (nur bei Einwilligung)
                    </p>
                    <a 
                      href="https://policies.google.com/privacy" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary-blue hover:underline inline-flex items-center"
                    >
                      Datenschutzerklärung <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Technische Cookies</h4>
                    <p className="text-slate-600">
                      Notwendig für die Funktion der Website (Session, CSRF-Schutz)
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">
            Rechtliche Fragen?
          </h2>
          <p className="text-slate-600 mb-6">
            Bei Fragen zu unseren rechtlichen Informationen oder zum Datenschutz 
            kontaktieren Sie uns gerne direkt.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary-blue hover:bg-navy" data-testid="legal-contact-email">
              <a href="mailto:datenschutz@castellconnect.de" className="flex items-center">
                E-Mail senden
              </a>
            </Button>
            <Button variant="outline" data-testid="legal-contact-phone">
              <a href="tel:+4909325391996" className="flex items-center">
                09325 391996
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
