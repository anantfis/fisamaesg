import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { company } from '../../models/company';
import { gaugeParameters } from '../../models/gaugeParameters';
import { EsgDataService } from '../../service/esg-data.service';
import { esgInputData } from '../../models/esgInputData';
import { CommunicationService } from '../../service/communication.service';

@Component({
  selector: 'app-company-esg-gauge-details',
  templateUrl: './company-esg-gauge-details.component.html',
  styleUrls: ['./company-esg-gauge-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompanyEsgGaugeDetailsComponent implements OnInit {
  companySelected: company;

  constructor(private esgDataService: EsgDataService,
    private communicationService: CommunicationService) { }

  netScoreGauge: gaugeParameters;
  e_ScoreGauge: gaugeParameters;
  s_ScoreGauge: gaugeParameters;
  g_ScoreGauge: gaugeParameters;  
  companyData: esgInputData;
  canvaswidth: number = 250;
  needleupdatespeed: number = 2000;
  companyChangeSubs: any;

  ngOnInit() {
    this.companyChangeSubs = this.communicationService.changeEmitted$.subscribe(
      message => {
        this.netScoreGauge = new gaugeParameters();
        this.e_ScoreGauge = new gaugeParameters();
        this.s_ScoreGauge = new gaugeParameters();
        this.g_ScoreGauge = new gaugeParameters();
        this.companySelected = message as company;
        this.setupData();
      });
    this.companySelected = this.esgDataService.getAllCompanies()[0]; // first time select first company in Array : abbott
    this.setupData();
  }

  setupData(): void {
    this.companySelected = this.esgDataService.getAllCompanies().filter(x => x.companyId === this.companySelected.companyId)[0];
    this.companyData = this.esgDataService.getAllEsgData().filter(y => y.company.companyId === this.companySelected.companyId)[0];
    this.netScoreGauge = {
      canvasWidth: this.canvaswidth,
      needleValue: this.calculateNetAverage(),
      centralLabel: '',
      name: 'ESG Score: (Id:' + this.companyData.company.companyId + ') = ' + this.calculateNetAverage().toString().substring(0, 2) + '/100',
      bottomLabel: this.calculateNetAverage() >= 75 ? 'Low Risk' : this.calculateNetAverage() <= 35 ? 'High Risk' : 'Medium Risk',
      options: {
        hasNeedle: true,
        needleColor: 'gray',
        needleUpdateSpeed: this.needleupdatespeed,
        arcColors: ['rgb(255, 84, 84)', 'rgb(239, 214, 19)', 'rgb(61, 204, 91)'],
        arcDelimiters: [35, 75],
        rangeLabel: ['0', '100'],
        needleStartValue: 0,
      }
    };
    console.log(this.netScoreGauge);
    this.e_ScoreGauge = {
      canvasWidth: this.canvaswidth,
      needleValue: this.calculateEnvScoreAverage(),
      centralLabel: '',
      name: 'Environmental :' + this.calculateEnvScoreAverage().toString().substring(0, 2) + '/100',
      bottomLabel: this.calculateEnvScoreAverage() >= 75 ? 'Low Risk' : this.calculateEnvScoreAverage() <= 35 ? 'High Risk' : 'Medium Risk',
      options: {
        hasNeedle: true,
        needleColor: 'gray',
        needleUpdateSpeed: this.needleupdatespeed,
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
        needleUpdateSpeed: this.needleupdatespeed,
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
        needleUpdateSpeed: this.needleupdatespeed,
        arcColors: ['rgb(255, 84, 84)', 'rgb(239, 214, 19)', 'rgb(61, 204, 91)'],
        arcDelimiters: [35, 75],
        rangeLabel: ['0', '100'],
        needleStartValue: 0,
      }
    };
    //console.log(this.companyData);
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

  ngOnDestroy() {
    this.companyChangeSubs.unsubscribe();
  }
}
