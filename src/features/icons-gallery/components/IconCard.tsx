import React from 'react';
import { LegalIcon } from '@/shared/icons/legal';
import { IconMeta } from '@/shared/icons/legal/manifest';
import { useLanguage } from '@/shared/i18n/LanguageContext';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface IconCardProps {
  icon: IconMeta;
  size: 16 | 20 | 24 | 28 | 32 | 48;
  variant: 'outline' | 'duotone' | '3d';
  motion: 'off' | 'hover' | 'loop';
}

export const IconCard: React.FC<IconCardProps> = ({ icon, size, variant, motion }) => {
  const { t, direction } = useLanguage();
  const [copied, setCopied] = useState(false);

  const getUsageSnippet = () => {
    const props: string[] = [`name="${icon.name}"`];
    if (size !== 24) props.push(`size={${size}}`);
    
    if (icon.collection === 'threeD') {
      props.push(`variant="3d"`);
    } else if (icon.collection === 'animated') {
      if (motion !== 'off') props.push(`motion="${motion}"`);
    } else if (variant !== 'outline') {
      props.push(`variant="${variant}"`);
    }
    
    return `<LegalIcon ${props.join(' ')} />`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getUsageSnippet());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const effectiveVariant = icon.collection === 'threeD' ? '3d' : variant;
  const effectiveMotion = icon.collection === 'animated' ? motion : 'off';

  return (
    <div className="icon-card group relative">
      {/* Icon Preview */}
      <div className="w-full aspect-square flex items-center justify-center rounded-lg bg-secondary/30 mb-3 transition-colors group-hover:bg-secondary/50">
        <LegalIcon
          name={icon.name}
          size={size}
          variant={effectiveVariant}
          motion={effectiveMotion}
          dir={direction}
          className="text-foreground"
        />
      </div>

      {/* Icon Name */}
      <h3 className="text-sm font-medium text-foreground truncate text-center mb-1">
        {icon.displayName}
      </h3>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 justify-center mb-3">
        {icon.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors focus-ring"
        aria-label={t.gallery.copyUsage}
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5" />
            <span>{t.gallery.copySuccess}</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5" />
            <span>{t.gallery.copyUsage}</span>
          </>
        )}
      </button>
    </div>
  );
};