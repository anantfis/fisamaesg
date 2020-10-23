import { Component, OnInit, Input } from '@angular/core';
import { company } from '../../models/company';
import { EsgDataService } from '../../service/esg-data.service';
import { gaugeParameters } from '../../models/gaugeParameters';
import { esgInputData } from '../../models/esgInputData';
import { CommunicationService } from '../../service/communication.service';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-compare-esg-gauge-details',
  templateUrl: './compare-esg-gauge-details.component.html',
  styleUrls: ['./compare-esg-gauge-details.component.css']
})
export class CompareEsgGaugeDetailsComponent implements OnInit {
  constructor(private esgDataService: EsgDataService,
    private communicationService: CommunicationService,
    private localStorageService: LocalStorageService) { }
  netScoreGaugeCompany1: gaugeParameters;
  netScoreGaugeCompany2: gaugeParameters;
  netScoreGaugeCompany3: gaugeParameters;
  companyInput1: company;
  companyInput2: company;
  companyInput3: company;
  companyData1: esgInputData;
  companyData2: esgInputData;
  companyData3: esgInputData;
  canvaswidth: number = 300;
  needleupdatespeed: number = 2000;
  companyChangeSubs: any;
  ngOnInit() {
    //subscription.
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
    // pharma by default.
    this.setData(0, 1, 2); 
  }

  calculateNetAverage(firmData: esgInputData): number {
    // goals - 11 -> Pharma/Manufacturing, 8->S/W
    let goals: number = firmData.sector.sectorId == 1 ? 11 : firmData.sector.sectorId == 2 ? 8 : 11;
    let sum = 0;
    if (!isNaN(firmData.goalBasedScore.goal1))
      sum = sum + firmData.goalBasedScore.goal1;
    if (!isNaN(firmData.goalBasedScore.goal2))
      sum = sum + firmData.goalBasedScore.goal2;
    if (!isNaN(firmData.goalBasedScore.goal3))
      sum = sum + firmData.goalBasedScore.goal3;
    if (!isNaN(firmData.goalBasedScore.goal4))
      sum = sum + firmData.goalBasedScore.goal4;
    if (!isNaN(firmData.goalBasedScore.goal5))
      sum = sum + firmData.goalBasedScore.goal5;
    if (!isNaN(firmData.goalBasedScore.goal6))
      sum = sum + firmData.goalBasedScore.goal6;
    if (!isNaN(firmData.goalBasedScore.goal7))
      sum = sum + firmData.goalBasedScore.goal7;
    if (!isNaN(firmData.goalBasedScore.goal8))
      sum = sum + firmData.goalBasedScore.goal8;
    if (!isNaN(firmData.goalBasedScore.goal9))
      sum = sum + firmData.goalBasedScore.goal9;
    if (!isNaN(firmData.goalBasedScore.goal10))
      sum = sum + firmData.goalBasedScore.goal10;
    if (!isNaN(firmData.goalBasedScore.goal11))
      sum = sum + firmData.goalBasedScore.goal11;
    if (!isNaN(firmData.goalBasedScore.goal12))
      sum = sum + firmData.goalBasedScore.goal12;
    if (!isNaN(firmData.goalBasedScore.goal13))
      sum = sum + firmData.goalBasedScore.goal13;
    if (!isNaN(firmData.goalBasedScore.goal14))
      sum = sum + firmData.goalBasedScore.goal14;
    if (!isNaN(firmData.goalBasedScore.goal15))
      sum = sum + firmData.goalBasedScore.goal15;
    if (!isNaN(firmData.goalBasedScore.goal16))
      sum = sum + firmData.goalBasedScore.goal16;
    if (!isNaN(firmData.goalBasedScore.goal17))
      sum = sum + firmData.goalBasedScore.goal17;
    //return (sum / goals);
    //return sum*10;
    if (sum * 10 > 100)
      return 100;
    else
      return sum * 10;
  }

  setData(x: number, y: number, z: number) {
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

    let score1 = this.calculateNetAverage(this.companyData1);
    let score2 = this.calculateNetAverage(this.companyData2);
    let score3 = this.calculateNetAverage(this.companyData3);

    this.netScoreGaugeCompany1 = {
      canvasWidth: this.canvaswidth,
      needleValue: score1,
      centralLabel: '',
      name: this.companyInput1.companyName + ' : ' + score1.toString().substring(0, 4),
      bottomLabel: score1 >= 75 ? 'Low Risk' : score1 <= 35 ? 'High Risk' : 'Medium Risk',
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
    this.netScoreGaugeCompany2 = {
      canvasWidth: this.canvaswidth,
      needleValue: score2,
      centralLabel: '',
      name: this.companyInput2.companyName + ' : ' + score2.toString().substring(0, 4),
      bottomLabel: score2 >= 75 ? 'Low Risk' : score2 <= 35 ? 'High Risk' : 'Medium Risk',
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
    this.netScoreGaugeCompany3 = {
      canvasWidth: this.canvaswidth,
      needleValue: score3,
      centralLabel: '',
      name: this.companyInput3.companyName + ' : ' + score3.toString().substring(0, 4),
      bottomLabel: score3 >= 75 ? 'Low Risk' : score3 <= 35 ? 'High Risk' : 'Medium Risk',
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
}
