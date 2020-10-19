import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { gaugeParameters } from '../models/gaugeParameters';

@Component({
  selector: 'app-esg-gauge',
  templateUrl: './esg-gauge.component.html',
  styleUrls: ['./esg-gauge.component.css']
})
export class EsgGaugeComponent implements OnInit, OnChanges {
  @Input() gaugeParams: gaugeParameters;
  guageParam: gaugeParameters;
  constructor() { }

  ngOnInit() {    
    this.guageParam = this.gaugeParams;
  }

  ngOnChanges() {
    this.guageParam = this.gaugeParams;
  }

}


