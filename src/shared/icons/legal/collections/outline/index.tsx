import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
  duotone?: boolean;
}

// ==================== OUTLINE ICONS ====================

export const GavelIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Gavel">
    <title>Gavel</title>
    {duotone && <rect x="2" y="19" width="6" height="3" rx="0.5" fill="currentColor" opacity="0.2" />}
    <path d="M14 6L18 10M10 10L14 14" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="16" y="2" width="6" height="3" rx="1" transform="rotate(45 16 2)" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round"/>
    <rect x="6" y="12" width="6" height="3" rx="1" transform="rotate(45 6 12)" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round"/>
    <path d="M2 20H8M5 20V22" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
);

export const ScalesIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Scales">
    <title>Scales</title>
    {duotone && (
      <>
        <path d="M4 14L7 8L10 14C10 15.5 8.5 16.5 7 16.5C5.5 16.5 4 15.5 4 14Z" fill="currentColor" opacity="0.2"/>
        <path d="M14 14L17 8L20 14C20 15.5 18.5 16.5 17 16.5C15.5 16.5 14 15.5 14 14Z" fill="currentColor" opacity="0.2"/>
      </>
    )}
    <circle cx="12" cy="3" r="1.5" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M12 4.5V21M8 21H16" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    <path d="M4 7H10M14 7H20" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    <path d="M4 14L7 8L10 14" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 14L17 8L20 14" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 14C4 15.5 5.5 16.5 7 16.5C8.5 16.5 10 15.5 10 14" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M14 14C14 15.5 15.5 16.5 17 16.5C18.5 16.5 20 15.5 20 14" stroke="currentColor" strokeWidth={strokeWidth}/>
  </svg>
);

export const CourthouseIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Courthouse">
    <title>Courthouse</title>
    {duotone && <path d="M3 9L12 3L21 9V10H3V9Z" fill="currentColor" opacity="0.2"/>}
    <path d="M3 10L12 4L21 10" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 10H21V12H3V10Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round"/>
    <path d="M5 12V19M9 12V19M15 12V19M19 12V19" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    <path d="M3 19H21V21H3V19Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round"/>
  </svg>
);

export const LawbookIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Law Book">
    <title>Law Book</title>
    {duotone && <rect x="4" y="3" width="14" height="18" rx="1" fill="currentColor" opacity="0.2"/>}
    <path d="M4 4C4 3.44772 4.44772 3 5 3H17C17.5523 3 18 3.44772 18 4V20C18 20.5523 17.5523 21 17 21H5C4.44772 21 4 20.5523 4 20V4Z" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M8 7H14M8 11H14M8 15H11" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    <path d="M18 6H20V18H18" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ContractIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Contract">
    <title>Contract</title>
    {duotone && <rect x="5" y="2" width="14" height="20" rx="1" fill="currentColor" opacity="0.2"/>}
    <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M8 6H16M8 10H16M8 14H12" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    <path d="M14 17C14 17 15 18 16 17.5C17 17 17.5 18.5 17 19" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
);

export const SignatureIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Signature">
    <title>Signature</title>
    {duotone && <ellipse cx="12" cy="18" rx="8" ry="2" fill="currentColor" opacity="0.2"/>}
    <path d="M3 17C5 15 7 19 9 17C11 15 11 19 13 17C15 15 17 17 21 15" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    <path d="M16 3L20 7L10 17L6 17L6 13L16 3Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round"/>
  </svg>
);

export const BriefcaseIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Briefcase">
    <title>Briefcase</title>
    {duotone && <rect x="2" y="7" width="20" height="14" rx="2" fill="currentColor" opacity="0.2"/>}
    <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M16 7V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V7" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M2 12H22M12 12V15" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
);

export const JudgeIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Judge">
    <title>Judge</title>
    {duotone && <circle cx="12" cy="8" r="4" fill="currentColor" opacity="0.2"/>}
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M4 21C4 17 7.5 14 12 14C16.5 14 20 17 20 21" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    <path d="M9 4L12 2L15 4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const LawyerIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Lawyer">
    <title>Lawyer</title>
    {duotone && <circle cx="12" cy="7" r="4" fill="currentColor" opacity="0.2"/>}
    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M5 21V19C5 16.2386 7.23858 14 10 14H14C16.7614 14 19 16.2386 19 19V21" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    <path d="M12 14V18M10 16H14" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
);

