import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'outline' | 'text';
  href?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  href,
  className, 
  ...props 
}) => {
  const baseClasses = cn(
    "inline-flex items-center justify-center font-sans text-xs font-semibold tracking-widest uppercase transition-premium focus:outline-none rounded-none select-none",
    variant === 'primary' && "bg-primary text-bg-canvas px-lg py-sm border border-primary hover:bg-transparent hover:text-primary",
    variant === 'accent' && "bg-accent text-bg-canvas px-lg py-sm border border-accent hover:bg-transparent hover:text-accent",
    variant === 'outline' && "border border-primary text-primary px-lg py-sm hover:bg-primary hover:text-bg-canvas",
    variant === 'text' && "text-primary hover:text-accent p-0 relative pb-[2px] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-current after:transition-transform after:duration-300 after:origin-right hover:after:origin-left after:scale-x-100 hover:after:scale-x-0",
    className
  );

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
};
