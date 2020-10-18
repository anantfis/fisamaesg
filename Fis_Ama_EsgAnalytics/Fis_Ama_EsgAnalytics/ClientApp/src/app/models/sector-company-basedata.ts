import { sector, sectorGoalWeightage } from "./sector";
import { company } from "./company";
import { esgScore } from "./score";
import { provider } from "./provider";

export class SectorCompanyParameterBaseData {
  constructor(sector: sector,
    company: company,
    totalEsgScore: number,
    e_sector_region_score: number[],
    s_sector_region_score: number[],
    g_sector_region_score: number[],
    parametersRatings: ParametersRating[]) {
    sector: sector;
    company: company;
    totalEsgScore: totalEsgScore;
    e_sector_region_score: e_sector_region_score;
    s_sector_region_score: s_sector_region_score;
    g_sector_region_score: g_sector_region_score;
    parametersRating: parametersRatings;   
  }
  sector: sector;
  company: company;
  totalEsgScore: number;
  e_sector_region_score: number[];
  s_sector_region_score: number[];
  g_sector_region_score: number[];
  parametersRating: ParametersRating[];  
}

export class ParametersRating {
  sectorGoalWeightage: sectorGoalWeightage;
  esgScore: esgScore;
  provider: provider;
}




