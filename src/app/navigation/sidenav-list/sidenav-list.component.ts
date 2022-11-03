import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  siteLanguage = 'English';
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
  ];

  constructor(private translate: TranslateService) { }

  changeSiteLanguage(localeCode: string): void {
    const selectedLanguage = this.languageList
      .find((language) => language.code === localeCode)
      ?.label.toString();
    if (selectedLanguage) {
      this.siteLanguage = selectedLanguage;
      this.translate.use(localeCode);
    }
    const currentLanguage = this.translate.currentLang;
    console.log('currentLanguage', currentLanguage);
  }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}