import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const slides = [
  {
    id: 1,
    title: 'ประชาสัมพันธ์',
    description: 'ห้องสมุดเปิดให้บริการทุกวัน จันทร์-ศุกร์ เวลา 08:00-16:00 น.',
    image: 'https://images.unsplash.com/photo-1709924168698-620ea32c3488?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjByZWFkaW5nfGVufDF8fHx8MTc2MjQ4ODA2NXww&ixlib=rb-4.1.0&q=80&w=1080',
    bgColor: 'from-orange-600 to-orange-800'
  },
  {
    id: 2,
    title: 'กติกาการแข่งขัน',
    description: 'การแข่งขันตอบปัญหาจากหนังสือประจำปี 2025 เปิดรับสมัครแล้ว',
    image: 'https://images.unsplash.com/photo-1609758009829-9ff5c01f3186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY29tcGV0aXRpb24lMjBhd2FyZHxlbnwxfHx8fDE3NjI0ODgwNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    bgColor: 'from-gray-800 to-black'
  },
  {
    id: 3,
    title: 'ม.ต้น - ม.ปลาย',
    description: 'หนังสือแนะนำสำหรับนักเรียนทุกระดับชั้น อัพเดทเดือนละครั้ง',
    image: 'https://images.unsplash.com/photo-1752920299210-0b727800ea50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwYm9va3N8ZW58MXx8fHwxNzYyNDExMzk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    bgColor: 'from-orange-700 to-gray-900'
  }
];

export function AnnouncementCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <div className={`relative h-[400px] bg-gradient-to-r ${slides[currentSlide].bgColor} transition-all duration-500`}>
            <div className="absolute inset-0 opacity-20">
              <ImageWithFallback
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative h-full flex items-center justify-center text-center px-4">
              <div className="text-white">
                <h2 className="text-4xl md:text-5xl mb-4">{slides[currentSlide].title}</h2>
                <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}