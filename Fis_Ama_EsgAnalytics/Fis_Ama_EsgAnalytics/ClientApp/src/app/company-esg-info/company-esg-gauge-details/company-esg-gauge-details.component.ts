import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { company } from '../../models/company';
import { gaugeParameters } from '../../models/gaugeParameters';
import { EsgDataService } from '../../service/esg-data.service';
import { esgInputData } from '../../models/esgInputData';

@Component({
  selector: 'app-company-esg-gauge-details',
  templateUrl: './company-esg-gauge-details.component.html',
  styleUrls: ['./company-esg-gauge-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompanyEsgGaugeDetailsComponent implements OnInit {
  @Input() companySelected: company;

  constructor(private esgDataService: EsgDataService) { }
  netScoreGauge: gaugeParameters;
  e_ScoreGauge: gaugeParameters;
  s_ScoreGauge: gaugeParameters;
  g_ScoreGauge: gaugeParameters;
  companyInput: company;
  companyData: esgInputData;
  canvaswidth: number = 250;
  ngOnInit() {
    this.companySelected = this.esgDataService.getAllCompanies()[0];
    console.log('3. app-company-esg-gauge-details :' + this.companySelected.companyName)
    this.companyInput = this.esgDataService.getAllCompanies().filter(x => x.companyId === this.companySelected.companyId)[0];
    this.companyData = this.esgDataService.getAllEsgData().filter(y => y.company.companyId === this.companyInput.companyId)[0];
    this.netScoreGauge = {
      canvasWidth: this.canvaswidth,    
      needleValue: this.calculateNetAverage(),    
      centralLabel: '',    
      name: 'ESG Score: ' + this.calculateNetAverage().toString().substring(0,2) + '/100' ,   
      bottomLabel: this.calculateNetAverage() >= 75 ? 'Low Risk' : this.calculateNetAverage() <= 35 ? 'High Risk' : 'Medium Risk',
      options: {
        hasNeedle: true,
        needleColor: 'gray',
        needleUpdateSpeed: 10,
        arcColors: ['rgb(255, 84, 84)', 'rgb(239, 214, 19)', 'rgb(61, 204, 91)'],
        arcDelimiters: [35, 75],
        rangeLabel: ['0', '100'],
        needleStartValue: 0,
      }
    };
    this.e_ScoreGauge = {
      canvasWidth: this.canvaswidth,    
      needleValue: this.calculateEnvScoreAverage(),     
      centralLabel: '',    
      name: 'Environmental :' + this.calculateEnvScoreAverage().toString().substring(0, 2) + '/100' ,  
      bottomLabel: this.calculateEnvScoreAverage() >= 75 ? 'Low Risk' : this.calculateEnvScoreAverage() <=35 ? 'High Risk' : 'Medium Risk',    
      options: {
        hasNeedle: true,
        needleColor: 'gray',
        needleUpdateSpeed: 10,
        arcColors: ['rgb(255, 84, 84)', 'rgb(239, 214, 19)', 'rgb(61, 204, 91)'],
        arcDelimiters: [35, 75],
        rangeLabel: ['0', '100'],
        needleStartValue: 0,
      }
    };
    this.s_ScoreGauge = {
      canvasWidth: this.canvaswidth,    
      needleValue: this.calculateSocialScoreAverage(),
      centralLabel: '',    
      name: 'Social : ' + this.calculateSocialScoreAverage().toString().substring(0, 2) + '/100',   
      bottomLabel: this.calculateSocialScoreAverage() >= 75 ? 'Low Risk' : this.calculateSocialScoreAverage() <= 35 ? 'High Risk' : 'Medium Risk',
      options: {
        hasNeedle: true,
        needleColor: 'gray',
        needleUpdateSpeed: 10,
        arcColors: ['rgb(255, 84, 84)', 'rgb(239, 214, 19)', 'rgb(61, 204, 91)'],
        arcDelimiters: [35, 75],
        rangeLabel: ['0', '100'],
        needleStartValue: 0,
      }
    };
    this.g_ScoreGauge = {
      canvasWidth: this.canvaswidth,    
      needleValue: this.calculateGovScoreAverage(),     
      centralLabel: '',    
      name: 'Governance : ' + this.calculateGovScoreAverage().toString().substring(0, 2) + '/100',    
      bottomLabel: this.calculateGovScoreAverage() >= 75 ? 'Low Risk' : this.calculateGovScoreAverage() <= 35 ? 'High Risk' : 'Medium Risk',
      options: {
        hasNeedle: true,
        needleColor: 'gray',
        needleUpdateSpeed: 10,
        arcColors: ['rgb(255, 84, 84)', 'rgb(239, 214, 19)', 'rgb(61, 204, 91)'],
        arcDelimiters: [35, 75],
        rangeLabel: ['0', '100'],
        needleStartValue: 0,
      }
    };
  }

  calculateNetAverage(): number {
    return (this.calculateEnvScoreAverage() +
      this.calculateGovScoreAverage() +
      this.calculateSocialScoreAverage()) / 3;
  }

  calculateEnvScoreAverage(): number {
    return (this.companyData.esgFactorScores.environmentalScore.energyAndClimateChange +
      this.companyData.esgFactorScores.environmentalScore.environmentPolicyAndReporting +
      this.companyData.esgFactorScores.environmentalScore.landUsage +
      this.companyData.esgFactorScores.environmentalScore.greenhouseGases +
      this.companyData.esgFactorScores.environmentalScore.resourceManagement +
      this.companyData.esgFactorScores.environmentalScore.wasteManagement +
      this.companyData.esgFactorScores.environmentalScore.waterResources) / 7;
  }

  calculateSocialScoreAverage(): number {
    return (this.companyData.esgFactorScores.socialScore.communities +
      this.companyData.esgFactorScores.socialScore.customerEngagement +
      this.companyData.esgFactorScores.socialScore.humanRightAndSupplyChain +
      this.companyData.esgFactorScores.socialScore.safeManagement +
      this.companyData.esgFactorScores.socialScore.workforceDiversity) / 5;
  }

  calculateGovScoreAverage(): number {
    return (this.companyData.esgFactorScores.governanceScore.board +
      this.companyData.esgFactorScores.governanceScore.codeAndValues +
      this.companyData.esgFactorScores.governanceScore.cyberrisksAndSystems +
      this.companyData.esgFactorScores.governanceScore.generalFactors +
      this.companyData.esgFactorScores.governanceScore.leadershipEthics +
      this.companyData.esgFactorScores.governanceScore.structureAndOversights +
      this.companyData.esgFactorScores.governanceScore.transparencyAndReporting) / 7;
  }

}
