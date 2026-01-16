import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BookOpen, TrendingUp } from 'lucide-react';

const recommendedBooks = [
  {
    id: '1',
    title: 'หลักการเขียนโปรแกรม Python',
    author: 'ดร.สมชาย วงศ์ใหญ่',
    category: '005 - วิทยาการคอมพิวเตอร์',
    image: 'https://images.unsplash.com/photo-1725869973689-425c74f79a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0Ym9vayUyMHNjaWVuY2V8ZW58MXx8fHwxNzYyNDI1NjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    promotion: true,
    description: 'หนังสือเรียนรู้ Python ตั้งแต่พื้นฐานจนถึงขั้นสูง เหมาะสำหรับนักเรียนที่ต้องการเรียนรู้การเขียนโปรแกรม'
  },
  {
    id: '2',
    title: 'วรรณคดีไทยสมัยอยุธยา',
    author: 'ผศ.สมหญิง ใจดี',
    category: '895 - วรรณคดีไทย',
    image: 'https://images.unsplash.com/photo-1758796629109-4f38e9374f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBmaWN0aW9ufGVufDF8fHx8MTc2MjQzNzIyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    promotion: true,
    description: 'ศึกษาวรรณคดีไทยในสมัยอยุธยา วิเคราะห์บทเพลงและนิทานพื้นบ้านที่สำคัญ'
  },
  {
    id: '3',
    title: 'คณิตศาสตร์เพื่อการแข่งขัน',
    author: 'อ.วิชัย สมบูรณ์',
    category: '510 - คณิตศาสตร์',
    image: 'https://images.unsplash.com/photo-1666281269793-da06484657e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZXh0Ym9va3xlbnwxfHx8fDE3NjI0ODk2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    promotion: true,
    description: 'รวมโจทย์คณิตศาสตร์ระดับโอลิมปิก พร้อมเฉลยละเอียด'
  },
  {
    id: '4',
    title: 'ประวัติศาสตร์ไทยสมัยสุโขทัย',
    author: 'รศ.ดร.พิมพ์ใจ รักไทย',
    category: '959 - ประวัติศาสตร์เอเชีย',
    image: 'https://images.unsplash.com/photo-1633580969828-e069e568928f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3ZlbCUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3NjI0NDk3MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    promotion: true,
    description: 'ศึกษาประวัติศาสตร์ไทยสมัยสุโขทัย ตั้งแต่การก่อตั้งจนถึงการล่มสลาย'
  },
  {
    id: '5',
    title: 'AI และอนาคตของมนุษยชาติ',
    author: 'ดร.ประยุทธ อัจฉริยะ',
    category: '006 - ปัญญาประดิษฐ์',
    image: 'https://images.unsplash.com/photo-1761319115499-872737b89e44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwc3BpbmUlMjBsaWJyYXJ5fGVufDF8fHx8MTc2MjQ4OTY4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    promotion: true,
    description: 'เรียนรู้เกี่ยวกับปัญญาประดิษฐ์และผลกระทบต่ออนาคต'
  },
  {
    id: '6',
    title: 'เศรษฐศาสตร์พฤติกรรม',
    author: 'ผศ.สมพร เศรษฐกุล',
    category: '330 - เศรษฐศาสตร์',
    image: 'https://images.unsplash.com/photo-1744693660970-3517f524fb28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjIzOTk3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    promotion: true,
    description: 'ทำความเข้าใจเศรษฐศาสตร์ผ่านพฤติกรรมมนุษย์'
  },
  {
    id: '7',
    title: 'การเขียนเชิงสร้างสรรค์',
    author: 'อ.สายชล รัตนพันธ์',
    category: '808 - การเรียบเรียง',
    image: 'https://images.unsplash.com/photo-1758796629109-4f38e9374f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBmaWN0aW9ufGVufDF8fHx8MTc2MjQzNzIyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    promotion: true,
    description: 'เทคนิคการเขียนเชิงสร้างสรรค์สำหรับนักเรียน'
  },
  {
    id: '8',
    title: 'เคมีอินทรีย์ยุคใหม่',
    author: 'รศ.ดร.วิไล เคมีศาสตร์',
    category: '547 - เคมีอินทรีย์',
    image: 'https://images.unsplash.com/photo-1666281269793-da06484657e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZXh0Ym9va3xlbnwxfHx8fDE3NjI0ODk2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    promotion: true,
    description: 'เรียนรู้เคมีอินทรีย์แบบทันสมัย พร้อมตัวอย่างและการทดลอง'
  },
  {
    id: '9',
    title: 'ภาษาอังกฤษเพื่อการสื่อสาร',
    author: 'อ.จิราพร ภาษาวิทย์',
    category: '428 - การใช้ภาษาอังกฤษ',
    image: 'https://images.unsplash.com/photo-1633580969828-e069e568928f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3ZlbCUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3NjI0NDk3MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    promotion: true,
    description: 'พัฒนาทักษะภาษาอังกฤษเพื่อการสื่อสารในชีวิตประจำวัน'
  },
  {
    id: '10',
    title: 'ศิลปะการถ่ายภาพ',
    author: 'ดร.วิชัย มัลลิกา',
    category: '770 - ศิลปะการถ่ายภาพ',
    image: 'https://images.unsplash.com/photo-1725869973689-425c74f79a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0Ym9vayUyMHNjaWVuY2V8ZW58MXx8fHwxNzYyNDI1NjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    promotion: true,
    description: 'เรียนรู้เทคนิคการถ่ายภาพตั้งแต่พื้นฐานถึงระดับมืออาชีพ'
  },
  {
    id: '11',
    title: 'วิทยาศาสตร์กับชีวิต',
    author: 'ผศ.ดร.สมศักดิ์ วิทยากร',
    category: '500 - วิทยาศาสตร์',
    image: 'https://images.unsplash.com/photo-1761319115499-872737b89e44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwc3BpbmUlMjBsaWJyYXJ5fGVufDF8fHx8MTc2MjQ4OTY4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    promotion: true,
    description: 'นำวิทยาศาสตร์มาประยุกต์ใช้ในชีวิตประจำวัน'
  },
  {
    id: '12',
    title: 'จิตวิทยาเด็กและวัยรุ่น',
    author: 'ผศ.ดร.นภา ใจงาม',
    category: '155 - จิตวิทยาตามวัย',
    image: 'https://images.unsplash.com/photo-1744693660970-3517f524fb28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjIzOTk3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    promotion: true,
    description: 'เข้าใจพัฒนาการและจิตใจของเด็กและวัยรุ่น'
  }
];

