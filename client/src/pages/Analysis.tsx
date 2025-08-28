import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Search, BarChart3, Target, CheckCircle, Clock, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { insertAnalysisSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { z } from "zod";

const analysisFormSchema = insertAnalysisSchema.extend({
  industry: z.string().optional(),
  region: z.string().optional(),
  goals: z.string().optional()
});

type AnalysisFormData = z.infer<typeof analysisFormSchema>;

export default function Analysis() {
  const { toast } = useToast();

  const form = useForm<AnalysisFormData>({
    resolver: zodResolver(analysisFormSchema),
    defaultValues: {
      url: "",
      name: "",
      email: "",
      phone: "",
      company: "",
      industry: "",
      region: "",
      goals: ""
    }
  });

  const analysisMutation = useMutation({
    mutationFn: async (data: AnalysisFormData) => {
      return apiRequest("POST", "/api/analysis", data);
    },
    onSuccess: () => {
      toast({
        title: "Analyse angefordert!",
        description: "Vielen Dank! Sie erhalten Ihren kostenlosen Website-Report innerhalb von 24 Stunden per E-Mail."
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: AnalysisFormData) => {
    analysisMutation.mutate(data);
  };

  const analysisFeatures = [
    {
      icon: Search,
      title: "SEO-Grundcheck",
      description: "Analyse Ihrer aktuellen Suchmaschinen-Sichtbarkeit und wichtiger Ranking-Faktoren"
    },
    {
      icon: BarChart3,
      title: "Performance-Test",
      description: "Ladezeiten-Analyse und Core Web Vitals für optimale Benutzererfahrung"
    },
    {
      icon: Target,
      title: "Conversion-Potentiale",
      description: "Identifikation von Schwachstellen und Optimierungsmöglichkeiten"
    }
  ];

  const checkCriteria = [
    "Website-Geschwindigkeit und Performance",
    "Mobile Optimierung und Responsive Design",
    "SEO On-Page Faktoren (Meta-Tags, Headlines, etc.)",
    "Technische SEO-Aspekte (Crawlbarkeit, Indexierung)",
    "Lokale SEO-Optimierung (Google My Business)",
    "User Experience und Benutzerführung",
    "Content-Qualität und Struktur",
    "Social Media Integration",
    "DSGVO-Compliance und Datenschutz",
    "Sicherheitsaspekte (SSL, Security Headers)",
    "Wettbewerbsvergleich in Ihrer Region",
    "Verbesserungsvorschläge und Prioritäten"
  ];

  const industries = [
    "Handwerk",
    "Gastronomie",
    "Einzelhandel",
    "Dienstleistungen",
    "Gesundheitswesen",
    "Rechtsberatung",
    "Immobilien",
    "Tourismus",
    "Bildung",
    "IT & Software",
    "Andere"
  ];

  const regions = [
    "München",
    "Nürnberg",
    "Augsburg",
    "Würzburg",
    "Regensburg",
    "Ingolstadt",
    "Erlangen",
    "Bamberg",
    "Bayreuth",
    "Landshut",
    "Andere bayerische Stadt",
    "Außerhalb Bayerns"
  ];

  const commonGoals = [
    "Mehr Besucher auf der Website",
    "Bessere Google-Rankings",
    "Mehr Kundenanfragen",
    "Online-Shop Optimierung",
    "Lokale Sichtbarkeit verbessern",
    "Modernere Website",
    "Bessere Benutzerfreundlichkeit",
    "Social Media Integration"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-primary-blue to-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-sand">Kostenlose</span> Website-Analyse
              </h1>
              <p className="text-xl text-slate-200 mb-8">
                Erfahren Sie in nur 24 Stunden, wie Sie Ihre Website optimieren können. 
                Unser detaillierter Report zeigt konkrete Verbesserungsmöglichkeiten auf.
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-sand" />
                  <span>100% kostenlos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-sand" />
                  <span>Report in 24h</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Download className="h-5 w-5 text-sand" />
                  <span>PDF-Download</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Website-Analyse Dashboard" 
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Analyse jetzt anfordern
            </h2>
            <p className="text-xl text-slate-600">
              Füllen Sie das Formular aus und erhalten Sie Ihren kostenlosen Website-Report.
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website-URL *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="https://ihre-website.de" 
                          {...field} 
                          data-testid="analysis-url-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ihr Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Vor- und Nachname" 
                            {...field} 
                            data-testid="analysis-name-input"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

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
                            data-testid="analysis-email-input"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefon (optional)</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel"
                            placeholder="09325 391996" 
                            {...field}
                            value={field.value || ""}
                            data-testid="analysis-phone-input"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Unternehmen (optional)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Ihr Unternehmen" 
                            {...field}
                            value={field.value || ""}
                            data-testid="analysis-company-input"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Branche</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="analysis-industry-select">
                              <SelectValue placeholder="Branche auswählen" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {industries.map((industry, index) => (
                              <SelectItem key={index} value={industry}>
                                {industry}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="region"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Region</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="analysis-region-select">
                              <SelectValue placeholder="Region auswählen" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {regions.map((region, index) => (
                              <SelectItem key={index} value={region}>
                                {region}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="goals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ihre Ziele (optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Was möchten Sie mit Ihrer Website erreichen? Wählen Sie aus: Mehr Besucher, bessere Google-Rankings, mehr Kundenanfragen..."
                          className="min-h-[100px]"
                          {...field} 
                          data-testid="analysis-goals-textarea"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="bg-white p-6 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-navy mb-4">Häufige Ziele unserer Kunden:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {commonGoals.map((goal, index) => (
                      <div key={index} className="text-sm text-slate-600 bg-slate-50 px-3 py-2 rounded">
                        {goal}
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary-blue hover:bg-navy text-white py-4 text-lg"
                  disabled={analysisMutation.isPending}
                  data-testid="analysis-submit-button"
                >
                  {analysisMutation.isPending ? "Wird analysiert..." : "Kostenlose Analyse anfordern"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* What We Check */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Unsere Prüfungs-Kriterien
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Diese Aspekte Ihrer Website werden in der kostenlosen Analyse detailliert untersucht.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {checkCriteria.map((criterion, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary-blue h-6 w-6 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 font-medium" data-testid={`check-criterion-${index}`}>
                    {criterion}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Was Sie erhalten
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ihr kostenloser Website-Report enthält alle wichtigen Analyseergebnisse 
              und konkrete Handlungsempfehlungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {analysisFeatures.map((feature, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary-blue p-4 rounded-full inline-block mb-6">
                  <feature.icon className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Report */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-6">
              Ergebnisformat
            </h2>
            <p className="text-xl text-slate-600">
              So könnte Ihr personalisierter Website-Report aussehen
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="border-l-4 border-primary-blue pl-6 mb-8">
              <h3 className="text-xl font-semibold text-navy mb-2">Beispiel-Report für: musterfirma.de</h3>
              <p className="text-slate-600">Handwerksbetrieb aus München, analysiert am 15.03.2024</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-2">45/100</div>
                <div className="text-sm text-slate-600">SEO-Score</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 mb-2">3.2s</div>
                <div className="text-sm text-slate-600">Ladezeit</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">Mobile OK</div>
                <div className="text-sm text-slate-600">Responsive</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-navy">Top-Empfehlungen:</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 bg-slate-50 p-4 rounded-lg">
                  <div className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                  <div>
                    <div className="font-medium text-slate-900">Meta-Descriptions fehlen</div>
                    <div className="text-sm text-slate-600">Wichtige Seiten haben keine aussagekräftigen Meta-Descriptions</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 bg-slate-50 p-4 rounded-lg">
                  <div className="bg-orange-100 text-orange-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                  <div>
                    <div className="font-medium text-slate-900">Bilder zu groß</div>
                    <div className="text-sm text-slate-600">Bildoptimierung kann Ladezeit um 60% verbessern</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 bg-slate-50 p-4 rounded-lg">
                  <div className="bg-yellow-100 text-yellow-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                  <div>
                    <div className="font-medium text-slate-900">Google My Business unvollständig</div>
                    <div className="text-sm text-slate-600">Lokale Sichtbarkeit kann um 200% gesteigert werden</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-primary-blue/10 rounded-lg">
              <p className="text-sm text-slate-600 text-center">
                📧 Der vollständige Report (8-12 Seiten) wird innerhalb von 24 Stunden per E-Mail zugesendet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für Ihre kostenlose Website-Analyse?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Starten Sie jetzt und erfahren Sie, wie Sie Ihre Website erfolgreich optimieren können.
          </p>
          
          <Button 
            onClick={() => document.querySelector('[data-testid="analysis-url-input"]')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-sand text-navy hover:bg-yellow-200 px-8 py-4 text-lg font-semibold"
            data-testid="analysis-cta-scroll"
          >
            Jetzt kostenlos analysieren lassen
          </Button>
        </div>
      </section>
    </div>
  );
}
