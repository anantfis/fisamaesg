import { sdgGoalDescription } from "./sdgGoals";

export class sector {
  sectorId: number;
  sectorName: string;
}

export class sectorGoalWeightage{
  sector: sector;
  sdg_Goal_Description: sdgGoalDescription;
  weightage: number;
}
