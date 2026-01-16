import { NewsCard } from './NewsCard';
import { Newspaper } from 'lucide-react';

const allNews = [
  {
    id: 1,
    title: 'สัปดาห์ห้องสมุด ประจำปี 2568',
    date: '15 ตุลาคม 2567',
    image: 'https://images.unsplash.com/photo-1566918230723-378f6e7878d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwd2VlayUyMGV2ZW50fGVufDF8fHx8MTc2MjQ4ODA5NXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'เตรียมพบกับกิจกรรมมากมายในสัปดาห์ห้องสมุด การประกวดวาดภาพ การแข่งขันตอบปัญหา และกิจกรรมส่งเสริมการอ่าน'
  },
  {
    id: 2,
    title: 'งานวันหนังสือโลก',
    date: '23 เมษายน 2567',
    image: 'https://images.unsplash.com/photo-1631888717579-50577ecc6553?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwZmFpciUyMHJlYWRpbmd8ZW58MXx8fHwxNzYyNDg4MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'ร่วมฉลองวันหนังสือโลก พบกับนิทรรศการหนังสือ การบรรยายพิเศษ และกิจกรรมส��งเสริมนิสัยรักการอ่าน'
  },
  {
    id: 3,
    title: 'ระบบห้องสมุดดิจิทัลใหม่',
    date: '1 มกราคม 2568',
    image: 'https://images.unsplash.com/photo-1599389153811-fe7586739184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbGlicmFyeSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyNDA4NTk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'ระบบห้องสมุดดิจิทัลรูปแบบใหม่ ค้นหาง่าย ยืมคืนสะดวก ตรวจสอบสถานะได้ทุกที่ทุกเวลา'
  },
  {
    id: 4,
    title: 'การอบรมการใช้ฐานข้อมูลออนไลน์',
    date: '10 พฤศจิกายน 2567',
    image: 'https://images.unsplash.com/photo-1709924168698-620ea32c3488?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjByZWFkaW5nfGVufDF8fHx8MTc2MjQ4ODA2NXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'เชิญชวนนักเรียนและครูเข้าร่วมอบรมการใช้ฐานข้อมูลออนไลน์ เพื่อการค้นคว้าที่มีประสิทธิภาพ'
  },
  {
    id: 5,
    title: 'นิทรรศการหนังสือใหม่ประจำเดือน',
    date: '1 พฤศจิกายน 2567',
    image: 'https://images.unsplash.com/photo-1752920299210-0b727800ea50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwYm9va3N8ZW58MXx8fHwxNzYyNDExMzk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'พบกับหนังสือใหม่ล่าสุดที่เพิ่มเข้ามาในห้องสมุด ทั้งหนังสือเรียน หนังสือทั่วไป และนวนิยาย'
  },
  {
    id: 6,
    title: 'โครงการ "นักอ่านตัวน้อย"',
    date: '20 ตุลาคม 2567',
    image: 'https://images.unsplash.com/photo-1609758009829-9ff5c01f3186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY29tcGV0aXRpb24lMjBhd2FyZHxlbnwxfHx8fDE3NjI0ODgwNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'เปิดตัวโครงการส่งเสริมการอ่านสำหรับนักเรียนม.ต้น มีรางวัลมากมายรอคุณอยู่'
  }
];

export function NewsPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-600 to-gray-800 rounded-full mb-6">
              <Newspaper className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl mb-4">ข่าวสาร</h1>
            <p className="text-xl text-muted-foreground">
              ข่าวสารและกิจกรรมทั้งหมดของ RWB E-Library
            </p>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNews.map(news => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}