export const ClientIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Client">
    <title>Client</title>
    {duotone && <circle cx="12" cy="8" r="4" fill="currentColor" opacity="0.2"/>}
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M4 21C4 17 7.5 14 12 14C16.5 14 20 17 20 21" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
);

export const HandshakeIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Handshake">
    <title>Handshake</title>
    {duotone && <ellipse cx="12" cy="14" rx="6" ry="3" fill="currentColor" opacity="0.2"/>}
    <path d="M2 11L6 7H9L12 10L15 7H18L22 11" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 11V17L10 15L14 17L18 15V11" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const VerdictIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Verdict">
    <title>Verdict</title>
    {duotone && <rect x="5" y="3" width="14" height="18" rx="1" fill="currentColor" opacity="0.2"/>}
    <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M9 9L11 11L15 7" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 15H15" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
);

export const EvidenceIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Evidence">
    <title>Evidence</title>
    {duotone && <rect x="3" y="6" width="18" height="14" rx="1" fill="currentColor" opacity="0.2"/>}
    <rect x="3" y="6" width="18" height="14" rx="2" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M3 10H21" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M7 3V6M17 3V6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    <circle cx="12" cy="15" r="2" stroke="currentColor" strokeWidth={strokeWidth}/>
  </svg>
);

export const CaseFileIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Case File">
    <title>Case File</title>
    {duotone && <path d="M3 6C3 4.89543 3.89543 4 5 4H9L11 6H19C20.1046 6 21 6.89543 21 8V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V6Z" fill="currentColor" opacity="0.2"/>}
    <path d="M3 6C3 4.89543 3.89543 4 5 4H9L11 6H19C20.1046 6 21 6.89543 21 8V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V6Z" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M8 13H16M8 16H12" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
);

export const TimelineIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Timeline">
    <title>Timeline</title>
    {duotone && (
      <>
        <circle cx="6" cy="6" r="2" fill="currentColor" opacity="0.2"/>
        <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.2"/>
        <circle cx="18" cy="18" r="2" fill="currentColor" opacity="0.2"/>
      </>
    )}
    <path d="M4 4L20 20" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth={strokeWidth}/>
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth={strokeWidth}/>
    <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth={strokeWidth}/>
  </svg>
);

export const ShieldLawIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Legal Shield">
    <title>Legal Shield</title>
    {duotone && <path d="M12 2L4 6V12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12V6L12 2Z" fill="currentColor" opacity="0.2"/>}
    <path d="M12 2L4 6V12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12V6L12 2Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round"/>
    <path d="M12 8V12M12 8L9 11M12 8L15 11" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="15" r="1" fill="currentColor"/>
  </svg>
);

export const StampIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Stamp">
    <title>Stamp</title>
    {duotone && <rect x="4" y="16" width="16" height="5" rx="1" fill="currentColor" opacity="0.2"/>}
    <path d="M10 3H14V8C14 9 15 10 16 10H17V13H7V10H8C9 10 10 9 10 8V3Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round"/>
    <rect x="4" y="16" width="16" height="5" rx="1" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M7 13V16M17 13V16" stroke="currentColor" strokeWidth={strokeWidth}/>
  </svg>
);

export const SealIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Seal">
    <title>Seal</title>
    {duotone && <circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.2"/>}
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth={strokeWidth}/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M12 4V6M12 18V20M4 12H6M18 12H20" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
);

export const RibbonIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Ribbon">
    <title>Ribbon</title>
    {duotone && <circle cx="12" cy="8" r="5" fill="currentColor" opacity="0.2"/>}
    <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M8 12L6 21L12 18L18 21L16 12" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PillarIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Justice Pillar">
    <title>Justice Pillar</title>
    {duotone && <rect x="7" y="6" width="10" height="12" fill="currentColor" opacity="0.2"/>}
    <path d="M6 6H18M6 18H18" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    <path d="M5 3H19V6H5V3Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round"/>
    <path d="M5 18H19V21H5V18Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round"/>
    <path d="M8 6V18M12 6V18M16 6V18" stroke="currentColor" strokeWidth={strokeWidth}/>
  </svg>
);

