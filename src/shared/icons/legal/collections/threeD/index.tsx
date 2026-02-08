import React from 'react';

interface Icon3DProps {
  size?: number;
  className?: string;
}

// 3D Sculpted Icons with gradient fills
export const Gavel3DIcon: React.FC<Icon3DProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Gavel 3D">
    <title>Gavel 3D</title>
    <defs>
      <linearGradient id="gavel3d-metal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--icon-metal-2))"/>
        <stop offset="50%" stopColor="hsl(var(--icon-metal-1))"/>
        <stop offset="100%" stopColor="hsl(var(--icon-metal-2))"/>
      </linearGradient>
      <linearGradient id="gavel3d-highlight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--icon-highlight))" stopOpacity="0.8"/>
        <stop offset="100%" stopColor="hsl(var(--icon-highlight))" stopOpacity="0"/>
      </linearGradient>
    </defs>
    <rect x="16" y="2" width="6" height="3" rx="1" transform="rotate(45 16 2)" fill="url(#gavel3d-metal)" stroke="hsl(var(--icon-shadow))" strokeWidth="0.5"/>
    <rect x="16" y="2" width="6" height="1" rx="0.5" transform="rotate(45 16 2)" fill="url(#gavel3d-highlight)"/>
    <rect x="6" y="12" width="6" height="3" rx="1" transform="rotate(45 6 12)" fill="url(#gavel3d-metal)" stroke="hsl(var(--icon-shadow))" strokeWidth="0.5"/>
    <path d="M14 6L18 10M10 10L14 14" stroke="hsl(var(--icon-shadow))" strokeWidth="2" strokeLinecap="round"/>
    <path d="M2 20H8M5 20V22" stroke="hsl(var(--icon-metal-1))" strokeWidth="2" strokeLinecap="round"/>
    <rect x="2" y="19" width="6" height="3" rx="0.5" fill="url(#gavel3d-metal)" opacity="0.5"/>
  </svg>
);

export const Scales3DIcon: React.FC<Icon3DProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Scales 3D">
    <title>Scales 3D</title>
    <defs>
      <linearGradient id="scales3d-metal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--icon-metal-2))"/>
        <stop offset="50%" stopColor="hsl(var(--icon-metal-1))"/>
        <stop offset="100%" stopColor="hsl(var(--icon-metal-2))"/>
      </linearGradient>
      <radialGradient id="scales3d-bowl" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stopColor="hsl(var(--icon-highlight))"/>
        <stop offset="100%" stopColor="hsl(var(--icon-metal-1))"/>
      </radialGradient>
    </defs>
    <circle cx="12" cy="3" r="1.5" fill="url(#scales3d-metal)"/>
    <path d="M12 4.5V21" stroke="hsl(var(--icon-metal-1))" strokeWidth="2"/>
    <path d="M8 21H16" stroke="hsl(var(--icon-metal-1))" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 7H10M14 7H20" stroke="hsl(var(--icon-metal-1))" strokeWidth="1.5"/>
    <path d="M4 14L7 8L10 14C10 15.5 8.5 16.5 7 16.5C5.5 16.5 4 15.5 4 14Z" fill="url(#scales3d-bowl)" stroke="hsl(var(--icon-shadow))" strokeWidth="0.5"/>
    <path d="M14 14L17 8L20 14C20 15.5 18.5 16.5 17 16.5C15.5 16.5 14 15.5 14 14Z" fill="url(#scales3d-bowl)" stroke="hsl(var(--icon-shadow))" strokeWidth="0.5"/>
  </svg>
);

