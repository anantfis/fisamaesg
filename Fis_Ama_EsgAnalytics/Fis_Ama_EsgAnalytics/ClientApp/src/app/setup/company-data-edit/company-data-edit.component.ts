import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef,} from '@angular/material';
import { MatDialog} from '@angular/material/dialog';
import { SectorCompanyParameterBaseData } from '../../models/sector-company-basedata';
import { EsgDataService } from '../../service/esg-data.service';
import { LocalStorageService } from '../../service/local-storage.service';
import { sectorGoalWeightage } from '../../models/sector';

@Component({
  selector: 'app-company-data-edit',
  templateUrl: './company-data-edit.component.html',
  styleUrls: ['./company-data-edit.component.css']
})
export class CompanyDataEditComponent implements OnInit {
  companyDataToEdit: SectorCompanyParameterBaseData;
  parameters: sectorGoalWeightage[];
  pharmaParams: sectorGoalWeightage[];
  softwareParams: sectorGoalWeightage[];
  manufacturingParams: sectorGoalWeightage[];

  headElements: string[] = ['Parameter','MSCI', 'S&P500', 'CSRHub']
  @Input() companyDetailsData: SectorCompanyParameterBaseData;
  @Output() onSaveData: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private esgDataService: EsgDataService, private storageService: LocalStorageService) { }

  ngOnInit() {
    this.companyDataToEdit = this.companyDetailsData;
    this.parameters = this.esgDataService.getAllSectorGoalWeightage();
    this.pharmaParams = this.getParametersBySector(1);
    this.softwareParams = this.getParametersBySector(2);
    this.manufacturingParams = this.getParametersBySector(5);
  }

  getSectorWiseGoals(sector: string) {
    return this.esgDataService.getAllSectorGoalWeightage().filter(x => x.sector.sectorName.toLowerCase() === sector);
  }

  getRatingValue(providerName, descName, ratingList) {
    var ratingValue= ratingList.find(a => a.provider.providerName === providerName && a.sectorGoalWeightage.sdg_Goal_Description.sdgGoalDescriptionName === descName);
    return ratingValue.esgScore;
  }

  saveData() {
    //console.dir(this.companyDetailsData);
    this.storageService.updateCompanyDataInLocalTempDataByName(this.companyDetailsData);
    this.onSaveData.emit(true);
  }

  updateChangedValue(providerName, descName,ratingList,changedValue) {
    var ratingValue = ratingList.find(a => a.provider.providerName === providerName && a.sectorGoalWeightage.sdg_Goal_Description.sdgGoalDescriptionName === descName);
    ratingValue.esgScore = changedValue;
  }

  getParametersBySector(sectorId: number) {
    return this.parameters.filter(x => x.sector.sectorId == sectorId);
  }
}
