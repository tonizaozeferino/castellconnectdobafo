import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Mail, CheckCircle, Calendar, Download, Users, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { insertNewsletterSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { z } from "zod";

const newsletterFormSchema = insertNewsletterSchema.extend({
  topics: z.array(z.string()).min(1, "Bitte wählen Sie mindestens ein Thema aus")
});

type NewsletterFormData = z.infer<typeof newsletterFormSchema>;

export default function Newsletter() {
  const { toast } = useToast();

  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: "",
      topics: []
    }
  });

  const newsletterMutation = useMutation({
    mutationFn: async (data: NewsletterFormData) => {
      return apiRequest("POST", "/api/newsletter", data);
    },
    onSuccess: () => {
      toast({
        title: "Newsletter-Anmeldung erfolgreich!",
        description: "Vielen Dank für Ihre Anmeldung. Sie erhalten eine Bestätigungs-E-Mail."
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Fehler bei der Anmeldung",
        description: "Bitte versuchen Sie es erneut oder kontaktieren Sie uns.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: NewsletterFormData) => {
    newsletterMutation.mutate(data);
  };

  const newsletterTopics = [
    {
      id: "seo-tipps",
      title: "SEO & Online-Marketing",
      description: "Wöchentliche Tipps für bessere Google-Rankings und mehr Website-Besucher",
      frequency: "Wöchentlich",
      icon: "🔍"
    },
    {
      id: "webdesign-trends",
      title: "Webdesign & UX",
      description: "Neue Design-Trends, Usability-Tipps und technische Innovationen",
      frequency: "Alle 2 Wochen",
      icon: "🎨"
    },
    {
      id: "social-media",
      title: "Social Media Marketing",
      description: "Strategien, Tools und Best Practices für erfolgreiche Social Media Präsenz",
      frequency: "Wöchentlich",
      icon: "📱"
    },
    {
      id: "brancheninsights",
      title: "Branchenspezifische Insights",
      description: "Maßgeschneiderte Tipps für Handwerk, Gastronomie und lokale Dienstleister",
      frequency: "Monatlich",
      icon: "🏢"
    },
    {
      id: "erfolgsgeschichten",
      title: "Erfolgsgeschichten & Case Studies",
      description: "Echte Projekte und messbare Ergebnisse unserer Kunden",
      frequency: "Monatlich",
      icon: "📈"
    },
    {
      id: "tool-tipps",
      title: "Tool-Empfehlungen",
      description: "Kostenlose und kostenpflichtige Tools für Ihr Online-Marketing",
      frequency: "Alle 2 Wochen",
      icon: "🛠️"
    }
  ];

  const recentNewsletters = [
    {
      title: "Die 10 wichtigsten SEO-Updates 2024",
      date: "15. März 2024",
      category: "SEO & Online-Marketing",
      excerpt: "Google's neueste Algorithm-Updates und was sie für lokale Unternehmen bedeuten.",
      downloadUrl: "#"
    },
    {
      title: "Social Media Trends für Restaurants",
      date: "10. März 2024",
      category: "Social Media Marketing",
      excerpt: "Wie Gastronomiebetriebe mit authentischem Content mehr Gäste gewinnen.",
      downloadUrl: "#"
    },
    {
      title: "Website-Performance optimieren",
      date: "5. März 2024",
      category: "Webdesign & UX",
      excerpt: "5 einfache Schritte zu einer schnelleren Website und besseren User Experience.",
      downloadUrl: "#"
    },
    {
      title: "Handwerker-Marketing 2024",
      date: "28. Februar 2024",
      category: "Branchenspezifische Insights",
      excerpt: "Digitale Strategien für mehr Aufträge im Handwerk - mit konkreten Beispielen.",
      downloadUrl: "#"
    }
  ];

  const newsletterBenefits = [
    "Exklusive Inhalte nur für Abonnenten",
    "Praktische Checklisten und Vorlagen",
    "Früher Zugang zu neuen Tools und Features",
    "Kostenlose Webinar-Einladungen",
    "Persönliche Tipps von unseren Experten",
    "Keine Werbung, nur wertvolle Inhalte"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-primary-blue to-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-sand">Newsletter</span> für digitalen Erfolg
              </h1>
              <p className="text-xl text-slate-200 mb-8">
                Bleiben Sie auf dem Laufenden mit wertvollen Tipps, Trends und 
                Strategien für Ihr Online-Marketing. Kostenlos und jederzeit kündbar.
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-sand" />
                  <span>2.500+ Abonnenten</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-sand" />
                  <span>DSGVO-konform</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-sand" />
                  <span>Jederzeit kündbar</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Newsletter Marketing und E-Mail Kampagnen" 
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Topics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Wählen Sie Ihre Themen
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Abonnieren Sie nur die Newsletter, die für Ihr Business relevant sind. 
              Sie können Ihre Auswahl jederzeit anpassen.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {newsletterTopics.map((topic, index) => (
                    <FormField
                      key={topic.id}
                      control={form.control}
                      name="topics"
                      render={({ field }) => (
                        <FormItem>
                          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                            <CardHeader>
                              <div className="flex items-start space-x-4">
                                <div className="text-3xl">{topic.icon}</div>
                                <div className="flex-1">
                                  <div className="flex items-center space-x-3">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(topic.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, topic.id])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== topic.id
                                                )
                                              )
                                        }}
                                        data-testid={`newsletter-topic-${index}`}
                                      />
                                    </FormControl>
                                    <CardTitle className="text-lg">{topic.title}</CardTitle>
                                  </div>
                                  <CardDescription className="mt-2 text-sm">
                                    {topic.description}
                                  </CardDescription>
                                  <div className="mt-3 flex items-center space-x-2">
                                    <Calendar className="h-4 w-4 text-primary-blue" />
                                    <span className="text-xs text-slate-500">{topic.frequency}</span>
                                  </div>
                                </div>
                              </div>
                            </CardHeader>
                          </Card>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
                <FormMessage />

                <div className="bg-slate-50 rounded-xl p-8">
                  <h3 className="text-lg font-semibold text-navy mb-4">Newsletter-Anmeldung</h3>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-Mail-Adresse *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="ihre@email.de" 
                            {...field} 
                            data-testid="newsletter-email-input"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="mt-6 p-4 bg-white rounded-lg border border-slate-200">
                    <h4 className="font-medium text-navy mb-3">Was Sie erhalten:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {newsletterBenefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary-blue flex-shrink-0" />
                          <span className="text-sm text-slate-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full mt-6 bg-primary-blue hover:bg-navy text-white py-3"
                    disabled={newsletterMutation.isPending}
                    data-testid="newsletter-submit-button"
                  >
                    {newsletterMutation.isPending ? "Wird angemeldet..." : "Jetzt anmelden"}
                  </Button>

                  <p className="text-xs text-slate-500 mt-4 text-center">
                    Mit der Anmeldung stimmen Sie unseren <a href="/rechtliches#datenschutz" className="text-primary-blue hover:underline">Datenschutzbestimmungen</a> zu. 
                    Sie können sich jederzeit mit einem Klick abmelden.
                  </p>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* Recent Newsletters */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Bisherige Newsletter-Ausgaben
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Schauen Sie sich an, welche wertvollen Inhalte unsere Abonnenten bereits erhalten haben.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentNewsletters.map((newsletter, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg text-navy mb-2">{newsletter.title}</CardTitle>
                      <CardDescription>{newsletter.excerpt}</CardDescription>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      data-testid={`download-newsletter-${index}`}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary-blue" />
                      <span className="text-slate-600">{newsletter.date}</span>
                    </div>
                    <span className="bg-primary-blue/10 text-primary-blue px-3 py-1 rounded-full text-xs">
                      {newsletter.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DSGVO Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-xl p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primary-blue p-3 rounded-full">
                <CheckCircle className="text-white h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy mb-4">
                  Datenschutz & DSGVO-Compliance
                </h3>
                <div className="space-y-4 text-slate-700">
                  <p>
                    Ihre Daten sind bei uns sicher. Wir verwenden ein Double-Opt-In-Verfahren 
                    und geben Ihre E-Mail-Adresse niemals an Dritte weiter.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary-blue" />
                      <span>SSL-verschlüsselte Datenübertragung</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary-blue" />
                      <span>Server-Standort in Deutschland</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary-blue" />
                      <span>Jederzeit kündbar mit einem Klick</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary-blue" />
                      <span>Keine Weitergabe an Dritte</span>
                    </li>
                  </ul>
                  <p className="text-sm">
                    Weitere Informationen finden Sie in unserer{" "}
                    <a href="/rechtliches#datenschutz" className="text-primary-blue hover:underline">
                      Datenschutzerklärung
                    </a>.
                  </p>
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
            Verpassen Sie keine wichtigen Updates!
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Melden Sie sich jetzt an und erhalten Sie wertvolle Tipps für Ihr digitales Marketing.
          </p>
          
          <Button 
            onClick={() => document.querySelector('[data-testid="newsletter-email-input"]')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-sand text-navy hover:bg-yellow-200 px-8 py-4 text-lg font-semibold"
            data-testid="newsletter-cta-scroll"
          >
            <Bell className="mr-2 h-5 w-5" />
            Jetzt Newsletter abonnieren
          </Button>
        </div>
      </section>
    </div>
  );
}