export const CourtCalendarIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Court Calendar">
    <title>Court Calendar</title>
    {duotone && <rect x="3" y="6" width="18" height="15" rx="1" fill="currentColor" opacity="0.2"/>}
    <rect x="3" y="6" width="18" height="15" rx="2" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M3 10H21" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M7 3V6M17 3V6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    <path d="M7 14H10M14 14H17M7 17H10" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
);

export const HearingIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Hearing">
    <title>Hearing</title>
    {duotone && <rect x="4" y="8" width="16" height="12" rx="1" fill="currentColor" opacity="0.2"/>}
    <rect x="4" y="8" width="16" height="12" rx="2" stroke="currentColor" strokeWidth={strokeWidth}/>
    <circle cx="8" cy="14" r="2" stroke="currentColor" strokeWidth={strokeWidth}/>
    <circle cx="16" cy="14" r="2" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M10 5L12 3L14 5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 3V8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
);

export const AppealIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Appeal">
    <title>Appeal</title>
    {duotone && <path d="M12 4L18 10H14V20H10V10H6L12 4Z" fill="currentColor" opacity="0.2"/>}
    <path d="M12 4L18 10H14V20H10V10H6L12 4Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round"/>
  </svg>
);

export const FileSearchIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="File Search">
    <title>File Search</title>
    {duotone && <rect x="4" y="2" width="12" height="16" rx="1" fill="currentColor" opacity="0.2"/>}
    <path d="M4 4C4 2.89543 4.89543 2 6 2H14L18 6V16C18 17.1046 17.1046 18 16 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M14 2V6H18" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="17" cy="19" r="3" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M19.5 21.5L21 23" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
);

export const LegalChatIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Legal Chat">
    <title>Legal Chat</title>
    {duotone && <path d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V14C20 15.1046 19.1046 16 18 16H8L4 20V6Z" fill="currentColor" opacity="0.2"/>}
    <path d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V14C20 15.1046 19.1046 16 18 16H8L4 20V6Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round"/>
    <path d="M8 9H16M8 12H12" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
);

export const LegalBellIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Legal Notification">
    <title>Legal Notification</title>
    {duotone && <path d="M6 10C6 6.68629 8.68629 4 12 4C15.3137 4 18 6.68629 18 10V15L20 17H4L6 15V10Z" fill="currentColor" opacity="0.2"/>}
    <path d="M6 10C6 6.68629 8.68629 4 12 4C15.3137 4 18 6.68629 18 10V15L20 17H4L6 15V10Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round"/>
    <path d="M10 17V18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18V17" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M12 2V4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
);

export const DocIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Legal Document">
    <title>Legal Document</title>
    {duotone && <path d="M6 2H14L18 6V20C18 21.1046 17.1046 22 16 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2Z" fill="currentColor" opacity="0.2"/>}
    <path d="M6 2H14L18 6V20C18 21.1046 17.1046 22 16 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2Z" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M14 2V6H18" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 10H14M8 14H14M8 18H11" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
);

export const NotarizeIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Notarize">
    <title>Notarize</title>
    {duotone && <circle cx="12" cy="15" r="5" fill="currentColor" opacity="0.2"/>}
    <rect x="5" y="2" width="14" height="12" rx="2" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M8 6H16M8 9H12" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    <circle cx="12" cy="15" r="5" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M10 15L11.5 16.5L14 13.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IdVerifyIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="ID Verification">
    <title>ID Verification</title>
    {duotone && <rect x="2" y="5" width="20" height="14" rx="1" fill="currentColor" opacity="0.2"/>}
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth={strokeWidth}/>
    <circle cx="8" cy="11" r="2" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M5 16C5 14 6.5 13 8 13C9.5 13 11 14 11 16" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    <path d="M14 9H19M14 12H17M14 15H16" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
);

