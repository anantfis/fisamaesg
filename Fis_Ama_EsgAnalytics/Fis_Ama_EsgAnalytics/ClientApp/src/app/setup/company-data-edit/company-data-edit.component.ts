import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef,} from '@angular/material';
import { MatDialog} from '@angular/material/dialog';
import { SectorCompanyParameterBaseData } from '../../models/sector-company-basedata';
import { EsgDataService } from '../../service/esg-data.service';

@Component({
  selector: 'app-company-data-edit',
  templateUrl: './company-data-edit.component.html',
  styleUrls: ['./company-data-edit.component.css']
})
export class CompanyDataEditComponent implements OnInit {
  companyDataToEdit: SectorCompanyParameterBaseData;
  headElements :string[] =['Parameter', 'MSCI', 'S&P500', 'CSRHub']
  constructor(private esgDataService: EsgDataService,
    public dialogRef: MatDialogRef<CompanyDataEditComponent>,
    @Inject(MAT_DIALOG_DATA) public companyData: SectorCompanyParameterBaseData) { }

  ngOnInit() {
    this.companyDataToEdit = this.companyData;
  }

  getSectorWiseGoals(sector: string) {
    return this.esgDataService.getAllSectorGoalWeightage().filter(x => x.sector.sectorName.toLowerCase() === sector);
  }
}
