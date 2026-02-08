export type IconCategory = 'court' | 'documents' | 'security' | 'finance' | 'people' | 'tools';
export type IconCollection = 'outline' | 'threeD' | 'animated';
export type IconVariant = 'outline' | 'duotone';
export type IconMotion = 'off' | 'hover' | 'loop';
export type IconSize = 16 | 20 | 24 | 28 | 32 | 48;

export interface IconMeta {
  name: string;
  displayName: string;
  tags: string[];
  category: IconCategory;
  collection: IconCollection;
  isDirectional: boolean;
  animationClass?: string;
}

// Outline Icons (40 icons)
export const outlineIcons: IconMeta[] = [
  { name: 'gavel', displayName: 'Gavel', tags: ['judge', 'hammer', 'verdict'], category: 'court', collection: 'outline', isDirectional: false },
  { name: 'scales', displayName: 'Scales', tags: ['justice', 'balance', 'law'], category: 'court', collection: 'outline', isDirectional: false },
  { name: 'courthouse', displayName: 'Courthouse', tags: ['building', 'court', 'justice'], category: 'court', collection: 'outline', isDirectional: false },
  { name: 'lawbook', displayName: 'Law Book', tags: ['book', 'legal', 'study'], category: 'documents', collection: 'outline', isDirectional: false },
  { name: 'contract', displayName: 'Contract', tags: ['document', 'agreement', 'legal'], category: 'documents', collection: 'outline', isDirectional: false },
  { name: 'signature', displayName: 'Signature', tags: ['pen', 'sign', 'autograph'], category: 'documents', collection: 'outline', isDirectional: true },
  { name: 'briefcase', displayName: 'Briefcase', tags: ['case', 'business', 'lawyer'], category: 'tools', collection: 'outline', isDirectional: false },
  { name: 'judge', displayName: 'Judge', tags: ['person', 'court', 'authority'], category: 'people', collection: 'outline', isDirectional: false },
  { name: 'lawyer', displayName: 'Lawyer', tags: ['attorney', 'person', 'legal'], category: 'people', collection: 'outline', isDirectional: false },
  { name: 'client', displayName: 'Client', tags: ['person', 'user', 'customer'], category: 'people', collection: 'outline', isDirectional: false },
  { name: 'handshake', displayName: 'Handshake', tags: ['agreement', 'deal', 'partnership'], category: 'people', collection: 'outline', isDirectional: false },
  { name: 'verdict', displayName: 'Verdict', tags: ['decision', 'judgment', 'result'], category: 'court', collection: 'outline', isDirectional: false },
  { name: 'evidence', displayName: 'Evidence', tags: ['proof', 'exhibit', 'document'], category: 'court', collection: 'outline', isDirectional: false },
  { name: 'caseFile', displayName: 'Case File', tags: ['folder', 'document', 'case'], category: 'documents', collection: 'outline', isDirectional: false },
  { name: 'timeline', displayName: 'Timeline', tags: ['history', 'schedule', 'progress'], category: 'tools', collection: 'outline', isDirectional: true },
  { name: 'shieldLaw', displayName: 'Legal Shield', tags: ['protection', 'security', 'defense'], category: 'security', collection: 'outline', isDirectional: false },
  { name: 'stamp', displayName: 'Stamp', tags: ['seal', 'official', 'approve'], category: 'documents', collection: 'outline', isDirectional: false },
  { name: 'seal', displayName: 'Seal', tags: ['official', 'notary', 'certified'], category: 'documents', collection: 'outline', isDirectional: false },
  { name: 'ribbon', displayName: 'Ribbon', tags: ['award', 'certificate', 'honor'], category: 'tools', collection: 'outline', isDirectional: false },
  { name: 'pillar', displayName: 'Justice Pillar', tags: ['column', 'court', 'law'], category: 'court', collection: 'outline', isDirectional: false },
  { name: 'courtCalendar', displayName: 'Court Calendar', tags: ['schedule', 'date', 'hearing'], category: 'court', collection: 'outline', isDirectional: false },
  { name: 'hearing', displayName: 'Hearing', tags: ['court', 'session', 'trial'], category: 'court', collection: 'outline', isDirectional: false },
  { name: 'appeal', displayName: 'Appeal', tags: ['review', 'higher court', 'request'], category: 'court', collection: 'outline', isDirectional: true },
  { name: 'fileSearch', displayName: 'File Search', tags: ['search', 'find', 'document'], category: 'documents', collection: 'outline', isDirectional: true },
  { name: 'legalChat', displayName: 'Legal Chat', tags: ['message', 'communication', 'consult'], category: 'tools', collection: 'outline', isDirectional: false },
  { name: 'legalBell', displayName: 'Legal Notification', tags: ['alert', 'notification', 'reminder'], category: 'tools', collection: 'outline', isDirectional: false },
  { name: 'doc', displayName: 'Legal Document', tags: ['document', 'file', 'paper'], category: 'documents', collection: 'outline', isDirectional: false },
  { name: 'notarize', displayName: 'Notarize', tags: ['notary', 'certify', 'official'], category: 'documents', collection: 'outline', isDirectional: false },
  { name: 'idVerify', displayName: 'ID Verification', tags: ['identity', 'verify', 'check'], category: 'security', collection: 'outline', isDirectional: false },
  { name: 'fingerprint', displayName: 'Fingerprint', tags: ['biometric', 'identity', 'security'], category: 'security', collection: 'outline', isDirectional: false },
  { name: 'lock', displayName: 'Lock', tags: ['secure', 'protected', 'privacy'], category: 'security', collection: 'outline', isDirectional: false },
  { name: 'key', displayName: 'Key', tags: ['access', 'unlock', 'security'], category: 'security', collection: 'outline', isDirectional: true },
  { name: 'privacy', displayName: 'Privacy', tags: ['confidential', 'private', 'secure'], category: 'security', collection: 'outline', isDirectional: false },
  { name: 'compliance', displayName: 'Compliance', tags: ['check', 'verify', 'approve'], category: 'security', collection: 'outline', isDirectional: false },
  { name: 'invoice', displayName: 'Invoice', tags: ['bill', 'payment', 'finance'], category: 'finance', collection: 'outline', isDirectional: false },
  { name: 'payment', displayName: 'Payment', tags: ['money', 'transaction', 'finance'], category: 'finance', collection: 'outline', isDirectional: false },
  { name: 'receipt', displayName: 'Receipt', tags: ['transaction', 'proof', 'payment'], category: 'finance', collection: 'outline', isDirectional: false },
  { name: 'archive', displayName: 'Legal Archive', tags: ['storage', 'records', 'history'], category: 'documents', collection: 'outline', isDirectional: false },
  { name: 'gallery', displayName: 'Gallery', tags: ['images', 'evidence', 'photos'], category: 'tools', collection: 'outline', isDirectional: false },
  { name: 'mapCourt', displayName: 'Court Map', tags: ['location', 'map', 'courthouse'], category: 'court', collection: 'outline', isDirectional: false },
];

