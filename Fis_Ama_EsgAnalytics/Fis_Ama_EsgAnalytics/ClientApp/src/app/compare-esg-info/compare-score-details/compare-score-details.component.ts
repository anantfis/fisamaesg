import { Component, OnInit, Input } from '@angular/core';
import { EsgDataService } from '../../service/esg-data.service';
import { company } from '../../models/company';
import { esgInputData } from '../../models/esgInputData';
import { CommunicationService } from '../../service/communication.service';

@Component({
  selector: 'app-compare-score-details',
  templateUrl: './compare-score-details.component.html',
  styleUrls: ['./compare-score-details.component.css']
})
export class CompareScoreDetailsComponent implements OnInit {
  
  constructor(private esgDataService: EsgDataService, private communicationService: CommunicationService) { }
  companyInput1: company;
  companyInput2: company;
  companyInput3: company;
  companyData1: esgInputData;
  companyData2: esgInputData;
  companyData3: esgInputData;
  companyChangeSubs: any;

  ngOnInit() {
    this.companyChangeSubs = this.communicationService.changeEmitted$.subscribe(
      message => {
        var firm = message as company;
        var sector = this.esgDataService.getAllEsgData().filter(y => y.company.companyId === firm.companyId)[0].sector.sectorName;
        switch (sector.toLowerCase()) {  
          case "pharma":
            this.setData(0, 1, 2);
            break;
          case "software":
            this.setData(3, 4, 5);
            break;
          case "manufacturing":
            this.setData(6, 7, 8);
            break;          
        }
    });
    this.setData(0, 1, 2); // pharma by default.
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

  setData(x:number, y:number, z:number) {
    this.companyInput1 = this.esgDataService.getAllCompanies()[x];
    this.companyInput2 = this.esgDataService.getAllCompanies()[y];
    this.companyInput3 = this.esgDataService.getAllCompanies()[z];

    this.companyData1 = this.esgDataService.getAllEsgData().filter(a => a.company.companyId === this.companyInput1.companyId)[0];
    this.companyData2 = this.esgDataService.getAllEsgData().filter(a => a.company.companyId === this.companyInput2.companyId)[0];
    this.companyData3 = this.esgDataService.getAllEsgData().filter(a => a.company.companyId === this.companyInput3.companyId)[0];
  }

  ngOnDestroy() {
    this.companyChangeSubs.unsubscribe();
  }
}
