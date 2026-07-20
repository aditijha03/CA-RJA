import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
// Ensure this path points correctly to where you saved your BackgroundGrid component!
// import { BackgroundGrid } from '../../sections/BackgroundGrid'; 
import { Announcements } from '../Announcements'; 

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
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
    </div>
  );
};