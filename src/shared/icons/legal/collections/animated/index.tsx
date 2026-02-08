import React from 'react';

interface AnimatedIconProps {
  size?: number;
  className?: string;
  motion?: 'off' | 'hover' | 'loop';
}

const getAnimClass = (motion: 'off' | 'hover' | 'loop', baseAnim: string): string => {
  if (motion === 'loop') return baseAnim;
  if (motion === 'hover') return `hover-${baseAnim}`;
  return '';
};

export const GavelAnimIcon: React.FC<AnimatedIconProps> = ({ size = 24, className = '', motion = 'hover' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${className} ${getAnimClass(motion, 'anim-gavel')}`} role="img" aria-label="Gavel Animated">
    <title>Gavel Animated</title>
    <path d="M14 6L18 10M10 10L14 14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="16" y="2" width="6" height="3" rx="1" transform="rotate(45 16 2)" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.1"/>
    <rect x="6" y="12" width="6" height="3" rx="1" transform="rotate(45 6 12)" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.1"/>
    <path d="M2 20H8M5 20V22" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
  </svg>
);

export const ScalesAnimIcon: React.FC<AnimatedIconProps> = ({ size = 24, className = '', motion = 'hover' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${className} ${getAnimClass(motion, 'anim-balance')}`} role="img" aria-label="Scales Animated">
    <title>Scales Animated</title>
    <circle cx="12" cy="3" r="1.5" stroke="currentColor" strokeWidth="1.75"/>
    <path d="M12 4.5V21M8 21H16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
    <path d="M4 7H10M14 7H20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
    <path d="M4 14L7 8L10 14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 14C4 15.5 5.5 16.5 7 16.5C8.5 16.5 10 15.5 10 14" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.1"/>
    <path d="M14 14L17 8L20 14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 14C14 15.5 15.5 16.5 17 16.5C18.5 16.5 20 15.5 20 14" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.1"/>
  </svg>
);

export const CourthouseAnimIcon: React.FC<AnimatedIconProps> = ({ size = 24, className = '', motion = 'hover' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${className} ${getAnimClass(motion, 'anim-glow')}`} role="img" aria-label="Courthouse Animated">
    <title>Courthouse Animated</title>
    <path d="M3 10L12 4L21 10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 10H21V12H3V10Z" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.1"/>
    <path d="M5 12V19M9 12V19M15 12V19M19 12V19" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
    <path d="M3 19H21V21H3V19Z" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.1"/>
  </svg>
);

export const LawbookAnimIcon: React.FC<AnimatedIconProps> = ({ size = 24, className = '', motion = 'hover' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${className} ${getAnimClass(motion, 'anim-flip')}`} role="img" aria-label="Law Book Animated">
    <title>Law Book Animated</title>
    <path d="M4 4C4 3.44772 4.44772 3 5 3H17C17.5523 3 18 3.44772 18 4V20C18 20.5523 17.5523 21 17 21H5C4.44772 21 4 20.5523 4 20V4Z" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.1"/>
    <path d="M8 7H14M8 11H14M8 15H11" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
    <path d="M18 6H20V18H18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ContractAnimIcon: React.FC<AnimatedIconProps> = ({ size = 24, className = '', motion = 'hover' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${className} ${getAnimClass(motion, 'anim-flip')}`} role="img" aria-label="Contract Animated">
    <title>Contract Animated</title>
    <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.1"/>
    <path d="M8 6H16M8 10H16M8 14H12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
    <path d="M14 17C14 17 15 18 16 17.5C17 17 17.5 18.5 17 19" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
  </svg>
);

export const SignatureAnimIcon: React.FC<AnimatedIconProps> = ({ size = 24, className = '', motion = 'hover' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${className} ${getAnimClass(motion, 'anim-pulse')}`} role="img" aria-label="Signature Animated">
    <title>Signature Animated</title>
    <path d="M3 17C5 15 7 19 9 17C11 15 11 19 13 17C15 15 17 17 21 15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
    <path d="M16 3L20 7L10 17L6 17L6 13L16 3Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
  </svg>
);

export const ShieldAnimIcon: React.FC<AnimatedIconProps> = ({ size = 24, className = '', motion = 'hover' }) => {
  const animClass = getAnimClass(motion, 'anim-shimmer');
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${className} ${animClass}`} role="img" aria-label="Shield Animated">
      <title>Shield Animated</title>
      <defs>
        <linearGradient id="shimmer-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0"/>
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="currentColor" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d="M12 2L4 6V12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12V6L12 2Z" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.1"/>
      <path className="shimmer-layer" d="M12 2L4 6V12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12V6L12 2Z" fill="url(#shimmer-gradient)"/>
      <path d="M9 11L11 13L15 9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export const StampAnimIcon: React.FC<AnimatedIconProps> = ({ size = 24, className = '', motion = 'hover' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${className} ${getAnimClass(motion, 'anim-gavel')}`} role="img" aria-label="Stamp Animated">
    <title>Stamp Animated</title>
    <path d="M10 3H14V8C14 9 15 10 16 10H17V13H7V10H8C9 10 10 9 10 8V3Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
    <rect x="4" y="16" width="16" height="5" rx="1" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.1"/>
    <path d="M7 13V16M17 13V16" stroke="currentColor" strokeWidth="1.75"/>
  </svg>
);

