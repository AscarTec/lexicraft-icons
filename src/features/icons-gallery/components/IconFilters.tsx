import React from 'react';
import { useLanguage } from '@/shared/i18n/LanguageContext';
import { IconCategory, IconSize } from '@/shared/icons/legal/manifest';
import { categories } from '@/shared/icons/legal/manifest';
import { Search, X } from 'lucide-react';

interface IconFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: IconCategory | 'all';
  onCategoryChange: (category: IconCategory | 'all') => void;
  selectedSize: IconSize;
  onSizeChange: (size: IconSize) => void;
  variant: 'outline' | 'duotone';
  onVariantChange: (variant: 'outline' | 'duotone') => void;
  motion: 'off' | 'hover' | 'loop';
  onMotionChange: (motion: 'off' | 'hover' | 'loop') => void;
  showMotion?: boolean;
  showVariant?: boolean;
}

const sizes: IconSize[] = [16, 20, 24, 28, 32, 48];

export const IconFilters: React.FC<IconFiltersProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedSize,
  onSizeChange,
  variant,
  onVariantChange,
  motion,
  onMotionChange,
  showMotion = false,
  showVariant = true,
}) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t.gallery.searchPlaceholder}
          className="w-full pl-10 pr-10 py-2.5 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filter Row */}
      <div className="flex flex-wrap gap-3">
        {/* Category */}
        <div className="flex-1 min-w-[140px]">
          <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
            {t.gallery.filters}
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value as IconCategory | 'all')}
            className="w-full px-3 py-2 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">{t.gallery.allCategories}</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {t.categories[cat.id]}
              </option>
            ))}
          </select>
        </div>

        {/* Size */}
        <div className="min-w-[100px]">
          <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
            {t.gallery.size}
          </label>
          <select
            value={selectedSize}
            onChange={(e) => onSizeChange(Number(e.target.value) as IconSize)}
            className="w-full px-3 py-2 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {sizes.map((s) => (
              <option key={s} value={s}>
                {s}px
              </option>
            ))}
          </select>
        </div>

        {/* Variant (for outline/duotone) */}
        {showVariant && (
          <div className="min-w-[120px]">
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
              {t.gallery.variant}
            </label>
            <select
              value={variant}
              onChange={(e) => onVariantChange(e.target.value as 'outline' | 'duotone')}
              className="w-full px-3 py-2 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="outline">{t.gallery.outline}</option>
              <option value="duotone">{t.gallery.duotone}</option>
            </select>
          </div>
        )}

        {/* Motion (for animated) */}
        {showMotion && (
          <div className="min-w-[120px]">
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
              {t.gallery.motion}
            </label>
            <select
              value={motion}
              onChange={(e) => onMotionChange(e.target.value as 'off' | 'hover' | 'loop')}
              className="w-full px-3 py-2 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="off">{t.gallery.off}</option>
              <option value="hover">{t.gallery.hover}</option>
              <option value="loop">{t.gallery.loop}</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};