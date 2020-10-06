export class gaugeParameters {
  canvasWidth: number;
  needleValue: number;
  centralLabel: string;
  name: string;
  bottomLabel: string;
  options: {
    hasNeedle: boolean,
    needleColor: string,
    needleUpdateSpeed: number,
    arcColors: {},
    arcDelimiters: {},
    rangeLabel: {},
    needleStartValue: number,
  };
}
