import { Component, OnInit, Input } from '@angular/core';
import { company } from '../../models/company';
import { esgInputData } from '../../models/esgInputData';
import { EsgDataService } from '../../service/esg-data.service';
import { CommunicationService } from '../../service/communication.service';

@Component({
  selector: 'app-company-score-details',
  templateUrl: './company-score-details.component.html',
  styleUrls: ['./company-score-details.component.css']
})
export class CompanyScoreDetailsComponent implements OnInit {
  companySelected: company;
  companyData: esgInputData;
  companyChangeSubs: any;
  constructor(private esgDataService: EsgDataService, private communicationService: CommunicationService) { }

  ngOnInit() {
    this.companyChangeSubs = this.communicationService.changeEmitted$.subscribe(
      message => {
        this.companySelected = message as company;        
        this.companyData = this.esgDataService.getAllEsgData().filter(y => y.company.companyId === this.companySelected.companyId)[0];
      });
    this.companySelected = this.esgDataService.getAllCompanies()[0]; // first time select first company in Array : abbott
    this.companyData = this.esgDataService.getAllEsgData().filter(y => y.company.companyId === this.companySelected.companyId)[0];
  }

  pickColor(score: number): string {
    if (score >= 75)
      return "assets/greendot.png";
    else if (score <=35)
      return "assets/reddot.png";
    if (score > 35 && score < 75)
      return "assets/yellowdot.png";
  }

  ngOnDestroy() {
    this.companyChangeSubs.unsubscribe();
  }

}
