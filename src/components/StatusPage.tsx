import { useState } from 'react';
import { Search, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

interface BorrowRecord {
  id: number;
  borrower: string;
  studentId: string;
  isbn: string;
  bookTitle: string;
  borrowDate: string;
  dueDate: string;
  status: 'borrowed' | 'returned' | 'overdue';
}

const mockRecords: BorrowRecord[] = [
  {
    id: 1,
    borrower: 'นายสมชาย ใจดี',
    studentId: '65001',
    isbn: '978-616-06-2345-1',
    bookTitle: 'หลักการเขียนโปรแกรม Python',
    borrowDate: '2025-10-20',
    dueDate: '2025-11-03',
    status: 'borrowed'
  },
  {
    id: 2,
    borrower: 'นางสาวสมหญิง รักเรียน',
    studentId: '65002',
    isbn: '978-616-07-8901-2',
    bookTitle: 'วรรณคดีไทยสมัยอยุธยา',
    borrowDate: '2025-10-15',
    dueDate: '2025-10-29',
    status: 'returned'
  },
  {
    id: 3,
    borrower: 'นายวิชัย สมบูรณ์',
    studentId: '65003',
    isbn: '978-616-08-5432-3',
    bookTitle: 'คณิตศาสตร์เพื่อการแข่งขัน',
    borrowDate: '2025-09-25',
    dueDate: '2025-10-09',
    status: 'overdue'
  },
  {
    id: 4,
    borrower: 'นางสาวพิมพ์ใจ รักไทย',
    studentId: '65004',
    isbn: '978-616-09-1234-4',
    bookTitle: 'ประวัติศาสตร์ไทยสมัยสุโขทัย',
    borrowDate: '2025-10-25',
    dueDate: '2025-11-08',
    status: 'borrowed'
  },
  {
    id: 5,
    borrower: 'นายสุดา วิทยาการ',
    studentId: '65005',
    isbn: '978-616-10-6789-5',
    bookTitle: 'ชีววิทยาโมเลกุล',
    borrowDate: '2025-10-18',
    dueDate: '2025-11-01',
    status: 'returned'
  }
];

const getStatusBadge = (status: BorrowRecord['status']) => {
  switch (status) {
    case 'returned':
      return (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-100 gap-1">
          <CheckCircle className="w-3 h-3" />
          คืนแล้ว
        </Badge>
      );
    case 'overdue':
      return (
        <Badge className="bg-red-100 text-red-800 hover:bg-red-100 gap-1">
          <AlertCircle className="w-3 h-3" />
          เลยกำหนด
        </Badge>
      );
    case 'borrowed':
      return (
        <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 gap-1">
          <Clock className="w-3 h-3" />
          กำลังยืม
        </Badge>
      );
  }
};

export function StatusPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRecords, setFilteredRecords] = useState<BorrowRecord[]>(mockRecords);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const filtered = mockRecords.filter(record =>
        record.borrower.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.studentId.includes(searchTerm) ||
        record.bookTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRecords(filtered);
    } else {
      setFilteredRecords(mockRecords);
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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-600 to-gray-800 rounded-full mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl mb-4">ตรวจ���อบสถานะการยืม</h1>
            <p className="text-xl text-muted-foreground">
              ค้นหาด้วยรหัสนักเรียน ชื่อ-นามสกุล หรือชื่อหนังสือ
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-card rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex gap-4">
              <Input
                type="text"
                placeholder="ค้นหาด้วยรหัสนักเรียน หรือ ชื่อ-นามสกุล..."
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

          {/* Table */}
          <div className="bg-card rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 border-b border-border">
              <h2 className="text-2xl">
                รายการยืมหนังสือ ({filteredRecords.length} รายการ)
              </h2>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>ผู้ยืม</TableHead>
                    <TableHead>รหัสนักเรียน</TableHead>
                    <TableHead>ISBN</TableHead>
                    <TableHead>ชื่อหนังสือ</TableHead>
                    <TableHead>วันที่ยืม</TableHead>
                    <TableHead>กำหนดส่ง</TableHead>
                    <TableHead>สถานะ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRecords.length > 0 ? (
                    filteredRecords.map((record) => (
                      <TableRow 
                        key={record.id}
                        className="hover:bg-muted/30"
                      >
                        <TableCell>{record.borrower}</TableCell>
                        <TableCell>{record.studentId}</TableCell>
                        <TableCell className="text-muted-foreground">{record.isbn}</TableCell>
                        <TableCell>{record.bookTitle}</TableCell>
                        <TableCell className="text-muted-foreground">
                          {new Date(record.borrowDate).toLocaleDateString('th-TH')}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {new Date(record.dueDate).toLocaleDateString('th-TH')}
                        </TableCell>
                        <TableCell>{getStatusBadge(record.status)}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4">
                          <Search className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground text-lg">
                          ไม่พบข้อมูลที่คุณค้นหา
                        </p>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 bg-card rounded-2xl shadow-lg p-6">
            <h3 className="mb-4">คำอธิบายสถานะ</h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Badge className="bg-orange-600/20 text-orange-400 hover:bg-orange-600/30 border-orange-600/30 gap-1">
                  <Clock className="w-3 h-3" />
                  กำลังยืม
                </Badge>
                <span className="text-muted-foreground">- หนังสือยังอยู่ในช่วงเวลายืม</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-green-600/20 text-green-400 hover:bg-green-600/30 border-green-600/30 gap-1">
                  <CheckCircle className="w-3 h-3" />
                  คืนแล้ว
                </Badge>
                <span className="text-muted-foreground">- คืนหนังสือเรียบร้อยแล้ว</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-red-600/20 text-red-400 hover:bg-red-600/30 border-red-600/30 gap-1">
                  <AlertCircle className="w-3 h-3" />
                  เลยกำหนด
                </Badge>
                <span className="text-muted-foreground">- เลยกำหนดส่งคืน กรุณาคืนโดยเร็ว</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}