import { sector } from "./sector";
import { provider } from "./provider";
import { company } from "./company";
import { socialScore } from "./socialScore";
import { environmentalScore } from "./environmentalScore";
import { governanceScore } from "./governanceScore";
import { goalBasedScore } from "./goalBasedScore";

export class esgInputData {
  sector: sector;
  provider: provider;
  company: company;
  esgFactorScores: {
    environmentalScore: environmentalScore;
    socialScore: socialScore;
    governanceScore: governanceScore;
  }
  goalBasedScore: goalBasedScore;
  reportingDate: Date;
  reportingPeriod: string;
  financialYear: string;
  financialQuarter: string;
}
