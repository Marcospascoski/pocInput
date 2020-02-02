import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const StorageKeys = { language: 'SelectedLanguages' };

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private lang = 'pt-br';

  constructor(private translateService: TranslateService) {
    this.setInitialAppLanguage();
  }

  setInitialAppLanguage() {
    const lng = this.translateService.setDefaultLang(this.lang.toLowerCase());
    localStorage.setItem(StorageKeys.language, JSON.stringify(lng));
  }
  setTranslation(arg0: string, arg1: { 'pageTitle': string; }) { }
}
