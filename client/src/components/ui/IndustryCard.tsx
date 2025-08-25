import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";

interface IndustryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  features: string[];
  href: string;
  className?: string;
}

export default function IndustryCard({ 
  title, 
  description, 
  imageUrl, 
  imageAlt, 
  features, 
  href, 
  className = "" 
}: IndustryCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${className}`}>
      <img 
        src={imageUrl} 
        alt={imageAlt} 
        className="w-full h-48 object-cover"
      />
      <div className="p-8">
        <h3 className="text-2xl font-semibold text-navy mb-4">{title}</h3>
        <p className="text-slate-600 mb-6">{description}</p>
        <ul className="text-sm text-slate-600 mb-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="text-primary-blue mr-2 h-4 w-4" />
              {feature}
            </li>
          ))}
        </ul>
        <Link href={href} data-testid={`industry-card-${title.toLowerCase()}`}>
          <div className="text-primary-blue font-medium hover:text-navy inline-flex items-center">
            {title}-Lösungen ansehen <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </Link>
      </div>
    </div>
  );
}
