import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../service/local-storage.service';
import { SectorCompanyParameterBaseData } from '../../models/sector-company-basedata';
import { MatDialog } from '@angular/material';
import { CompanyDataEditComponent } from '../company-data-edit/company-data-edit.component';

@Component({
  selector: 'app-input-esg-score',
  templateUrl: './input-esg-score.component.html',
  styleUrls: ['./input-esg-score.component.css']
})
export class InputEsgScoreComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService, public dialog: MatDialog) { }
  savedData: SectorCompanyParameterBaseData[];
  ngOnInit() {
    this.savedData = this.localStorageService.getAllCompanyDataFromLocalStorage();
  }

  openEditDialog(firmData: SectorCompanyParameterBaseData): void {
    const dialogRef = this.dialog.open(CompanyDataEditComponent, {
      height: '600px',
      width: '1000px',
      data: { companyData: firmData}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.savedData = this.localStorageService.getAllCompanyDataFromLocalStorage();
    });
  }
}
