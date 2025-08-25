import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  className?: string;
}

export default function ServiceCard({ title, description, icon: Icon, href, className = "" }: ServiceCardProps) {
  return (
    <div className={`bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-slate-200 hover:border-primary-blue group ${className}`}>
      <div className="bg-primary-blue p-4 rounded-lg inline-block mb-6 group-hover:bg-navy transition-colors">
        <Icon className="text-white h-8 w-8" />
      </div>
      <h3 className="text-xl font-semibold text-navy mb-4">{title}</h3>
      <p className="text-slate-600 mb-6">{description}</p>
      <Link href={href} data-testid={`service-card-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <div className="text-primary-blue font-medium hover:text-navy inline-flex items-center group-hover:translate-x-1 transition-transform">
          Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </Link>
    </div>
  );
}
