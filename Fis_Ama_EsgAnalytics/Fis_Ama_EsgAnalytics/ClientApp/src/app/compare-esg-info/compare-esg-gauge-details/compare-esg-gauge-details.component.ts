import { Component, OnInit, Input } from '@angular/core';
import { company } from '../../models/company';
import { EsgDataService } from '../../service/esg-data.service';
import { gaugeParameters } from '../../models/gaugeParameters';
import { esgInputData } from '../../models/esgInputData';
import { CommunicationService } from '../../service/communication.service';

@Component({
  selector: 'app-compare-esg-gauge-details',
  templateUrl: './compare-esg-gauge-details.component.html',
  styleUrls: ['./compare-esg-gauge-details.component.css']
})
export class CompareEsgGaugeDetailsComponent implements OnInit {
  constructor(private esgDataService: EsgDataService, private communicationService: CommunicationService) { }
  netScoreGaugeCompany1: gaugeParameters;
  netScoreGaugeCompany2: gaugeParameters;
  netScoreGaugeCompany3: gaugeParameters;
  companyInput1: company;
  companyInput2: company;
  companyInput3: company;
  companyData1: esgInputData;
  companyData2: esgInputData;
  companyData3: esgInputData;
  canvaswidth: number = 275;
  needleupdatespeed: number = 2000;
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

  calculateNetAverage(firmData: esgInputData): number {
    return (firmData.goalBasedScore.goal1 +
      firmData.goalBasedScore.goal2 +
      firmData.goalBasedScore.goal3 +
      firmData.goalBasedScore.goal4 +
      firmData.goalBasedScore.goal5 +
      firmData.goalBasedScore.goal6 +
      firmData.goalBasedScore.goal7 +
      firmData.goalBasedScore.goal8 +
      firmData.goalBasedScore.goal9 +
      firmData.goalBasedScore.goal10 +
      firmData.goalBasedScore.goal11 +
      firmData.goalBasedScore.goal12) / 12;

  }

  setData(x: number, y: number, z: number) {
    this.companyInput1 = this.esgDataService.getAllCompanies()[x];
    this.companyInput2 = this.esgDataService.getAllCompanies()[y];
    this.companyInput3 = this.esgDataService.getAllCompanies()[z];

    this.companyData1 = this.esgDataService.getAllEsgData().filter(y => y.company.companyId === this.companyInput1.companyId)[0];
    this.companyData2 = this.esgDataService.getAllEsgData().filter(y => y.company.companyId === this.companyInput2.companyId)[0];
    this.companyData3 = this.esgDataService.getAllEsgData().filter(y => y.company.companyId === this.companyInput3.companyId)[0];

    let score1 = this.calculateNetAverage(this.companyData1);
    let score2 = this.calculateNetAverage(this.companyData2);
    let score3 = this.calculateNetAverage(this.companyData3);

    this.netScoreGaugeCompany1 = {
      canvasWidth: this.canvaswidth,
      needleValue: score1,
      centralLabel: '',
      name: this.companyInput1.companyName + ' : ' + score1.toString().substring(0, 2) + '/100',
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
      name: this.companyInput2.companyName + ' : ' + score2.toString().substring(0, 2) + '/100',
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
      name: this.companyInput3.companyName + ' : ' + score3.toString().substring(0, 2) + '/100',
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
