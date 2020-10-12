import { Component, OnInit } from '@angular/core';
import { EsgDataService } from '../service/esg-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private esgDataService: EsgDataService) { };

  ngOnInit() {
    this.esgDataService.saveAllDataToLocalStorageFirstTime();
  }

}
