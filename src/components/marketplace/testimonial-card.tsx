import { Testimonial } from '@/lib/data/mock-data';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 h-full">
      <Quote className="w-8 h-8 text-primary/20 mb-3" />

      {/* Rating */}
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < testimonial.rating
                ? 'fill-warning text-warning'
                : 'fill-gray-200 text-gray-200'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.content}</p>

      {/* Client Info */}
      <div className="pt-4 border-t border-gray-100">
        <p className="font-semibold text-gray-900">{testimonial.clientName}</p>
        <p className="text-sm text-gray-600">{testimonial.clientCompany}</p>
        <span className="inline-block mt-2 px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">
          {testimonial.projectType}
        </span>
      </div>
    </div>
  );
}
