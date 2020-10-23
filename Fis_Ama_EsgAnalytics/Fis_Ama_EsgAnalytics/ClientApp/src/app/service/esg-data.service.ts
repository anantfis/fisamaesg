import { Injectable } from '@angular/core';
import { company } from '../models/company';
import { provider } from '../models/provider';
import { sector, sectorGoalWeightage } from '../models/sector';
import { esgInputData } from '../models/esgInputData';
import { esgScore, preparednessScore, preparednessOpinion } from '../models/score';
import { esgCategory } from '../models/esgcategory';
import { sdgGoal, sdgGoalDescription } from '../models/sdgGoals';
import { esgParameter } from '../models/esgParameter';
import { SectorCompanyParameterBaseData, ParametersRating } from '../models/sector-company-basedata';
import { isNullOrUndefined } from 'util';
import { companyNameInStorage } from '../models/constants/companyNameInStorage';
import { goalBasedScore } from '../models/goalBasedScore';

@Injectable({
  providedIn: 'root'
})

export class EsgDataService {

  constructor() { }

  private companies: company[] = [
    { "companyId": 1, "companyName": "Abbott", storageName: companyNameInStorage.abbott },
    { "companyId": 2, "companyName": "Novartis", storageName: companyNameInStorage.novartis },
    { "companyId": 3, "companyName": "Cipla", storageName: companyNameInStorage.cipla },
    { "companyId": 4, "companyName": "Apple", storageName: companyNameInStorage.apple },
    { "companyId": 5, "companyName": "Accenture", storageName: companyNameInStorage.accenture },
    { "companyId": 6, "companyName": "Amazon", storageName: companyNameInStorage.amazon },
    { "companyId": 7, "companyName": "Tesla", storageName: companyNameInStorage.tesla },
    { "companyId": 8, "companyName": "Ford", storageName: companyNameInStorage.ford },
    { "companyId": 9, "companyName": "Coca Cola", storageName: companyNameInStorage.cocacola },
    { "companyId": 10, "companyName": "GoAir", storageName: companyNameInStorage.goair },
    { "companyId": 11, "companyName": "AirAsia", storageName: companyNameInStorage.airasia },
    { "companyId": 12, "companyName": "Vistara", storageName: companyNameInStorage.vistara },
  ];
  private providers: provider[] = [
    { "providerId": 1, "providerName": "MSCI" },
    { "providerId": 2, "providerName": "S&P500" },
    { "providerId": 3, "providerName": "CSRHub" },
    { "providerId": 4, "providerName": "Sustainalytics" },
  ];
  private esgScores: esgScore[] = [
    { "esgScoreId": 1, "esgScoreDescription": "Rating : Strong", "esgScoreValue": 10 },
    { "esgScoreId": 2, "esgScoreDescription": "Rating : Good", "esgScoreValue": 7.5 },
    { "esgScoreId": 3, "esgScoreDescription": "Rating : Weak", "esgScoreValue": 5.0 },
    { "esgScoreId": 4, "esgScoreDescription": "Rating : Bad", "esgScoreValue": 2.5 },
    { "esgScoreId": 5, "esgScoreDescription": "Rating : -NA-", "esgScoreValue": 0 },
    { "esgScoreId": 6, "esgScoreDescription": "Score  : 76 - 100", "esgScoreValue": 10 },
    { "esgScoreId": 7, "esgScoreDescription": "Score  : 51 - 75", "esgScoreValue": 7.5 },
    { "esgScoreId": 8, "esgScoreDescription": "Score  : 26 - 50", "esgScoreValue": 5.0 },
    { "esgScoreId": 9, "esgScoreDescription": "Score  : 00 - 25", "esgScoreValue": 2.5 },
  ];
  private preparednessScores: preparednessScore[] = [
    { "preparednessScoreId": 1, "preparednessScoreName": "Excellent", "preparednessScoreValue": 3 },
    { "preparednessScoreId": 2, "preparednessScoreName": "Good", "preparednessScoreValue": 2 },
    { "preparednessScoreId": 3, "preparednessScoreName": "Bad", "preparednessScoreValue": 1 },
  ];
  private preparednessOpinions: preparednessOpinion[] = [
    { "preparednessOpinionId": 1, "preparednessOpinionName": "Awareness" },
    { "preparednessOpinionId": 2, "preparednessOpinionName": "Assessment" },
    { "preparednessOpinionId": 3, "preparednessOpinionName": "Action" },
    { "preparednessOpinionId": 4, "preparednessOpinionName": "Culture" },
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
    // Manufacturing 
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

    //Pharma
    { "sector": this.sectors[0], "sdg_Goal_Description": this.sdgGoalDescriptions[0], "weightage": 8 },
    { "sector": this.sectors[0], "sdg_Goal_Description": this.sdgGoalDescriptions[2], "weightage": 8 },
    { "sector": this.sectors[0], "sdg_Goal_Description": this.sdgGoalDescriptions[4], "weightage": 8 },
    { "sector": this.sectors[0], "sdg_Goal_Description": this.sdgGoalDescriptions[5], "weightage": 8 },
    { "sector": this.sectors[0], "sdg_Goal_Description": this.sdgGoalDescriptions[6], "weightage": 8 },
    { "sector": this.sectors[0], "sdg_Goal_Description": this.sdgGoalDescriptions[8], "weightage": 7 },
    { "sector": this.sectors[0], "sdg_Goal_Description": this.sdgGoalDescriptions[11], "weightage": 7 },
    { "sector": this.sectors[0], "sdg_Goal_Description": this.sdgGoalDescriptions[12], "weightage": 8 },
    { "sector": this.sectors[0], "sdg_Goal_Description": this.sdgGoalDescriptions[14], "weightage": 8 },
    { "sector": this.sectors[0], "sdg_Goal_Description": this.sdgGoalDescriptions[15], "weightage": 15 },
    { "sector": this.sectors[0], "sdg_Goal_Description": this.sdgGoalDescriptions[16], "weightage": 15 },

    //Software
    { "sector": this.sectors[1], "sdg_Goal_Description": this.sdgGoalDescriptions[4], "weightage": 10 },
    { "sector": this.sectors[1], "sdg_Goal_Description": this.sdgGoalDescriptions[2], "weightage": 10 },
    { "sector": this.sectors[1], "sdg_Goal_Description": this.sdgGoalDescriptions[5], "weightage": 10 },
    { "sector": this.sectors[1], "sdg_Goal_Description": this.sdgGoalDescriptions[8], "weightage": 15 },
    { "sector": this.sectors[1], "sdg_Goal_Description": this.sdgGoalDescriptions[11], "weightage": 15 },
    { "sector": this.sectors[1], "sdg_Goal_Description": this.sdgGoalDescriptions[15], "weightage": 15 },
    { "sector": this.sectors[1], "sdg_Goal_Description": this.sdgGoalDescriptions[16], "weightage": 15 },
    { "sector": this.sectors[1], "sdg_Goal_Description": this.sdgGoalDescriptions[6], "weightage": 10 },

  ];


