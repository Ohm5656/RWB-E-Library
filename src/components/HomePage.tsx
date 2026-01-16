import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const heroSlides = [
  {
    id: 1,
    title: "ยินดีต้อนรับสู่ห้องสมุด RWB",
    subtitle: "แหล่งความรู้ที่ทันสมัย สำหรับนักเรียนและครู",
    image:
      "https://images.unsplash.com/photo-1554896541-dff010081afe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWJyYXJ5fGVufDF8fHx8MTc2MjM5MDAwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bgGradient: "linear-gradient(135deg, #FFB366 0%, #FF8C42 100%)",
  },
  {
    id: 2,
    title: "สัปดาห์ห้องสมุด 2568",
    subtitle: "กิจกรรมมากมาย รอคุณมาร่วมสนุก",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nfGVufDF8fHx8MTc2MjQyMDAwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bgGradient: "linear-gradient(135deg, #A8D5E2 0%, #7FB3D5 100%)",
  },
  {
    id: 3,
    title: "หนังสือใหม่เข้าแล้ว!",
    subtitle: "มากกว่า 200 เล่ม รอให้คุณมาค้นพบ",
    image:
      "https://images.unsplash.com/photo-1709924168698-620ea32c3488?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjByZWFkaW5nfGVufDF8fHx8MTc2MjQ4ODA2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bgGradient: "linear-gradient(135deg, #FFD4A3 0%, #FFC89F 50%, #FFB366 100%)",
  },
];

const recommendedBooks = [
  {
    id: "1",
    title: "หลักการเขียนโปรแกรม Python",
    author: "ดร.สมชาย วงศ์ใหญ่",
    category: "005 - วิทยาการคอมพิวเตอร์",
    image:
      "https://images.unsplash.com/photo-1725869973689-425c74f79a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0Ym9vayUyMHNjaWVuY2V8ZW58MXx8fHwxNzYyNDI1NjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    promotion: true,
  },
  {
    id: "2",
    title: "วรรณคดีไทยสมัยอยุธยา",
    author: "ผศ.สมหญิง ใจดี",
    category: "895 - วรรณคดีไทย",
    image:
      "https://images.unsplash.com/photo-1758796629109-4f38e9374f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBmaWN0aW9ufGVufDF8fHx8MTc2MjQzNzIyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    promotion: true,
  },
  {
    id: "3",
    title: "คณิตศาสตร์เพื่อการแข่งขัน",
    author: "อ.วิชัย สมบูรณ์",
    category: "510 - คณิตศาสตร์",
    image:
      "https://images.unsplash.com/photo-1666281269793-da06484657e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZXh0Ym9va3xlbnwxfHx8fDE3NjI0ODk2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    promotion: true,
  },
  {
    id: "4",
    title: "ประวัติศาสตร์ไทยสมัยสุโขทัย",
    author: "รศ.ดร.พิมพ์ใจ รักไทย",
    category: "959 - ประวัติศาสตร์เอเชีย",
    image:
      "https://images.unsplash.com/photo-1633580969828-e069e568928f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3ZlbCUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3NjI0NDk3MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    promotion: true,
  },
  {
    id: "5",
    title: "AI และอนาคตของมนุษยชาติ",
    author: "ดร.ประยุทธ อัจฉริยะ",
    category: "006 - ปัญญาประดิษฐ์",
    image:
      "https://images.unsplash.com/photo-1761319115499-872737b89e44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwc3BpbmUlMjBsaWJyYXJ5fGVufDF8fHx8MTc2MjQ4OTY4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    promotion: true,
  },
  {
    id: "6",
    title: "เศรษฐศาสตร์พฤติกรรม",
    author: "ผศ.สมพร เศรษฐกุล",
    category: "330 - เศรษฐศาสตร์",
    image:
      "https://images.unsplash.com/photo-1744693660970-3517f524fb28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjIzOTk3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    promotion: true,
  },
];

const newBooks = [
  {
    id: "7",
    title: "เศรษฐศาสตร์พฤติกรรม",
    author: "ผศ.สมพร เศรษฐกุล",
    category: "330 - เศรษฐศาสตร์",
    image:
      "https://images.unsplash.com/photo-1744693660970-3517f524fb28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjIzOTk3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    promotion: true,
  },
  {
    id: "8",
    title: "การเขียนเชิงสร้างสรรค์",
    author: "อ.สายชล รัตนพันธ์",
    category: "808 - การเรียบเรียง",
    image:
      "https://images.unsplash.com/photo-1758796629109-4f38e9374f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBmaWN0aW9ufGVufDF8fHx8MTc2MjQzNzIyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    promotion: true,
  },
  {
    id: "9",
    title: "เคมีอินทรีย์ยุคใหม่",
    author: "รศ.ดร.วิไล เคมีศาสตร์",
    category: "547 - เคมีอินทรีย์",
    image:
      "https://images.unsplash.com/photo-1666281269793-da06484657e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZXh0Ym9vayxfGVufDF8fHx8MTc2MjQ4OTY4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    promotion: true,
  },
  {
    id: "10",
    title: "ภาษาอังกฤษเพื่อการสื่อสาร",
    author: "อ.จิราพร ภาษาวิทย์",
    category: "428 - การใช้ภาษาอังกฤษ",
    image:
      "https://images.unsplash.com/photo-1633580969828-e069e568928f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3ZlbCUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3NjI0NDk3MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    promotion: true,
  },
  {
    id: "11",
    title: "ศิลปะการถ่ายภาพ",
    author: "ดร.วิชัย มัลลิกา",
    category: "770 - ศิลปะการถ่ายภาพ",
    image:
      "https://images.unsplash.com/photo-1725869973689-425c74f79a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0Ym9vayUyMHNjaWVuY2V8ZW58MXx8fHwxNzYyNDI1NjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    promotion: true,
  },
  {
    id: "12",
    title: "วิทยาศาสตร์กับชีวิต",
    author: "ผศ.ดร.สมศักดิ์ วิทยากร",
    category: "500 - วิทยาศาสตร์",
    image:
      "https://images.unsplash.com/photo-1761319115499-872737b89e44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwc3BpbmUlMjBsaWJyYXJ5fGVufDF8fHx8MTc2MjQ4OTY4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    promotion: true,
  },
];

interface BookGridProps {
  title?: string;
  books: Array<{
    id: string;
    title: string;
    author: string;
    category: string;
    image: string;
    promotion?: boolean;
  }>;
  viewAllLink?: string;
}

function BookGrid({ title, books }: BookGridProps) {
  return (
    <div className="mb-8">
      {title && (
        <div className="flex items-center justify-between mb-4">
          <h2
            className="text-base"
            style={{
              background: "linear-gradient(135deg, #FFB366 0%, #FF8C42 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
            }}
          >
            {title}
          </h2>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
        {books.map((book, index) => (
          <Link key={`${book.id}-${index}`} to={`/book/${book.id}`} className="group">
            <div className="rounded overflow-hidden mb-2 shadow-md hover:shadow-xl transition-all hover:scale-105 relative bg-white">
              {book.promotion && (
                <div className="absolute top-0 left-0 z-10">
                  <div
                    className="text-white px-2 py-1 text-[10px] rounded-br-lg flex items-center gap-1 shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #FFB366 0%, #FF8C42 100%)",
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        fill="white"
                      />
                    </svg>
                    <span style={{ fontWeight: 600 }}>แนะนำ</span>
                  </div>
                </div>
              )}

              <div className="relative aspect-[2/3] bg-muted">
                <ImageWithFallback
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="px-0.5">
              <h3
                className="text-sm line-clamp-2 mb-1.5 leading-tight text-foreground"
                style={{ fontWeight: 500 }}
              >
                {book.title}
              </h3>
              <p className="text-xs mb-1 text-muted-foreground">ผู้แต่ง: {book.author}</p>
              <p
                className="text-xs"
                style={{
                  background: "linear-gradient(135deg, #FFB366 0%, #FF8C42 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 600,
                }}
              >
                หมวด: {book.category}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="py-4 md:py-6 bg-gradient-to-b from-accent/30 to-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {/* Main Hero Banner */}
            <div className="lg:col-span-2">
              <div className="relative rounded-lg overflow-hidden h-[200px] md:h-[280px] shadow-xl">
                <div
                  className="absolute inset-0"
                  style={{ background: heroSlides[currentSlide].bgGradient }}
                >
                  <div className="absolute inset-0 opacity-30">
                    <ImageWithFallback
                      src={heroSlides[currentSlide].image}
                      alt={heroSlides[currentSlide].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="relative h-full flex items-center justify-center p-4 md:p-6 text-center">
                  <div className="text-white">
                    <h1 className="text-2xl md:text-4xl mb-2 md:mb-3">
                      {heroSlides[currentSlide].title}
                    </h1>
                    <p className="text-base md:text-xl opacity-90">
                      {heroSlides[currentSlide].subtitle}
                    </p>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-1.5 rounded-full transition-all"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-1.5 rounded-full transition-all"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        index === currentSlide ? "bg-white w-4" : "bg-white/50"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Side Banners */}
            <div className="space-y-3">
              {/* Banner 1 */}
              <a
                href="https://script.google.com/macros/s/AKfycbxg31YClqOfZoM0vNMLAeQzK13bPmoDMr5URmXIDiZhrOL3WpysAnMInZx5HLH28OZFpQ/exec"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div
                  className="rounded-lg p-4 md:p-5 text-white h-[95px] md:h-[135px] flex flex-col justify-between cursor-pointer hover:shadow-2xl transition-all hover:scale-[1.02] shadow-lg border border-white/20"
                  style={{
                    background:
                      "linear-gradient(135deg, #FF6B35 0%, #FF8C42 50%, #FFB366 100%)",
                    boxShadow: "0 8px 20px rgba(255, 107, 53, 0.3)",
                  }}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2" />
                        <path
                          d="M21 21L16.65 16.65"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      <h3 className="text-sm md:text-base" style={{ fontWeight: 700 }}>
                        ค้นหาหนังสือ
                      </h3>
                    </div>
                    <p className="text-[11px] md:text-xs opacity-95 leading-relaxed">
                      ค้นหาหนังสือ ผู้แต่ง ISBN
                      <br />
                      ระบบ Dewey Decimal
                    </p>
                  </div>

                  <button
                    className="px-4 py-2 rounded-md text-xs md:text-sm hover:opacity-95 transition-all w-full shadow-md bg-white/95 hover:bg-white backdrop-blur-sm"
                    style={{
                      color: "#FF6B35",
                      fontWeight: 700,
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      เริ่มค้นหา
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </a>

              {/* Banner 2 */}
              <a
                href="https://script.google.com/macros/s/AKfycbxg31YClqOfZoM0vNMLAeQzK13bPmoDMr5URmXIDiZhrOL3WpysAnMInZx5HLH28OZFpQ/exec?page=borrow"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div
                  className="rounded-lg p-4 md:p-5 text-white h-[95px] md:h-[135px] flex flex-col justify-between cursor-pointer hover:shadow-2xl transition-all hover:scale-[1.02] shadow-lg border border-white/20"
                  style={{
                    background: "linear-gradient(135deg, #2C2C2C 0%, #3D3D3D 50%, #4A4A4A 100%)",
                    boxShadow: "0 8px 20px rgba(44, 44, 44, 0.4)",
                  }}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                        <path
                          d="M12 6V12L16 14"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      <h3 className="text-sm md:text-base" style={{ fontWeight: 700 }}>
                        รายชื่อนักเรียนค้างคืนหนังสือ
                      </h3>
                    </div>
                    <p className="text-[11px] md:text-xs opacity-95 leading-relaxed">
                      ตรวจสอบสถานะการยืม
                      <br />
                      รายชื่อค้างคืน
                    </p>
                  </div>

                  <button
                    className="px-4 py-2 rounded-md text-xs md:text-sm hover:opacity-95 transition-all w-full shadow-md"
                    style={{
                      background: "linear-gradient(135deg, #FFB366 0%, #FF8C42 100%)",
                      color: "white",
                      fontWeight: 700,
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      ดูรายชื่อ
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-6 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Book Sections */}
          <BookGrid 
            title="หนังสือแนะนำก่อนใคร" 
            books={recommendedBooks}
            viewAllLink="/search"
          />

          <BookGrid 
            books={newBooks}
            viewAllLink="/search"
          />
        </div>
      </div>
    </div>
  );
}
