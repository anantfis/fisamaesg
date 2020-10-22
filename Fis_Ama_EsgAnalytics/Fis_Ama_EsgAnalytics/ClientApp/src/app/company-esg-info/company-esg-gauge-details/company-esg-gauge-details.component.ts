import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { company } from '../../models/company';
import { gaugeParameters } from '../../models/gaugeParameters';
import { EsgDataService } from '../../service/esg-data.service';
import { esgInputData } from '../../models/esgInputData';
import { CommunicationService } from '../../service/communication.service';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-company-esg-gauge-details',
  templateUrl: './company-esg-gauge-details.component.html',
  styleUrls: ['./company-esg-gauge-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompanyEsgGaugeDetailsComponent implements OnInit {
  companySelected: company;

  constructor(private esgDataService: EsgDataService,
    private communicationService: CommunicationService,
  private localStorageService: LocalStorageService) { }

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
    this.companyData = this.esgDataService.transformInputDataToDisplayModel(
      this.localStorageService.getCompanyDataFromLocalStorageById(
        this.companySelected.companyId));
    this.netScoreGauge = {
      canvasWidth: this.canvaswidth,
      needleValue: this.calculateNetAverage(),
      centralLabel: '',
      name: 'ESG Score :' +  this.calculateNetAverage().toString().substring(0, 2) + '/100',
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
  }

  calculateNetAverage(): number {
    return (this.calculateEnvScoreAverage() +
      this.calculateGovScoreAverage() +
      this.calculateSocialScoreAverage()) / 3;
  }

  calculateEnvScoreAverage(): number {
    return this.esgDataService.getESGScoreFromRatingsByCategoryId(this.companyData, 1);
  }

  calculateSocialScoreAverage(): number {
    return this.esgDataService.getESGScoreFromRatingsByCategoryId(this.companyData, 2);
  }

  calculateGovScoreAverage(): number {
    return this.esgDataService.getESGScoreFromRatingsByCategoryId(this.companyData, 3);
  }

  ngOnDestroy() {
    this.companyChangeSubs.unsubscribe();
  }
}