// 3D Sculpted Icons (20 icons)
export const threeDIcons: IconMeta[] = [
  { name: 'gavel3d', displayName: 'Gavel 3D', tags: ['judge', 'hammer', 'verdict', '3d'], category: 'court', collection: 'threeD', isDirectional: false },
  { name: 'scales3d', displayName: 'Scales 3D', tags: ['justice', 'balance', 'law', '3d'], category: 'court', collection: 'threeD', isDirectional: false },
  { name: 'courthouse3d', displayName: 'Courthouse 3D', tags: ['building', 'court', '3d'], category: 'court', collection: 'threeD', isDirectional: false },
  { name: 'lawbook3d', displayName: 'Law Book 3D', tags: ['book', 'legal', '3d'], category: 'documents', collection: 'threeD', isDirectional: false },
  { name: 'contract3d', displayName: 'Contract 3D', tags: ['document', 'agreement', '3d'], category: 'documents', collection: 'threeD', isDirectional: false },
  { name: 'briefcase3d', displayName: 'Briefcase 3D', tags: ['case', 'business', '3d'], category: 'tools', collection: 'threeD', isDirectional: false },
  { name: 'shield3d', displayName: 'Shield 3D', tags: ['protection', 'security', '3d'], category: 'security', collection: 'threeD', isDirectional: false },
  { name: 'stamp3d', displayName: 'Stamp 3D', tags: ['seal', 'official', '3d'], category: 'documents', collection: 'threeD', isDirectional: false },
  { name: 'seal3d', displayName: 'Seal 3D', tags: ['official', 'notary', '3d'], category: 'documents', collection: 'threeD', isDirectional: false },
  { name: 'pillar3d', displayName: 'Pillar 3D', tags: ['column', 'court', '3d'], category: 'court', collection: 'threeD', isDirectional: false },
  { name: 'judge3d', displayName: 'Judge 3D', tags: ['person', 'court', '3d'], category: 'people', collection: 'threeD', isDirectional: false },
  { name: 'lawyer3d', displayName: 'Lawyer 3D', tags: ['attorney', 'person', '3d'], category: 'people', collection: 'threeD', isDirectional: false },
  { name: 'handshake3d', displayName: 'Handshake 3D', tags: ['agreement', 'deal', '3d'], category: 'people', collection: 'threeD', isDirectional: false },
  { name: 'evidence3d', displayName: 'Evidence 3D', tags: ['proof', 'exhibit', '3d'], category: 'court', collection: 'threeD', isDirectional: false },
  { name: 'timeline3d', displayName: 'Timeline 3D', tags: ['history', 'schedule', '3d'], category: 'tools', collection: 'threeD', isDirectional: true },
  { name: 'lock3d', displayName: 'Lock 3D', tags: ['secure', 'protected', '3d'], category: 'security', collection: 'threeD', isDirectional: false },
  { name: 'key3d', displayName: 'Key 3D', tags: ['access', 'unlock', '3d'], category: 'security', collection: 'threeD', isDirectional: true },
  { name: 'fingerprint3d', displayName: 'Fingerprint 3D', tags: ['biometric', 'identity', '3d'], category: 'security', collection: 'threeD', isDirectional: false },
  { name: 'invoice3d', displayName: 'Invoice 3D', tags: ['bill', 'payment', '3d'], category: 'finance', collection: 'threeD', isDirectional: false },
  { name: 'archive3d', displayName: 'Archive 3D', tags: ['storage', 'records', '3d'], category: 'documents', collection: 'threeD', isDirectional: false },
];

