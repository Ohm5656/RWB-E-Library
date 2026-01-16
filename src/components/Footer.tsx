import { Phone, Mail, MapPin, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#CC6B2C] to-[#B85A1F] text-white pt-10 pb-6">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* ข้อมูลติดต่อ */}
          <div>
            <h3 className="text-white mb-4 text-sm opacity-95">ข้อมูลติดต่อ</h3>
            <div className="space-y-2">
              <p className="text-sm opacity-90">โรงเรียนราชวินิตบางแก้ว</p>
              <p className="text-sm opacity-90">31 หมู่ 13 ถนนเทพรัตน ตำบลบางแก้ว</p>
              <p className="text-sm opacity-90">อำเภอบางพลี จังหวัดสมุทรปราการ 10540</p>
              <p className="text-sm opacity-90">โทร 023166313</p>
            </div>
          </div>
          
          {/* ติดต่อเรา */}
          <div>
            <h3 className="text-white mb-4 text-sm opacity-95">ติดต่อเรา</h3>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FFE5CC]" />
                <a 
                  href="tel:023166313"
                  className="text-sm hover:text-[#FFE5CC] transition-colors opacity-90"
                >
                  TEL : 023166313
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <Facebook className="w-4 h-4 text-[#FFE5CC]" />
                <a 
                  href="https://www.facebook.com/profile.php?id=100084981081865&ref=embed_page" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-[#FFE5CC] transition-colors opacity-90"
                >
                  FB:โรงเรียนราชวินิตบางแก้ว
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FFE5CC]" />
                <a 
                  href="mailto:rwb@rwb.ac.th"
                  className="text-sm hover:text-[#FFE5CC] transition-colors opacity-90"
                >
                  📧 rwb@rwb.ac.th
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FFE5CC]" />
                <a 
                  href="https://maps.app.goo.gl/NUjVoJaR2F7nHPwg8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-[#FFE5CC] transition-colors opacity-90"
                >
                  🗺️MAPS:โรงเรียนราชวินิตบางแก้ว
                </a>
              </div>
            </div>
          </div>
          
          {/* Facebook Page Embed */}
          <div>
            <h3 className="text-white mb-4 text-sm opacity-95">โรงเรียนราชวินิตบางแก้ว</h3>
            <a 
              href="https://www.facebook.com/profile.php?id=100084981081865&ref=embed_page" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-white/10 rounded-lg overflow-hidden hover:ring-2 hover:ring-[#FFE5CC] transition-all backdrop-blur-sm"
            >
              <iframe 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100084981081865&tabs&width=340&height=130&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" 
                width="340" 
                height="130" 
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="w-full"
              />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-4 text-center text-xs text-white/80">
          <p>&copy; 2568 ห้องสมุดโรงเรียนราชวินิตบางแก้ว | RWB E-Library</p>
        </div>
      </div>
    </footer>
  );
}