  private SectorCompanyParameterBaseData_abbott: SectorCompanyParameterBaseData = {
    sector: this.sectors[0],
    company: this.companies[0],
    totalEsgScore: 0,
    e_sector_region_score: [35, 34, 32],
    s_sector_region_score: [35, 34, 32],
    g_sector_region_score: [35, 34, 32],
    parametersRating: [
      { sectorGoalWeightage: this.sectorGoalWeightage[11], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[12], esgScore: this.esgScores[0], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[13], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[14], esgScore: this.esgScores[2], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[15], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[16], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[17], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[18], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[19], esgScore: this.esgScores[3], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[20], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[21], esgScore: this.esgScores[1], provider: this.providers[0] },

      { sectorGoalWeightage: this.sectorGoalWeightage[11], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[12], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[13], esgScore: this.esgScores[2], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[14], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[15], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[16], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[17], esgScore: this.esgScores[0], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[18], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[19], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[20], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[21], esgScore: this.esgScores[0], provider: this.providers[1] },

      { sectorGoalWeightage: this.sectorGoalWeightage[11], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[12], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[13], esgScore: this.esgScores[2], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[14], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[15], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[16], esgScore: this.esgScores[2], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[17], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[18], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[19], esgScore: this.esgScores[2], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[20], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[21], esgScore: this.esgScores[0], provider: this.providers[2] },

    ],
  };
  private SectorCompanyParameterBaseData_novartis: SectorCompanyParameterBaseData = {
    sector: this.sectors[0],
    company: this.companies[1],
    totalEsgScore: 0,
    e_sector_region_score: [35, 34, 32],
    s_sector_region_score: [35, 34, 32],
    g_sector_region_score: [35, 34, 32],
    parametersRating: [
      { sectorGoalWeightage: this.sectorGoalWeightage[11], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[12], esgScore: this.esgScores[6], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[13], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[14], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[15], esgScore: this.esgScores[0], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[16], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[17], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[18], esgScore: this.esgScores[7], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[19], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[20], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[21], esgScore: this.esgScores[4], provider: this.providers[0] },

      { sectorGoalWeightage: this.sectorGoalWeightage[11], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[12], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[13], esgScore: this.esgScores[4], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[14], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[15], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[16], esgScore: this.esgScores[7], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[17], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[18], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[19], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[20], esgScore: this.esgScores[6], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[21], esgScore: this.esgScores[0], provider: this.providers[1] },

      { sectorGoalWeightage: this.sectorGoalWeightage[11], esgScore: this.esgScores[7], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[12], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[13], esgScore: this.esgScores[3], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[14], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[15], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[16], esgScore: this.esgScores[4], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[17], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[18], esgScore: this.esgScores[7], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[19], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[20], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[21], esgScore: this.esgScores[6], provider: this.providers[2] },
    ],
  };
  private SectorCompanyParameterBaseData_cipla: SectorCompanyParameterBaseData = {
    sector: this.sectors[0],
    company: this.companies[2],
    totalEsgScore: 0,
    e_sector_region_score: [35, 34, 32],
    s_sector_region_score: [35, 34, 32],
    g_sector_region_score: [35, 34, 32],
    parametersRating: [
      { sectorGoalWeightage: this.sectorGoalWeightage[11], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[12], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[13], esgScore: this.esgScores[0], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[14], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[15], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[16], esgScore: this.esgScores[3], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[17], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[18], esgScore: this.esgScores[4], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[19], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[20], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[21], esgScore: this.esgScores[1], provider: this.providers[0] },

      { sectorGoalWeightage: this.sectorGoalWeightage[11], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[12], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[13], esgScore: this.esgScores[6], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[14], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[15], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[16], esgScore: this.esgScores[7], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[17], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[18], esgScore: this.esgScores[8], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[19], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[20], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[21], esgScore: this.esgScores[1], provider: this.providers[1] },

      { sectorGoalWeightage: this.sectorGoalWeightage[11], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[12], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[13], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[14], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[15], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[16], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[17], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[18], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[19], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[20], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[21], esgScore: this.esgScores[1], provider: this.providers[2] },

    ],
  };
  private SectorCompanyParameterBaseData_apple: SectorCompanyParameterBaseData = {
    sector: this.sectors[1],
    company: this.companies[3],
    totalEsgScore: 0,
    e_sector_region_score: [35, 34, 32],
    s_sector_region_score: [35, 34, 32],
    g_sector_region_score: [35, 34, 32],
    parametersRating: [
      { sectorGoalWeightage: this.sectorGoalWeightage[22], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[23], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[24], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[25], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[26], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[27], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[28], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[29], esgScore: this.esgScores[1], provider: this.providers[0] },

      { sectorGoalWeightage: this.sectorGoalWeightage[22], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[23], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[24], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[25], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[26], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[27], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[28], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[29], esgScore: this.esgScores[1], provider: this.providers[1] },

      { sectorGoalWeightage: this.sectorGoalWeightage[22], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[23], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[24], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[25], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[26], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[27], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[28], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[29], esgScore: this.esgScores[1], provider: this.providers[2] }

    ]
  };
  private SectorCompanyParameterBaseData_accenture: SectorCompanyParameterBaseData = {
    sector: this.sectors[1],
    company: this.companies[4],
    totalEsgScore: 0,
    e_sector_region_score: [35, 34, 32],
    s_sector_region_score: [35, 34, 32],
    g_sector_region_score: [35, 34, 32],
    parametersRating: [
      { sectorGoalWeightage: this.sectorGoalWeightage[22], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[23], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[24], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[25], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[26], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[27], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[28], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[29], esgScore: this.esgScores[1], provider: this.providers[0] },

      { sectorGoalWeightage: this.sectorGoalWeightage[22], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[23], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[24], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[25], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[26], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[27], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[28], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[29], esgScore: this.esgScores[1], provider: this.providers[1] },

      { sectorGoalWeightage: this.sectorGoalWeightage[22], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[23], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[24], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[25], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[26], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[27], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[28], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[29], esgScore: this.esgScores[1], provider: this.providers[2] },
    ]
  };
  private SectorCompanyParameterBaseData_amazon: SectorCompanyParameterBaseData = {
    sector: this.sectors[1],
    company: this.companies[5],
    totalEsgScore: 0,
    e_sector_region_score: [35, 34, 32],
    s_sector_region_score: [35, 34, 32],
    g_sector_region_score: [35, 34, 32],
    parametersRating: [
      { sectorGoalWeightage: this.sectorGoalWeightage[22], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[23], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[24], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[25], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[26], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[27], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[28], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[29], esgScore: this.esgScores[1], provider: this.providers[0] },

      { sectorGoalWeightage: this.sectorGoalWeightage[22], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[23], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[24], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[25], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[26], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[27], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[28], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[29], esgScore: this.esgScores[1], provider: this.providers[1] },

      { sectorGoalWeightage: this.sectorGoalWeightage[22], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[23], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[24], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[25], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[26], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[27], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[28], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[29], esgScore: this.esgScores[1], provider: this.providers[2] },
    ]
  };
  private SectorCompanyParameterBaseData_tesla: SectorCompanyParameterBaseData = {
    sector: this.sectors[4],
    company: this.companies[6],
    totalEsgScore: 0,
    e_sector_region_score: [35, 34, 32],
    s_sector_region_score: [35, 34, 32],
    g_sector_region_score: [35, 34, 32],
    parametersRating: [
      { sectorGoalWeightage: this.sectorGoalWeightage[0], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[1], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[2], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[3], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[4], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[5], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[6], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[7], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[8], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[9], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[10], esgScore: this.esgScores[1], provider: this.providers[0] },

      { sectorGoalWeightage: this.sectorGoalWeightage[0], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[1], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[2], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[3], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[4], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[5], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[6], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[7], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[8], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[9], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[10], esgScore: this.esgScores[1], provider: this.providers[1] },

      { sectorGoalWeightage: this.sectorGoalWeightage[0], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[1], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[2], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[3], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[4], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[5], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[6], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[7], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[8], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[9], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[10], esgScore: this.esgScores[1], provider: this.providers[2] },
    ],
  };
  private SectorCompanyParameterBaseData_ford: SectorCompanyParameterBaseData = {
    sector: this.sectors[4],
    company: this.companies[7],
    totalEsgScore: 0,
    e_sector_region_score: [35, 34, 32],
    s_sector_region_score: [35, 34, 32],
    g_sector_region_score: [35, 34, 32],
    parametersRating: [
      { sectorGoalWeightage: this.sectorGoalWeightage[0], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[1], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[2], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[3], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[4], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[5], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[6], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[7], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[8], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[9], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[10], esgScore: this.esgScores[1], provider: this.providers[0] },

      { sectorGoalWeightage: this.sectorGoalWeightage[0], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[1], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[2], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[3], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[4], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[5], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[6], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[7], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[8], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[9], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[10], esgScore: this.esgScores[1], provider: this.providers[1] },

      { sectorGoalWeightage: this.sectorGoalWeightage[0], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[1], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[2], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[3], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[4], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[5], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[6], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[7], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[8], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[9], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[10], esgScore: this.esgScores[1], provider: this.providers[2] },
    ],
  };
  private SectorCompanyParameterBaseData_cocacola: SectorCompanyParameterBaseData = {
    sector: this.sectors[4],
    company: this.companies[8],
    totalEsgScore: 0,
    e_sector_region_score: [35, 34, 32],
    s_sector_region_score: [35, 34, 32],
    g_sector_region_score: [35, 34, 32],
    parametersRating: [
      { sectorGoalWeightage: this.sectorGoalWeightage[0], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[1], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[2], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[3], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[4], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[5], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[6], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[7], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[8], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[9], esgScore: this.esgScores[1], provider: this.providers[0] },
      { sectorGoalWeightage: this.sectorGoalWeightage[10], esgScore: this.esgScores[1], provider: this.providers[0] },

      { sectorGoalWeightage: this.sectorGoalWeightage[0], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[1], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[2], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[3], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[4], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[5], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[6], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[7], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[8], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[9], esgScore: this.esgScores[1], provider: this.providers[1] },
      { sectorGoalWeightage: this.sectorGoalWeightage[10], esgScore: this.esgScores[1], provider: this.providers[1] },

      { sectorGoalWeightage: this.sectorGoalWeightage[0], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[1], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[2], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[3], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[4], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[5], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[6], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[7], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[8], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[9], esgScore: this.esgScores[1], provider: this.providers[2] },
      { sectorGoalWeightage: this.sectorGoalWeightage[10], esgScore: this.esgScores[1], provider: this.providers[2] },
    ],
  };

