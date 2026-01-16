import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <div className="relative h-[500px] bg-gradient-to-r from-gray-900 via-orange-900 to-black overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1731865746794-e64e28f7de09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZyUyMFRoYWlsYW5kfGVufDF8fHx8MTc2MjQ4ODA2NXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="School Building"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-6">RWB E-Library</h1>
          <p className="text-xl md:text-2xl mb-8">
            ห้องสมุดอิเล็กทรอนิกส์ โรงเรียนราชวินิตบางเขน
          </p>
          <p className="text-lg opacity-90">
            แหล่งความรู้ที่ทันสมัย สำหรับนักเรียนและครู
          </p>
        </div>
      </div>
    </div>
  );
}