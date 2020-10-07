import { Component, OnInit, Input } from '@angular/core';
import { EsgDataService } from '../../service/esg-data.service';
import { company } from '../../models/company';
import { esgInputData } from '../../models/esgInputData';

@Component({
  selector: 'app-compare-score-details',
  templateUrl: './compare-score-details.component.html',
  styleUrls: ['./compare-score-details.component.css']
})
export class CompareScoreDetailsComponent implements OnInit {

  @Input() companiesSelected: company[];
  constructor(private esgDataService: EsgDataService) { }
  companyInput1: company;
  companyInput2: company;
  companyInput3: company;
  companyData1: esgInputData;
  companyData2: esgInputData;
  companyData3: esgInputData;

  ngOnInit() {
    // should come through @Input, remove hardcoding later
    this.companyInput1 = this.esgDataService.getAllCompanies()[0];//this.companiesSelected[0]
    this.companyInput2 = this.esgDataService.getAllCompanies()[1];//this.companiesSelected[1]
    this.companyInput3 = this.esgDataService.getAllCompanies()[2];//this.companiesSelected[2]

    this.companyData1 = this.esgDataService.getAllEsgData().filter(y => y.company.companyId === this.companyInput1.companyId)[0];
    this.companyData2 = this.esgDataService.getAllEsgData().filter(y => y.company.companyId === this.companyInput2.companyId)[0];
    this.companyData3 = this.esgDataService.getAllEsgData().filter(y => y.company.companyId === this.companyInput3.companyId)[0];

   //this.companyData3.company.companyName
   // this.companyData3.goalBasedScore.goal1
  }

  pickColor(score: number): string {
    if (score >= 75)
      return "assets/greendot.png";
    else if (score <= 35)
      return "assets/reddot.png";
    if (score > 35 && score < 75)
      return "assets/yellowdot.png";
  }
  pickRating(score: number): string {
    if (score >= 75)
      return "Strong";
    else if (score <= 35)
      return "Weak";
    if (score > 35 && score < 75)
      return "Average";
  }

}
