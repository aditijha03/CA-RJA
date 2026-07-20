import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Bell, ExternalLink, Search } from 'lucide-react';
import gsap from 'gsap';

export interface Notification {
  id: string;
  title: string;
  date: string;
  href: string;
  isNew: boolean;
}

export default function Updates() {
  const [updates, setUpdates] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'All' | 'Announcement' | 'Notification'>('All');
  
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const response = await fetch('/api/notifications');
        const data = await response.json();
        
        // Remove duplicates that might have been interleaved for the marquee
        if (Array.isArray(data)) {
          const uniqueUpdates = Array.from(new Map(data.map(item => [item.id, item])).values());
          setUpdates(uniqueUpdates);
        }
      } catch (err) {
        console.error('Failed to fetch updates:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchUpdates();
  }, []);

  useEffect(() => {
    if (!loading && headerRef.current && contentRef.current) {
      gsap.fromTo(headerRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
      gsap.fromTo(contentRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 });
    }
  }, [loading]);

  const filteredUpdates = updates.filter(update => {
    const matchesSearch = update.title.toLowerCase().includes(searchTerm.toLowerCase());
    if (filter === 'All') return matchesSearch;
    if (filter === 'Announcement' && update.title.startsWith('Announcement:')) return matchesSearch;
    if (filter === 'Notification' && update.title.startsWith('Notification:')) return matchesSearch;
    return false;
  });

  const formatDate = (dateString: string) => {
    try {
      const d = new Date(dateString);
      if (isNaN(d.getTime())) return dateString;
      return d.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
    } catch {
      return dateString;
    }
  };

  const getCategory = (title: string) => {
    if (title.startsWith('Announcement:')) return 'Announcement';
    if (title.startsWith('Notification:')) return 'Notification';
    return 'Update';
  };

  const cleanTitle = (title: string) => {
    return title.replace('Announcement: ', '').replace('Notification: ', '');
  };

  return (
    <div className="min-h-screen bg-bg-base text-text-main pb-24 font-sans relative">
      <Helmet>
        <title>Regulatory Updates | R. Jhunjhunwala &amp; Associates</title>
        <meta name="description" content="Stay informed with the latest ICAI announcements and regulatory notifications." />
      </Helmet>

      {/* Hero Section */}
      <div data-theme="dark" className="relative w-full pt-16 pb-20 bg-[#0B2341] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#071527] opacity-80 z-0"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center" ref={headerRef}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-sans text-xs font-bold tracking-[0.15em] uppercase mb-6 backdrop-blur-md border border-white/20">
            <Bell className="w-4 h-4 text-[#E2C88F]" />
            <span>Stay Informed</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">
            Regulatory <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E2C88F] to-[#C6A15B]">Updates</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/80 leading-relaxed">
            Browse the complete archive of recent ICAI announcements and notifications. Stay compliant, stay ahead.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 mt-12" ref={contentRef}>
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search updates..."
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/50 transition-all text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            {['All', 'Announcement', 'Notification'].map(f => (
              <button 
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all whitespace-nowrap ${filter === f ? 'bg-[#0B2341] text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {f}s
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-8 h-8 border-4 border-[#C6A15B] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : filteredUpdates.length === 0 ? (
          <div className="text-center py-24 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
            <p className="text-gray-500 font-medium">No updates found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUpdates.map((update, idx) => {
              const cat = getCategory(update.title);
              const isAnnouncement = cat === 'Announcement';
              return (
                <a 
                  key={`${update.id}-${idx}`}
                  href={update.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full transition-colors duration-300" style={{ backgroundColor: isAnnouncement ? '#C6A15B' : '#0B2341' }}></div>
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full ${isAnnouncement ? 'bg-[#C6A15B]/10 text-[#C6A15B]' : 'bg-[#0B2341]/10 text-[#0B2341]'}`}>
                      {cat}
                    </span>
                    {update.isNew && (
                      <span className="text-[10px] uppercase font-bold text-red-500 bg-red-50 px-2 py-1 rounded">New</span>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 leading-snug mb-4 group-hover:text-[#0B2341] transition-colors line-clamp-3">
                    {cleanTitle(update.title)}
                  </h3>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-50">
                    <span className="text-xs text-gray-500 font-medium">{formatDate(update.date)}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#C6A15B] transition-colors" />
                  </div>
                </a>
              )
            })}
          </div>
        )}
      </div>
    </div>
  );
}
