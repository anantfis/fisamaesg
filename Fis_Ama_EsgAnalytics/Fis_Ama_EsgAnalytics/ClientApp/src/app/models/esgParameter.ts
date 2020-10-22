import { sdgGoalDescription } from "./sdgGoals";

export class esgParameter {
  esgParameterId: number;
  esgParameterName: string;
  sdg_Goal_Description: sdgGoalDescription;
}

export class ParamRating {
  parameter: string;
  score: number;
  total: number;
}
