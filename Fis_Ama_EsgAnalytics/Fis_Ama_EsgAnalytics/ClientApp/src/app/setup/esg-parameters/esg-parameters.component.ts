import { Component, OnInit } from '@angular/core';
import { EsgDataService } from '../../service/esg-data.service';
import { esgParameter } from '../../models/esgParameter';

@Component({
  selector: 'app-esg-parameters',
  templateUrl: './esg-parameters.component.html',
  styleUrls: ['./esg-parameters.component.css']
})
export class EsgParametersComponent implements OnInit {
  allParameters: esgParameter[] = [];
  headElements: string[]=['Id', 'Parameters', 'Description', 'Category', 'SDG Goal']
  constructor(private esgDataService: EsgDataService) { }

  ngOnInit() {
    this.allParameters = this.esgDataService.getAllSdgGoalParameters();
  }

}
