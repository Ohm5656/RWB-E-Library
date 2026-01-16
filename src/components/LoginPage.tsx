import { useState } from 'react';
import { User, Lock, LogIn, UserPlus, Mail, Eye, EyeOff, IdCard } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

export function LoginPage() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
    remember: false
  });

  const [registerData, setRegisterData] = useState({
    name: '',
    studentId: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert('ระบบเข้าสู่ระบบกำลังพัฒนา กรุณารอการอัพเดต');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert('รหัสผ่านไม่ตรงกัน กรุณาตรวจสอบอีกค���ั้ง');
      return;
    }
    alert('ระบบลงทะเบียนกำลังพัฒนา กรุณารอการอัพเดต');
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl py-8">
        <div className="max-w-md mx-auto">
          {/* Header with Logo */}
          <div className="text-center mb-6">
            <div className="inline-block mb-4">
              {/* Book Logo */}
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Book Cover - Orange Gradient */}
                <rect x="12" y="9" width="48" height="54" rx="3" fill="url(#loginOrangeGradient)"/>
                
                {/* Book Spine Shadow */}
                <path d="M12 9 L12 63 L15 63 L15 9 Z" fill="#000000" fillOpacity="0.15"/>
                
                {/* Book Pages */}
                <rect x="15" y="12" width="42" height="48" rx="2" fill="#FFFFFF" fillOpacity="0.95"/>
                
                {/* RWB Text on Book */}
                <text x="36" y="32" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#EA580C" textAnchor="middle">
                  RWB
                </text>
                
                {/* Book Lines/Details */}
                <line x1="21" y1="42" x2="51" y2="42" stroke="#FED7AA" strokeWidth="2" strokeLinecap="round"/>
                <line x1="21" y1="48" x2="51" y2="48" stroke="#FED7AA" strokeWidth="2" strokeLinecap="round"/>
                <line x1="21" y1="54" x2="42" y2="54" stroke="#FED7AA" strokeWidth="2" strokeLinecap="round"/>
                
                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="loginOrangeGradient" x1="12" y1="9" x2="60" y2="63" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#F97316"/>
                    <stop offset="100%" stopColor="#EA580C"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h1 className="text-2xl text-gray-900 mb-1">
              <span className="text-orange-600" style={{ fontWeight: 700 }}>RWB</span> E-Library
            </h1>
            <p className="text-sm text-gray-600">ระบบห้องสมุดออนไลน์โรงเรียนราชวินิตบางแก้ว</p>
          </div>

          {/* Login/Register Tabs */}
          <Card className="p-6">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">เข้าสู่ระบบ</TabsTrigger>
                <TabsTrigger value="register">ลงทะเบียน</TabsTrigger>
              </TabsList>

              {/* Login Tab */}
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-5">
                  <div>
                    <Label htmlFor="login-username" className="text-sm text-gray-700 mb-2 block">
                      รหัสนักเรียน / รหัสครู <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <IdCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="login-username"
                        type="text"
                        required
                        value={loginData.username}
                        onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                        placeholder="เช่น 65001 หรือ T2023"
                        className="pl-10 h-11"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1.5">
                      กรอกรหัสนักเรียน 5 หลัก หรือรหัสครู
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="login-password" className="text-sm text-gray-700 mb-2 block">
                      รหัสผ่าน <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="login-password"
                        type={showLoginPassword ? "text" : "password"}
                        required
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        placeholder="กรอกรหัสผ่าน"
                        className="pl-10 pr-10 h-11"
                      />
                      <button
                        type="button"
                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showLoginPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="remember"
                        checked={loginData.remember}
                        onCheckedChange={(checked) => 
                          setLoginData({ ...loginData, remember: checked as boolean })
                        }
                      />
                      <Label htmlFor="remember" className="text-xs text-gray-700 cursor-pointer">
                        จดจำฉันไว้ในระบบ
                      </Label>
                    </div>
                    <button type="button" className="text-xs text-orange-600 hover:text-orange-700 hover:underline transition-colors">
                      ลืมรหัสผ่าน?
                    </button>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 h-11 text-sm"
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    เข้าสู่ระบบ
                  </Button>
                </form>

                <div className="mt-6 pt-5 border-t border-gray-200">
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <div className="bg-orange-600 p-1.5 rounded-lg flex-shrink-0">
                        <IdCard className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-orange-900 mb-1">
                          <strong>สำหรับนักเรียนใหม่:</strong>
                        </p>
                        <p className="text-xs text-orange-800">
                          ใช้รหัสนักเรียนเป็น Username และรหัสผ่านเริ่มต้นคือ <strong>rwb@2568</strong>
                          <br />
                          (กรุณาเปลี่ยนรหัสผ่านหลังเข้าสู่ระบบครั้งแรก)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Register Tab */}
              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <Label htmlFor="register-name" className="text-sm text-gray-700 mb-2 block">
                      ชื่อ-นามสกุล <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="register-name"
                        type="text"
                        required
                        value={registerData.name}
                        onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                        placeholder="เช่น สมชาย ใจดี"
                        className="pl-10 h-11"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="register-studentId" className="text-sm text-gray-700 mb-2 block">
                      รหัสนักเรียน / รหัสครู <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <IdCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="register-studentId"
                        type="text"
                        required
                        value={registerData.studentId}
                        onChange={(e) => setRegisterData({ ...registerData, studentId: e.target.value })}
                        placeholder="เช่น 65001 หรือ T2023"
                        className="pl-10 h-11"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="register-email" className="text-sm text-gray-700 mb-2 block">
                      อีเมล <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="register-email"
                        type="email"
                        required
                        value={registerData.email}
                        onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                        placeholder="example@email.com"
                        className="pl-10 h-11"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="register-password" className="text-sm text-gray-700 mb-2 block">
                      รหัสผ่าน <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="register-password"
                        type={showRegisterPassword ? "text" : "password"}
                        required
                        value={registerData.password}
                        onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                        placeholder="ตั้งรหัสผ่านอย่างน้อย 6 ตัวอักษร"
                        className="pl-10 pr-10 h-11"
                        minLength={6}
                      />
                      <button
                        type="button"
                        onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showRegisterPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="register-confirmPassword" className="text-sm text-gray-700 mb-2 block">
                      ยืนยันรหัสผ่าน <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="register-confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        required
                        value={registerData.confirmPassword}
                        onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                        placeholder="กรอกรหัสผ่านอีกครั้ง"
                        className="pl-10 pr-10 h-11"
                        minLength={6}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-xs text-blue-900">
                      <strong>หมายเหตุ:</strong> การลงทะเบียนจะต้องได้รับการอนุมัติจากบรรณารักษ์ 
                      (ใช้เวลาประมาณ 1-2 วันทำการ)
                    </p>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 h-11 text-sm"
                  >
                    <UserPlus className="w-4 h-4 mr-2" />
                    ยืนยันการลงทะเบียน
                  </Button>

                  <p className="text-xs text-center text-gray-600 pt-2">
                    การลงทะเบียนถือว่าคุณยอมรับ{' '}
                    <a href="#" className="text-orange-600 hover:text-orange-700 hover:underline transition-colors">
                      ข้อกำหนดและเงื่อนไข
                    </a>
                    {' '}ของห้องสมุด
                  </p>
                </form>
              </TabsContent>
            </Tabs>
          </Card>

          {/* Help Card */}
          <Card className="p-4 mt-4 bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="bg-gray-700 p-1.5 rounded-lg flex-shrink-0">
                  <Mail className="w-3 h-3 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-900 mb-1">
                    <strong>ต้องการความช่วยเหลือ?</strong>
                  </p>
                  <p className="text-xs text-gray-700">
                    ติดต่อเคาน์เตอร์ห้องสมุด จันทร์-ศุกร์ 08:00-16:00 น.
                    <br />
                    โทร: <a href="tel:023166313" className="text-orange-600 hover:underline">023166313</a> | 
                    อีเมล: <a href="mailto:rwb@rwb.ac.th" className="text-orange-600 hover:underline">rwb@rwb.ac.th</a>
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}