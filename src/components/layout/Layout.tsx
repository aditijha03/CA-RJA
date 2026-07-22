import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
// Ensure this path points correctly to where you saved your BackgroundGrid component!
// import { BackgroundGrid } from '../../sections/BackgroundGrid'; 
import { Announcements } from '../Announcements'; 

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col select-text relative bg-bg-canvas overflow-clip">
      {/* Global Structural Background Lines Layer */}
      {/* <BackgroundGrid /> */}

      {/* Announcements Marquee Layer */}
      <Announcements />

      {/* Navigation Header */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 w-full relative z-10">
        {children}
      </main>

      {/* 4. Footer */}
      <Footer />

      {/* Floating Social Bar */}
      {isHomePage && (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] bg-white shadow-[0_12px_36px_-6px_rgba(7,29,73,0.1)] py-5 px-4 rounded-full flex flex-col space-y-6 items-center border border-[#E7E7E7] pointer-events-auto">
          <a href="https://www.linkedin.com/in/jhunjhunwalarohit?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn" className="text-[#0077B5] hover:scale-115 transition-transform duration-200">
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.02-.5.1-.68a1.14 1.14 0 0 1 1-.77c.76 0 1 .56 1 1.39v4.73h2.8M6.5 8.37a1.37 1.37 0 0 0 0-2.75 1.37 1.37 0 0 0 0 2.75M8 18.5V10.13H5v8.37h3z"/></svg>
          </a>
          <a href="https://www.facebook.com/share/1HdYTm5c9n/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook" className="text-[#1877F2] hover:scale-115 transition-transform duration-200">
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
          </a>
          <a href="https://www.instagram.com/cajhunjhunwalarohit?igsh=anV1b2wyODVieG1i" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram" className="text-[#E4405F] hover:scale-115 transition-transform duration-200">
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
          <a href="https://wa.me/919820674200" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp" className="text-[#25D366] hover:scale-115 transition-transform duration-200">
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.797 1.452 5.432 0 9.851-4.416 9.854-9.848.002-2.63-1.02-5.101-2.871-6.957C16.566 1.958 14.1 .936 11.999.936c-5.442 0-9.866 4.417-9.87 9.85-.001 2.225.586 4.391 1.696 6.32l-.999 3.65 3.821-.992zm11.233-5.246c-.268-.134-1.588-.784-1.834-.874-.246-.09-.425-.134-.604.134-.179.269-.693.874-.85 1.053-.157.179-.313.202-.581.067-.268-.134-1.134-.419-2.16-1.336-.799-.713-1.337-1.593-1.494-1.862-.157-.269-.017-.414.118-.548.121-.12.268-.313.403-.47.134-.157.179-.269.268-.449.09-.179.045-.336-.022-.47-.067-.134-.604-1.456-.827-1.993-.217-.523-.455-.453-.624-.461-.16-.008-.344-.01-.528-.01-.184 0-.485.069-.74.346-.253.278-.968.947-.968 2.31 0 1.363.992 2.68 1.104 2.833.112.153 1.953 2.982 4.73 4.181.661.285 1.177.455 1.579.583.664.211 1.269.181 1.748.11.534-.08 1.588-.65 1.811-1.277.224-.628.224-1.166.157-1.277-.067-.111-.246-.179-.514-.313z"/></svg>
          </a>
        </div>
      )}
    </div>
  );
};