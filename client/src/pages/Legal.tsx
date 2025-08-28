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
                      <strong>António Freiherr von Strachwitz</strong><br />
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
                      <strong>Telefon:</strong> 09325 391 99 63<br />
                      <strong>E-Mail:</strong> webmaster@castellconnect.de
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <strong>António Freiherr von Strachwitz</strong><br />
                      Wüstenfelden 3<br />
                      97355 Castell<br />
                      Deutschland
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Haftungsausschluss (Disclaimer)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Haftung für Inhalte</h4>
                    <p className="text-slate-600">
                      Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    </p>
                    <p className="text-slate-600 mt-2">
                      Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Haftung für Links</h4>
                    <p className="text-slate-600">
                      Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    </p>
                    <p className="text-slate-600 mt-2">
                      Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Urheberrecht</h4>
                    <p className="text-slate-600">
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                    <p className="text-slate-600 mt-2">
                      Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Online-Streitbeilegung</h4>
                    <p className="text-slate-600">
                      Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                      <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary underline">https://ec.europa.eu/consumers/odr</a>
                    </p>
                    <p className="text-slate-600 mt-2">
                      Unsere E-Mail-Adresse finden Sie oben im Impressum.
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
                    <strong>António Freiherr von Strachwitz</strong><br />
                    Wüstenfelden 3<br />
                    97355 Castell<br />
                    Deutschland<br /><br />
                    E-Mail: webmaster@castellconnect.de<br />
                    Telefon: 09325 391 99 63
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Beim Besuch der Website</h4>
                    <p className="text-slate-700 text-sm mb-3">
                      Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sog. Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
                    </p>
                    <ul className="list-disc list-inside text-slate-700 text-sm mt-2 space-y-1">
                      <li>IP-Adresse des anfragenden Rechners</li>
                      <li>Datum und Uhrzeit des Zugriffs</li>
                      <li>Name und URL der abgerufenen Datei</li>
                      <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                      <li>verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
                    </ul>
                    <p className="text-slate-700 text-sm mt-3">
                      Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:
                    </p>
                    <ul className="list-disc list-inside text-slate-700 text-sm mt-2 space-y-1">
                      <li>Gewährleistung eines reibungslosen Verbindungsaufbaus der Website</li>
                      <li>Gewährleistung einer komfortablen Nutzung unserer Website</li>
                      <li>Auswertung der Systemsicherheit und -stabilität</li>
                    </ul>
                    <p className="text-slate-700 text-sm mt-2 font-medium">
                      Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Bei Kontaktaufnahme per E-Mail</h4>
                    <p className="text-slate-700 text-sm">
                      Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen mitgeteilten Daten (z. B. Name, E-Mail-Adresse, Telefonnummer, Inhalt der Nachricht) gespeichert, um Ihre Anfrage zu beantworten.
                    </p>
                    <p className="text-slate-700 text-sm mt-2 font-medium">
                      Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen).
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Weitergabe von Daten</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-sm">
                    Eine Übermittlung Ihrer persönlichen Daten an Dritte findet nur statt, soweit dies für die Abwicklung von Vertragsverhältnissen erforderlich ist oder Sie ausdrücklich eingewilligt haben.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Ihre Rechte</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-sm mb-3">Sie haben das Recht:</p>
                  <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
                    <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen</li>
                    <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger Daten zu verlangen</li>
                    <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten Daten zu verlangen</li>
                    <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung zu verlangen</li>
                    <li>gemäß Art. 20 DSGVO Datenübertragbarkeit zu verlangen</li>
                    <li>gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung einzulegen</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5. Beschwerderecht</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-sm">
                    Sie haben das Recht, sich bei der zuständigen Datenschutz-Aufsichtsbehörde zu beschweren.<br /><br />
                    Zuständig ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>6. Speicherdauer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-sm">
                    Personenbezogene Daten werden gelöscht, sobald der Zweck der Speicherung entfällt oder Sie Ihre Einwilligung widerrufen, es sei denn gesetzliche Aufbewahrungspflichten bestehen.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>7. SSL- bzw. TLS-Verschlüsselung</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-sm">
                    Diese Seite nutzt aus Sicherheitsgründen eine SSL-bzw. TLS-Verschlüsselung.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* AGB */}
            <TabsContent value="agb" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-navy mb-4">Allgemeine Geschäftsbedingungen (AGB)</h2>
                <p className="text-slate-600">
                  António Freiherr von Strachwitz<br />
                  Wüstenfelden 3, 97355 Castell<br />
                  Stand: August 2025
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>1. Geltungsbereich</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-sm">
                    Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen Strachwitz Consulting (im Folgenden "Berater") und seinen Kunden. Abweichende Bedingungen des Kunden gelten nur, wenn sie ausdrücklich schriftlich anerkannt wurden.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Vertragsabschluss</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-sm">
                    Ein Vertrag kommt durch Bestätigung per E-Mail oder durch Unterzeichnung eines Angebots zustande. Angebote sind freibleibend, sofern nicht ausdrücklich als verbindlich bezeichnet.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Leistungen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-700 text-sm">
                    Der Berater erbringt Dienstleistungen in den Bereichen:
                  </p>
                  <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
                    <li>Interim-Management</li>
                    <li>Strategische Beratung und Coaching</li>
                    <li>Schulungen, Workshops und Seminare</li>
                  </ul>
                  <p className="text-slate-700 text-sm mt-3">
                    Die konkrete Leistung ergibt sich aus dem jeweiligen Angebot. Ein bestimmter wirtschaftlicher Erfolg wird nicht geschuldet.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Vergütung & Zahlungsbedingungen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="list-disc list-inside text-slate-700 text-sm space-y-2">
                    <li>Die Vergütung erfolgt auf Basis eines vereinbarten Tagessatzes oder als All-in-Angebot</li>
                    <li>Nebenkosten (Reisezeit, Spesen, Material) werden gesondert berechnet, sofern nicht ausdrücklich "All-in" vereinbart</li>
                    <li>Rechnungen sind ohne Abzug innerhalb von 14 Tagen nach Erhalt zahlbar</li>
                    <li>Bei Zahlungsverzug behält sich der Berater vor, Verzugszinsen nach §288 BGB geltend zu machen</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5. Absagen & Stornierungen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-700 text-sm mb-3">
                    Dies gilt für Workshops, Schulungen und vereinbarte Beratungs-/Projekttage:
                  </p>
                  <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
                    <li>≥14 Tage vor Termin: kostenfrei</li>
                    <li>7–13 Tage vor Termin: 50 % des Honorars</li>
                    <li>&lt;48 Stunden vor Termin oder Nichterscheinen: 100 % des Honorars</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>6. Haftung</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="list-disc list-inside text-slate-700 text-sm space-y-2">
                    <li>Der Berater haftet nur für Vorsatz und grobe Fahrlässigkeit</li>
                    <li>Eine Haftung für indirekte Schäden, entgangenen Gewinn oder Folgeschäden ist ausgeschlossen</li>
                    <li>Für Leistungen und Produkte Dritter (z. B. Softwareanbieter, Dienstleister) wird keine Haftung übernommen</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>7. Vertraulichkeit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-sm">
                    Beide Parteien verpflichten sich zur Vertraulichkeit über alle im Rahmen der Zusammenarbeit erlangten Informationen. Diese Pflicht gilt auch nach Beendigung der Zusammenarbeit.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>8. Urheber- & Nutzungsrechte</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-sm">
                    Alle vom Berater erstellten Konzepte, Unterlagen und Präsentationen bleiben dessen geistiges Eigentum. Der Kunde erhält daran ein einfaches, nicht übertragbares Nutzungsrecht für interne Zwecke. Eine Weitergabe an Dritte ist nur mit schriftlicher Zustimmung erlaubt.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>9. Änderungen & Schriftform</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-sm">
                    Ergänzungen und Änderungen dieser AGB oder der Verträge bedürfen der Schriftform (z. B. E-Mail, PDF mit Signatur).
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>10. Gerichtsstand & Recht</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-sm">
                    Es gilt deutsches Recht. Erfüllungsort und Gerichtsstand ist Würzburg, soweit gesetzlich zulässig.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>11. Salvatorische Klausel</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-sm">
                    Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt die Gültigkeit der übrigen Regelungen unberührt.
                  </p>
                </CardContent>
              </Card>
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
