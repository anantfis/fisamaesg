import { Injectable } from '@angular/core';
import { company } from '../models/company';
import { provider } from '../models/provider';
import { sector, sectorGoalWeightage } from '../models/sector';
import { esgInputData } from '../models/esgInputData';
import { Observable } from 'rxjs';
import { esgScore, preparednessScore, preparednessOpinion } from '../models/score';
import { esgCategory } from '../models/esgcategory';
import { sdgGoal, sdgGoalDescription } from '../models/sdgGoals';
import { esgParameter } from '../models/esgParameter';

@Injectable({
  providedIn: 'root'
})

export class EsgDataService {

  constructor() { }

  private companies: company[] = [
    { "companyId": 1, "companyName": "Lupin" },
    { "companyId": 2, "companyName": "Sun Pharma" },
    { "companyId": 3, "companyName": "Cipla" },
    { "companyId": 4, "companyName": "Infosys" },
    { "companyId": 5, "companyName": "Accenture" },
    { "companyId": 6, "companyName": "Cognizant" },
    { "companyId": 7, "companyName": "Unilever" },
    { "companyId": 8, "companyName": "P&G" },
    { "companyId": 9, "companyName": "HUL" },
    { "companyId": 10, "companyName": "GoAir" },
    { "companyId": 11, "companyName": "AirAsia" },
    { "companyId": 12, "companyName": "Vistara" },
  ];
  private providers: provider[] = [
    { "providerId": 1, "providerName": "CSRHub" },
    { "providerId": 2, "providerName": "Sustainalytics" },
    { "providerId": 3, "providerName": "Nasdaq" }
  ];
  private esgScores: esgScore[] = [
    { "esgScoreId": 1, "esgScoreDescription": "Strong", "esgScoreValue": 10 },
    { "esgScoreId": 2, "esgScoreDescription": "Good", "esgScoreValue": 7.5 },
    { "esgScoreId": 3, "esgScoreDescription": "Bad", "esgScoreValue": 5 },
  ];
  private preparednessScores: preparednessScore[] = [
    { "preparednessScoreId": 1, "preparednessScoreName": "Excellent", "preparednessScoreValue": 3 },
    { "preparednessScoreId": 2, "preparednessScoreName": "Good", "preparednessScoreValue": 2 },
    { "preparednessScoreId": 3, "preparednessScoreName": "Bad", "preparednessScoreValue": 1 },
  ];
  private preparednessOpinions: preparednessOpinion[] = [
    { "preparednessOpinionId": 1, "preparednessOpinionName": "Awareness"},
    { "preparednessOpinionId": 2, "preparednessOpinionName": "Assessment"},
    { "preparednessOpinionId": 3, "preparednessOpinionName": "Action"},
    { "preparednessOpinionId": 4, "preparednessOpinionName": "Culture"},
    { "preparednessOpinionId": 5, "preparednessOpinionName": "Decision Making" },
  ]
  private esgGoalCategories: esgCategory[] = [
    { "esgCategoryId": 1, "esgCategoryName": "Environment" },
    { "esgCategoryId": 2, "esgCategoryName": "Social" },
    { "esgCategoryId": 3, "esgCategoryName": "Governance" }
  ];
  private sdgGoals: sdgGoal[] = [
    { "sdgGoalId": 1, "sdgGoalName": "GOAL 1", "esg_Category": this.esgGoalCategories[1] },
    { "sdgGoalId": 2, "sdgGoalName": "GOAL 2", "esg_Category": this.esgGoalCategories[1] },
    { "sdgGoalId": 3, "sdgGoalName": "GOAL 3", "esg_Category": this.esgGoalCategories[1] },
    { "sdgGoalId": 4, "sdgGoalName": "GOAL 4", "esg_Category": this.esgGoalCategories[1] },
    { "sdgGoalId": 5, "sdgGoalName": "GOAL 5", "esg_Category": this.esgGoalCategories[1] },
    { "sdgGoalId": 6, "sdgGoalName": "GOAL 6", "esg_Category": this.esgGoalCategories[0] },
    { "sdgGoalId": 7, "sdgGoalName": "GOAL 7", "esg_Category": this.esgGoalCategories[0] },
    { "sdgGoalId": 8, "sdgGoalName": "GOAL 8", "esg_Category": this.esgGoalCategories[1] },
    { "sdgGoalId": 9, "sdgGoalName": "GOAL 9", "esg_Category": this.esgGoalCategories[1] },
    { "sdgGoalId": 10, "sdgGoalName": "GOAL 10", "esg_Category": this.esgGoalCategories[1] },
    { "sdgGoalId": 11, "sdgGoalName": "GOAL 11", "esg_Category": this.esgGoalCategories[1] },
    { "sdgGoalId": 12, "sdgGoalName": "GOAL 12", "esg_Category": this.esgGoalCategories[0] },
    { "sdgGoalId": 13, "sdgGoalName": "GOAL 13", "esg_Category": this.esgGoalCategories[0] },
    { "sdgGoalId": 14, "sdgGoalName": "GOAL 14", "esg_Category": this.esgGoalCategories[0] },
    { "sdgGoalId": 15, "sdgGoalName": "GOAL 15", "esg_Category": this.esgGoalCategories[0] },
    { "sdgGoalId": 16, "sdgGoalName": "GOAL 16", "esg_Category": this.esgGoalCategories[2] },
    { "sdgGoalId": 17, "sdgGoalName": "GOAL 17", "esg_Category": this.esgGoalCategories[2] }
  ]
  private sdgGoalDescriptions: sdgGoalDescription[] = [
    { "sdgGoalDescriptionId": 1, "sdgGoalDescriptionName": "No Poverty", "sdg_Goal": this.sdgGoals[0] },
    { "sdgGoalDescriptionId": 2, "sdgGoalDescriptionName": "Zero Hunger", "sdg_Goal": this.sdgGoals[1] },
    { "sdgGoalDescriptionId": 3, "sdgGoalDescriptionName": "Good Health and Well-being", "sdg_Goal": this.sdgGoals[2] },
    { "sdgGoalDescriptionId": 4, "sdgGoalDescriptionName": "Quality Education", "sdg_Goal": this.sdgGoals[3] },
    { "sdgGoalDescriptionId": 5, "sdgGoalDescriptionName": "Gender Equality", "sdg_Goal": this.sdgGoals[4] },
    { "sdgGoalDescriptionId": 6, "sdgGoalDescriptionName": "Clean Water and Sanitation", "sdg_Goal": this.sdgGoals[5] },
    { "sdgGoalDescriptionId": 7, "sdgGoalDescriptionName": "Affordable and Clean Energy", "sdg_Goal": this.sdgGoals[6] },
    { "sdgGoalDescriptionId": 8, "sdgGoalDescriptionName": "Decent Work and Economic Growth", "sdg_Goal": this.sdgGoals[7] },
    { "sdgGoalDescriptionId": 9, "sdgGoalDescriptionName": "Industry, Innovation and Infrastructure", "sdg_Goal": this.sdgGoals[8] },
    { "sdgGoalDescriptionId": 10, "sdgGoalDescriptionName": "Reduced Inequality", "sdg_Goal": this.sdgGoals[9] },
    { "sdgGoalDescriptionId": 11, "sdgGoalDescriptionName": "Sustainable Cities and Communities", "sdg_Goal": this.sdgGoals[10] },
    { "sdgGoalDescriptionId": 12, "sdgGoalDescriptionName": "Responsible Consumption and Production", "sdg_Goal": this.sdgGoals[11] },
    { "sdgGoalDescriptionId": 13, "sdgGoalDescriptionName": "Climate Action", "sdg_Goal": this.sdgGoals[12] },
    { "sdgGoalDescriptionId": 14, "sdgGoalDescriptionName": "Life Below Water", "sdg_Goal": this.sdgGoals[13] },
    { "sdgGoalDescriptionId": 15, "sdgGoalDescriptionName": "Life On Land", "sdg_Goal": this.sdgGoals[14] },
    { "sdgGoalDescriptionId": 16, "sdgGoalDescriptionName": "Peace and Justice Strong Institutions", "sdg_Goal": this.sdgGoals[15] },
    { "sdgGoalDescriptionId": 17, "sdgGoalDescriptionName": "Partnerships to achieve the Goal", "sdg_Goal": this.sdgGoals[16] }
  ];
  private sdgGoalParameters: esgParameter[] = [
    { "esgParameterId": 1, "esgParameterName": "Communities", "sdg_Goal_Description": this.sdgGoalDescriptions[0] },
    { "esgParameterId": 2, "esgParameterName": "Labor Management", "sdg_Goal_Description": this.sdgGoalDescriptions[0] },
    { "esgParameterId": 3, "esgParameterName": "Human Capital Development", "sdg_Goal_Description": this.sdgGoalDescriptions[1] },
    { "esgParameterId": 4, "esgParameterName": "Health & Safety", "sdg_Goal_Description": this.sdgGoalDescriptions[2] },
    { "esgParameterId": 5, "esgParameterName": "Opp’s in Nutrition & Health", "sdg_Goal_Description": this.sdgGoalDescriptions[2] },
    { "esgParameterId": 6, "esgParameterName": "Human Capital Development", "sdg_Goal_Description": this.sdgGoalDescriptions[3] },
    { "esgParameterId": 7, "esgParameterName": "Supply Chain Labor standards", "sdg_Goal_Description": this.sdgGoalDescriptions[3] },
    { "esgParameterId": 8, "esgParameterName": "WorkForce & Diversity ", "sdg_Goal_Description": this.sdgGoalDescriptions[4] },
    { "esgParameterId": 9, "esgParameterName": "water", "sdg_Goal_Description": this.sdgGoalDescriptions[5] },
    { "esgParameterId": 10, "esgParameterName": "Natural Resources", "sdg_Goal_Description": this.sdgGoalDescriptions[5] },
    { "esgParameterId": 11, "esgParameterName": "Water Stress", "sdg_Goal_Description": this.sdgGoalDescriptions[5] },
    { "esgParameterId": 12, "esgParameterName": "Green House Gases", "sdg_Goal_Description": this.sdgGoalDescriptions[6] },
    { "esgParameterId": 13, "esgParameterName": "Carbon Emissions", "sdg_Goal_Description": this.sdgGoalDescriptions[6] },
    { "esgParameterId": 14, "esgParameterName": "Financing Environmental impact", "sdg_Goal_Description": this.sdgGoalDescriptions[7] },
    { "esgParameterId": 15, "esgParameterName": "WorkForce & Diversity", "sdg_Goal_Description": this.sdgGoalDescriptions[7] },
    { "esgParameterId": 16, "esgParameterName": "Product Safety & Quality", "sdg_Goal_Description": this.sdgGoalDescriptions[8] },
    { "esgParameterId": 17, "esgParameterName": "Chemical Safety", "sdg_Goal_Description": this.sdgGoalDescriptions[8] },
    { "esgParameterId": 18, "esgParameterName": "Financial Product Safety", "sdg_Goal_Description": this.sdgGoalDescriptions[8] },
    { "esgParameterId": 19, "esgParameterName": "Electronic Waste", "sdg_Goal_Description": this.sdgGoalDescriptions[8] },
    { "esgParameterId": 20, "esgParameterName": "Privacy & Data Security", "sdg_Goal_Description": this.sdgGoalDescriptions[8] },
    { "esgParameterId": 21, "esgParameterName": "WorkForce & Diversity ", "sdg_Goal_Description": this.sdgGoalDescriptions[9] },
    { "esgParameterId": 22, "esgParameterName": "Access to Finance", "sdg_Goal_Description": this.sdgGoalDescriptions[10] },
    { "esgParameterId": 23, "esgParameterName": "Access to Health Care", "sdg_Goal_Description": this.sdgGoalDescriptions[10] },
    { "esgParameterId": 24, "esgParameterName": "Opportunities in Clean Tech", "sdg_Goal_Description": this.sdgGoalDescriptions[10] },
    { "esgParameterId": 25, "esgParameterName": "Opp’s in Renewable Energy", "sdg_Goal_Description": this.sdgGoalDescriptions[10] },
    { "esgParameterId": 26, "esgParameterName": "Opportunities in Green Building", "sdg_Goal_Description": this.sdgGoalDescriptions[10] },
    { "esgParameterId": 27, "esgParameterName": "Health & Demographic Risk", "sdg_Goal_Description": this.sdgGoalDescriptions[10] },
    { "esgParameterId": 28, "esgParameterName": "Responsible Investment", "sdg_Goal_Description": this.sdgGoalDescriptions[10] },
    { "esgParameterId": 29, "esgParameterName": "Raw Material Sourcing", "sdg_Goal_Description": this.sdgGoalDescriptions[11] },
    { "esgParameterId": 30, "esgParameterName": "Packaging Material & Waste", "sdg_Goal_Description": this.sdgGoalDescriptions[11] },
    { "esgParameterId": 31, "esgParameterName": "Pollution & Waste", "sdg_Goal_Description": this.sdgGoalDescriptions[11] },
    { "esgParameterId": 32, "esgParameterName": "Toxic Emissions & Waste", "sdg_Goal_Description": this.sdgGoalDescriptions[11] },
    { "esgParameterId": 33, "esgParameterName": "waste", "sdg_Goal_Description": this.sdgGoalDescriptions[11] },
    { "esgParameterId": 34, "esgParameterName": "Product Carbon Footprint", "sdg_Goal_Description": this.sdgGoalDescriptions[11] },
    { "esgParameterId": 35, "esgParameterName": "Climate Change Vulnerability", "sdg_Goal_Description": this.sdgGoalDescriptions[12] },
    { "esgParameterId": 36, "esgParameterName": "Climate Change", "sdg_Goal_Description": this.sdgGoalDescriptions[12] },
    { "esgParameterId": 37, "esgParameterName": "Environmental Opportunities", "sdg_Goal_Description": this.sdgGoalDescriptions[12] },
    { "esgParameterId": 38, "esgParameterName": "Water Stress", "sdg_Goal_Description": this.sdgGoalDescriptions[13] },
    { "esgParameterId": 39, "esgParameterName": "Natural Resources", "sdg_Goal_Description": this.sdgGoalDescriptions[13] },
    { "esgParameterId": 40, "esgParameterName": "Land Use", "sdg_Goal_Description": this.sdgGoalDescriptions[14] },
    { "esgParameterId": 41, "esgParameterName": "Biodiversity & Land Use", "sdg_Goal_Description": this.sdgGoalDescriptions[14] },
    { "esgParameterId": 42, "esgParameterName": "Toxic Emissions & Waste", "sdg_Goal_Description": this.sdgGoalDescriptions[14] },
    { "esgParameterId": 43, "esgParameterName": "Ownership", "sdg_Goal_Description": this.sdgGoalDescriptions[15] },
    { "esgParameterId": 44, "esgParameterName": "Accounting", "sdg_Goal_Description": this.sdgGoalDescriptions[15] },
    { "esgParameterId": 45, "esgParameterName": "Code and Values", "sdg_Goal_Description": this.sdgGoalDescriptions[15] },
    { "esgParameterId": 46, "esgParameterName": "Business Ethics", "sdg_Goal_Description": this.sdgGoalDescriptions[15] },
    { "esgParameterId": 47, "esgParameterName": "Board", "sdg_Goal_Description": this.sdgGoalDescriptions[15] },
    { "esgParameterId": 48, "esgParameterName": "Pay", "sdg_Goal_Description": this.sdgGoalDescriptions[15] },
    { "esgParameterId": 49, "esgParameterName": "Corporate Governance", "sdg_Goal_Description": this.sdgGoalDescriptions[15] },
    { "esgParameterId": 50, "esgParameterName": "Transparency and Reporting", "sdg_Goal_Description": this.sdgGoalDescriptions[16] },
    { "esgParameterId": 51, "esgParameterName": "Cyberrisks and Systems", "sdg_Goal_Description": this.sdgGoalDescriptions[16] },
    { "esgParameterId": 52, "esgParameterName": "Corporate Behavior", "sdg_Goal_Description": this.sdgGoalDescriptions[16] },
    { "esgParameterId": 53, "esgParameterName": "Tax Transparency", "sdg_Goal_Description": this.sdgGoalDescriptions[16] },
    { "esgParameterId": 54, "esgParameterName": "Corruption & Instability", "sdg_Goal_Description": this.sdgGoalDescriptions[16] },
    { "esgParameterId": 55, "esgParameterName": "Financial System Insta", "sdg_Goal_Description": this.sdgGoalDescriptions[16] },
    { "esgParameterId": 56, "esgParameterName": "Corporate Behavior", "sdg_Goal_Description": this.sdgGoalDescriptions[16] },
    { "esgParameterId": 57, "esgParameterName": "Structure and Oversight", "sdg_Goal_Description": this.sdgGoalDescriptions[16] },
    { "esgParameterId": 58, "esgParameterName": "Anti-Competitive Practices", "sdg_Goal_Description": this.sdgGoalDescriptions[16] }

  ];
  private sectors: sector[] = [
    { "sectorId": 1, "sectorName": "Pharma" },
    { "sectorId": 2, "sectorName": "Software" },
    { "sectorId": 3, "sectorName": "FMCG" },
    { "sectorId": 4, "sectorName": "Aviation" },
    { "sectorId": 5, "sectorName": "Manufacturing" }
  ];
  private sectorGoalWeightage: sectorGoalWeightage[] = [
    { "sector": this.sectors[4], "sdg_Goal_Description": this.sdgGoalDescriptions[0], "weightage": 8 },
    { "sector": this.sectors[4], "sdg_Goal_Description": this.sdgGoalDescriptions[2], "weightage": 8 },
    { "sector": this.sectors[4], "sdg_Goal_Description": this.sdgGoalDescriptions[4], "weightage": 8 },
    { "sector": this.sectors[4], "sdg_Goal_Description": this.sdgGoalDescriptions[5], "weightage": 8 },
    { "sector": this.sectors[4], "sdg_Goal_Description": this.sdgGoalDescriptions[6], "weightage": 8 },
    { "sector": this.sectors[4], "sdg_Goal_Description": this.sdgGoalDescriptions[8], "weightage": 7 },
    { "sector": this.sectors[4], "sdg_Goal_Description": this.sdgGoalDescriptions[11], "weightage": 7 },
    { "sector": this.sectors[4], "sdg_Goal_Description": this.sdgGoalDescriptions[12], "weightage": 8 },
    { "sector": this.sectors[4], "sdg_Goal_Description": this.sdgGoalDescriptions[14], "weightage": 8 },
    { "sector": this.sectors[4], "sdg_Goal_Description": this.sdgGoalDescriptions[15], "weightage": 15 },
    { "sector": this.sectors[4], "sdg_Goal_Description": this.sdgGoalDescriptions[16], "weightage": 15 },

    { "sector": this.sectors[1], "sdg_Goal_Description": this.sdgGoalDescriptions[4], "weightage": 10 },
    { "sector": this.sectors[1], "sdg_Goal_Description": this.sdgGoalDescriptions[2], "weightage": 10 },
    { "sector": this.sectors[1], "sdg_Goal_Description": this.sdgGoalDescriptions[5], "weightage": 10 },
    { "sector": this.sectors[1], "sdg_Goal_Description": this.sdgGoalDescriptions[8], "weightage": 15 },
    { "sector": this.sectors[1], "sdg_Goal_Description": this.sdgGoalDescriptions[11], "weightage": 15 },
    { "sector": this.sectors[1], "sdg_Goal_Description": this.sdgGoalDescriptions[15], "weightage": 15 },
    { "sector": this.sectors[1], "sdg_Goal_Description": this.sdgGoalDescriptions[16], "weightage": 15 },
    { "sector": this.sectors[1], "sdg_Goal_Description": this.sdgGoalDescriptions[6], "weightage": 10 },

  ];

