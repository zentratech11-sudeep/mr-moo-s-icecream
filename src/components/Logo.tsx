import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export const DaisyIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    {/* Daisy Petals */}
    <ellipse cx="12" cy="5" rx="2.5" ry="4.5" fill="#ffffff" stroke="#d5c8a5" strokeWidth="0.8" />
    <ellipse cx="12" cy="19" rx="2.5" ry="4.5" fill="#ffffff" stroke="#d5c8a5" strokeWidth="0.8" />
    <ellipse cx="5" cy="12" rx="4.5" ry="2.5" fill="#ffffff" stroke="#d5c8a5" strokeWidth="0.8" />
    <ellipse cx="19" cy="12" rx="4.5" ry="2.5" fill="#ffffff" stroke="#d5c8a5" strokeWidth="0.8" />
    <ellipse cx="7.05" cy="7.05" rx="2.5" ry="4.5" transform="rotate(-45 7.05 7.05)" fill="#ffffff" stroke="#d5c8a5" strokeWidth="0.8" />
    <ellipse cx="16.95" cy="16.95" rx="2.5" ry="4.5" transform="rotate(-45 16.95 16.95)" fill="#ffffff" stroke="#d5c8a5" strokeWidth="0.8" />
    <ellipse cx="16.95" cy="7.05" rx="2.5" ry="4.5" transform="rotate(45 16.95 7.05)" fill="#ffffff" stroke="#d5c8a5" strokeWidth="0.8" />
    <ellipse cx="7.05" cy="19.95" rx="2.5" ry="4.5" transform="rotate(45 7.05 19.95)" fill="#ffffff" stroke="#d5c8a5" strokeWidth="0.8" />
    {/* Center disc */}
    <circle cx="12" cy="12" r="3.2" fill="#eab308" stroke="#ca8a04" strokeWidth="0.7" />
  </svg>
);

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
}) => {
  const isLight = variant === 'light';

  const headingSizes = {
    sm: 'text-xl tracking-tight',
    md: 'text-2xl md:text-3xl tracking-tight',
    lg: 'text-3xl md:text-4xl tracking-tight',
  };

  const subSizes = {
    sm: 'text-[10px]',
    md: 'text-xs md:text-sm',
    lg: 'text-sm md:text-base',
  };

  return (
    <div className={`flex flex-col items-center justify-center text-center select-none ${className}`}>
      {/* Brand title with daisy in center */}
      <div className="flex items-center justify-center gap-0.5">
        <span
          className={`font-serif-heading font-black tracking-tight ${
            isLight ? 'text-white' : 'text-[#1d3728]'
          } ${headingSizes[size]}`}
          style={{ letterSpacing: '0.02em' }}
        >
          MR
        </span>
        <span className="mx-1 transform -translate-y-0.5">
          <DaisyIcon className={size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5 md:w-6 md:h-6' : 'w-7 h-7'} />
        </span>
        <span
          className={`font-serif-heading font-black tracking-tight ${
            isLight ? 'text-white' : 'text-[#1d3728]'
          } ${headingSizes[size]}`}
          style={{ letterSpacing: '0.02em' }}
        >
          MOO’S
        </span>
      </div>

      {/* Script Subtitle */}
      <span
        className={`font-script-accent italic -mt-1 md:-mt-1.5 font-bold ${
          isLight ? 'text-[#f5e6b3]' : 'text-[#881326]'
        } ${subSizes[size]}`}
      >
        Ice-Cream Parlour &amp; Café
      </span>

      {/* Heritage location kicker */}
      <span
        className={`tracking-[0.22em] uppercase font-semibold text-[8px] md:text-[9px] mt-0.5 ${
          isLight ? 'text-emerald-200/80' : 'text-[#5d6b5e]'
        }`}
      >
        Real Dairy Ice Cream • Skipsea
      </span>
    </div>
  );
};
