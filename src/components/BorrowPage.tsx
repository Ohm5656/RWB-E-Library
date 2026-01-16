import { useState } from 'react';
import { BookOpen, Calendar, Clock, User, Search, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';

const borrowInfo = [
  {
    title: 'ระยะเวลาการยืม',
    description: 'นักเรียน: 7 วัน | ครู/อาจารย์: 14 วัน',
    icon: Calendar
  },
  {
    title: 'จำนวนหนังสือ',
    description: 'สามารถยืมได้สูงสุด 3 เล่มต่อครั้ง',
    icon: BookOpen
  },
  {
    title: 'การต่ออายุ',
    description: 'สามารถต่ออายุได้ 1 ครั้ง หากไม่มีผู้จอง',
    icon: Clock
  }
];

const popularBooks = [
  { id: '1', title: 'หลักการเขียนโปรแกรม Python', status: 'available', available: 3, total: 5 },
  { id: '2', title: 'วรรณคดีไทยสมัยอยุธยา', status: 'available', available: 2, total: 3 },
  { id: '3', title: 'คณิตศาสตร์เพื่อการแข่งขัน', status: 'reserved', available: 0, total: 2 },
  { id: '4', title: 'ประวัติศาสตร์ไทยสมัยสุโขทัย', status: 'available', available: 1, total: 2 },
  { id: '5', title: 'AI และอนาคตของมนุษยชาติ', status: 'available', available: 4, total: 5 }
];

export function BorrowPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-6 h-6 text-orange-600" />
            <h1 className="text-2xl text-gray-900">รายชื่อนักเรียนค้างคืนหนังสือ</h1>
          </div>
          <p className="text-gray-600">รายชื่อนักเรียนที่ค้างคืนหนังสือ ตรวจสอบและติดตามการคืนหนังสือ</p>
        </div>

        {/* Search Section */}
        <Card className="p-6 mb-8 bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200">
          <h2 className="text-lg mb-4 text-gray-900">ค้นหาและยืมหนังสือ</h2>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="ค้นหาหนั��สือที่ต้องการยืม..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-white"
            />
            <Button className="bg-orange-600 hover:bg-orange-700">
              <Search className="w-4 h-4 mr-2" />
              ค้นหา
            </Button>
          </div>
        </Card>

        {/* Borrow Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {borrowInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2.5 rounded-lg">
                    <Icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-900 mb-1">{info.title}</h3>
                    <p className="text-xs text-gray-600">{info.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Rules Section */}
        <Card className="p-6 mb-8">
          <h2 className="text-lg mb-4 text-gray-900">กฎการยืม-คืน��นังสือ</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700">ต้องแสดงบัตรนักเรียน/บัตรประจำตัวครู ทุกครั้งที่ยืม-คืน</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700">สามารถยืมหนังสือได้สูงสุด 3 เล่มต่อครั้ง</p>
            </div>
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700">หากคืนหนังสือล่าช้า จะมีค่าปรับ 5 บาทต่อวัน</p>
            </div>
            <div className="flex items-start gap-2">
              <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700">หากทำหนังสือเสียหาย ต้องรับผิดชอบค่าชดเชยตามราาหนังสือ</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700">สามารถต่ออายุการยืมได้ 1 ครั้ง หากไม่มีผู้จอง</p>
            </div>
          </div>
        </Card>

        {/* Popular Books Section */}
        <div className="mb-8">
          <h2 className="text-lg mb-4 text-gray-900">หนังสือยอดนิยม - พร้อมให้ยืม</h2>
          <div className="space-y-3">
            {popularBooks.map((book) => (
              <Card key={book.id} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm text-gray-900 mb-1">{book.title}</h3>
                    <div className="flex items-center gap-4 text-xs text-gray-600">
                      <span>คงเหลือ: {book.available}/{book.total} เล่ม</span>
                      {book.status === 'available' ? (
                        <span className="flex items-center gap-1 text-green-600">
                          <CheckCircle2 className="w-3 h-3" />
                          พร้อมให้ยืม
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-orange-600">
                          <AlertCircle className="w-3 h-3" />
                          ถูกจองหมดแล้ว
                        </span>
                      )}
                    </div>
                  </div>
                  <Button 
                    className={`${
                      book.status === 'available' 
                        ? 'bg-orange-600 hover:bg-orange-700' 
                        : 'bg-gray-400 cursor-not-allowed'
                    }`}
                    disabled={book.status !== 'available'}
                  >
                    {book.status === 'available' ? 'ยืมเลย' : 'จองคิว'}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* How to Borrow Section */}
        <Card className="p-6 bg-orange-50 border-orange-200">
          <h2 className="text-lg mb-4 text-gray-900">วิธีการยืมหนังสือ</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                1
              </div>
              <p className="text-sm text-gray-700">ค้นหาหนังสือที่ต้องการ</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                2
              </div>
              <p className="text-sm text-gray-700">จองหรือยืมออนไลน์</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                3
              </div>
              <p className="text-sm text-gray-700">มารับที่ห้องสมุด</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                4
              </div>
              <p className="text-sm text-gray-700">คืนตามกำหนด</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}