  private esgData1: esgInputData = {
    sector: this.sectors[0],
    provider: this.providers[0],
    company: this.companies[0],
    esgFactorScores: {
      environmentalScore: {
        energyAndClimateChange: 66,
        environmentPolicyAndReporting: 62,
        resourceManagement: 67,
        greenhouseGases: 68,
        waterResources: 65,
        landUsage: 64,
        wasteManagement: 62
      },
      socialScore: {
        safeManagement: 72,
        workforceDiversity: 75,
        customerEngagement: 78,
        communities: 80,
        humanRightAndSupplyChain: 74
      },
      governanceScore: {
        board: 90,
        transparencyAndReporting: 92,
        leadershipEthics: 94,
        structureAndOversights: 96,
        codeAndValues: 98,
        cyberrisksAndSystems: 91,
        generalFactors: 93
      }
    },
    goalBasedScore: {
      goal1: 68,
      goal2: 69,
      goal3: 74,
      goal4: 76,
      goal5: 80,
      goal6: 85,
      goal7: 92,
      goal8: 96,
      goal9: 45,
      goal10: 56,
      goal11: 61,
      goal12: 81
    },
    reportingDate: null,
    reportingPeriod: '2020 Q3',
    financialYear: 'FY20-21',
    financialQuarter: 'Q3',
  }
  private esgData2: esgInputData = {
    sector: this.sectors[0],
    provider: this.providers[0],
    company: this.companies[1],
    esgFactorScores: {
      environmentalScore: {
        energyAndClimateChange: 66,
        environmentPolicyAndReporting: 62,
        resourceManagement: 67,
        greenhouseGases: 68,
        waterResources: 65,
        landUsage: 64,
        wasteManagement: 62
      },
      socialScore: {
        safeManagement: 72,
        workforceDiversity: 75,
        customerEngagement: 78,
        communities: 80,
        humanRightAndSupplyChain: 74
      },
      governanceScore: {
        board: 90,
        transparencyAndReporting: 92,
        leadershipEthics: 94,
        structureAndOversights: 96,
        codeAndValues: 98,
        cyberrisksAndSystems: 91,
        generalFactors: 93
      }
    },
    goalBasedScore: {
      goal1: 68,
      goal2: 69,
      goal3: 74,
      goal4: 76,
      goal5: 80,
      goal6: 85,
      goal7: 92,
      goal8: 96,
      goal9: 45,
      goal10: 56,
      goal11: 61,
      goal12: 81
    },
    reportingDate: null,
    reportingPeriod: '2020 Q3',
    financialYear: 'FY20-21',
    financialQuarter: 'Q3',
  }
  private esgData3: esgInputData = {
    sector: this.sectors[0],
    provider: this.providers[0],
    company: this.companies[2],
    esgFactorScores: {
      environmentalScore: {
        energyAndClimateChange: 66,
        environmentPolicyAndReporting: 62,
        resourceManagement: 67,
        greenhouseGases: 68,
        waterResources: 65,
        landUsage: 64,
        wasteManagement: 62
      },
      socialScore: {
        safeManagement: 72,
        workforceDiversity: 75,
        customerEngagement: 78,
        communities: 80,
        humanRightAndSupplyChain: 74
      },
      governanceScore: {
        board: 90,
        transparencyAndReporting: 92,
        leadershipEthics: 94,
        structureAndOversights: 96,
        codeAndValues: 98,
        cyberrisksAndSystems: 91,
        generalFactors: 93
      }
    },
    goalBasedScore: {
      goal1: 68,
      goal2: 69,
      goal3: 74,
      goal4: 76,
      goal5: 80,
      goal6: 85,
      goal7: 92,
      goal8: 96,
      goal9: 45,
      goal10: 56,
      goal11: 61,
      goal12: 81
    },
    reportingDate: null,
    reportingPeriod: '2020 Q3',
    financialYear: 'FY20-21',
    financialQuarter: 'Q3',
  }
  private esgData4: esgInputData = {
    sector: this.sectors[1],
    provider: this.providers[0],
    company: this.companies[3],
    esgFactorScores: {
      environmentalScore: {
        energyAndClimateChange: 66,
        environmentPolicyAndReporting: 62,
        resourceManagement: 67,
        greenhouseGases: 68,
        waterResources: 65,
        landUsage: 64,
        wasteManagement: 62
      },
      socialScore: {
        safeManagement: 72,
        workforceDiversity: 75,
        customerEngagement: 78,
        communities: 80,
        humanRightAndSupplyChain: 74
      },
      governanceScore: {
        board: 90,
        transparencyAndReporting: 92,
        leadershipEthics: 94,
        structureAndOversights: 96,
        codeAndValues: 98,
        cyberrisksAndSystems: 91,
        generalFactors: 93
      }
    },
    goalBasedScore: {
      goal1: 68,
      goal2: 69,
      goal3: 74,
      goal4: 76,
      goal5: 80,
      goal6: 85,
      goal7: 92,
      goal8: 96,
      goal9: 45,
      goal10: 56,
      goal11: 61,
      goal12: 81
    },
    reportingDate: null,
    reportingPeriod: '2020 Q3',
    financialYear: 'FY20-21',
    financialQuarter: 'Q3',
  }
  private esgData5: esgInputData = {
    sector: this.sectors[1],
    provider: this.providers[0],
    company: this.companies[4],
    esgFactorScores: {
      environmentalScore: {
        energyAndClimateChange: 66,
        environmentPolicyAndReporting: 62,
        resourceManagement: 67,
        greenhouseGases: 68,
        waterResources: 65,
        landUsage: 64,
        wasteManagement: 62
      },
      socialScore: {
        safeManagement: 72,
        workforceDiversity: 75,
        customerEngagement: 78,
        communities: 80,
        humanRightAndSupplyChain: 74
      },
      governanceScore: {
        board: 90,
        transparencyAndReporting: 92,
        leadershipEthics: 94,
        structureAndOversights: 96,
        codeAndValues: 98,
        cyberrisksAndSystems: 91,
        generalFactors: 93
      }
    },
    goalBasedScore: {
      goal1: 68,
      goal2: 69,
      goal3: 74,
      goal4: 76,
      goal5: 80,
      goal6: 85,
      goal7: 92,
      goal8: 96,
      goal9: 45,
      goal10: 56,
      goal11: 61,
      goal12: 81
    },
    reportingDate: null,
    reportingPeriod: '2020 Q3',
    financialYear: 'FY20-21',
    financialQuarter: 'Q3',
  }
  private esgData6: esgInputData = {
    sector: this.sectors[1],
    provider: this.providers[0],
    company: this.companies[5],
    esgFactorScores: {
      environmentalScore: {
        energyAndClimateChange: 66,
        environmentPolicyAndReporting: 62,
        resourceManagement: 67,
        greenhouseGases: 68,
        waterResources: 65,
        landUsage: 64,
        wasteManagement: 62
      },
      socialScore: {
        safeManagement: 72,
        workforceDiversity: 75,
        customerEngagement: 78,
        communities: 80,
        humanRightAndSupplyChain: 74
      },
      governanceScore: {
        board: 90,
        transparencyAndReporting: 92,
        leadershipEthics: 94,
        structureAndOversights: 96,
        codeAndValues: 98,
        cyberrisksAndSystems: 91,
        generalFactors: 93
      }
    },
    goalBasedScore: {
      goal1: 68,
      goal2: 69,
      goal3: 74,
      goal4: 76,
      goal5: 80,
      goal6: 85,
      goal7: 92,
      goal8: 96,
      goal9: 45,
      goal10: 56,
      goal11: 61,
      goal12: 81
    },
    reportingDate: null,
    reportingPeriod: '2020 Q3',
    financialYear: 'FY20-21',
    financialQuarter: 'Q3',
  }
  private esgData7: esgInputData = {
    sector: this.sectors[2],
    provider: this.providers[0],
    company: this.companies[6],
    esgFactorScores: {
      environmentalScore: {
        energyAndClimateChange: 66,
        environmentPolicyAndReporting: 62,
        resourceManagement: 67,
        greenhouseGases: 68,
        waterResources: 65,
        landUsage: 64,
        wasteManagement: 62
      },
      socialScore: {
        safeManagement: 72,
        workforceDiversity: 75,
        customerEngagement: 78,
        communities: 80,
        humanRightAndSupplyChain: 74
      },
      governanceScore: {
        board: 90,
        transparencyAndReporting: 92,
        leadershipEthics: 94,
        structureAndOversights: 96,
        codeAndValues: 98,
        cyberrisksAndSystems: 91,
        generalFactors: 93
      }
    },
    goalBasedScore: {
      goal1: 68,
      goal2: 69,
      goal3: 74,
      goal4: 76,
      goal5: 80,
      goal6: 85,
      goal7: 92,
      goal8: 96,
      goal9: 45,
      goal10: 56,
      goal11: 61,
      goal12: 81
    },
    reportingDate: null,
    reportingPeriod: '2020 Q3',
    financialYear: 'FY20-21',
    financialQuarter: 'Q3',
  }
  private esgData8: esgInputData = {
    sector: this.sectors[2],
    provider: this.providers[0],
    company: this.companies[7],
    esgFactorScores: {
      environmentalScore: {
        energyAndClimateChange: 66,
        environmentPolicyAndReporting: 62,
        resourceManagement: 67,
        greenhouseGases: 68,
        waterResources: 65,
        landUsage: 64,
        wasteManagement: 62
      },
      socialScore: {
        safeManagement: 72,
        workforceDiversity: 75,
        customerEngagement: 78,
        communities: 80,
        humanRightAndSupplyChain: 74
      },
      governanceScore: {
        board: 90,
        transparencyAndReporting: 92,
        leadershipEthics: 94,
        structureAndOversights: 96,
        codeAndValues: 98,
        cyberrisksAndSystems: 91,
        generalFactors: 93
      }
    },
    goalBasedScore: {
      goal1: 68,
      goal2: 69,
      goal3: 74,
      goal4: 76,
      goal5: 80,
      goal6: 85,
      goal7: 92,
      goal8: 96,
      goal9: 45,
      goal10: 56,
      goal11: 61,
      goal12: 81
    },
    reportingDate: null,
    reportingPeriod: '2020 Q3',
    financialYear: 'FY20-21',
    financialQuarter: 'Q3',
  }
  private esgData9: esgInputData = {
    sector: this.sectors[2],
    provider: this.providers[0],
    company: this.companies[8],
    esgFactorScores: {
      environmentalScore: {
        energyAndClimateChange: 66,
        environmentPolicyAndReporting: 62,
        resourceManagement: 67,
        greenhouseGases: 68,
        waterResources: 65,
        landUsage: 64,
        wasteManagement: 62
      },
      socialScore: {
        safeManagement: 72,
        workforceDiversity: 75,
        customerEngagement: 78,
        communities: 80,
        humanRightAndSupplyChain: 74
      },
      governanceScore: {
        board: 90,
        transparencyAndReporting: 92,
        leadershipEthics: 94,
        structureAndOversights: 96,
        codeAndValues: 98,
        cyberrisksAndSystems: 91,
        generalFactors: 93
      }
    },
    goalBasedScore: {
      goal1: 68,
      goal2: 69,
      goal3: 74,
      goal4: 76,
      goal5: 80,
      goal6: 85,
      goal7: 92,
      goal8: 96,
      goal9: 45,
      goal10: 56,
      goal11: 61,
      goal12: 81
    },
    reportingDate: null,
    reportingPeriod: '2020 Q3',
    financialYear: 'FY20-21',
    financialQuarter: 'Q3',
  }
  private esgData10: esgInputData = {
    sector: this.sectors[3],
    provider: this.providers[0],
    company: this.companies[9],
    esgFactorScores: {
      environmentalScore: {
        energyAndClimateChange: 66,
        environmentPolicyAndReporting: 62,
        resourceManagement: 67,
        greenhouseGases: 68,
        waterResources: 65,
        landUsage: 64,
        wasteManagement: 62
      },
      socialScore: {
        safeManagement: 72,
        workforceDiversity: 75,
        customerEngagement: 78,
        communities: 80,
        humanRightAndSupplyChain: 74
      },
      governanceScore: {
        board: 90,
        transparencyAndReporting: 92,
        leadershipEthics: 94,
        structureAndOversights: 96,
        codeAndValues: 98,
        cyberrisksAndSystems: 91,
        generalFactors: 93
      }
    },
    goalBasedScore: {
      goal1: 68,
      goal2: 69,
      goal3: 74,
      goal4: 76,
      goal5: 80,
      goal6: 85,
      goal7: 92,
      goal8: 96,
      goal9: 45,
      goal10: 56,
      goal11: 61,
      goal12: 81
    },
    reportingDate: null,
    reportingPeriod: '2020 Q3',
    financialYear: 'FY20-21',
    financialQuarter: 'Q3',
  }
  private esgData11: esgInputData = {
    sector: this.sectors[3],
    provider: this.providers[0],
    company: this.companies[10],
    esgFactorScores: {
      environmentalScore: {
        energyAndClimateChange: 66,
        environmentPolicyAndReporting: 62,
        resourceManagement: 67,
        greenhouseGases: 68,
        waterResources: 65,
        landUsage: 64,
        wasteManagement: 62
      },
      socialScore: {
        safeManagement: 72,
        workforceDiversity: 75,
        customerEngagement: 78,
        communities: 80,
        humanRightAndSupplyChain: 74
      },
      governanceScore: {
        board: 90,
        transparencyAndReporting: 92,
        leadershipEthics: 94,
        structureAndOversights: 96,
        codeAndValues: 98,
        cyberrisksAndSystems: 91,
        generalFactors: 93
      }
    },
    goalBasedScore: {
      goal1: 68,
      goal2: 69,
      goal3: 74,
      goal4: 76,
      goal5: 80,
      goal6: 85,
      goal7: 92,
      goal8: 96,
      goal9: 45,
      goal10: 56,
      goal11: 61,
      goal12: 81
    },
    reportingDate: null,
    reportingPeriod: '2020 Q3',
    financialYear: 'FY20-21',
    financialQuarter: 'Q3',
  }
  private esgData12: esgInputData = {
    sector: this.sectors[3],
    provider: this.providers[0],
    company: this.companies[11],
    esgFactorScores: {
      environmentalScore: {
        energyAndClimateChange: 66,
        environmentPolicyAndReporting: 62,
        resourceManagement: 67,
        greenhouseGases: 68,
        waterResources: 65,
        landUsage: 64,
        wasteManagement: 62
      },
      socialScore: {
        safeManagement: 72,
        workforceDiversity: 75,
        customerEngagement: 78,
        communities: 80,
        humanRightAndSupplyChain: 74
      },
      governanceScore: {
        board: 90,
        transparencyAndReporting: 92,
        leadershipEthics: 94,
        structureAndOversights: 96,
        codeAndValues: 98,
        cyberrisksAndSystems: 91,
        generalFactors: 93
      }
    },
    goalBasedScore: {
      goal1: 68,
      goal2: 69,
      goal3: 74,
      goal4: 76,
      goal5: 80,
      goal6: 85,
      goal7: 92,
      goal8: 96,
      goal9: 45,
      goal10: 56,
      goal11: 61,
      goal12: 81
    },
    reportingDate: null,
    reportingPeriod: '2020 Q3',
    financialYear: 'FY20-21',
    financialQuarter: 'Q3',
  }
  private esgData: esgInputData[] = [this.esgData1, this.esgData2, this.esgData3, this.esgData4, this.esgData5, this.esgData6, this.esgData7, this.esgData8, this.esgData9, this.esgData10, this.esgData11, this.esgData12];

  public getAllCompanies(): company[] {
    return this.companies;
  }

  public getAllProviders(): provider[] {
    return this.providers;
  }

  public getAllSectors(): sector[] {
    return this.sectors;
  }

  public getAllEsgData(): esgInputData[] {
    return this.esgData;
  }

  public getAllSdgGoalParameters(): esgParameter[] {
    return this.sdgGoalParameters;
  }

  public getAllSectorGoalWeightage(): sectorGoalWeightage[] {
    return this.sectorGoalWeightage;
  }

  public getAllSdgGoalDescriptions(): sdgGoalDescription[] {
    return this.sdgGoalDescriptions;
  }

  public getAllSdgGoals(): sdgGoal[] {
    return this.sdgGoals;
  }

  public getAllEsgGoalCategories(): esgCategory[] {
    return this.esgGoalCategories;
  }

  public getAllEsgScores(): esgScore[] {
    return this.esgScores;
  }

  public getAllPreparednessScores(): preparednessScore[] {
    return this.preparednessScores;
  }

  public getAllpreparednessOpinions(): preparednessOpinion[] {
    return this.preparednessOpinions;
  }
}
