import { sector } from "./sector";
import { provider } from "./provider";
import { company } from "./company";
import { goalBasedScore } from "./goalBasedScore";
import { ParametersRating } from "./sector-company-basedata";

export class esgInputData {
  sector: sector;
  provider: provider;
  company: company;
  esgFactorScores: ParametersRating[];
  goalBasedScore: goalBasedScore;
  e_sector_region_score: number[];
  s_sector_region_score: number[];
  g_sector_region_score: number[];
  reportingDate: Date;
  reportingPeriod: string;
  financialYear: string;
  financialQuarter: string;  
}
