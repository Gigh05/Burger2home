import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Burger2home';

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.setDefaultLang('en')
    this.translate.use('en');
  }
}
