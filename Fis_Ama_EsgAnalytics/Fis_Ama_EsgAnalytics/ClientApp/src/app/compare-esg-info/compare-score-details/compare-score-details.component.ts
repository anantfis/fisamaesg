import { Component, OnInit, Input } from '@angular/core';
import { EsgDataService } from '../../service/esg-data.service';
import { company } from '../../models/company';
import { esgInputData } from '../../models/esgInputData';
import { CommunicationService } from '../../service/communication.service';
import { LocalStorageService } from '../../service/local-storage.service';
import { sectorGoalWeightage } from '../../models/sector';
import { ParamRating } from '../../models/esgParameter';

@Component({
  selector: 'app-compare-score-details',
  templateUrl: './compare-score-details.component.html',
  styleUrls: ['./compare-score-details.component.css']
})
export class CompareScoreDetailsComponent implements OnInit {
  
  constructor(private esgDataService: EsgDataService,
    private communicationService: CommunicationService,
    private localStorageService: LocalStorageService) { }
  companyInput1: company;
  companyInput2: company;
  companyInput3: company;

  companyData1: esgInputData;
  companyData2: esgInputData;
  companyData3: esgInputData;

  company1ParamRating: ParamRating[] = [];
  company2ParamRating: ParamRating[] = [];
  company3ParamRating: ParamRating[] = [];

  companyChangeSubs: any;

  goals: sectorGoalWeightage[];
  pharmaGoals: sectorGoalWeightage[];
  softwareGoals: sectorGoalWeightage[];
  manufacturingGoals: sectorGoalWeightage[];

  ngOnInit() {
    //parameters details
    this.goals = this.esgDataService.getAllSectorGoalWeightage();
    this.pharmaGoals = this.getGoalsBySector(1);
    this.softwareGoals = this.getGoalsBySector(2);
    this.manufacturingGoals = this.getGoalsBySector(5);
    // event subscription
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
        this.getGoalBasedCompanyScore();
      });
    // pharma by default.
    this.setData(0, 1, 2);
    this.getGoalBasedCompanyScore();
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

    this.companyData1 = this.esgDataService.transformInputDataToDisplayModel(
      this.localStorageService.getCompanyDataFromLocalStorageById(
        this.companyInput1.companyId));

    this.companyData2 = this.esgDataService.transformInputDataToDisplayModel(
      this.localStorageService.getCompanyDataFromLocalStorageById(
        this.companyInput2.companyId));

    this.companyData3 = this.esgDataService.transformInputDataToDisplayModel(
      this.localStorageService.getCompanyDataFromLocalStorageById(
        this.companyInput3.companyId));     
  }

  getGoalBasedCompanyScore(): void {
    this.company1ParamRating = this.calcAvailableFactorRatings(this.companyData1);
    this.company2ParamRating = this.calcAvailableFactorRatings(this.companyData2);
    this.company3ParamRating = this.calcAvailableFactorRatings(this.companyData3);
  }

  calcAvailableFactorRatings(companyData: esgInputData): ParamRating[] {
    let result: ParamRating[] = [];
    let sector = companyData.sector;
    let params = sector.sectorId == 1 ? this.pharmaGoals : sector.sectorId == 2 ? this.softwareGoals : this.manufacturingGoals;
    params.forEach(x => {
      // expecting length=3 for each parameters, 1 for each provider.
      let goalsData = this.companyData1.esgFactorScores.filter(y =>
        y.sectorGoalWeightage.sdg_Goal_Description.sdgGoalDescriptionName ===
        x.sdg_Goal_Description.sdgGoalDescriptionName); 
      let score = 0;
      let total = 0;
      goalsData.forEach(z => {
        // here we consider weightage
        score = score + z.esgScore.esgScoreValue * z.sectorGoalWeightage.weightage;
        total = 100;
      });
      var entry = new ParamRating();
      entry.parameter = x.sdg_Goal_Description.sdg_Goal.sdgGoalName + ' : ' + x.sdg_Goal_Description.sdgGoalDescriptionName;
      entry.score = (score / goalsData.length);
      entry.total = total;
      result.push(entry);
    });
    return result.filter(x => !isNaN(x.score)); //excluding non-applicable goals.
  }

  ngOnDestroy() {
    this.companyChangeSubs.unsubscribe();
  }

  getGoalsBySector(sectorId: number) {
    return this.goals.filter(x => x.sector.sectorId == sectorId).sort();
  }  
}
