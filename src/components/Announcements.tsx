import React, { useState, useEffect } from 'react';
import { Bell, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface Notification {
  id: string;
  title: string;
  date: string;
  href: string;
  isNew: boolean;
}

export const Announcements: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  // Fallback data reflecting the style seen in the mockup
  const fallbackData: Notification[] = [
    {
      id: 'fallback-1',
      title: 'Exposure Draft - Guidance Note on Tax Audit under section 44AB of the Income-tax Act, 1961 - A.Y. 2026-27.',
      date: 'Jul 02, 2026',
      href: 'https://www.icai.org',
      isNew: true,
    },
    {
      id: 'fallback-2',
      title: 'ICAI releases revised Auditing Standards (SA 600 series) applicable from next fiscal',
      date: 'Jul 01, 2026',
      href: 'https://www.icai.org',
      isNew: true,
    },
  ];

  // Utility to format date strings nicely like 'Jul 02, 2026'
  const formatDate = (dateString: string) => {
    try {
      const d = new Date(dateString);
      if (isNaN(d.getTime())) return dateString;
      return d.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
    } catch {
      return dateString;
    }
  };

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch('/api/notifications');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        if (Array.isArray(data) && data.length > 0) {
            setNotifications([...data, ...data]);
        } else {
            setNotifications([...fallbackData, ...fallbackData]);
        }
      } catch (err) {
        console.error('Failed to fetch announcements, falling back to static data:', err);
        setNotifications([...fallbackData, ...fallbackData]);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  if (loading) {
    return (
      <div className="bg-[#051120] text-white text-xs py-2 px-4 text-center">
        Loading latest announcements...
      </div>
    );
  }

  return (
    <div className="group bg-[#081424] text-slate-200 overflow-hidden whitespace-nowrap h-[42px] flex items-center relative z-50 text-sm">
      
      {/* LEFT: LATEST UPDATES BADGE */}
      <div className="px-4 md:px-6 font-semibold bg-[#081424] text-white z-20 uppercase tracking-widest text-[11px] md:text-[12px] border-r border-white/10 flex-shrink-0 flex items-center h-full absolute left-0 shadow-[15px_0_20px_-5px_rgba(8,20,36,1)]">
        <Bell size={14} className="mr-2 text-white" />
        Latest Updates
      </div>

      {/* MIDDLE: SCROLLING MARQUEE */}
      <div className="flex-1 overflow-hidden relative flex items-center h-full">
        {/* The marquee pushes from the right edge to the left */}
        <div className="animate-marquee group-hover:[animation-play-state:paused] inline-flex items-center space-x-12 px-8" style={{ animationDuration: '1000s' }}>
          {notifications.map((notification, idx) => (
            <a
              key={`${notification.id}-${idx}`}
              href={notification.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:text-[#C9962B] transition-colors"
            >
              <span className="text-[#6C85A3] text-[12px] mr-3 font-medium tracking-wide">
                {formatDate(notification.date)}
              </span>
              <span className="font-medium text-[13px] mr-3 tracking-wide">
                {notification.title}
              </span>
              {notification.isNew && (
                <span className="px-1.5 py-0.5 border border-[#C9962B]/70 text-[#C9962B] text-[9px] font-bold uppercase rounded-sm tracking-widest">
                  New
                </span>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* RIGHT: VIEW ALL BUTTON */}
      <Link 
        to="/updates" 
        className="px-4 md:px-6 font-bold bg-[#081424] text-[#C9962B] hover:text-white transition-colors z-20 uppercase tracking-widest text-[11px] md:text-[12px] border-l border-white/10 flex-shrink-0 flex items-center h-full absolute right-0 shadow-[-15px_0_20px_-5px_rgba(8,20,36,1)] cursor-pointer"
      >
        View All
        <ArrowRight size={14} className="ml-2" />
      </Link>

    </div>
  );
};

export default Announcements;
