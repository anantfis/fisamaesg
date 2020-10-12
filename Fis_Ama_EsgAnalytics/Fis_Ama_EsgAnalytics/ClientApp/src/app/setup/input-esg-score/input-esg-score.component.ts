import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../service/local-storage.service';
import { SectorCompanyParameterBaseData } from '../../models/sector-company-basedata';

@Component({
  selector: 'app-input-esg-score',
  templateUrl: './input-esg-score.component.html',
  styleUrls: ['./input-esg-score.component.css']
})
export class InputEsgScoreComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) { }
  savedData: SectorCompanyParameterBaseData[];
  ngOnInit() {
    this.savedData = this.localStorageService.getAllCompanyDataFromLocalStorage();
  }
}
