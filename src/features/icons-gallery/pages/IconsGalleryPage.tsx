import React, { useState, useMemo } from 'react';
import { LanguageProvider, useLanguage } from '@/shared/i18n/LanguageContext';
import { LegalIcon, iconManifest, IconCategory, IconCollection, IconSize } from '@/shared/icons/legal';
import { outlineIcons, threeDIcons, animatedIcons } from '@/shared/icons/legal/manifest';
import { IconCard } from '../components/IconCard';
import { IconFilters } from '../components/IconFilters';
import { CollectionTabs } from '../components/CollectionTabs';
import { Sun, Moon, Globe } from 'lucide-react';

const featuredCollections = [
  { id: 'coreCourt', icons: ['gavel', 'scales', 'courthouse', 'pillar'], category: 'court' as const },
  { id: 'documentsContracts', icons: ['contract', 'doc', 'stamp', 'seal'], category: 'documents' as const },
  { id: 'securityCompliance', icons: ['shieldLaw', 'lock', 'fingerprint', 'compliance'], category: 'security' as const },
  { id: 'financeBilling', icons: ['invoice', 'payment', 'receipt', 'archive'], category: 'finance' as const },
];

function IconsGalleryContent() {
  const { t, language, toggleLanguage, direction } = useLanguage();
  const [isDark, setIsDark] = useState(false);
  const [activeCollection, setActiveCollection] = useState<IconCollection>('outline');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<IconCategory | 'all'>('all');
  const [selectedSize, setSelectedSize] = useState<IconSize>(24);
  const [variant, setVariant] = useState<'outline' | 'duotone'>('outline');
  const [motion, setMotion] = useState<'off' | 'hover' | 'loop'>('hover');

  const collectionCounts: Record<IconCollection, number> = {
    outline: outlineIcons.length,
    threeD: threeDIcons.length,
    animated: animatedIcons.length,
  };

  const currentIcons = useMemo(() => {
    let icons = iconManifest.filter(i => i.collection === activeCollection);
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      icons = icons.filter(
        i =>
          i.name.toLowerCase().includes(query) ||
          i.displayName.toLowerCase().includes(query) ||
          i.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    if (selectedCategory !== 'all') {
      icons = icons.filter(i => i.category === selectedCategory);
    }
    
    return icons;
  }, [activeCollection, searchQuery, selectedCategory]);

  const themeWrapper = isDark ? 'dark' : '';

  return (
    <div className={themeWrapper} dir={direction}>
      <div className="min-h-screen bg-background text-foreground transition-colors">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <LegalIcon name="scales" size={24} variant="duotone" className="text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gold-gradient">{t.gallery.title}</h1>
                  <p className="text-xs text-muted-foreground">{t.gallery.subtitle}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Language Toggle */}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors text-sm font-medium"
                  aria-label={t.language.switch}
                >
                  <Globe className="w-4 h-4" />
                  <span>{language === 'en' ? 'عربي' : 'EN'}</span>
                </button>

                {/* Theme Toggle */}
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors text-sm font-medium"
                  aria-label={t.gallery.theme}
                >
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  <span>{isDark ? t.gallery.light : t.gallery.dark}</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {/* Featured Collections */}
          <section className="mb-12">
            <h2 className="text-lg font-semibold mb-4">{t.gallery.featuredCollections}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {featuredCollections.map((collection) => (
                <button
                  key={collection.id}
                  onClick={() => {
                    setSelectedCategory(collection.category);
                    setActiveCollection('outline');
                  }}
                  className="premium-card p-4 text-left group"
                >
                  <div className="flex gap-2 mb-3">
                    {collection.icons.slice(0, 4).map((iconName) => (
                      <div key={iconName} className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center">
                        <LegalIcon name={iconName} size={16} variant="duotone" className="text-primary" />
                      </div>
                    ))}
                  </div>
                  <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {t.collections[collection.id as keyof typeof t.collections]}
                  </h3>
                </button>
              ))}
            </div>
          </section>

          {/* Collection Tabs */}
          <section className="mb-6">
            <CollectionTabs
              activeCollection={activeCollection}
              onCollectionChange={setActiveCollection}
              counts={collectionCounts}
            />
          </section>

          {/* Filters */}
          <section className="mb-8 p-4 rounded-xl border bg-card">
            <IconFilters
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedSize={selectedSize}
              onSizeChange={setSelectedSize}
              variant={variant}
              onVariantChange={setVariant}
              motion={motion}
              onMotionChange={setMotion}
              showVariant={activeCollection === 'outline'}
              showMotion={activeCollection === 'animated'}
            />
          </section>

          {/* Icons Grid */}
          {currentIcons.length > 0 ? (
            <section>
              <p className="text-sm text-muted-foreground mb-4">
                {currentIcons.length} {t.gallery.iconsCount}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {currentIcons.map((icon) => (
                  <IconCard
                    key={icon.name}
                    icon={icon}
                    size={selectedSize}
                    variant={activeCollection === 'threeD' ? '3d' : variant}
                    motion={activeCollection === 'animated' ? motion : 'off'}
                  />
                ))}
              </div>
            </section>
          ) : (
            <section className="text-center py-16">
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
                <LegalIcon name="fileSearch" size={32} className="text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">{t.gallery.noResults}</h3>
              <p className="text-sm text-muted-foreground">{t.gallery.tryAdjusting}</p>
            </section>
          )}
        </main>

        {/* Footer */}
        <footer className="border-t py-8 mt-16">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>Luxury Legal Icons Collection • {iconManifest.length} Premium Icons</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default function IconsGalleryPage() {
  return (
    <LanguageProvider>
      <IconsGalleryContent />
    </LanguageProvider>
  );
}