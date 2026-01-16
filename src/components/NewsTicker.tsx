import { useEffect, useState } from 'react';
import { Megaphone } from 'lucide-react';

const news = [
  'ห้องสมุดเปิดให้บริการทุกวัน จันทร์-ศุกร์ เวลา 08:00-16:00 น.',
  'สัปดาห์ห้องสมุด ประจำปี 2568 วันที่ 15-21 ตุลาคม 2567',
  'การแข่งขันตอบปัญหาจากหนังสือ เปิดรับสมัครแล้ว!',
  'หนังสือใหม่เข้าห้องสมุดแล้ว มากกว่า 200 เล่ม',
];

export function NewsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-orange-600 text-white py-3 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 flex-shrink-0">
            <Megaphone className="w-5 h-5" />
            <span className="font-semibold">ประชาสัมพันธ์:</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              {news[currentIndex]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
