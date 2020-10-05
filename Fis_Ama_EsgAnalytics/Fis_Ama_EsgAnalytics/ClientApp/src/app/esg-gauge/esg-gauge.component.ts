import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esg-gauge',
  templateUrl: './esg-gauge.component.html',
  styleUrls: ['./esg-gauge.component.css']
})
export class EsgGaugeComponent implements OnInit {  

  public canvasWidth = 300    // size
  public needleValue = 90     // pointer points to
  public centralLabel = 'ESG' // text in centre
  public name = 'ESG Score'   // text above chart.
  public bottomLabel = '0'    // start value
  public options = {
    hasNeedle: true,
    needleColor: 'gray',
    needleUpdateSpeed: 10,
    arcColors: ['rgb(255, 84, 84)', 'rgb(239, 214, 19)', 'rgb(61, 204, 91)'],
    arcDelimiters: [30, 60],
    rangeLabel: ['0', '100'],
    needleStartValue: 0,
  }
  constructor() { }

  ngOnInit() {
  }

}


