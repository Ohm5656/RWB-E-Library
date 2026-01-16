import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  price?: string;
}

interface BookCarouselProps {
  title: string;
  books: Book[];
  viewAllLink?: string;
}

export function BookCarousel({ title, books, viewAllLink }: BookCarouselProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const itemWidth = 200; // approximate width of each book card
  
  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById(`carousel-${title}`);
    if (container) {
      const scrollAmount = direction === 'left' ? -itemWidth * 2 : itemWidth * 2;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl text-gray-900">{title}</h2>
        {viewAllLink && (
          <a href={viewAllLink} className="text-orange-600 hover:text-orange-700">
            ดูทั้งหมด →
          </a>
        )}
      </div>
      
      <div className="relative group">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <div 
          id={`carousel-${title}`}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {books.map((book) => (
            <div 
              key={book.id} 
              className="flex-shrink-0 w-48 bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer group/card"
            >
              <div className="h-64 bg-gradient-to-br from-orange-100 to-orange-200 rounded-t-xl overflow-hidden">
                <ImageWithFallback
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm mb-2 line-clamp-2 min-h-[40px]">{book.title}</h3>
                <p className="text-xs text-gray-500 mb-2">{book.author}</p>
                {book.price && (
                  <p className="text-orange-600">{book.price}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