// Animated Icons (20 icons)
export const animatedIcons: IconMeta[] = [
  { name: 'gavelAnim', displayName: 'Gavel Animated', tags: ['judge', 'hammer', 'animated'], category: 'court', collection: 'animated', isDirectional: false, animationClass: 'anim-gavel' },
  { name: 'scalesAnim', displayName: 'Scales Animated', tags: ['justice', 'balance', 'animated'], category: 'court', collection: 'animated', isDirectional: false, animationClass: 'anim-balance' },
  { name: 'courthouseAnim', displayName: 'Courthouse Animated', tags: ['building', 'court', 'animated'], category: 'court', collection: 'animated', isDirectional: false, animationClass: 'anim-glow' },
  { name: 'lawbookAnim', displayName: 'Law Book Animated', tags: ['book', 'legal', 'animated'], category: 'documents', collection: 'animated', isDirectional: false, animationClass: 'anim-flip' },
  { name: 'contractAnim', displayName: 'Contract Animated', tags: ['document', 'agreement', 'animated'], category: 'documents', collection: 'animated', isDirectional: false, animationClass: 'anim-flip' },
  { name: 'signatureAnim', displayName: 'Signature Animated', tags: ['pen', 'sign', 'animated'], category: 'documents', collection: 'animated', isDirectional: true, animationClass: 'anim-pulse' },
  { name: 'shieldAnim', displayName: 'Shield Animated', tags: ['protection', 'security', 'animated'], category: 'security', collection: 'animated', isDirectional: false, animationClass: 'anim-shimmer' },
  { name: 'stampAnim', displayName: 'Stamp Animated', tags: ['seal', 'official', 'animated'], category: 'documents', collection: 'animated', isDirectional: false, animationClass: 'anim-gavel' },
  { name: 'sealAnim', displayName: 'Seal Animated', tags: ['official', 'notary', 'animated'], category: 'documents', collection: 'animated', isDirectional: false, animationClass: 'anim-pulse' },
  { name: 'pillarAnim', displayName: 'Pillar Animated', tags: ['column', 'court', 'animated'], category: 'court', collection: 'animated', isDirectional: false, animationClass: 'anim-glow' },
  { name: 'calendarAnim', displayName: 'Calendar Animated', tags: ['schedule', 'date', 'animated'], category: 'court', collection: 'animated', isDirectional: false, animationClass: 'anim-flip' },
  { name: 'hearingAnim', displayName: 'Hearing Animated', tags: ['court', 'session', 'animated'], category: 'court', collection: 'animated', isDirectional: false, animationClass: 'anim-pulse' },
  { name: 'appealAnim', displayName: 'Appeal Animated', tags: ['review', 'higher court', 'animated'], category: 'court', collection: 'animated', isDirectional: true, animationClass: 'anim-pulse' },
  { name: 'searchAnim', displayName: 'Search Animated', tags: ['find', 'search', 'animated'], category: 'tools', collection: 'animated', isDirectional: true, animationClass: 'anim-wiggle' },
  { name: 'chatAnim', displayName: 'Chat Animated', tags: ['message', 'communication', 'animated'], category: 'tools', collection: 'animated', isDirectional: false, animationClass: 'anim-pulse' },
  { name: 'bellAnim', displayName: 'Bell Animated', tags: ['alert', 'notification', 'animated'], category: 'tools', collection: 'animated', isDirectional: false, animationClass: 'anim-wiggle' },
  { name: 'fingerprintAnim', displayName: 'Fingerprint Animated', tags: ['biometric', 'identity', 'animated'], category: 'security', collection: 'animated', isDirectional: false, animationClass: 'anim-scan' },
  { name: 'lockAnim', displayName: 'Lock Animated', tags: ['secure', 'protected', 'animated'], category: 'security', collection: 'animated', isDirectional: false, animationClass: 'anim-wiggle' },
  { name: 'invoiceAnim', displayName: 'Invoice Animated', tags: ['bill', 'payment', 'animated'], category: 'finance', collection: 'animated', isDirectional: false, animationClass: 'anim-flip' },
  { name: 'paymentAnim', displayName: 'Payment Animated', tags: ['money', 'transaction', 'animated'], category: 'finance', collection: 'animated', isDirectional: false, animationClass: 'anim-pulse' },
];

// Combined manifest
export const iconManifest: IconMeta[] = [
  ...outlineIcons,
  ...threeDIcons,
  ...animatedIcons,
];

// Helper functions
export function getIconsByCategory(category: IconCategory): IconMeta[] {
  return iconManifest.filter(icon => icon.category === category);
}

export function getIconsByCollection(collection: IconCollection): IconMeta[] {
  return iconManifest.filter(icon => icon.collection === collection);
}

export function searchIcons(query: string): IconMeta[] {
  const lowerQuery = query.toLowerCase();
  return iconManifest.filter(icon => 
    icon.name.toLowerCase().includes(lowerQuery) ||
    icon.displayName.toLowerCase().includes(lowerQuery) ||
    icon.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

export const categories: { id: IconCategory; icon: string }[] = [
  { id: 'court', icon: 'courthouse' },
  { id: 'documents', icon: 'contract' },
  { id: 'security', icon: 'shieldLaw' },
  { id: 'finance', icon: 'invoice' },
  { id: 'people', icon: 'lawyer' },
  { id: 'tools', icon: 'briefcase' },
];