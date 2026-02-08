import React from 'react';
import { useLanguage } from '@/shared/i18n/LanguageContext';
import { IconCollection } from '@/shared/icons/legal/manifest';

interface CollectionTabsProps {
  activeCollection: IconCollection;
  onCollectionChange: (collection: IconCollection) => void;
  counts: Record<IconCollection, number>;
}

export const CollectionTabs: React.FC<CollectionTabsProps> = ({
  activeCollection,
  onCollectionChange,
  counts,
}) => {
  const { t } = useLanguage();

  const tabs: { id: IconCollection; label: string }[] = [
    { id: 'outline', label: t.gallery.outline + ' / ' + t.gallery.duotone },
    { id: 'threeD', label: t.gallery.threeD },
    { id: 'animated', label: t.gallery.animated },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onCollectionChange(tab.id)}
          className={`
            px-4 py-2.5 rounded-lg text-sm font-medium transition-all
            ${activeCollection === tab.id
              ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }
          `}
        >
          {tab.label}
          <span className="ml-2 px-1.5 py-0.5 text-xs rounded-md bg-background/20">
            {counts[tab.id]}
          </span>
        </button>
      ))}
    </div>
  );
};