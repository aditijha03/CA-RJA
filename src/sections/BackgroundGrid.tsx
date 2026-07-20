import React from 'react';

export const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[99] overflow-hidden mix-blend-difference">
      {/* Changing to grid-cols-3 divides the width into 3 equal columns,
        giving us exactly 2 clean vertical divider lines across the entire page.
      */}
      <div className="mx-auto max-w-[1440px] h-full px-sm md:px-lg xl:px-xl grid grid-cols-3">
        
        {/* First Vertical Line (Right edge of Column 1) */}
        <div className="border-r border-dashed border-white/70 h-full w-full" />

        {/* Second Vertical Line (Right edge of Column 2) */}
        <div className="border-r border-dashed border-white/70 h-full w-full" />

        {/* Column 3 (Empty, no right border needed so the screen layout stays open) */}
        <div className="h-full w-full" />
        
      </div>
    </div>
  );
};