import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, Globe, Search, Share2, Mail, Mic, Wand2, Target } from "lucide-react";
import logoImage from "@assets/Logo Castell Connect Farbe_1756372392621.png";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    { title: "Webdesign", href: "/leistungen/webdesign", icon: Globe, description: "Moderne Websites" },
    { title: "SEO", href: "/leistungen/seo", icon: Search, description: "Sichtbarkeit steigern" },
    { title: "Social Media", href: "/leistungen/social", icon: Share2, description: "Community aufbauen" },
    { title: "E-Mail Marketing", href: "/leistungen/email", icon: Mail, description: "Kunden binden" },
    { title: "Voice & Chatbots", href: "/leistungen/voice", icon: Mic, description: "KI-Assistenten" },
    { title: "KI-Visuals", href: "/leistungen/ki-visuals", icon: Wand2, description: "Visuelle Inhalte" },
    { title: "Ads", href: "/leistungen/ads", icon: Target, description: "Werbekampagnen" }
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" data-testid="logo-link">
            <img 
              src={logoImage} 
              alt="Castell Connect" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Services Dropdown */}
              <div className="relative group">
                <button 
                  className="text-slate-700 hover:text-navy px-3 py-2 text-sm font-medium flex items-center"
                  data-testid="services-dropdown-button"
                >
                  Leistungen <ChevronDown className="ml-2 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 w-96 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2 z-50">
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {services.map((service) => (
                        <Link key={service.href} href={service.href} data-testid={`service-${service.title.toLowerCase().replace(/\s+/g, '-')}-link`}>
                          <div className="flex items-start p-3 rounded-lg hover:bg-slate-50 transition-colors">
                            <service.icon className="text-primary-blue mr-3 mt-1 h-5 w-5" />
                            <div>
                              <div className="font-medium text-slate-900">{service.title}</div>
                              <div className="text-sm text-slate-600">{service.description}</div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <Link href="/leistungen" data-testid="all-services-link">
                        <div className="text-primary-blue font-medium hover:text-navy text-center">
                          Alle Leistungen ansehen →
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link 
                href="/branchen" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location.startsWith('/branchen') 
                    ? 'text-navy' 
                    : 'text-slate-700 hover:text-navy'
                }`}
                data-testid="nav-branchen"
              >
                Branchen
              </Link>
              <Link 
                href="/ressourcen" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location.startsWith('/ressourcen') 
                    ? 'text-navy' 
                    : 'text-slate-700 hover:text-navy'
                }`}
                data-testid="nav-ressourcen"
              >
                Ressourcen
              </Link>
              <Link 
                href="/ueber-uns" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location.startsWith('/ueber-uns') 
                    ? 'text-navy' 
                    : 'text-slate-700 hover:text-navy'
                }`}
                data-testid="nav-ueber-uns"
              >
                Über uns
              </Link>
              <Link 
                href="/kontakt" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location.startsWith('/kontakt') 
                    ? 'text-navy' 
                    : 'text-slate-700 hover:text-navy'
                }`}
                data-testid="nav-kontakt"
              >
                Kontakt
              </Link>
              <Link href="/analyse" data-testid="cta-analyse">
                <Button className="bg-primary-blue text-white hover:bg-navy transition-colors">
                  Kostenlose Analyse
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" data-testid="mobile-menu-button">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="border-b border-slate-200 pb-4">
                    <h3 className="font-semibold text-navy mb-3">Leistungen</h3>
                    <div className="space-y-2">
                      {services.map((service) => (
                        <Link key={service.href} href={service.href} onClick={() => setIsOpen(false)}>
                          <div className="flex items-center p-2 rounded-lg hover:bg-slate-50">
                            <service.icon className="text-primary-blue mr-3 h-4 w-4" />
                            <span className="text-sm">{service.title}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Link href="/branchen" onClick={() => setIsOpen(false)}>
                      <div className="p-2 text-slate-700 hover:text-navy">Branchen</div>
                    </Link>
                    <Link href="/ressourcen" onClick={() => setIsOpen(false)}>
                      <div className="p-2 text-slate-700 hover:text-navy">Ressourcen</div>
                    </Link>
                    <Link href="/ueber-uns" onClick={() => setIsOpen(false)}>
                      <div className="p-2 text-slate-700 hover:text-navy">Über uns</div>
                    </Link>
                    <Link href="/kontakt" onClick={() => setIsOpen(false)}>
                      <div className="p-2 text-slate-700 hover:text-navy">Kontakt</div>
                    </Link>
                  </div>
                  
                  <Link href="/analyse" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-primary-blue text-white hover:bg-navy">
                      Kostenlose Analyse
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