export function RecommendedPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl py-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-6 h-6 text-orange-600" />
            <h1 className="text-2xl text-gray-900">หนังสือแนะนำ</h1>
          </div>
          <p className="text-gray-600">หนังสือที่ห้องสมุดแนะนำสำหรับนักเรียนและครู</p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {recommendedBooks.map((book) => (
            <Link 
              key={book.id}
              to={`/book/${book.id}`}
              className="group"
            >
              <div className="bg-white rounded overflow-hidden mb-2 shadow-sm hover:shadow-md transition-shadow relative">
                {/* Promotion Badge */}
                {book.promotion && (
                  <div className="absolute top-0 left-0 z-10">
                    <div className="bg-red-500 text-white px-2 py-1 text-[10px] rounded-br-lg flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white"/>
                      </svg>
                      <span>Promotion</span>
                    </div>
                  </div>
                )}
                
                <div className="relative aspect-[2/3] bg-gray-100">
                  <ImageWithFallback
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Book Info */}
              <div className="px-0.5">
                <h3 className="text-sm line-clamp-2 text-gray-900 mb-1.5 leading-tight">{book.title}</h3>
                <p className="text-xs text-gray-600 mb-1">ผู้แต่ง: {book.author}</p>
                <p className="text-xs text-orange-600">หมวด: {book.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}