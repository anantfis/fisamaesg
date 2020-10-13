import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef,} from '@angular/material';
import { MatDialog} from '@angular/material/dialog';
import { SectorCompanyParameterBaseData } from '../../models/sector-company-basedata';

@Component({
  selector: 'app-company-data-edit',
  templateUrl: './company-data-edit.component.html',
  styleUrls: ['./company-data-edit.component.css']
})
export class CompanyDataEditComponent implements OnInit {
  companyDataToEdit: SectorCompanyParameterBaseData;
  constructor(public dialogRef: MatDialogRef<CompanyDataEditComponent>,
    @Inject(MAT_DIALOG_DATA) public companyData: SectorCompanyParameterBaseData) { }

  ngOnInit() {
    this.companyDataToEdit = this.companyData;
  }
}