export const SealAnimIcon: React.FC<AnimatedIconProps> = ({ size = 24, className = '', motion = 'hover' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${className} ${getAnimClass(motion, 'anim-pulse')}`} role="img" aria-label="Seal Animated">
    <title>Seal Animated</title>
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.75"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.1"/>
    <path d="M12 4V6M12 18V20M4 12H6M18 12H20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
  </svg>
);

export const PillarAnimIcon: React.FC<AnimatedIconProps> = ({ size = 24, className = '', motion = 'hover' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${className} ${getAnimClass(motion, 'anim-glow')}`} role="img" aria-label="Pillar Animated">
    <title>Pillar Animated</title>
    <path d="M6 6H18M6 18H18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
    <path d="M5 3H19V6H5V3Z" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.1"/>
    <path d="M5 18H19V21H5V18Z" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.1"/>
    <path d="M8 6V18M12 6V18M16 6V18" stroke="currentColor" strokeWidth="1.75"/>
  </svg>
);

export const CalendarAnimIcon: React.FC<AnimatedIconProps> = ({ size = 24, className = '', motion = 'hover' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${className} ${getAnimClass(motion, 'anim-flip')}`} role="img" aria-label="Calendar Animated">
    <title>Calendar Animated</title>
    <rect x="3" y="6" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.1"/>
    <path d="M3 10H21" stroke="currentColor" strokeWidth="1.75"/>
    <path d="M7 3V6M17 3V6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
    <path d="M7 14H10M14 14H17M7 17H10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
  </svg>
);

export const HearingAnimIcon: React.FC<AnimatedIconProps> = ({ size = 24, className = '', motion = 'hover' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${className} ${getAnimClass(motion, 'anim-pulse')}`} role="img" aria-label="Hearing Animated">
    <title>Hearing Animated</title>
    <rect x="4" y="8" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.1"/>
    <circle cx="8" cy="14" r="2" stroke="currentColor" strokeWidth="1.75"/>
    <circle cx="16" cy="14" r="2" stroke="currentColor" strokeWidth="1.75"/>
    <path d="M10 5L12 3L14 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 3V8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
  </svg>
);

export const AppealAnimIcon: React.FC<AnimatedIconProps> = ({ size = 24, className = '', motion = 'hover' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${className} ${getAnimClass(motion, 'anim-pulse')}`} role="img" aria-label="Appeal Animated">
    <title>Appeal Animated</title>
    <path d="M12 4L18 10H14V20H10V10H6L12 4Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
  </svg>
);

export const SearchAnimIcon: React.FC<AnimatedIconProps> = ({ size = 24, className = '', motion = 'hover' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${className} ${getAnimClass(motion, 'anim-wiggle')}`} role="img" aria-label="Search Animated">
    <title>Search Animated</title>
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.1"/>
    <path d="M16 16L21 21" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
  </svg>
);

export const ChatAnimIcon: React.FC<AnimatedIconProps> = ({ size = 24, className = '', motion = 'hover' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${className} ${getAnimClass(motion, 'anim-pulse')}`} role="img" aria-label="Chat Animated">
    <title>Chat Animated</title>
    <path d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V14C20 15.1046 19.1046 16 18 16H8L4 20V6Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
    <path d="M8 9H16M8 12H12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
  </svg>
);

export const BellAnimIcon: React.FC<AnimatedIconProps> = ({ size = 24, className = '', motion = 'hover' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${className} ${getAnimClass(motion, 'anim-wiggle')}`} role="img" aria-label="Bell Animated">
    <title>Bell Animated</title>
    <path d="M6 10C6 6.68629 8.68629 4 12 4C15.3137 4 18 6.68629 18 10V15L20 17H4L6 15V10Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
    <path d="M10 17V18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18V17" stroke="currentColor" strokeWidth="1.75"/>
    <path d="M12 2V4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
  </svg>
);

export const FingerprintAnimIcon: React.FC<AnimatedIconProps> = ({ size = 24, className = '', motion = 'hover' }) => {
  const animClass = getAnimClass(motion, 'anim-scan');
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${className} ${animClass}`} role="img" aria-label="Fingerprint Animated" style={{ overflow: 'hidden' }}>
      <title>Fingerprint Animated</title>
      <defs>
        <clipPath id="fp-clip">
          <rect x="2" y="2" width="20" height="20"/>
        </clipPath>
      </defs>
      <g clipPath="url(#fp-clip)">
        <path d="M12 2C7.58172 2 4 5.58172 4 10V14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        <path d="M20 10C20 5.58172 16.4183 2 12 2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        <path d="M8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V16C16 18.2091 14.2091 20 12 20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        <path d="M12 8V16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        <rect className="scan-line" x="4" y="8" width="16" height="2" fill="currentColor" opacity="0.3"/>
      </g>
    </svg>
  );
};

export const LockAnimIcon: React.FC<AnimatedIconProps> = ({ size = 24, className = '', motion = 'hover' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${className} ${getAnimClass(motion, 'anim-wiggle')}`} role="img" aria-label="Lock Animated">
    <title>Lock Animated</title>
    <rect x="4" y="10" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.1"/>
    <path d="M8 10V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
    <circle cx="12" cy="15" r="1.5" fill="currentColor"/>
  </svg>
);

export const InvoiceAnimIcon: React.FC<AnimatedIconProps> = ({ size = 24, className = '', motion = 'hover' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${className} ${getAnimClass(motion, 'anim-flip')}`} role="img" aria-label="Invoice Animated">
    <title>Invoice Animated</title>
    <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.1"/>
    <path d="M8 6H16M8 10H14M8 14H16M8 18H12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
    <circle cx="17" cy="17" r="1" fill="currentColor"/>
  </svg>
);

export const PaymentAnimIcon: React.FC<AnimatedIconProps> = ({ size = 24, className = '', motion = 'hover' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${className} ${getAnimClass(motion, 'anim-pulse')}`} role="img" aria-label="Payment Animated">
    <title>Payment Animated</title>
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.1"/>
    <path d="M2 10H22" stroke="currentColor" strokeWidth="1.75"/>
    <path d="M6 15H10M14 15H16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
  </svg>
);