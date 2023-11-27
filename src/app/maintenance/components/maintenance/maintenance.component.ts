import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss'],
})
export class MaintenanceComponent {

  constructor(private translate: TranslateService) {
   translate.addLangs(['hb', 'klingon']);
   translate.setDefaultLang('hb');
   translate.use('hb');
 }
 
}
