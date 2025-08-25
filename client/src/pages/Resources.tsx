import { BookOpen, Download, Video, Wrench, Search, BarChart3, ArrowRight, FileText, Calendar, Users } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";

export default function Resources() {
  const blogCategories = [
    {
      title: "SEO & Online-Marketing",
      description: "Tipps und Strategien für bessere Sichtbarkeit",
      icon: Search,
      articleCount: 25,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Webdesign & UX",
      description: "Design-Trends und Benutzerfreundlichkeit",
      icon: BarChart3,
      articleCount: 18,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Social Media Marketing",
      description: "Erfolgreiche Social-Media-Strategien",
      icon: Users,
      articleCount: 22,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Brancheninsights",
      description: "Spezifische Tipps für verschiedene Branchen",
      icon: FileText,
      articleCount: 15,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const guides = [
    {
      title: "SEO-Leitfaden für Handwerker",
      description: "Kompletter Guide für lokale Suchmaschinenoptimierung",
      format: "PDF Download",
      pages: "24 Seiten",
      downloadUrl: "#"
    },
    {
      title: "Social Media für Restaurants",
      description: "Praktische Anleitung für Food-Content und Gäste-Engagement",
      format: "PDF Download", 
      pages: "18 Seiten",
      downloadUrl: "#"
    },
    {
      title: "DSGVO für Websites",
      description: "Rechtssicherer Betrieb Ihrer Website und Online-Marketing",
      format: "PDF Download",
      pages: "32 Seiten", 
      downloadUrl: "#"
    },
    {
      title: "Google My Business Optimierung",
      description: "Schritt-für-Schritt Anleitung für lokale Unternehmen",
      format: "PDF Download",
      pages: "16 Seiten",
      downloadUrl: "#"
    }
  ];

  const templates = [
    {
      title: "Content-Kalender Vorlage",
      description: "Excel-Template für Social Media Planung",
      type: "Excel Template",
      downloadUrl: "#"
    },
    {
      title: "Website-Briefing Formular", 
      description: "Alle wichtigen Fragen für Ihr Website-Projekt",
      type: "PDF Formular",
      downloadUrl: "#"
    },
    {
      title: "SEO-Checkliste",
      description: "44-Punkte Checkliste für Ihre Website-Optimierung",
      type: "PDF Checkliste",
      downloadUrl: "#"
    },
    {
      title: "Social Media Style Guide",
      description: "Template für einheitliche Marken-Kommunikation",
      type: "Design Template",
      downloadUrl: "#"
    }
  ];

  const upcomingWebinars = [
    {
      title: "Lokale SEO für Handwerker",
      date: "15. März 2024",
      time: "14:00 - 15:30 Uhr",
      description: "Wie Sie mit lokaler SEO mehr Kunden in Ihrer Region gewinnen",
      registrationUrl: "#"
    },
    {
      title: "Restaurant-Marketing 2024",
      date: "22. März 2024", 
      time: "10:00 - 11:30 Uhr",
      description: "Digitale Strategien für mehr Gäste und Umsatz",
      registrationUrl: "#"
    },
    {
      title: "DSGVO-konforme Website",
      date: "29. März 2024",
      time: "16:00 - 17:00 Uhr", 
      description: "Rechtssicherheit für Ihre Online-Präsenz",
      registrationUrl: "#"
    }
  ];

  const tools = [
    {
      title: "Mini-SEO-Check",
      description: "Schnelle Analyse Ihrer Website-Performance",
      type: "Kostenloses Tool",
      url: "#",
      features: ["Ladezeiten-Test", "Mobile-Optimierung", "Grundlegende SEO-Faktoren"]
    },
    {
      title: "Performance-Test",
      description: "Umfassende Website-Geschwindigkeitsanalyse",
      type: "Kostenloses Tool", 
      url: "#",
      features: ["Core Web Vitals", "Optimierungsvorschläge", "Detaillierter Report"]
    },
    {
      title: "Content-Planer",
      description: "Planen Sie Ihre Social Media Posts im Voraus",
      type: "Beta-Tool",
      url: "#",
      features: ["Redaktionskalender", "Multi-Platform", "Team-Collaboration"]
    }
  ];

  const featuredArticles = [
    {
      title: "Die 10 wichtigsten SEO-Trends 2024",
      category: "SEO & Online-Marketing",
      readTime: "8 min",
      excerpt: "Erfahren Sie, welche SEO-Strategien in diesem Jahr entscheidend für Ihren Erfolg sind.",
      publishDate: "5. März 2024",
      author: "Lisa Schneider",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "Social Media für lokale Unternehmen",
      category: "Social Media Marketing", 
      readTime: "12 min",
      excerpt: "Wie kleine und mittlere Unternehmen Social Media effektiv für sich nutzen können.",
      publishDate: "28. Februar 2024",
      author: "Michael Weber",
      imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "Website-Relaunch Checkliste",
      category: "Webdesign & UX",
      readTime: "15 min", 
      excerpt: "Alles was Sie bei einem Website-Relaunch beachten müssen - von der Planung bis zum Launch.",
      publishDate: "20. Februar 2024",
      author: "Anna Müller",
      imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    }
  ];

  const showcaseProjects = [
    {
      title: "Handwerk Website Showcase",
      description: "Moderne Websites für Handwerksbetriebe in Bayern",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      features: ["Online-Terminbuchung", "Projekt-Galerie", "Responsive Design"]
    },
    {
      title: "Restaurant Website Gallery",
      description: "Appetitliche Websites für Gastronomie-Betriebe",
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      features: ["Reservierungssystem", "Speisekarten", "Event-Buchung"]
    },
    {
      title: "Service Website Templates", 
      description: "Professionelle Websites für Dienstleister",
      imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      features: ["Terminbuchung", "DSGVO-konform", "Mobile-optimiert"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-primary-blue to-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-sand">Ressourcen</span> für Ihren digitalen Erfolg
          </h1>
          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Praktische Leitfäden, kostenlose Tools, Webinare und Insights – 
            alles was Sie für erfolgreiches Online-Marketing brauchen.
          </p>
          <CTAButton 
            href="#blog" 
            variant="sand" 
            size="lg"
            testId="resources-hero-cta"
          >
            Entdecken Sie unsere Ressourcen
          </CTAButton>
        </div>
      </section>

      {/* Blog Categories */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Blog-Kategorien
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Regelmäßige Insights und praktische Tipps zu allen Aspekten 
              des digitalen Marketings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogCategories.map((category, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className={`p-4 rounded-full inline-block mb-6 ${category.color}`}>
                  <category.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">{category.title}</h3>
                <p className="text-slate-600 mb-4">{category.description}</p>
                <div className="text-sm text-slate-500">{category.articleCount} Artikel</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Aktuelle Artikel
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Die neuesten Insights und Trends aus der Welt des digitalen Marketings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-primary-blue/10 text-primary-blue px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <span className="text-slate-500 text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">{article.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-slate-500">
                      {article.publishDate} • {article.author}
                    </div>
                    <div className="text-primary-blue font-medium hover:text-navy inline-flex items-center text-sm">
                      Lesen <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <CTAButton href="#" testId="all-articles-cta">
              Alle Artikel ansehen
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Leitfäden & E-Books
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Umfassende Anleitungen und praktische Ratgeber für verschiedene 
              Aspekte des digitalen Marketings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((guide, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-blue p-4 rounded-full flex-shrink-0">
                    <Download className="text-white h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-navy mb-3">{guide.title}</h3>
                    <p className="text-slate-600 mb-4">{guide.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-500">
                        {guide.format} • {guide.pages}
                      </div>
                      <button className="bg-primary-blue text-white px-4 py-2 rounded-lg hover:bg-navy transition-colors" data-testid={`download-guide-${index}`}>
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Vorlagen & Templates
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Praktische Vorlagen und Checklisten für Ihr Marketing und 
              Ihre Website-Projekte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="bg-primary-blue/10 p-3 rounded-full inline-block mb-4">
                  <FileText className="text-primary-blue h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-3">{template.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{template.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{template.type}</span>
                  <button className="text-primary-blue font-medium hover:text-navy text-sm" data-testid={`download-template-${index}`}>
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Webinare & Workshops
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Lernen Sie von unseren Experten in kostenlosen Online-Webinaren 
              und interaktiven Workshops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingWebinars.map((webinar, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8">
                <div className="bg-primary-blue p-4 rounded-full inline-block mb-6">
                  <Video className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">{webinar.title}</h3>
                <p className="text-slate-600 mb-6">{webinar.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="text-primary-blue h-4 w-4" />
                    <span className="text-sm text-slate-700">{webinar.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Video className="text-primary-blue h-4 w-4" />
                    <span className="text-sm text-slate-700">{webinar.time}</span>
                  </div>
                </div>
                <button className="w-full bg-primary-blue text-white py-3 rounded-lg hover:bg-navy transition-colors" data-testid={`register-webinar-${index}`}>
                  Jetzt anmelden
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Tool-Ecke
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Kostenlose Online-Tools für eine schnelle Analyse und Optimierung 
              Ihrer digitalen Präsenz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="bg-primary-blue p-4 rounded-full inline-block mb-6">
                  <Wrench className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">{tool.title}</h3>
                <p className="text-slate-600 mb-6">{tool.description}</p>
                <ul className="space-y-2 mb-6">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-slate-700 flex items-center">
                      <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{tool.type}</span>
                  <button className="bg-primary-blue text-white px-4 py-2 rounded-lg hover:bg-navy transition-colors" data-testid={`use-tool-${index}`}>
                    Tool nutzen
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Website Showroom
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Lassen Sie sich von unseren erfolgreichen Website-Projekten inspirieren 
              und entdecken Sie moderne Design-Trends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {showcaseProjects.map((project, index) => (
              <div key={index} className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="bg-primary-blue/10 text-primary-blue px-3 py-1 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="text-primary-blue font-medium hover:text-navy inline-flex items-center">
                    Showcase ansehen <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Haben Sie Fragen zu unseren Ressourcen?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Unser Team hilft Ihnen gerne weiter und erstellt individuelle Lösungen für Ihr Unternehmen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              href="/kontakt" 
              variant="sand" 
              size="lg"
              testId="resources-final-contact"
            >
              Persönliche Beratung
            </CTAButton>
            <CTAButton 
              href="/analyse" 
              variant="secondary" 
              size="lg"
              testId="resources-final-analyse"
            >
              Kostenlose Analyse
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
