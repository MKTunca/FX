import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateServices {
  language: string = 'tr';

  constructor(private translateService: TranslateService) {
    this.translateService.use('tr');
  }

  changeLanguage(type: string) {
    this.language = type;
    this.translateService.use(type);
  }

  getLanguage() {
    return this.language;
  }
}
