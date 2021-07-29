/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { Lang } from '@core/models/lang.enum';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { LangDateFormat } from '@libs/shared/models/lang-date-format.model';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  dateFormat: LangDateFormat[] = [
    {
      lang:'en',
      dateFormate:'d.M.Y',
    },
    {
      lang:'fn',
      dateFormate:'d.M.Y',
    }]
  ;
  constructor(private translateService: TranslateService) { }

  use(value: Lang): void {
    this.translateService.use(value);
  }

  init(): void {
    registerLocaleData(localeFr);
    this.translateService.use(this.translateService.getBrowserLang());
  }

  getCurrentLang(): Lang {
    return this.translateService.currentLang as Lang;
  }
  getCurrentDateFormat(): string {
    return this.dateFormat.find(x=>x.lang === this.translateService.currentLang).dateFormate;
  }

  translate(key: string, interpolateParams?: {}): Observable<string> {
    return this.translateService.stream(key, interpolateParams);
  }

  instantTranslate(key: string) {
    return this.translateService.instant(key);
  }
  // TODO: Make this a property to avoid having multi observables
  currentLang(): Observable<Lang> {
    return this.translateService.onLangChange.pipe(
      startWith({ lang: this.getCurrentLang() }),
      map(res => res.lang as Lang)
    );
  }
}
