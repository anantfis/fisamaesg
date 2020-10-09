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
  headElements: string[] = ['Sector Name', 'Goal Description','Goal', 'Category', 'Weightage'];

  constructor(private esgDataService:EsgDataService) { }

  ngOnInit() {
    this.sectorwiseweightage = this.esgDataService.getAllSectorGoalWeightage();
  }

}
