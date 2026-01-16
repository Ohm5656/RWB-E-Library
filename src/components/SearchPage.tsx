import { useState } from 'react';
import { Search, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';

interface Book {
  id: number;
  isbn: string;
  title: string;
  author: string;
  category: string;
  available: boolean;
}

const mockBooks: Book[] = [
  {
    id: 1,
    isbn: '978-616-06-2345-1',
    title: 'หลักการเขียนโปรแกรม Python',
    author: 'ดร.สมชาย วงศ์ใหญ่',
    category: 'วิทยาการคอมพิวเตอร์',
    available: true
  },
  {
    id: 2,
    isbn: '978-616-07-8901-2',
    title: 'วรรณคดีไทยสมัยอยุธยา',
    author: 'ผศ.สมหญิง ใจดี',
    category: 'วรรณคดี',
    available: true
  },
  {
    id: 3,
    isbn: '978-616-08-5432-3',
    title: 'คณิตศาสตร์เพื่อการแข่งขัน',
    author: 'อ.วิชัย สมบูรณ์',
    category: 'คณิตศาสตร์',
    available: false
  },
  {
    id: 4,
    isbn: '978-616-09-1234-4',
    title: 'ประวัติศาสตร์ไทยสมัยสุโขทัย',
    author: 'รศ.ดร.พิมพ์ใจ รักไทย',
    category: 'ประวัติศาสตร์',
    available: true
  },
  {
    id: 5,
    isbn: '978-616-10-6789-5',
    title: 'ชีววิทยาโมเลกุล',
    author: 'ดร.สุดา วิทยาการ',
    category: 'วิทยาศาสตร์',
    available: true
  }
];

export function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Book[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const filtered = mockBooks.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.isbn.includes(searchTerm) ||
        book.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filtered);
      setHasSearched(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-800 rounded-full mb-6">
              <Search className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl mb-4">ค้นหาหนังสือ</h1>
            <p className="text-xl text-muted-foreground">
              ค้นหาจากชื่อหนังสือ, ผู้แต่ง, ISBN หรือหมวดหมู่
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-card rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex gap-4">
              <Input
                type="text"
                placeholder="ค้นหาหนังสือ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                className="h-14 text-lg"
              />
              <Button
                onClick={handleSearch}
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 px-8"
              >
                <Search className="w-5 h-5 mr-2" />
                ค้นหา
              </Button>
            </div>
          </div>

          {/* Results */}
          {hasSearched && (
            <div className="bg-card rounded-2xl shadow-xl p-8">
              <div className="mb-6">
                <h2 className="text-2xl">
                  ผลการค้นหา {results.length > 0 && `(${results.length} รายการ)`}
                </h2>
              </div>

              {results.length > 0 ? (
                <div className="space-y-4">
                  {results.map((book) => (
                    <div
                      key={book.id}
                      className="border border-border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex gap-4 flex-1">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-20 bg-gradient-to-br from-orange-600 to-gray-800 rounded-lg flex items-center justify-center">
                              <BookOpen className="w-8 h-8 text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="mb-2">{book.title}</h3>
                            <p className="text-muted-foreground mb-2">ผู้แต่ง: {book.author}</p>
                            <div className="flex gap-2 mb-2">
                              <Badge variant="outline">{book.category}</Badge>
                              <Badge variant="outline">ISBN: {book.isbn}</Badge>
                            </div>
                          </div>
                        </div>
                        <div>
                          {book.available ? (
                            <Badge className="bg-green-600/20 text-green-400 hover:bg-green-600/30 border-green-600/30">
                              พร้อมให้ยืม
                            </Badge>
                          ) : (
                            <Badge className="bg-red-600/20 text-red-400 hover:bg-red-600/30 border-red-600/30">
                              ไม่พร้อมให้ยืม
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4">
                    <Search className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground text-lg">
                    ไม่พบหนังสือที่คุณค้นหา
                  </p>
                  <p className="text-muted-foreground/60 mt-2">
                    กรุณาลองใช้คำค้นหาอื่น
                  </p>
                </div>
              )}
            </div>
          )}

          {!hasSearched && (
            <div className="bg-card rounded-2xl shadow-xl p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-muted rounded-full mb-6">
                <BookOpen className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-2xl mb-3">เริ่มต้นค้นหาหนังสือ</h3>
              <p className="text-muted-foreground">
                กรอกคำค้นหาด้านบนเพื่อค้นหาหนังสือที่คุณต้องการ
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}