export const FingerprintIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Fingerprint">
    <title>Fingerprint</title>
    {duotone && <circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.1"/>}
    <path d="M12 2C7.58172 2 4 5.58172 4 10V14" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    <path d="M20 10C20 5.58172 16.4183 2 12 2" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    <path d="M8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V16C16 18.2091 14.2091 20 12 20" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    <path d="M12 8V16" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
);

export const LockIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Lock">
    <title>Lock</title>
    {duotone && <rect x="4" y="10" width="16" height="11" rx="2" fill="currentColor" opacity="0.2"/>}
    <rect x="4" y="10" width="16" height="11" rx="2" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M8 10V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V10" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    <circle cx="12" cy="15" r="1.5" fill="currentColor"/>
  </svg>
);

export const KeyIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Key">
    <title>Key</title>
    {duotone && <circle cx="8" cy="16" r="4" fill="currentColor" opacity="0.2"/>}
    <circle cx="8" cy="16" r="4" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M11 13L20 4M17 4H20V7" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 9L17 11" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
);

export const PrivacyIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Privacy">
    <title>Privacy</title>
    {duotone && <circle cx="12" cy="12" r="8" fill="currentColor" opacity="0.1"/>}
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M2 12H9M15 12H22" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    <path d="M12 2V9M12 15V22" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
);

export const ComplianceIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Compliance">
    <title>Compliance</title>
    {duotone && <path d="M12 2L4 6V12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12V6L12 2Z" fill="currentColor" opacity="0.2"/>}
    <path d="M12 2L4 6V12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12V6L12 2Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round"/>
    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const InvoiceIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Invoice">
    <title>Invoice</title>
    {duotone && <rect x="4" y="2" width="16" height="20" rx="1" fill="currentColor" opacity="0.2"/>}
    <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M8 6H16M8 10H14M8 14H16M8 18H12" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    <circle cx="17" cy="17" r="1" fill="currentColor"/>
  </svg>
);

export const PaymentIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Payment">
    <title>Payment</title>
    {duotone && <rect x="2" y="5" width="20" height="14" rx="1" fill="currentColor" opacity="0.2"/>}
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M2 10H22" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M6 15H10M14 15H16" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
);

export const ReceiptIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Receipt">
    <title>Receipt</title>
    {duotone && <path d="M5 3H19V21L17 19L15 21L13 19L11 21L9 19L7 21L5 19V3Z" fill="currentColor" opacity="0.2"/>}
    <path d="M5 3H19V21L17 19L15 21L13 19L11 21L9 19L7 21L5 19V3Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round"/>
    <path d="M8 7H16M8 11H14M8 15H12" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
);

export const ArchiveIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Legal Archive">
    <title>Legal Archive</title>
    {duotone && (
      <>
        <rect x="3" y="3" width="18" height="5" rx="1" fill="currentColor" opacity="0.2"/>
        <rect x="5" y="8" width="14" height="13" rx="1" fill="currentColor" opacity="0.1"/>
      </>
    )}
    <rect x="3" y="3" width="18" height="5" rx="1" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M5 8V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V8" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M10 12H14" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
);

export const GalleryIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Gallery">
    <title>Gallery</title>
    {duotone && <rect x="3" y="3" width="18" height="18" rx="1" fill="currentColor" opacity="0.2"/>}
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth={strokeWidth}/>
    <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M3 15L8 12L12 15L16 11L21 15" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MapCourtIcon: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 1.75, duotone = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label="Court Map">
    <title>Court Map</title>
    {duotone && <path d="M12 2C8.13401 2 5 5.13401 5 9C5 14 12 22 12 22C12 22 19 14 19 9C19 5.13401 15.866 2 12 2Z" fill="currentColor" opacity="0.2"/>}
    <path d="M12 2C8.13401 2 5 5.13401 5 9C5 14 12 22 12 22C12 22 19 14 19 9C19 5.13401 15.866 2 12 2Z" stroke="currentColor" strokeWidth={strokeWidth}/>
    <path d="M10 7L12 6L14 7V11L12 12L10 11V7Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round"/>
  </svg>
);