export const Courthouse3DIcon: React.FC<Icon3DProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Courthouse 3D">
    <title>Courthouse 3D</title>
    <defs>
      <linearGradient id="court3d-roof" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--icon-metal-1))"/>
        <stop offset="100%" stopColor="hsl(var(--icon-metal-2))"/>
      </linearGradient>
      <linearGradient id="court3d-pillar" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="hsl(var(--icon-shadow))" stopOpacity="0.3"/>
        <stop offset="50%" stopColor="hsl(var(--icon-highlight))" stopOpacity="0.5"/>
        <stop offset="100%" stopColor="hsl(var(--icon-shadow))" stopOpacity="0.3"/>
      </linearGradient>
    </defs>
    <path d="M3 10L12 4L21 10V12H3V10Z" fill="url(#court3d-roof)"/>
    <rect x="3" y="19" width="18" height="2" rx="0.5" fill="url(#court3d-roof)"/>
    <rect x="5" y="12" width="2" height="7" fill="url(#court3d-pillar)"/>
    <rect x="9" y="12" width="2" height="7" fill="url(#court3d-pillar)"/>
    <rect x="13" y="12" width="2" height="7" fill="url(#court3d-pillar)"/>
    <rect x="17" y="12" width="2" height="7" fill="url(#court3d-pillar)"/>
  </svg>
);

export const Lawbook3DIcon: React.FC<Icon3DProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Law Book 3D">
    <title>Law Book 3D</title>
    <defs>
      <linearGradient id="book3d-cover" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--icon-metal-1))"/>
        <stop offset="100%" stopColor="hsl(var(--icon-shadow))"/>
      </linearGradient>
      <linearGradient id="book3d-pages" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="hsl(var(--icon-highlight))" stopOpacity="0.9"/>
        <stop offset="100%" stopColor="hsl(var(--icon-muted))"/>
      </linearGradient>
    </defs>
    <rect x="4" y="3" width="14" height="18" rx="1" fill="url(#book3d-cover)"/>
    <rect x="6" y="5" width="10" height="14" rx="0.5" fill="url(#book3d-pages)"/>
    <path d="M8 8H14M8 11H14M8 14H11" stroke="hsl(var(--icon-shadow))" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    <rect x="18" y="6" width="2" height="12" rx="0.5" fill="url(#book3d-cover)" opacity="0.7"/>
  </svg>
);

export const Contract3DIcon: React.FC<Icon3DProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Contract 3D">
    <title>Contract 3D</title>
    <defs>
      <linearGradient id="contract3d-paper" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--icon-highlight))"/>
        <stop offset="100%" stopColor="hsl(var(--icon-muted))"/>
      </linearGradient>
      <linearGradient id="contract3d-seal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--icon-metal-1))"/>
        <stop offset="100%" stopColor="hsl(var(--icon-metal-2))"/>
      </linearGradient>
    </defs>
    <rect x="5" y="2" width="14" height="20" rx="1" fill="url(#contract3d-paper)" stroke="hsl(var(--icon-shadow))" strokeWidth="0.5"/>
    <path d="M8 6H16M8 10H16M8 14H12" stroke="hsl(var(--icon-shadow))" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
    <circle cx="16" cy="18" r="2" fill="url(#contract3d-seal)"/>
  </svg>
);

export const Briefcase3DIcon: React.FC<Icon3DProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Briefcase 3D">
    <title>Briefcase 3D</title>
    <defs>
      <linearGradient id="brief3d-body" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--icon-metal-1))"/>
        <stop offset="100%" stopColor="hsl(var(--icon-shadow))"/>
      </linearGradient>
      <linearGradient id="brief3d-clasp" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--icon-highlight))"/>
        <stop offset="100%" stopColor="hsl(var(--icon-metal-2))"/>
      </linearGradient>
    </defs>
    <rect x="2" y="7" width="20" height="14" rx="2" fill="url(#brief3d-body)"/>
    <path d="M16 7V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V7" stroke="hsl(var(--icon-shadow))" strokeWidth="1.5"/>
    <rect x="10" y="11" width="4" height="3" rx="0.5" fill="url(#brief3d-clasp)"/>
    <path d="M2 12H10M14 12H22" stroke="hsl(var(--icon-shadow))" strokeWidth="1" opacity="0.3"/>
  </svg>
);

