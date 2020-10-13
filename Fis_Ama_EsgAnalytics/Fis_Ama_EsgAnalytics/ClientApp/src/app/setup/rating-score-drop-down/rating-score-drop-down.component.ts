import { Component, OnInit } from '@angular/core';
import { EsgDataService } from '../../service/esg-data.service';
import { esgScore } from '../../models/score';

@Component({
  selector: 'app-rating-score-drop-down',
  templateUrl: './rating-score-drop-down.component.html',
  styleUrls: ['./rating-score-drop-down.component.css']
})
export class RatingScoreDropDownComponent implements OnInit {
  ratingsList: esgScore[];
  ratingSelected: esgScore;
  constructor(private esgDataService: EsgDataService) { }

  ngOnInit() {
    this.ratingsList = this.esgDataService.getAllEsgScores();
  }
}
