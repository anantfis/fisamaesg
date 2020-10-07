import { Component, OnInit, Input } from '@angular/core';
import { company } from '../../models/company';
import { esgInputData } from '../../models/esgInputData';
import { EsgDataService } from '../../service/esg-data.service';

@Component({
  selector: 'app-company-score-details',
  templateUrl: './company-score-details.component.html',
  styleUrls: ['./company-score-details.component.css']
})
export class CompanyScoreDetailsComponent implements OnInit {
  @Input() companySelected: company;
  companyData: esgInputData;
  companyInput: company;
  constructor(private esgDataService: EsgDataService) { }

  ngOnInit() {
    this.companySelected = this.esgDataService.getAllCompanies()[0]; // should come through @Input, remove hardcoding later
    this.companyInput = this.esgDataService.getAllCompanies().filter(x => x.companyId === this.companySelected.companyId)[0];
    this.companyData = this.esgDataService.getAllEsgData().filter(y => y.company.companyId === this.companyInput.companyId)[0];

  }

  pickColor(score: number): string {
    if (score >= 75)
      return "assets/greendot.png";
    else if (score <=35)
      return "assets/reddot.png";
    if (score > 35 && score < 75)
      return "assets/yellowdot.png";
  }

}
