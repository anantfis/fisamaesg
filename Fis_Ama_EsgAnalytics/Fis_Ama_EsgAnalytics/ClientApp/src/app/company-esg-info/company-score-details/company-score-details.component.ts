import { Component, OnInit, Input } from '@angular/core';
import { company } from '../../models/company';
import { esgInputData } from '../../models/esgInputData';
import { EsgDataService } from '../../service/esg-data.service';
import { CommunicationService } from '../../service/communication.service';
import { LocalStorageService } from '../../service/local-storage.service';
import { sectorGoalWeightage } from '../../models/sector';
import { ParamRating } from '../../models/esgParameter';

@Component({
  selector: 'app-company-score-details',
  templateUrl: './company-score-details.component.html',
  styleUrls: ['./company-score-details.component.css']
})
export class CompanyScoreDetailsComponent implements OnInit {
  companySelected: company;
  companyData: esgInputData;
  companyChangeSubs: any;

  e_score: number;
  s_score: number;
  g_score: number;
  esg_score: number;

  parameters: sectorGoalWeightage[];
  pharmaParams: sectorGoalWeightage[];
  softwareParams: sectorGoalWeightage[];
  manufacturingParams: sectorGoalWeightage[];

  constructor(private esgDataService: EsgDataService,
    private communicationService: CommunicationService,
    private localStorageService: LocalStorageService) { }

  ngOnInit() {
    //parameters details
    this.parameters = this.esgDataService.getAllSectorGoalWeightage();
    this.pharmaParams = this.getParametersBySector(1);
    this.softwareParams = this.getParametersBySector(2);
    this.manufacturingParams = this.getParametersBySector(5);
    // event subscription
    this.companyChangeSubs = this.communicationService.changeEmitted$.subscribe(
      message => {
        this.companySelected = message as company;
        this.companyData = this.esgDataService.transformInputDataToDisplayModel(
          this.localStorageService.getCompanyDataFromLocalStorageById(
            this.companySelected.companyId));
        this.calculateScore(this.companyData);
      });
    // first time select first company in Array : abbott
    this.companySelected = this.esgDataService.getAllCompanies()[0];
    this.companyData = this.esgDataService.transformInputDataToDisplayModel(
      this.localStorageService.getCompanyDataFromLocalStorageById(
        this.companySelected.companyId));
    this.calculateScore(this.companyData);
  }

  pickColor(score: number): string {
    if (score >= 75)
      return "assets/greendot.png";
    else if (score <= 35)
      return "assets/reddot.png";
    if (score > 35 && score < 75)
      return "assets/yellowdot.png";
  }

  calculateRisk(score: number): string {
    if (score >= 75)
      return "LOW";
    else if (score <= 35)
      return "HIGH";
    if (score > 35 && score < 75)
      return "MEDIUM";
  }

  ngOnDestroy() {
    this.companyChangeSubs.unsubscribe();
  }

  calculateScore(data: esgInputData): void {
    this.e_score = this.esgDataService.getESGScoreFromRatingsByCategoryId(data, 1);
    this.s_score = this.esgDataService.getESGScoreFromRatingsByCategoryId(data, 2);
    this.g_score = this.esgDataService.getESGScoreFromRatingsByCategoryId(data, 3);
    this.esg_score = (this.e_score + this.s_score + this.g_score) / 3;
  }

  availableFactorRatings(catId: number): any {
    let result: ParamRating[] = [];
    let goals = this.companyData.esgFactorScores.filter(x => x.sectorGoalWeightage.sdg_Goal_Description.sdg_Goal.esg_Category.esgCategoryId == catId);
    let sector = this.companyData.sector;
    let params = sector.sectorId == 1 ? this.pharmaParams : sector.sectorId == 2 ? this.softwareParams : this.manufacturingParams;
    //// we are not considering input scores inindividual parameter calculation score.
    ////let inputScore = catId == 1 ? (this.companyData.e_sector_region_score[0] + this.companyData.e_sector_region_score[1] + this.companyData.e_sector_region_score[2]) / 3 :
    ////                 catId == 2 ? (this.companyData.s_sector_region_score[0] + this.companyData.s_sector_region_score[1] + this.companyData.s_sector_region_score[2]) / 3 :
    ////                              (this.companyData.g_sector_region_score[0] + this.companyData.g_sector_region_score[1] + this.companyData.g_sector_region_score[2]) / 3;
    params.forEach(x => {
      // expecting length=3 for each parameters, 1 for each provider.
      let goalsData = goals.filter(y =>
        y.sectorGoalWeightage.sdg_Goal_Description.sdgGoalDescriptionName ===
        x.sdg_Goal_Description.sdgGoalDescriptionName);
      let score = 0;
      let total = 0;
      goalsData.forEach(z => {
        // no need to consider weigtage for E,S,G specific score. Required in Goal Based score.
        // score = score + z.esgScore.esgScoreValue * z.sectorGoalWeightage.weightage;
        score = score + z.esgScore.esgScoreValue;
        total = 100;
      });
      var entry = new ParamRating();
      entry.parameter = x.sdg_Goal_Description.sdgGoalDescriptionName;
      entry.score = (score / goalsData.length)*10;
      entry.total = total;
      result.push(entry);
    });
    return result.filter(x=> !isNaN(x.score));
  }

  getParametersBySector(sectorId: number) {
    return this.parameters.filter(x => x.sector.sectorId == sectorId);
  }
}
