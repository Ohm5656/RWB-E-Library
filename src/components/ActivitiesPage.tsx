import { Calendar, Users, BookOpen, Trophy, Clock, MapPin } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

const upcomingActivities = [
  {
    id: 1,
    title: 'สัปดาห์ห้องสมุด 2568',
    date: '15-20 มกราคม 2568',
    time: '09:00 - 16:00 น.',
    location: 'ห้องสมุด RWB',
    participants: 'นักเรียนทุกระดับชั้น',
    description: 'กิจกรรมส่งเสริมการอ่าน ประกวดเล่านิทาน การแข่งขันตอบปัญหาหนังสือ และนิทรรศการหนังสือน่าสนใจ',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nfGVufDF8fHx8MTc2MjQyMDAwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'upcoming',
    category: 'งานใหญ่'
  },
  {
    id: 2,
    title: 'ประกวดเล่านิทาน',
    date: '25 มกราคม 2568',
    time: '13:00 - 15:00 น.',
    location: 'หอประชุม',
    participants: 'นักเ���ียน ม.1-3',
    description: 'ประกวดการเล่านิทานภาษาไทย มีรางวัลมากมาย',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBzcGVha2luZyUyMHN0dWRlbnR8ZW58MXx8fHwxNzYyNDkzNjUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'upcoming',
    category: 'การแข่งขัน'
  },
  {
    id: 3,
    title: 'เวิร์คช็อปการทำหนังสือ Pop-up',
    date: '5 กุมภาพันธ์ 2568',
    time: '14:00 - 16:00 น.',
    location: 'ห้องสมุด (โซนกิจกรรม)',
    participants: 'สมาชิกห้องสมุด 30 คน',
    description: 'เรียนรู้เทคนิคการทำหนังสือ Pop-up สร้างสรรค์งานศิลปะจากกระดาษ',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjB3b3Jrc2hvcCUyMGtpZHN8ZW58MXx8fHwxNzYyNDkzNjY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'upcoming',
    category: 'เวิร์คช็อป'
  },
  {
    id: 4,
    title: 'ชมรมรักการอ่าน - ครั้งที่ 1/2568',
    date: 'ทุกวันศุกร์',
    time: '15:00 - 16:00 น.',
    location: 'ห้องสมุด (มุมอ่านหนังสือ)',
    participants: 'สมาชิกชมรม',
    description: 'พบปะแลกเปลี่ยนหนังสือที่น่าสนใจ แนะนำหนังสือดีๆ ให้กัน',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY2x1YiUyMG1lZXRpbmd8ZW58MXx8fHwxNzYyNDkzNjc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'ongoing',
    category: 'ชมรม'
  }
];

const pastActivities = [
  {
    id: 5,
    title: 'การแข่งขันตอบปัญหาจากหนังสือ',
    date: '10 ธันวาคม 2567',
    winner: 'ม.3/2',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvbXBldGl0aW9ufGVufDF8fHx8MTc2MjQ5MzY4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 6,
    title: 'พบปะนักเขียนรุ่นใหม่',
    date: '25 พฤศจิกายน 2567',
    winner: 'ผู้เข้าร่วม 85 คน',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRob3IlMjB0YWxrfGVufDF8fHx8MTc2MjQ5MzcwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 7,
    title: 'กิจกรรมบริจาคหนังสือ',
    date: '15 พฤศจิกายน 2567',
    winner: 'ได้รับหนังสือ 234 เล่ม',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwZG9uYXRpb258ZW58MXx8fHwxNzYyNDkzNzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  }
];

export function ActivitiesPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-6 h-6 text-orange-600" />
            <h1 className="text-2xl text-gray-900">กิจกรรมห้องสมุด</h1>
          </div>
          <p className="text-gray-600">กิจกรรมส่งเสริมการอ่านและพัฒนาทักษะต่างๆ สำหรับนักเรียนและครู</p>
        </div>

        {/* Upcoming Activities */}
        <div className="mb-10">
          <h2 className="text-lg mb-4 text-gray-900">กิจกรรมที่กำลังจะมาถึง</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingActivities.map((activity) => (
              <Card key={activity.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className={`${
                      activity.status === 'upcoming' 
                        ? 'bg-orange-600 hover:bg-orange-700' 
                        : 'bg-green-600 hover:bg-green-700'
                    }`}>
                      {activity.status === 'upcoming' ? 'เร็วๆ นี้' : 'กำลังดำเนินการ'}
                    </Badge>
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-white/90 text-gray-900">
                      {activity.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base text-gray-900 mb-3">{activity.title}</h3>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Calendar className="w-4 h-4 text-orange-600" />
                      <span>{activity.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Clock className="w-4 h-4 text-orange-600" />
                      <span>{activity.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <MapPin className="w-4 h-4 text-orange-600" />
                      <span>{activity.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Users className="w-4 h-4 text-orange-600" />
                      <span>{activity.participants}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed">{activity.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Activities */}
        <div className="mb-8">
          <h2 className="text-lg mb-4 text-gray-900">กิจกรรมที่ผ่านมา</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pastActivities.map((activity) => (
              <Card key={activity.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-40">
                  <ImageWithFallback
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm text-gray-900 mb-2">{activity.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
                    <Calendar className="w-3 h-3 text-orange-600" />
                    <span>{activity.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Trophy className="w-3 h-3 text-orange-600" />
                    <span>{activity.winner}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact for Activities */}
        <Card className="p-6 bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200">
          <div className="flex items-start gap-4">
            <div className="bg-orange-600 p-3 rounded-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-base text-gray-900 mb-2">สนใจเข้าร่วมกิจกรรม?</h3>
              <p className="text-sm text-gray-700 mb-3">
                ติดต่อสอบถามรายละเอียดเพิ่มเติมได้ที่เคาน์เตอร์ห้องสมุด หรือ โทร 023166313
              </p>
              <div className="flex gap-2 text-xs text-gray-600">
                <span>เวลาทำการ: จันทร์-ศุกร์ 08:00-16:00 น.</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}