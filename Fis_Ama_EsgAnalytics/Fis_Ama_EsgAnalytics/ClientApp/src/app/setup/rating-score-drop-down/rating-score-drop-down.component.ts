import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() dataProvider: string;
  @Input() ratingValue: esgScore;
  @Output() valueChanged: EventEmitter<esgScore> = new EventEmitter<esgScore>();
  constructor(private esgDataService: EsgDataService) { }

  ngOnInit() {
    this.ratingsList = this.esgDataService.getAllEsgScores();
    this.ratingSelected = this.ratingsList.find(a => a.esgScoreId == this.ratingValue.esgScoreId);
  }

  onSelectionChange() {
    this.ratingValue = this.ratingSelected;
    this.valueChanged.emit(this.ratingValue);
  }
}
