import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="sticky top-0 z-50 shadow-lg bg-white border-b border-border">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Header */}
        <div className="flex items-center gap-3 md:gap-6 py-3 md:py-4">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <div className="relative">
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
                <rect x="8" y="6" width="32" height="36" rx="2" fill="url(#orangeGrad)" />
                <rect x="10" y="8" width="28" height="32" rx="1" fill="#ffffff" />
                <text x="24" y="20" fontSize="8" fontWeight="bold" fill="#FF8C42" textAnchor="middle">
                  RWB
                </text>
                <defs>
                  <linearGradient id="orangeGrad" x1="8" y1="6" x2="40" y2="42">
                    <stop offset="0%" stopColor="#FFB366" />
                    <stop offset="100%" stopColor="#FFD4A3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="hidden sm:block">
              <div className="flex items-baseline gap-1">
                <span className="text-lg md:text-xl text-primary font-bold">RWB</span>
                <span className="text-sm md:text-base">E-Library</span>
              </div>
              <div className="text-xs text-muted-foreground">ห้องสมุดราชวินิตบางแก้ว</div>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden ml-auto p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation Bar */}
        <div className="border-t border-border">
          <div className="flex items-center gap-6 py-3 overflow-x-auto">

            <Link
              to="/"
              className={`text-sm whitespace-nowrap ${
                isActive('/') ? 'font-bold text-primary' : ''
              }`}
            >
              หน้าหลัก
            </Link>

            {/* Link to Apps Script Late Return Page */}
            <a
              href="https://script.google.com/macros/s/AKfycbxg31YClqOfZoM0vNMLAeQzK13bPmoDMr5URmXIDiZhrOL3WpysAnMInZx5HLH28OZFpQ/exec?page=borrow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm whitespace-nowrap"
            >
              รายชื่อนักเรียนค้างคืนหนังสือ
            </a>

          </div>
        </div>

      </div>
    </div>
  );
}
