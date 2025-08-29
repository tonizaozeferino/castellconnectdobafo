import { Link } from "wouter";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import logoImage from "@assets/Logo Castell Connect Farbe_1756372392621.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src={logoImage} 
                alt="Castell Connect" 
                className="h-12 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Digitale Lösungen für den bayerischen Mittelstand. Von der Website bis zum kompletten Online-Marketing – alles aus einer Hand.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/castellconnect/" 
                className="bg-primary-blue p-3 rounded-lg hover:bg-light-blue transition-colors"
                aria-label="Facebook"
                data-testid="footer-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/castellconnect/" 
                className="bg-primary-blue p-3 rounded-lg hover:bg-light-blue transition-colors"
                aria-label="Instagram"
                data-testid="footer-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@castellconnect" 
                className="bg-primary-blue p-3 rounded-lg hover:bg-light-blue transition-colors"
                aria-label="TikTok"
                data-testid="footer-tiktok"
              >
                <SiTiktok className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Leistungen</h4>
            <ul className="space-y-3 text-slate-300">
              <li><Link href="/leistungen/webdesign" className="hover:text-white transition-colors" data-testid="footer-webdesign">Webdesign</Link></li>
              <li><Link href="/leistungen/seo" className="hover:text-white transition-colors" data-testid="footer-seo">SEO & Local Marketing</Link></li>
              <li><Link href="/leistungen/social" className="hover:text-white transition-colors" data-testid="footer-social">Social Media</Link></li>
              <li><Link href="/leistungen/email" className="hover:text-white transition-colors" data-testid="footer-email">E-Mail Marketing</Link></li>
              <li><Link href="/leistungen/ki-visuals" className="hover:text-white transition-colors" data-testid="footer-ki-visuals">KI-Visuals</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Unternehmen</h4>
            <ul className="space-y-3 text-slate-300">
              <li><Link href="/ueber-uns" className="hover:text-white transition-colors" data-testid="footer-ueber-uns">Über uns</Link></li>
              <li><Link href="/kontakt" className="hover:text-white transition-colors" data-testid="footer-kontakt">Kontakt</Link></li>
              <li><Link href="/newsletter" className="hover:text-white transition-colors" data-testid="footer-newsletter">Newsletter</Link></li>
              <li><Link href="/ressourcen" className="hover:text-white transition-colors" data-testid="footer-ressourcen">Blog</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <MapPin className="text-light-blue h-5 w-5" />
              <div>
                <div className="font-medium">Adresse</div>
                <div className="text-slate-300 text-sm">Wüstenfelden 3, 97355 Castell</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-light-blue h-5 w-5" />
              <div>
                <div className="font-medium">Telefon</div>
                <a href="tel:+4909325391996" className="text-slate-300 text-sm hover:text-white transition-colors" data-testid="footer-phone">
                  09325 391996
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-light-blue h-5 w-5" />
              <div>
                <div className="font-medium">E-Mail</div>
                <a href="mailto:info@castellconnect.de" className="text-slate-300 text-sm hover:text-white transition-colors" data-testid="footer-email-link">
                  info@castellconnect.de
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm mb-4 md:mb-0">
            © {currentYear} CastellConnect. Alle Rechte vorbehalten.
          </div>
          <div className="flex space-x-6 text-slate-400 text-sm">
            <Link href="/rechtliches#impressum" className="hover:text-white transition-colors" data-testid="footer-impressum">Impressum</Link>
            <Link href="/rechtliches#datenschutz" className="hover:text-white transition-colors" data-testid="footer-datenschutz">Datenschutz</Link>
            <Link href="/rechtliches#agb" className="hover:text-white transition-colors" data-testid="footer-agb">AGB</Link>
            <Link href="/rechtliches#cookies" className="hover:text-white transition-colors" data-testid="footer-cookies">Cookie-Einstellungen</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
