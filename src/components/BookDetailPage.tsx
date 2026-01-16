import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, User, Calendar, Hash, Tag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

// Mock data - ในระบบจริงจะดึงจาก API
const bookDatabase = {
  '1': {
    id: '1',
    title: 'หลักการเขียนโปรแกรม Python',
    author: 'ดร.สมชาย วงศ์ใหญ่',
    publisher: 'สำนักพิมพ์ SE-ED',
    year: '2567',
    isbn: '978-616-08-5432-1',
    category: '005.13 - คอมพิวเตอร์โปรแกรมมิ่ง',
    pages: '456',
    description: 'หนังสือเรียนรู้การเขียนโปรแกรมด้วยภาษา Python ตั้งแต่พื้นฐานจนถึงขั้นสูง เหมาะสำหรับผู้เริ่มต้นและผู้ที่ต้องการพัฒนาทักษะการเขียนโปรแกรม ครอบคลุมเนื้อหาการใช้งาน Library ต่างๆ และการพัฒนาโปรเจกต์จริง',
    image: 'https://images.unsplash.com/photo-1725869973689-425c74f79a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0Ym9vayUyMHNjaWVuY2V8ZW58MXx8fHwxNzYyNDI1NjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'available',
    location: 'ชั้น 2 ห้องสมุด - หมวด 005',
    copies: 3,
    available: 2
  },
  '2': {
    id: '2',
    title: 'วรรณคดีไทยสมัยอยุธยา',
    author: 'ผศ.สมหญิง ใจดี',
    publisher: 'มหาวิทยาลัยธรรมศาสตร์',
    year: '2566',
    isbn: '978-616-08-6789-3',
    category: '895.91 - วรรณคดีไทย',
    pages: '324',
    description: 'ศึกษาวรรณคดีไทยในสมัยอยุธยา วิเคราะห์บทประพันธ์สำคัญต่างๆ และความสัมพันธ์กับสังคมไทยในยุคนั้น เหมาะสำหรับนักเรียนและผู้สนใจวรรณคดีไทย',
    image: 'https://images.unsplash.com/photo-1758796629109-4f38e9374f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBmaWN0aW9ufGVufDF8fHx8MTc2MjQzNzIyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'available',
    location: 'ช��้น 3 ห้องสมุด - หมวด 895',
    copies: 2,
    available: 1
  },
  '3': {
    id: '3',
    title: 'คณิตศาสตร์เพื่อการแข่งขัน',
    author: 'อ.วิชัย สมบูรณ์',
    publisher: 'สสวท.',
    year: '2567',
    isbn: '978-616-08-4321-9',
    category: '510 - คณิตศาสตร์',
    pages: '512',
    description: 'รวมโจทย์และเทคนิคการแก้ปัญหาคณิตศาสตร์เพื่อการแข่งขัน ครอบคลุมทุกระดับชั้น พร้อมเฉลยละเอียด เหมาะสำหรับการเตรียมตัวสอบแข่งขัน',
    image: 'https://images.unsplash.com/photo-1666281269793-da06484657e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZXh0Ym9va3xlbnwxfHx8fDE3NjI0ODk2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'available',
    location: 'ชั้น 2 ห้องสมุด - หมวด 510',
    copies: 4,
    available: 3
  },
  '4': {
    id: '4',
    title: 'ประวัติศาสตร์ไทยสมัยสุโขทัย',
    author: 'รศ.ดร.พิมพใจ รักไทย',
    publisher: 'จุฬาลงกรณ์มหาวิทยาลัย',
    year: '2566',
    isbn: '978-616-08-7654-2',
    category: '959.3 - ประวัติศาสตร์ไทย',
    pages: '398',
    description: 'ศึกษาประวัติศาสตร์ไทยในสมัยสุโขทัย ครอบคลุมเหตุการณ์สำคัญ บุคคลสำคัญ และมรดกทางวัฒนธรรมที่ตกทอดมาจนถึงปัจจุบัน',
    image: 'https://images.unsplash.com/photo-1633580969828-e069e568928f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3ZlbCUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3NjI0NDk3MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'available',
    location: 'ชั้น 3 ห้องสมุด - หมวด 959',
    copies: 2,
    available: 2
  },
  '5': {
    id: '5',
    title: 'AI และอนาคตของมนุษยชาติ',
    author: 'ดร.ประยุทธ อัจฉริยะ',
    publisher: 'สำนักพิมพ์มติชน',
    year: '2567',
    isbn: '978-616-08-8765-4',
    category: '006.3 - ปัญญาประดิษฐ์',
    pages: '428',
    description: 'วิเคราะห์อนาคตของ���นุษยชาติในยุค AI ครอบคลุมทั้งโอกาสและความท้าทาย พร้อมแนวทางการปรับตัวและการใช้ประโยชน์จาก AI อย่างสร้างสรรค์',
    image: 'https://images.unsplash.com/photo-1761319115499-872737b89e44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwc3BpbmUlMjBsaWJyYXJ5fGVufDF8fHx8MTc2MjQ4OTY4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'borrowed',
    location: 'ชั้น 2 ห้องสมุด - หมวด 006',
    copies: 3,
    available: 0
  }
};

export function BookDetailPage() {
  const { id } = useParams();
  const book = id ? bookDatabase[id as keyof typeof bookDatabase] : null;

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center">
          <h1 className="text-2xl mb-4">ไม่พบหนังสือ</h1>
          <Link to="/">
            <Button className="bg-orange-600 hover:bg-orange-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              กลับหน้าหลัก
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <Link to="/">
          <Button variant="ghost" className="mb-6 text-orange-600 hover:text-orange-700 hover:bg-orange-50">
            <ArrowLeft className="w-4 h-4 mr-2" />
            กลับหน้าหลัก
          </Button>
        </Link>

        <div className="bg-card rounded-lg shadow-sm p-8 border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Book Cover */}
            <div>
              <div className="aspect-[2/3] bg-muted rounded-lg overflow-hidden shadow-md mb-4">
                <ImageWithFallback
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Status Badge */}
              <div className="text-center mb-4">
                {book.status === 'available' ? (
                  <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm">
                    ✓ พร้อมให้บริการ ({book.available}/{book.copies} เล่ม)
                  </span>
                ) : (
                  <span className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm">
                    ✗ ถูกยืมหมดแล้ว
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <Link to="/borrow" className="block">
                  <Button 
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    disabled={book.status !== 'available'}
                  >
                    จองหนังสือ
                  </Button>
                </Link>
                <Button variant="outline" className="w-full">
                  เพิ่มในรายการโปรด
                </Button>
              </div>
            </div>

            {/* Book Details */}
            <div className="md:col-span-2">
              <h1 className="text-3xl mb-2 text-gray-900">{book.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{book.author}</p>

              <div className="prose max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">{book.description}</p>
              </div>

              {/* Book Information */}
              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-xl mb-4 text-gray-900">รายละเอียดหนังสือ</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <User className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">ผู้แต่ง</p>
                      <p className="text-gray-900">{book.author}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">สำนักพิมพ์</p>
                      <p className="text-gray-900">{book.publisher}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">ปีที่พิมพ์</p>
                      <p className="text-gray-900">{book.year}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Hash className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">ISBN</p>
                      <p className="text-gray-900">{book.isbn}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Tag className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">หมวดหมู่</p>
                      <p className="text-gray-900">{book.category}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">จำนวนหน้า</p>
                      <p className="text-gray-900">{book.pages} หน้า</p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="text-sm text-gray-600 mb-1">ตำแหน่งหนังสือ</p>
                  <p className="text-orange-700">📍 {book.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}