  private esgData_abbott: esgInputData = {
    sector: this.sectors[0],
    provider: this.providers[0],
    company: this.companies[0],
    esgFactorScores: this.SectorCompanyParameterBaseData_abbott.parametersRating,
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
      goal12: 81,
      goal13: 82,
      goal14: 83,
      goal15: 84,
      goal16: 85,
      goal17: 86
    },
    reportingDate: null,
    reportingPeriod: '2020 Q3',
    financialYear: 'FY20-21',
    financialQuarter: 'Q3',
    e_sector_region_score: this.SectorCompanyParameterBaseData_abbott.e_sector_region_score,
    s_sector_region_score: this.SectorCompanyParameterBaseData_abbott.s_sector_region_score,
    g_sector_region_score: this.SectorCompanyParameterBaseData_abbott.g_sector_region_score,
  }
  private esgData_novartis: esgInputData = {
    sector: this.sectors[0],
    provider: this.providers[0],
    company: this.companies[1],
    esgFactorScores: this.SectorCompanyParameterBaseData_novartis.parametersRating,
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
      goal12: 81,
      goal13: 82,
      goal14: 83,
      goal15: 84,
      goal16: 85,
      goal17: 86
    },
    reportingDate: null,
    reportingPeriod: '2020 Q3',
    financialYear: 'FY20-21',
    financialQuarter: 'Q3',
    e_sector_region_score: this.SectorCompanyParameterBaseData_novartis.e_sector_region_score,
    s_sector_region_score: this.SectorCompanyParameterBaseData_novartis.s_sector_region_score,
    g_sector_region_score: this.SectorCompanyParameterBaseData_novartis.g_sector_region_score,
  }
  private esgData_cipla: esgInputData = {
    sector: this.sectors[0],
    provider: this.providers[0],
    company: this.companies[2],
    esgFactorScores: this.SectorCompanyParameterBaseData_cipla.parametersRating,
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
      goal12: 81,
      goal13: 82,
      goal14: 83,
      goal15: 84,
      goal16: 85,
      goal17: 86
    },
    reportingDate: null,
    reportingPeriod: '2020 Q3',
    financialYear: 'FY20-21',
    financialQuarter: 'Q3',
    e_sector_region_score: this.SectorCompanyParameterBaseData_cipla.e_sector_region_score,
    s_sector_region_score: this.SectorCompanyParameterBaseData_cipla.s_sector_region_score,
    g_sector_region_score: this.SectorCompanyParameterBaseData_cipla.g_sector_region_score,
  }
  private esgData_apple: esgInputData = {
    sector: this.sectors[1],
    provider: this.providers[0],
    company: this.companies[3],
    esgFactorScores: this.SectorCompanyParameterBaseData_apple.parametersRating,
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
      goal12: 81,
      goal13: 82,
      goal14: 83,
      goal15: 84,
      goal16: 85,
      goal17: 86
    },
    reportingDate: null,
    reportingPeriod: '2020 Q3',
    financialYear: 'FY20-21',
    financialQuarter: 'Q3',
    e_sector_region_score: this.SectorCompanyParameterBaseData_apple.e_sector_region_score,
    s_sector_region_score: this.SectorCompanyParameterBaseData_apple.s_sector_region_score,
    g_sector_region_score: this.SectorCompanyParameterBaseData_apple.g_sector_region_score,
  }
  private esgData_accenture: esgInputData = {
    sector: this.sectors[1],
    provider: this.providers[0],
    company: this.companies[4],
    esgFactorScores: this.SectorCompanyParameterBaseData_accenture.parametersRating,
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
      goal12: 81,
      goal13: 82,
      goal14: 83,
      goal15: 84,
      goal16: 85,
      goal17: 86
    },
    reportingDate: null,
    reportingPeriod: '2020 Q3',
    financialYear: 'FY20-21',
    financialQuarter: 'Q3',
    e_sector_region_score: this.SectorCompanyParameterBaseData_accenture.e_sector_region_score,
    s_sector_region_score: this.SectorCompanyParameterBaseData_accenture.s_sector_region_score,
    g_sector_region_score: this.SectorCompanyParameterBaseData_accenture.g_sector_region_score,
  }
  private esgData_amazon: esgInputData = {
    sector: this.sectors[1],
    provider: this.providers[0],
    company: this.companies[5],
    esgFactorScores: this.SectorCompanyParameterBaseData_amazon.parametersRating,
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
      goal12: 81,
      goal13: 82,
      goal14: 83,
      goal15: 84,
      goal16: 85,
      goal17: 86
    },
    reportingDate: null,
    reportingPeriod: '2020 Q3',
    financialYear: 'FY20-21',
    financialQuarter: 'Q3',
    e_sector_region_score: this.SectorCompanyParameterBaseData_amazon.e_sector_region_score,
    s_sector_region_score: this.SectorCompanyParameterBaseData_amazon.s_sector_region_score,
    g_sector_region_score: this.SectorCompanyParameterBaseData_amazon.g_sector_region_score,
  }
  private esgData_tesla: esgInputData = {
    sector: this.sectors[4],
    provider: this.providers[0],
    company: this.companies[6],
    esgFactorScores: this.SectorCompanyParameterBaseData_tesla.parametersRating,
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
      goal12: 81,
      goal13: 82,
      goal14: 83,
      goal15: 84,
      goal16: 85,
      goal17: 86
    },
    reportingDate: null,
    reportingPeriod: '2020 Q3',
    financialYear: 'FY20-21',
    financialQuarter: 'Q3',
    e_sector_region_score: this.SectorCompanyParameterBaseData_tesla.e_sector_region_score,
    s_sector_region_score: this.SectorCompanyParameterBaseData_tesla.s_sector_region_score,
    g_sector_region_score: this.SectorCompanyParameterBaseData_tesla.g_sector_region_score,
  }
  private esgData_ford: esgInputData = {
    sector: this.sectors[4],
    provider: this.providers[0],
    company: this.companies[7],
    esgFactorScores: this.SectorCompanyParameterBaseData_ford.parametersRating,
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
      goal12: 81,
      goal13: 82,
      goal14: 83,
      goal15: 84,
      goal16: 85,
      goal17: 86
    },
    reportingDate: null,
    reportingPeriod: '2020 Q3',
    financialYear: 'FY20-21',
    financialQuarter: 'Q3',
    e_sector_region_score: this.SectorCompanyParameterBaseData_ford.e_sector_region_score,
    s_sector_region_score: this.SectorCompanyParameterBaseData_ford.s_sector_region_score,
    g_sector_region_score: this.SectorCompanyParameterBaseData_ford.g_sector_region_score,
  }
  private esgData_cocacola: esgInputData = {
    sector: this.sectors[4],
    provider: this.providers[0],
    company: this.companies[8],
    esgFactorScores: this.SectorCompanyParameterBaseData_cocacola.parametersRating,
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
      goal12: 81,
      goal13: 82,
      goal14: 83,
      goal15: 84,
      goal16: 85,
      goal17: 86
    },
    reportingDate: null,
    reportingPeriod: '2020 Q3',
    financialYear: 'FY20-21',
    financialQuarter: 'Q3',
    e_sector_region_score: this.SectorCompanyParameterBaseData_cocacola.e_sector_region_score,
    s_sector_region_score: this.SectorCompanyParameterBaseData_cocacola.s_sector_region_score,
    g_sector_region_score: this.SectorCompanyParameterBaseData_cocacola.g_sector_region_score,
  }
  private esgData10: esgInputData = {
    sector: this.sectors[3],
    provider: this.providers[0],
    company: this.companies[9],
    esgFactorScores: this.SectorCompanyParameterBaseData_novartis.parametersRating,
    e_sector_region_score: this.SectorCompanyParameterBaseData_cocacola.e_sector_region_score,
    s_sector_region_score: this.SectorCompanyParameterBaseData_cocacola.s_sector_region_score,
    g_sector_region_score: this.SectorCompanyParameterBaseData_cocacola.g_sector_region_score,
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
      goal12: 81,
      goal13: 82,
      goal14: 83,
      goal15: 84,
      goal16: 85,
      goal17: 86
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
    esgFactorScores: this.SectorCompanyParameterBaseData_novartis.parametersRating,
    e_sector_region_score: this.SectorCompanyParameterBaseData_cocacola.e_sector_region_score,
    s_sector_region_score: this.SectorCompanyParameterBaseData_cocacola.s_sector_region_score,
    g_sector_region_score: this.SectorCompanyParameterBaseData_cocacola.g_sector_region_score,
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
      goal12: 81,
      goal13: 82,
      goal14: 83,
      goal15: 84,
      goal16: 85,
      goal17: 86
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
    esgFactorScores: this.SectorCompanyParameterBaseData_novartis.parametersRating,
    e_sector_region_score: this.SectorCompanyParameterBaseData_cocacola.e_sector_region_score,
    s_sector_region_score: this.SectorCompanyParameterBaseData_cocacola.s_sector_region_score,
    g_sector_region_score: this.SectorCompanyParameterBaseData_cocacola.g_sector_region_score,
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
      goal12: 81,
      goal13: 82,
      goal14: 83,
      goal15: 84,
      goal16: 85,
      goal17: 86
    },
    reportingDate: null,
    reportingPeriod: '2020 Q3',
    financialYear: 'FY20-21',
    financialQuarter: 'Q3',
  }
  private esgData: esgInputData[] = [this.esgData_abbott,
  this.esgData_novartis, this.esgData_cipla, this.esgData_apple,
  this.esgData_accenture, this.esgData_amazon, this.esgData_tesla,
  this.esgData_ford, this.esgData_cocacola, this.esgData10, this.esgData11, this.esgData12];

  public getSectorCompanyParameterBaseDataByName(name: string): SectorCompanyParameterBaseData {
    switch (name.toLowerCase()) {
      case "abbott":
        return this.SectorCompanyParameterBaseData_abbott;
        break;
      case 'novartis':
        return this.SectorCompanyParameterBaseData_novartis;
        break;
      case 'cipla':
        return this.SectorCompanyParameterBaseData_cipla;
        break;
      case 'apple':
        return this.SectorCompanyParameterBaseData_apple;
        break;
      case 'accenture':
        return this.SectorCompanyParameterBaseData_accenture;
        break;
      case 'amazon':
        return this.SectorCompanyParameterBaseData_amazon;
        break;
      case 'ford':
        return this.SectorCompanyParameterBaseData_ford;
        break;
      case 'tesla':
        return this.SectorCompanyParameterBaseData_tesla;
        break;
      case 'cocacola':
        return this.SectorCompanyParameterBaseData_cocacola;
        break;
    }
  }

  public getAllSectorCompanyParameterBaseDataByName(): SectorCompanyParameterBaseData[] {
    return [this.SectorCompanyParameterBaseData_abbott,
    this.SectorCompanyParameterBaseData_novartis,
    this.SectorCompanyParameterBaseData_cipla,
    this.SectorCompanyParameterBaseData_apple,
    this.SectorCompanyParameterBaseData_accenture,
    this.SectorCompanyParameterBaseData_amazon,
    this.SectorCompanyParameterBaseData_tesla,
    this.SectorCompanyParameterBaseData_ford,
    this.SectorCompanyParameterBaseData_cocacola
    ]
  }

  public saveAllDataToLocalStorageFirstTime() {
    if (isNullOrUndefined(localStorage.getItem('companyData_abbott')))
      localStorage.setItem('companyData_abbott', JSON.stringify(this.SectorCompanyParameterBaseData_abbott));
    if (isNullOrUndefined(localStorage.getItem('companyData_novartis')))
      localStorage.setItem('companyData_novartis', JSON.stringify(this.SectorCompanyParameterBaseData_novartis));
    if (isNullOrUndefined(localStorage.getItem('companyData_cipla')))
      localStorage.setItem('companyData_cipla', JSON.stringify(this.SectorCompanyParameterBaseData_cipla));
    if (isNullOrUndefined(localStorage.getItem('companyData_apple')))
      localStorage.setItem('companyData_apple', JSON.stringify(this.SectorCompanyParameterBaseData_apple));
    if (isNullOrUndefined(localStorage.getItem('companyData_accenture')))
      localStorage.setItem('companyData_accenture', JSON.stringify(this.SectorCompanyParameterBaseData_accenture));
    if (isNullOrUndefined(localStorage.getItem('companyData_amazon')))
      localStorage.setItem('companyData_amazon', JSON.stringify(this.SectorCompanyParameterBaseData_amazon));
    if (isNullOrUndefined(localStorage.getItem('companyData_ford')))
      localStorage.setItem('companyData_ford', JSON.stringify(this.SectorCompanyParameterBaseData_ford));
    if (isNullOrUndefined(localStorage.getItem('companyData_tesla')))
      localStorage.setItem('companyData_tesla', JSON.stringify(this.SectorCompanyParameterBaseData_tesla));
    if (isNullOrUndefined(localStorage.getItem('companyData_cocacola')))
      localStorage.setItem('companyData_cocacola', JSON.stringify(this.SectorCompanyParameterBaseData_cocacola));
  }

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

  public transformInputDataToDisplayModel(input: SectorCompanyParameterBaseData): esgInputData {
    let displayModel: esgInputData = new esgInputData();
    displayModel.company = input.company;
    displayModel.e_sector_region_score = input.e_sector_region_score;
    displayModel.s_sector_region_score = input.s_sector_region_score;
    displayModel.g_sector_region_score = input.g_sector_region_score;
    displayModel.sector = input.sector;
    displayModel.financialYear = '';
    displayModel.financialQuarter = '';
    displayModel.reportingPeriod = '';
    displayModel.reportingDate = null;
    displayModel.provider = new provider();
    displayModel.esgFactorScores = input.parametersRating;
    displayModel.goalBasedScore = this.extractGoalBasedScore(input);
    return displayModel;
  }

  private extractGoalBasedScore(input: SectorCompanyParameterBaseData): goalBasedScore {
    let gbs: goalBasedScore = new goalBasedScore();
    gbs.goal1 = this.getGoalBasedScoreFromRatings(input.parametersRating, this.sdgGoals[0].sdgGoalId);
    gbs.goal2 = this.getGoalBasedScoreFromRatings(input.parametersRating, this.sdgGoals[1].sdgGoalId);
    gbs.goal3 = this.getGoalBasedScoreFromRatings(input.parametersRating, this.sdgGoals[2].sdgGoalId);
    gbs.goal4 = this.getGoalBasedScoreFromRatings(input.parametersRating, this.sdgGoals[3].sdgGoalId);
    gbs.goal5 = this.getGoalBasedScoreFromRatings(input.parametersRating, this.sdgGoals[4].sdgGoalId);
    gbs.goal6 = this.getGoalBasedScoreFromRatings(input.parametersRating, this.sdgGoals[5].sdgGoalId);
    gbs.goal7 = this.getGoalBasedScoreFromRatings(input.parametersRating, this.sdgGoals[6].sdgGoalId);
    gbs.goal8 = this.getGoalBasedScoreFromRatings(input.parametersRating, this.sdgGoals[7].sdgGoalId);
    gbs.goal9 = this.getGoalBasedScoreFromRatings(input.parametersRating, this.sdgGoals[8].sdgGoalId);
    gbs.goal10 = this.getGoalBasedScoreFromRatings(input.parametersRating, this.sdgGoals[9].sdgGoalId);
    gbs.goal11 = this.getGoalBasedScoreFromRatings(input.parametersRating, this.sdgGoals[10].sdgGoalId);
    gbs.goal12 = this.getGoalBasedScoreFromRatings(input.parametersRating, this.sdgGoals[11].sdgGoalId);
    gbs.goal13 = this.getGoalBasedScoreFromRatings(input.parametersRating, this.sdgGoals[12].sdgGoalId);
    gbs.goal14 = this.getGoalBasedScoreFromRatings(input.parametersRating, this.sdgGoals[13].sdgGoalId);
    gbs.goal15 = this.getGoalBasedScoreFromRatings(input.parametersRating, this.sdgGoals[14].sdgGoalId);
    gbs.goal16 = this.getGoalBasedScoreFromRatings(input.parametersRating, this.sdgGoals[15].sdgGoalId);
    gbs.goal17 = this.getGoalBasedScoreFromRatings(input.parametersRating, this.sdgGoals[16].sdgGoalId);
    return gbs;
  }

  private getGoalBasedScoreFromRatings(ratings: ParametersRating[], goalId: number): number {
    let score: number = 0;
    // expecting length=3 at max if present.
    let goals = ratings.filter(x => x.sectorGoalWeightage.sdg_Goal_Description.sdg_Goal.sdgGoalId == goalId);
    if (goals.length > 0) {
      goals.forEach(y => {
        score = score + ((y.esgScore.esgScoreValue * y.sectorGoalWeightage.weightage)/100); // as per excel
      });
    }
    if (isNaN(score))
      return 0;
    return (score) / (goals.length);
  }

  public getESGScoreFromRatingsByCategoryId(data: esgInputData, catId: number): number {
    let score: number = 0;
    // filter parameter rating array by category(E,S,G).
    let goals = data.esgFactorScores.filter(x => x.sectorGoalWeightage.sdg_Goal_Description.sdg_Goal.esg_Category.esgCategoryId == catId);
    // Hard-coded in text box.
    let inputScore = catId == 1 ? (data.e_sector_region_score[0] + data.e_sector_region_score[1] + data.e_sector_region_score[2]) / 3 :
                     catId == 2 ? (data.s_sector_region_score[0] + data.s_sector_region_score[1] + data.s_sector_region_score[2]) / 3 :
                                  (data.g_sector_region_score[0] + data.g_sector_region_score[1] + data.g_sector_region_score[2]) / 3;
    if (goals.length > 0) {
      goals.forEach(y => {
        // no need to consider weigtage for E,S,G specific score. Required in Goal Based score.
        // score = score + (y.esgScore.esgScoreValue * y.sectorGoalWeightage.weightage);
        score = score + y.esgScore.esgScoreValue;
      });      
    }
    // goals.length will be for 3 companies here, so we divide total length by 3.
    return (score / (goals.length/3)) + inputScore;
  }
}
