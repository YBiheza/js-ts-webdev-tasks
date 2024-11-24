type Translations = Record<string, string>;

class I18n {
  private translations: Record<string, Translations> = {};
  private currentLang: string = 'en';
  private direction: Record<string, 'ltr' | 'rtl'> = {
    en: 'ltr',
    ar: 'rtl',
  };
  private fontClass: Record<string, string> = {
    en: 'font-english',
    ar: 'font-arabic',  
  };


  async loadTranslations(lang: string): Promise<void> {
    if (!this.translations[lang]) {
        try {
        const response = await fetch(`/public/${lang}.json`);
        this.translations[lang] = await response.json();
        } catch (error) {
        console.error(`Error loading translations for ${lang}`, error);
        }
    }
  }

  async setLanguage(lang: string): Promise<void> {
    if (!this.translations[lang]) {
      await this.loadTranslations(lang);
    }
    this.currentLang = lang;
    this.updateUI();
    this.updateDirection();
    //this.updateFont();
  }

  t(key: string): string {
    return this.translations[this.currentLang]?.[key] || key;
  }

  updateUI(): void {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');
      if (key) {
        element.textContent = this.t(key);
      }
    });
  }

  updateDirection(): void {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        element.setAttribute('dir', this.direction[this.currentLang])});
  }

  updateFont(): void {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      element.classList.toggle(this.fontClass[this.currentLang]);
    });
  }

}

const i18n = new I18n();
export default i18n;
