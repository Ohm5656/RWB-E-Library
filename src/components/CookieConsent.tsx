import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';

export function CookieConsent() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-2xl z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm">
              🍪 เว็บไซต์นี้ใช้คุกกี้เพื่อปรับปรุงประสบการณ์การใช้งานของคุณ 
              การใช้งานเว็บไซต์นี้ต่อถือว่าคุณยอมรับ{' '}
              <a href="/privacy" className="text-orange-500 hover:text-orange-400 underline">
                นโยบายความเป็นส่วนตัว
              </a>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              onClick={() => setShow(false)}
              className="bg-orange-600 hover:bg-orange-700"
            >
              ยอมรับ
            </Button>
            <button 
              onClick={() => setShow(false)}
              className="p-2 hover:bg-gray-800 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
