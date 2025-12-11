import Link from 'next/link';
import { Developer } from '@/lib/data/mock-data';
import { Star, Clock, CheckCircle, MapPin } from 'lucide-react';

interface DeveloperCardProps {
  developer: Developer;
}

export function DeveloperCard({ developer }: DeveloperCardProps) {
  return (
    <Link href={`/developer/${developer.id}`}>
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-200 hover:border-primary cursor-pointer h-full">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="text-5xl">{developer.avatar}</div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-gray-900">{developer.name}</h3>
            <p className="text-sm text-gray-600">{developer.title}</p>
            <div className="flex items-center gap-1 mt-1">
              <Star className="w-4 h-4 fill-warning text-warning" />
              <span className="font-semibold text-sm">{developer.rating}</span>
              <span className="text-sm text-gray-500">({developer.reviewCount} reviews)</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4 py-3 border-y border-gray-100">
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle className="w-4 h-4 text-success" />
            <span className="text-gray-700">{developer.completedProjects} projects</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-gray-700">{developer.responseTime}</span>
          </div>
          <div className="flex items-center gap-2 text-sm col-span-2">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span className="text-gray-700">{developer.location}</span>
          </div>
        </div>

        {/* Specializations */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {developer.specialization.map((spec, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Availability Badge */}
        <div className="mb-4">
          <span
            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
              developer.availability === 'Available'
                ? 'bg-success/10 text-success'
                : developer.availability === 'Limited'
                ? 'bg-warning/10 text-warning'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-current"></span>
            {developer.availability}
          </span>
        </div>

        {/* Pricing */}
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">Starting at</p>
              <p className="text-2xl font-bold text-gray-900">
                ${developer.startingPrice.toLocaleString()}
              </p>
            </div>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
