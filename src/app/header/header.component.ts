import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private translate: TranslateService) {
    translate.addLangs(['hb', 'klingon']);
    translate.setDefaultLang('hb');
    translate.use('hb');
  }


  myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

}
