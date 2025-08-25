import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQ({ items, className = "" }: FAQProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="bg-white rounded-lg shadow-sm border border-slate-200"
          >
            <AccordionTrigger 
              className="px-6 py-4 text-left font-semibold text-navy hover:bg-slate-50 transition-colors"
              data-testid={`faq-question-${index}`}
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent 
              className="px-6 pb-4 text-slate-600"
              data-testid={`faq-answer-${index}`}
            >
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
