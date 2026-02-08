import React from 'react';
import * as OutlineIcons from './collections/outline';
import * as ThreeDIcons from './collections/threeD';
import * as AnimatedIcons from './collections/animated';
import { iconManifest, IconMeta } from './manifest';

export type { IconMeta, IconCategory, IconCollection, IconVariant, IconMotion, IconSize } from './manifest';

// Registry mapping icon names to components
type IconComponent = React.FC<{ size?: number; className?: string; strokeWidth?: number; duotone?: boolean }>;
type Icon3DComponent = React.FC<{ size?: number; className?: string }>;
type AnimatedIconComponent = React.FC<{ size?: number; className?: string; motion?: 'off' | 'hover' | 'loop' }>;

// Outline icons registry
const outlineRegistry: Record<string, IconComponent> = {
  gavel: OutlineIcons.GavelIcon,
  scales: OutlineIcons.ScalesIcon,
  courthouse: OutlineIcons.CourthouseIcon,
  lawbook: OutlineIcons.LawbookIcon,
  contract: OutlineIcons.ContractIcon,
  signature: OutlineIcons.SignatureIcon,
  briefcase: OutlineIcons.BriefcaseIcon,
  judge: OutlineIcons.JudgeIcon,
  lawyer: OutlineIcons.LawyerIcon,
  client: OutlineIcons.ClientIcon,
  handshake: OutlineIcons.HandshakeIcon,
  verdict: OutlineIcons.VerdictIcon,
  evidence: OutlineIcons.EvidenceIcon,
  caseFile: OutlineIcons.CaseFileIcon,
  timeline: OutlineIcons.TimelineIcon,
  shieldLaw: OutlineIcons.ShieldLawIcon,
  stamp: OutlineIcons.StampIcon,
  seal: OutlineIcons.SealIcon,
  ribbon: OutlineIcons.RibbonIcon,
  pillar: OutlineIcons.PillarIcon,
  courtCalendar: OutlineIcons.CourtCalendarIcon,
  hearing: OutlineIcons.HearingIcon,
  appeal: OutlineIcons.AppealIcon,
  fileSearch: OutlineIcons.FileSearchIcon,
  legalChat: OutlineIcons.LegalChatIcon,
  legalBell: OutlineIcons.LegalBellIcon,
  doc: OutlineIcons.DocIcon,
  notarize: OutlineIcons.NotarizeIcon,
  idVerify: OutlineIcons.IdVerifyIcon,
  fingerprint: OutlineIcons.FingerprintIcon,
  lock: OutlineIcons.LockIcon,
  key: OutlineIcons.KeyIcon,
  privacy: OutlineIcons.PrivacyIcon,
  compliance: OutlineIcons.ComplianceIcon,
  invoice: OutlineIcons.InvoiceIcon,
  payment: OutlineIcons.PaymentIcon,
  receipt: OutlineIcons.ReceiptIcon,
  archive: OutlineIcons.ArchiveIcon,
  gallery: OutlineIcons.GalleryIcon,
  mapCourt: OutlineIcons.MapCourtIcon,
};

// 3D icons registry
const threeDRegistry: Record<string, Icon3DComponent> = {
  gavel3d: ThreeDIcons.Gavel3DIcon,
  scales3d: ThreeDIcons.Scales3DIcon,
  courthouse3d: ThreeDIcons.Courthouse3DIcon,
  lawbook3d: ThreeDIcons.Lawbook3DIcon,
  contract3d: ThreeDIcons.Contract3DIcon,
  briefcase3d: ThreeDIcons.Briefcase3DIcon,
  shield3d: ThreeDIcons.Shield3DIcon,
  stamp3d: ThreeDIcons.Stamp3DIcon,
  seal3d: ThreeDIcons.Seal3DIcon,
  pillar3d: ThreeDIcons.Pillar3DIcon,
  judge3d: ThreeDIcons.Judge3DIcon,
  lawyer3d: ThreeDIcons.Lawyer3DIcon,
  handshake3d: ThreeDIcons.Handshake3DIcon,
  evidence3d: ThreeDIcons.Evidence3DIcon,
  timeline3d: ThreeDIcons.Timeline3DIcon,
  lock3d: ThreeDIcons.Lock3DIcon,
  key3d: ThreeDIcons.Key3DIcon,
  fingerprint3d: ThreeDIcons.Fingerprint3DIcon,
  invoice3d: ThreeDIcons.Invoice3DIcon,
  archive3d: ThreeDIcons.Archive3DIcon,
};