export const Shield3DIcon: React.FC<Icon3DProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Shield 3D">
    <title>Shield 3D</title>
    <defs>
      <linearGradient id="shield3d-body" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--icon-metal-1))"/>
        <stop offset="50%" stopColor="hsl(var(--icon-metal-2))"/>
        <stop offset="100%" stopColor="hsl(var(--icon-shadow))"/>
      </linearGradient>
      <linearGradient id="shield3d-highlight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--icon-highlight))" stopOpacity="0.6"/>
        <stop offset="100%" stopColor="hsl(var(--icon-highlight))" stopOpacity="0"/>
      </linearGradient>
    </defs>
    <path d="M12 2L4 6V12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12V6L12 2Z" fill="url(#shield3d-body)"/>
    <path d="M12 2L4 6V10C4 10 6 8 12 8C18 8 20 10 20 10V6L12 2Z" fill="url(#shield3d-highlight)"/>
    <path d="M9 11L11 13L15 9" stroke="hsl(var(--icon-highlight))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Stamp3DIcon: React.FC<Icon3DProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Stamp 3D">
    <title>Stamp 3D</title>
    <defs>
      <linearGradient id="stamp3d-handle" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--icon-metal-2))"/>
        <stop offset="100%" stopColor="hsl(var(--icon-shadow))"/>
      </linearGradient>
      <linearGradient id="stamp3d-base" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--icon-metal-1))"/>
        <stop offset="100%" stopColor="hsl(var(--icon-metal-2))"/>
      </linearGradient>
    </defs>
    <path d="M10 3H14V8C14 9 15 10 16 10H17V13H7V10H8C9 10 10 9 10 8V3Z" fill="url(#stamp3d-handle)"/>
    <rect x="4" y="16" width="16" height="5" rx="1" fill="url(#stamp3d-base)"/>
    <rect x="7" y="13" width="10" height="3" fill="hsl(var(--icon-shadow))" opacity="0.3"/>
  </svg>
);

export const Seal3DIcon: React.FC<Icon3DProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Seal 3D">
    <title>Seal 3D</title>
    <defs>
      <radialGradient id="seal3d-inner" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="hsl(var(--icon-highlight))"/>
        <stop offset="100%" stopColor="hsl(var(--icon-metal-1))"/>
      </radialGradient>
      <linearGradient id="seal3d-ring" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--icon-metal-2))"/>
        <stop offset="50%" stopColor="hsl(var(--icon-metal-1))"/>
        <stop offset="100%" stopColor="hsl(var(--icon-metal-2))"/>
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="8" fill="url(#seal3d-ring)" stroke="hsl(var(--icon-shadow))" strokeWidth="0.5"/>
    <circle cx="12" cy="12" r="5" fill="url(#seal3d-inner)"/>
    <circle cx="12" cy="12" r="2" fill="hsl(var(--icon-metal-1))"/>
  </svg>
);

export const Pillar3DIcon: React.FC<Icon3DProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Pillar 3D">
    <title>Pillar 3D</title>
    <defs>
      <linearGradient id="pillar3d-shaft" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="hsl(var(--icon-shadow))" stopOpacity="0.4"/>
        <stop offset="30%" stopColor="hsl(var(--icon-highlight))" stopOpacity="0.6"/>
        <stop offset="70%" stopColor="hsl(var(--icon-highlight))" stopOpacity="0.6"/>
        <stop offset="100%" stopColor="hsl(var(--icon-shadow))" stopOpacity="0.4"/>
      </linearGradient>
      <linearGradient id="pillar3d-cap" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--icon-metal-1))"/>
        <stop offset="100%" stopColor="hsl(var(--icon-metal-2))"/>
      </linearGradient>
    </defs>
    <rect x="5" y="3" width="14" height="3" rx="0.5" fill="url(#pillar3d-cap)"/>
    <rect x="5" y="18" width="14" height="3" rx="0.5" fill="url(#pillar3d-cap)"/>
    <rect x="7" y="6" width="3" height="12" fill="url(#pillar3d-shaft)"/>
    <rect x="10.5" y="6" width="3" height="12" fill="url(#pillar3d-shaft)"/>
    <rect x="14" y="6" width="3" height="12" fill="url(#pillar3d-shaft)"/>
  </svg>
);

