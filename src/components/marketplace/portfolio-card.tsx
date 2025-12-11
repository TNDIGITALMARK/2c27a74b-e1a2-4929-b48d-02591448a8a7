import { PortfolioItem } from '@/lib/data/mock-data';

interface PortfolioCardProps {
  item: PortfolioItem;
}

export function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 hover:border-primary cursor-pointer">
      {/* Image/Icon */}
      <div className="bg-gradient-to-br from-primary/5 to-accent/20 h-48 flex items-center justify-center text-7xl">
        {item.image}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
            {item.category}
          </span>
          <span className="text-xs text-gray-500">{item.completionTime}</span>
        </div>

        <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
        <p className="text-sm text-gray-600 mb-3">{item.description}</p>

        <div className="flex flex-wrap gap-2 mb-3">
          {item.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-xs text-gray-500">
          Client: <span className="font-medium text-gray-700">{item.clientName}</span>
        </p>
      </div>
    </div>
  );
}
