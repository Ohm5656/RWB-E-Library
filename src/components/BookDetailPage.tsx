import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, User, Calendar, Hash, Tag } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

const bookDatabase = {
  "1": {
    id: "1",
    title: "วันเวลาใน 4 ทวีป",
    author: "เขมานันทะ",
    publisher: "พิมพ์คำ",
    year: "2548",
    isbn: "9789749275691",
    pages: "384",
    category: "150-152.41",
    description:
      "บันทึกการเดินทางและเรื่องเล่าจากหลายทวีป ถ่ายทอดมุมมอง วัฒนธรรม และประสบการณ์ของผู้เขียนในแต่ละช่วงเวลา",
    image: "https://satapornbooks.com/file/product-inside/44y2a4p27414q5o4p5",
    status: "available",
    location: "ห้องสมุด - ชั้นวาง 150-152.41",
    copies: 1,
    available: 1,
    promotion: true,
  },

  "2": {
    id: "2",
    title: "ทำทุกอย่างให้สุด Ritz",
    author: "นศ.พ.เรืองฤทธิ์ ศิริพานิช",
    publisher: "เคล็ดไทย",
    year: "2559",
    isbn: "9786169272700",
    category: "170-190",
    description:
      "หนังสือแนวแรงบันดาลใจ/ประสบการณ์ชีวิต ถ่ายทอดแนวคิดและการใช้ชีวิตให้เต็มที่ในแบบของผู้เขียน",
    image:
      "https://static.getbookie.com/product/image/2024/01/full/1705042751-1778.9873046875-bc059df3-b649-40c4-86b4-fd7d119346d7.jpeg",
    status: "available",
    location: "ห้องสมุด - ชั้นวาง 170-190",
    copies: 3,
    available: 2,
    promotion: true,
  },

  "3": {
    id: "3",
    title: "Short Note ภาษาไทย ติวให้ได้เต็ม",
    author: "นิทัศย์ ยศธสาร (อ.แจ๊กกี้)",
    publisher: "MIS (เอ็มไอเอส)",
    year: "2562",
    isbn: "9786164301795",
    pages: "304",
    category: "495.91",
    description:
      "สรุปภาษาไทยแบบ Short Note เน้นจุดที่ออกสอบบ่อย พร้อมเทคนิคจำและแนวข้อสอบเพื่อเตรียมสอบ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaApITkrpJwbc0RlokTr7zedmgk2sP1CB5QQ&s",
    status: "available",
    location: "ห้องสมุด - ชั้นวาง 495.91",
    copies: 3,
    available: 2,
    promotion: true,
  },

  "4": {
    id: "4",
    title: "การวัดด้านจิตพิสัย",
    author: "ล้วน สายยศ, อังคณา สายยศ",
    isbn: "9748269299",
    pages: "331",
    category: "158",
    description:
      "เนื้อหาเกี่ยวกับการวัด/ประเมินผลด้านจิตพิสัย (Affective domain) ใช้เป็นแนวทางในการสร้างแบบวัดและประเมินผล",
    image: "https://library.pptn.ac.th/cover/9789748269290.jpg",
    status: "available",
    location: "ห้องสมุด - ชั้นวาง 158",
    copies: 2,
    available: 1,
    promotion: true,
  },

  "5": {
    id: "5",
    title: "30 ชั่วโมงพูดภาษาอังกฤษได้ง่ายเว่อร์",
    author: "ยุวนาฏ คุ้มขาว (ครูกวาง) และคณะ",
    year: "2563",
    isbn: "8858757411837",
    pages: "384",
    category: "440-489",
    description:
      "แนวฝึกพูดอังกฤษแบบเป็นขั้นตอน เน้นประโยคใช้จริงและฝึกสื่อสารให้คล่อง เหมาะกับผู้เริ่มต้น",
    image: "https://api.chulabook.com/images/pid-29795.jpg",
    status: "available",
    location: "ห้องสมุด - ชั้นวาง 440-489",
    copies: 3,
    available: 3,
    promotion: true,
  },

  "6": {
    id: "6",
    title: "ชิมไป บ่นไป",
    author: "สมัคร สุนทรเวช",
    publisher: "อมรินทร์ บุ๊ค เซ็นเตอร์",
    year: "2543",
    isbn: "9742729204",
    pages: "204",
    category: "641.57-641.7",
    description:
      "เรื่องเล่าด้านอาหาร/การชิมแบบคอลัมน์ อ่านสนุก มีมุมมองและความเห็นสไตล์ผู้เขียน",
    image: "https://inwfile.com/s-fq/hwwuqg.jpg",
    status: "available",
    location: "ห้องสมุด - ชั้นวาง 641.57-641.7",
    copies: 2,
    available: 1,
    promotion: true,
  },

  "7": {
    id: "7",
    title: "การจัดการโรงแรม",
    author: "สุพัตรา สร้อยเพ็ชร์",
    publisher: "โรงพิมพ์มหาวิทยาลัยขอนแก่น",
    year: "2553",
    isbn: "9786162230233",
    pages: "329",
    category: "647-649",
    description:
      "ตำรา Hotel Management ครอบคลุมงานบริหารจัดการโรงแรม โครงสร้างงานบริการ และการดำเนินงานสำคัญในธุรกิจโรงแรม",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_R-aB4GhRw9RyQ2S-kOoAcJW5_WLZ0lJ9Jw&s",
    status: "available",
    location: "ห้องสมุด - ชั้นวาง 647-649",
    copies: 3,
    available: 2,
    promotion: true,
  },

  "8": {
    id: "8",
    title: "กฎการทำงานของgoogle",
    author: "Laszlo Bock",
    publisher: "วีเลิร์น",
    year: "2562",
    isbn: "9786162873041",
    pages: "464",
    category: "658.1-658.3",
    description:
      "Work Rules! แนวคิดการบริหารคนและวัฒนธรรมองค์กรจากประสบการณ์ทีม People Operations ของ Google",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbu4VjiKKJzoCA3NJOg3Vh9MCbaKE9cOYS-w&s",
    status: "available",
    location: "ห้องสมุด - ชั้นวาง 658.1-658.3",
    copies: 2,
    available: 2,
    promotion: true,
  },

  "9": {
    id: "9",
    title: "เตรียมพร้อมสอบจีน",
    author: "ผศ.ดร.ภูรดา เซี่ยงจ๊ง",
    isbn: "9786164940505",
    pages: "264",
    category: "495.6-495.65",
    description:
      "สรุปไวยากรณ์จีน+คำศัพท์ พร้อมแนวข้อสอบจำนวนมากและเฉลยละเอียด สำหรับเตรียมสอบเข้ามหาวิทยาลัย/TCAS",
    image: "https://images.www.jamsai.com/Ganbatte/9786164940505.webp",
    status: "available",
    location: "ห้องสมุด - ชั้นวาง 495.6-495.65",
    copies: 3,
    available: 2,
    promotion: true,
  },

  "10": {
    id: "10",
    title: "ไอน์สไตน์ถามพระพุทธเจ้าตอบ",
    author: "ศุภวรรณ พิพัฒพรรณวงศ์ กรีน",
    publisher: "Free mind",
    year: "2549",
    isbn: "9786167115146",
    pages: "236",
    category: "240-290",
    description:
      "ชวนคิดเชิงธรรมะผ่านมุมมองแบบวิทยาศาสตร์ ตั้งคำถามและอธิบายหลักธรรมให้เข้าใจง่ายขึ้น",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJ6ALASsYKKu_uCzkixi1bR-G3LlRo3adSw&s",
    status: "available",
    location: "ห้องสมุด - ชั้นวาง 240-290",
    copies: 2,
    available: 1,
    promotion: true,
  },

  "11": {
    id: "11",
    title: "The secret language of color",
    author: "Joann Eckstut and Arielle Eckstut",
    publisher: "Black Dog & Leventhal",
    year: "2013",
    isbn: "9781603763523",
    pages: "240",
    category: "677-679",
    description:
      "สำรวจสีในมุมวิทยาศาสตร์ ธรรมชาติ ประวัติศาสตร์ และวัฒนธรรม อธิบายความหมาย/ผลของสีต่อมนุษย์และโลก",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwRxbyH0w-BLftOlRJNRmxgmX4BC8RdIBNuQ&s",
    status: "available",
    location: "ห้องสมุด - ชั้นวาง 677-679",
    copies: 2,
    available: 2,
    promotion: true,
  },

  "12": {
    id: "12",
    title: "หยั่งรู้ใจคนในทุกสถานการณ์",
    author: "Mr.Speaker",
    publisher: "7D Book",
    year: "2565",
    isbn: "9786162759796",
    pages: "248",
    category: "158.1-158.5",
    description:
      "เทคนิคการสื่อสาร/การโน้มน้าว เพื่อเข้าใจคนและจัดการสถานการณ์ต่าง ๆ ให้ได้ผลลัพธ์ที่ต้องการ",
    image:
      "https://cdn-local.mebmarket.com/meb/server1/188993/Thumbnail/book_detail_large.gif?2",
    status: "available",
    location: "ห้องสมุด - ชั้นวาง 158.1-158.5",
    copies: 3,
    available: 1,
    promotion: true,
  },
} as const;

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
          <Button
            variant="ghost"
            className="mb-6 text-orange-600 hover:text-orange-700 hover:bg-orange-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            กลับหน้าหลัก
          </Button>
        </Link>

        <div className="bg-card rounded-lg shadow-sm p-8 border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ✅ Book Cover */}
            <div>
              <div className="aspect-[2/3] bg-muted rounded-lg overflow-hidden shadow-md mb-4">
                <ImageWithFallback
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Action Buttons (ถ้ายังไม่มีปุ่มก็ปล่อยว่างได้) */}
              <div className="space-y-2">{/* ใส่ปุ่มเพิ่มทีหลังได้ */}</div>
            </div>

            {/* ✅ Book Details */}
            <div className="md:col-span-2">
              <h1 className="text-3xl mb-2 text-gray-900">{book.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{book.author}</p>

              <div className="prose max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  {book.description}
                </p>
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
                      <p className="text-gray-900">
                        {"publisher" in book ? book.publisher : "-"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">ปีที่พิมพ์</p>
                      <p className="text-gray-900">
                        {"year" in book ? book.year : "-"}
                      </p>
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
                      <p className="text-sm text-gray-500">ชั้นวาง</p>
                      <p className="text-gray-900">{book.category}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">จำนวนหน้า</p>
                      <p className="text-gray-900">
                        {"pages" in book ? `${book.pages} หน้า` : "-"}
                      </p>
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
            {/* ✅ ปิด md:col-span-2 */}
          </div>
          {/* ✅ ปิด grid */}
        </div>
      </div>
    </div>
  );
}
