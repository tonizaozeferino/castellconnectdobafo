import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { LucideIcon } from "lucide-react";

interface CTAButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "sand";
  size?: "default" | "lg";
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
  testId?: string;
}

export default function CTAButton({ 
  href, 
  variant = "primary", 
  size = "default", 
  icon: Icon, 
  children, 
  className = "",
  testId 
}: CTAButtonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-primary-blue text-white hover:bg-navy";
      case "secondary":
        return "border-2 border-white text-white hover:bg-white hover:text-navy";
      case "sand":
        return "bg-sand text-navy hover:bg-yellow-200";
      default:
        return "bg-primary-blue text-white hover:bg-navy";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "lg":
        return "px-8 py-4 text-lg font-semibold";
      default:
        return "px-6 py-3 font-medium";
    }
  };

  return (
    <Link href={href} data-testid={testId}>
      <Button 
        className={`${getVariantClasses()} ${getSizeClasses()} transition-colors inline-flex items-center justify-center ${className}`}
      >
        {Icon && <Icon className="mr-2 h-5 w-5" />}
        {children}
      </Button>
    </Link>
  );
}