export const Judge3DIcon: React.FC<Icon3DProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Judge 3D">
    <title>Judge 3D</title>
    <defs>
      <radialGradient id="judge3d-head" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="hsl(var(--icon-highlight))"/>
        <stop offset="100%" stopColor="hsl(var(--icon-muted))"/>
      </radialGradient>
      <linearGradient id="judge3d-robe" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--icon-shadow))"/>
        <stop offset="100%" stopColor="hsl(var(--icon-metal-2))"/>
      </linearGradient>
    </defs>
    <circle cx="12" cy="8" r="4" fill="url(#judge3d-head)"/>
    <path d="M4 21C4 17 7.5 14 12 14C16.5 14 20 17 20 21" fill="url(#judge3d-robe)"/>
    <path d="M9 4L12 2L15 4" stroke="hsl(var(--icon-metal-1))" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const Lawyer3DIcon: React.FC<Icon3DProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Lawyer 3D">
    <title>Lawyer 3D</title>
    <defs>
      <radialGradient id="lawyer3d-head" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="hsl(var(--icon-highlight))"/>
        <stop offset="100%" stopColor="hsl(var(--icon-muted))"/>
      </radialGradient>
      <linearGradient id="lawyer3d-suit" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--icon-metal-1))"/>
        <stop offset="100%" stopColor="hsl(var(--icon-shadow))"/>
      </linearGradient>
    </defs>
    <circle cx="12" cy="7" r="4" fill="url(#lawyer3d-head)"/>
    <path d="M5 21V19C5 16.2386 7.23858 14 10 14H14C16.7614 14 19 16.2386 19 19V21" fill="url(#lawyer3d-suit)"/>
    <path d="M12 14V18M10 16H14" stroke="hsl(var(--icon-highlight))" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const Handshake3DIcon: React.FC<Icon3DProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Handshake 3D">
    <title>Handshake 3D</title>
    <defs>
      <linearGradient id="shake3d-hand" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--icon-highlight))"/>
        <stop offset="100%" stopColor="hsl(var(--icon-muted))"/>
      </linearGradient>
    </defs>
    <path d="M2 11L6 7H9L12 10L15 7H18L22 11" stroke="hsl(var(--icon-metal-1))" strokeWidth="2" strokeLinecap="round"/>
    <path d="M6 11V17L10 15L14 17L18 15V11" fill="url(#shake3d-hand)" stroke="hsl(var(--icon-shadow))" strokeWidth="0.5"/>
  </svg>
);

export const Evidence3DIcon: React.FC<Icon3DProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Evidence 3D">
    <title>Evidence 3D</title>
    <defs>
      <linearGradient id="ev3d-box" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--icon-metal-1))"/>
        <stop offset="100%" stopColor="hsl(var(--icon-shadow))"/>
      </linearGradient>
    </defs>
    <rect x="3" y="6" width="18" height="14" rx="2" fill="url(#ev3d-box)"/>
    <rect x="3" y="6" width="18" height="4" fill="hsl(var(--icon-metal-2))"/>
    <path d="M7 3V6M17 3V6" stroke="hsl(var(--icon-metal-1))" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="15" r="2" fill="hsl(var(--icon-highlight))" stroke="hsl(var(--icon-shadow))" strokeWidth="0.5"/>
  </svg>
);

export const Timeline3DIcon: React.FC<Icon3DProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Timeline 3D">
    <title>Timeline 3D</title>
    <defs>
      <radialGradient id="tl3d-node" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="hsl(var(--icon-highlight))"/>
        <stop offset="100%" stopColor="hsl(var(--icon-metal-1))"/>
      </radialGradient>
    </defs>
    <path d="M4 4L20 20" stroke="hsl(var(--icon-metal-1))" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="6" cy="6" r="3" fill="url(#tl3d-node)"/>
    <circle cx="12" cy="12" r="3" fill="url(#tl3d-node)"/>
    <circle cx="18" cy="18" r="3" fill="url(#tl3d-node)"/>
  </svg>
);

