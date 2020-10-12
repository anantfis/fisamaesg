import { Component, OnInit } from '@angular/core';
import { sectorGoalWeightage } from '../../models/sector';
import { EsgDataService } from '../../service/esg-data.service';

@Component({
  selector: 'app-sector-goal-weightage',
  templateUrl: './sector-goal-weightage.component.html',
  styleUrls: ['./sector-goal-weightage.component.css']
})
export class SectorGoalWeightageComponent implements OnInit {
  sectorwiseweightage: sectorGoalWeightage[] = [];
  headElements: string[] = ['Goal Description','Goal', 'Category', 'Weightage'];
  uniqueVendors: string[] = [];
  groupedData: any[] = [];
  constructor(private esgDataService:EsgDataService) { }

  ngOnInit() {
    this.sectorwiseweightage = this.esgDataService.getAllSectorGoalWeightage();
    this.sectorwiseweightage.forEach(x => {
      if (this.uniqueVendors.indexOf(x.sector.sectorName) === -1) {
        this.uniqueVendors.push(x.sector.sectorName);
      }
    });
    this.uniqueVendors.forEach(sec => {
      let secData = this.sectorwiseweightage.filter(x => x.sector.sectorName === sec);
      this.groupedData.push({ sec, secData });
    });    
  }
}