// Animated icons registry
const animatedRegistry: Record<string, AnimatedIconComponent> = {
  gavelAnim: AnimatedIcons.GavelAnimIcon,
  scalesAnim: AnimatedIcons.ScalesAnimIcon,
  courthouseAnim: AnimatedIcons.CourthouseAnimIcon,
  lawbookAnim: AnimatedIcons.LawbookAnimIcon,
  contractAnim: AnimatedIcons.ContractAnimIcon,
  signatureAnim: AnimatedIcons.SignatureAnimIcon,
  shieldAnim: AnimatedIcons.ShieldAnimIcon,
  stampAnim: AnimatedIcons.StampAnimIcon,
  sealAnim: AnimatedIcons.SealAnimIcon,
  pillarAnim: AnimatedIcons.PillarAnimIcon,
  calendarAnim: AnimatedIcons.CalendarAnimIcon,
  hearingAnim: AnimatedIcons.HearingAnimIcon,
  appealAnim: AnimatedIcons.AppealAnimIcon,
  searchAnim: AnimatedIcons.SearchAnimIcon,
  chatAnim: AnimatedIcons.ChatAnimIcon,
  bellAnim: AnimatedIcons.BellAnimIcon,
  fingerprintAnim: AnimatedIcons.FingerprintAnimIcon,
  lockAnim: AnimatedIcons.LockAnimIcon,
  invoiceAnim: AnimatedIcons.InvoiceAnimIcon,
  paymentAnim: AnimatedIcons.PaymentAnimIcon,
};

export interface LegalIconProps {
  name: string;
  size?: 16 | 20 | 24 | 28 | 32 | 48;
  variant?: 'outline' | 'duotone' | '3d';
  motion?: 'off' | 'hover' | 'loop';
  animated?: boolean;
  dir?: 'ltr' | 'rtl';
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LegalIcon: React.FC<LegalIconProps> = ({
  name,
  size = 24,
  variant = 'outline',
  motion = 'off',
  animated = false,
  dir,
  className = '',
  title,
  ariaLabel,
}) => {
  // Get icon metadata
  const iconMeta = iconManifest.find(i => i.name === name);
  const isDirectional = iconMeta?.isDirectional ?? false;
  
  // Determine if we should mirror for RTL
  const documentDir = typeof document !== 'undefined' ? document.documentElement.dir : 'ltr';
  const effectiveDir = dir || documentDir || 'ltr';
  const shouldMirror = isDirectional && effectiveDir === 'rtl';
  
  // Build class names
  const mirrorClass = shouldMirror ? 'rtl-mirror' : '';
  const combinedClassName = `${className} ${mirrorClass}`.trim();
  
  // Determine effective motion
  const effectiveMotion = animated && motion === 'off' ? 'hover' : motion;
  
  // Check if this is a 3D icon
  if (variant === '3d' || name.endsWith('3d')) {
    const Icon3D = threeDRegistry[name] || threeDRegistry[name.replace(/3d$/, '') + '3d'];
    if (Icon3D) {
      return <Icon3D size={size} className={combinedClassName} />;
    }
  }
  
  // Check if this is an animated icon
  if (name.endsWith('Anim') || effectiveMotion !== 'off') {
    const animName = name.endsWith('Anim') ? name : name + 'Anim';
    const AnimatedIcon = animatedRegistry[animName];
    if (AnimatedIcon) {
      return <AnimatedIcon size={size} className={combinedClassName} motion={effectiveMotion} />;
    }
  }
  
  // Default to outline/duotone icons
  const OutlineIcon = outlineRegistry[name];
  if (OutlineIcon) {
    return (
      <OutlineIcon
        size={size}
        className={combinedClassName}
        duotone={variant === 'duotone'}
      />
    );
  }
  
  // Fallback: return null or a placeholder
  console.warn(`Icon "${name}" not found in registry`);
  return null;
};

// Re-export everything
export { iconManifest, outlineRegistry, threeDRegistry, animatedRegistry };
export * from './collections/outline';
export * from './collections/threeD';
export * from './collections/animated';
export * from './manifest';