export const Lock3DIcon: React.FC<Icon3DProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Lock 3D">
    <title>Lock 3D</title>
    <defs>
      <linearGradient id="lock3d-body" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--icon-metal-1))"/>
        <stop offset="100%" stopColor="hsl(var(--icon-shadow))"/>
      </linearGradient>
    </defs>
    <rect x="4" y="10" width="16" height="11" rx="2" fill="url(#lock3d-body)"/>
    <path d="M8 10V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V10" stroke="hsl(var(--icon-metal-2))" strokeWidth="2"/>
    <circle cx="12" cy="15" r="2" fill="hsl(var(--icon-highlight))"/>
  </svg>
);

export const Key3DIcon: React.FC<Icon3DProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Key 3D">
    <title>Key 3D</title>
    <defs>
      <linearGradient id="key3d-metal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--icon-metal-1))"/>
        <stop offset="100%" stopColor="hsl(var(--icon-metal-2))"/>
      </linearGradient>
    </defs>
    <circle cx="8" cy="16" r="4" fill="url(#key3d-metal)" stroke="hsl(var(--icon-shadow))" strokeWidth="0.5"/>
    <circle cx="8" cy="16" r="1.5" fill="hsl(var(--icon-shadow))"/>
    <path d="M11 13L20 4M17 4H20V7M15 9L17 11" stroke="hsl(var(--icon-metal-1))" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const Fingerprint3DIcon: React.FC<Icon3DProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Fingerprint 3D">
    <title>Fingerprint 3D</title>
    <defs>
      <linearGradient id="fp3d-line" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--icon-metal-1))"/>
        <stop offset="100%" stopColor="hsl(var(--icon-metal-2))"/>
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="8" fill="hsl(var(--icon-shadow))" opacity="0.1"/>
    <path d="M12 2C7.58172 2 4 5.58172 4 10V14" stroke="url(#fp3d-line)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 10C20 5.58172 16.4183 2 12 2" stroke="url(#fp3d-line)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V16C16 18.2091 14.2091 20 12 20" stroke="url(#fp3d-line)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 8V16" stroke="url(#fp3d-line)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const Invoice3DIcon: React.FC<Icon3DProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Invoice 3D">
    <title>Invoice 3D</title>
    <defs>
      <linearGradient id="inv3d-paper" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--icon-highlight))"/>
        <stop offset="100%" stopColor="hsl(var(--icon-muted))"/>
      </linearGradient>
    </defs>
    <rect x="4" y="2" width="16" height="20" rx="2" fill="url(#inv3d-paper)" stroke="hsl(var(--icon-shadow))" strokeWidth="0.5"/>
    <path d="M8 6H16M8 10H14M8 14H16M8 18H12" stroke="hsl(var(--icon-shadow))" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
    <circle cx="17" cy="17" r="2" fill="hsl(var(--icon-metal-1))"/>
  </svg>
);

export const Archive3DIcon: React.FC<Icon3DProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Archive 3D">
    <title>Archive 3D</title>
    <defs>
      <linearGradient id="arch3d-top" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--icon-metal-1))"/>
        <stop offset="100%" stopColor="hsl(var(--icon-metal-2))"/>
      </linearGradient>
      <linearGradient id="arch3d-body" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--icon-metal-2))"/>
        <stop offset="100%" stopColor="hsl(var(--icon-shadow))"/>
      </linearGradient>
    </defs>
    <rect x="3" y="3" width="18" height="5" rx="1" fill="url(#arch3d-top)"/>
    <path d="M5 8V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V8" fill="url(#arch3d-body)"/>
    <rect x="9" y="11" width="6" height="2" rx="0.5" fill="hsl(var(--icon-highlight))"/>
  </svg>
);