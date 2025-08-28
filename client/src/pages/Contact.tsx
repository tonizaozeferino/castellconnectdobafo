import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { MapPin, Phone, Mail, Clock, Upload, CheckCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { z } from "zod";

const contactFormSchema = insertContactSchema.extend({
  service: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  file: z.any().optional()
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      service: "",
      budget: "",
      timeline: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      // Remove file from data as it's handled separately
      const { file, ...contactData } = data;
      return apiRequest("POST", "/api/contact", contactData);
    },
    onSuccess: () => {
      toast({
        title: "Nachricht gesendet!",
        description: "Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden bei Ihnen."
      });
      form.reset();
      setUploadedFile(null);
    },
    onError: () => {
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        toast({
          title: "Datei zu groß",
          description: "Bitte wählen Sie eine Datei unter 10MB.",
          variant: "destructive"
        });
        return;
      }
      setUploadedFile(file);
    }
  };

  const services = [
    "Webdesign & Development",
    "SEO & Local Marketing", 
    "Social Media Management",
    "E-Mail Marketing",
    "Voice & Chatbots",
    "KI-Visual Produktion",
    "Online Advertising",
    "Komplettpaket"
  ];

  const budgetRanges = [
    "Unter 2.500€",
    "2.500€ - 5.000€",
    "5.000€ - 10.000€",
    "10.000€ - 25.000€",
    "Über 25.000€"
  ];

  const timelines = [
    "Sofort",
    "In den nächsten 4 Wochen",
    "In den nächsten 3 Monaten",
    "In den nächsten 6 Monaten",
    "Noch in Planung"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-primary-blue to-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-sand">Kontakt</span> aufnehmen
          </h1>
          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Lassen Sie uns über Ihr digitales Projekt sprechen. Wir freuen uns auf Ihre Nachricht 
            und antworten innerhalb von 24 Stunden.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-navy mb-6">Projektanfrage senden</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Ihr vollständiger Name" 
                                {...field} 
                                data-testid="contact-name-input"
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
                            <FormLabel>E-Mail *</FormLabel>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="ihre@email.de" 
                                {...field} 
                                data-testid="contact-email-input"
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
                            <FormLabel>Telefon</FormLabel>
                            <FormControl>
                              <Input 
                                type="tel"
                                placeholder="09325 391996" 
                                {...field}
                                value={field.value || ""}
                                data-testid="contact-phone-input"
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
                            <FormLabel>Unternehmen</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Ihr Unternehmen" 
                                {...field}
                                value={field.value || ""}
                                data-testid="contact-company-input"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Gewünschte Leistung</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="contact-service-select">
                                  <SelectValue placeholder="Leistung auswählen" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {services.map((service, index) => (
                                  <SelectItem key={index} value={service}>
                                    {service}
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
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Budget</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="contact-budget-select">
                                  <SelectValue placeholder="Budget auswählen" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {budgetRanges.map((range, index) => (
                                  <SelectItem key={index} value={range}>
                                    {range}
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
                        name="timeline"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Zeitrahmen</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="contact-timeline-select">
                                  <SelectValue placeholder="Zeitrahmen auswählen" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {timelines.map((timeline, index) => (
                                  <SelectItem key={index} value={timeline}>
                                    {timeline}
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
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ihre Nachricht *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Beschreiben Sie Ihr Projekt und Ihre Ziele..."
                              className="min-h-[120px]"
                              {...field} 
                              data-testid="contact-message-textarea"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* File Upload */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Datei anhängen (optional)
                      </label>
                      <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-primary-blue transition-colors">
                        <input
                          type="file"
                          onChange={handleFileUpload}
                          className="hidden"
                          id="file-upload"
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          data-testid="contact-file-input"
                        />
                        <label htmlFor="file-upload" className="cursor-pointer">
                          {uploadedFile ? (
                            <div className="flex items-center justify-center space-x-2">
                              <CheckCircle className="text-green-600 h-5 w-5" />
                              <span className="text-slate-700">{uploadedFile.name}</span>
                            </div>
                          ) : (
                            <div>
                              <Upload className="mx-auto h-8 w-8 text-slate-400 mb-2" />
                              <p className="text-slate-600">Klicken Sie hier oder ziehen Sie eine Datei hinein</p>
                              <p className="text-xs text-slate-500 mt-1">PDF, DOC, JPG, PNG (max. 10MB)</p>
                            </div>
                          )}
                        </label>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-primary-blue hover:bg-navy text-white py-3"
                      disabled={contactMutation.isPending}
                      data-testid="contact-submit-button"
                    >
                      {contactMutation.isPending ? "Wird gesendet..." : "Nachricht senden"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-slate-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-navy mb-6">Kontaktinformationen</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-blue p-3 rounded-full">
                      <MapPin className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium text-navy">Adresse</h4>
                      <p className="text-slate-600">
                        Musterstraße 123<br />
                        80331 München<br />
                        Bayern
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-blue p-3 rounded-full">
                      <Phone className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium text-navy">Telefon</h4>
                      <a href="tel:+4909325391996" className="text-slate-600 hover:text-primary-blue" data-testid="contact-phone-link">
                        09325 391996
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-blue p-3 rounded-full">
                      <Mail className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium text-navy">E-Mail</h4>
                      <a href="mailto:info@castellconnect.de" className="text-slate-600 hover:text-primary-blue" data-testid="contact-email-link">
                        info@castellconnect.de
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-blue p-3 rounded-full">
                      <Clock className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium text-navy">Bürozeiten</h4>
                      <p className="text-slate-600">
                        Montag - Freitag<br />
                        9:00 - 18:00 Uhr
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-navy mb-6">Schnelle Antwort garantiert</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-primary-blue h-5 w-5" />
                    <span className="text-slate-700">Antwort innerhalb von 24 Stunden</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-primary-blue h-5 w-5" />
                    <span className="text-slate-700">Kostenlose Erstberatung</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-primary-blue h-5 w-5" />
                    <span className="text-slate-700">Unverbindliches Angebot</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Booking */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="bg-primary-blue p-4 rounded-full inline-block mb-6">
              <Calendar className="text-white h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              Direkten Beratungstermin buchen
            </h2>
            <p className="text-slate-600 mb-8">
              Bevorzugen Sie ein persönliches Gespräch? Buchen Sie direkt einen 30-minütigen 
              Beratungstermin in unserem Online-Kalender.
            </p>
            
            <div className="bg-slate-50 p-6 rounded-lg mb-8">
              <p className="text-sm text-slate-600">
                📅 Calendly-Integration würde hier implementiert werden<br />
                Verfügbare Zeiten: Mo-Fr 9:00-18:00 Uhr
              </p>
            </div>

            <Button 
              className="bg-primary-blue hover:bg-navy text-white px-8 py-3"
              data-testid="calendar-booking-button"
            >
              Termin buchen
            </Button>
          </div>
        </div>
      </section>

      {/* Map & Directions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">So finden Sie uns</h2>
            <p className="text-slate-600">Besuchen Sie uns in unserem Münchner Büro</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-slate-100 rounded-xl p-8 h-80 flex items-center justify-center">
                <p className="text-slate-500 text-center">
                  🗺️ Google Maps Integration<br />
                  Musterstraße 123, 80331 München
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-navy">Anfahrt</h3>
              
              <div>
                <h4 className="font-medium text-navy mb-2">🚗 Mit dem Auto</h4>
                <p className="text-slate-600 text-sm">
                  Parkmöglichkeiten direkt vor dem Gebäude. 
                  Kostenlose Parkplätze für Kunden verfügbar.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-navy mb-2">🚇 Mit öffentlichen Verkehrsmitteln</h4>
                <p className="text-slate-600 text-sm">
                  U-Bahn: Marienplatz (U3, U6) - 5 Min. Fußweg<br />
                  S-Bahn: Marienplatz (alle S-Bahnen) - 5 Min. Fußweg
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-sm text-slate-600">
                  💡 <strong>Tipp:</strong> Bei Terminen vor Ort können wir Ihnen einen 
                  kostenlosen Parkplatz reservieren. Geben Sie uns einfach Bescheid!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Protection Notice */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold text-navy mb-4">Datenschutz-Hinweis</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben. 
              Mit dem Absenden stimmen Sie unserer <a href="/rechtliches#datenschutz" className="text-primary-blue hover:underline">Datenschutzerklärung</a> zu. 
              Sie können Ihre Einwilligung jederzeit widerrufen.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
