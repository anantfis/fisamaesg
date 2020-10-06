import { Injectable } from '@angular/core';
import { company } from '../models/company';
import { provider } from '../models/provider';
import { sector } from '../models/sector';
import { esgInputData } from '../models/esgInputData';
import { Observable } from 'rxjs';

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
  private sectors: sector[] = [
    { "sectorId": 1, "sectorName": "Pharma" },
    { "sectorId": 2, "sectorName": "Software" },
    { "sectorId": 3, "sectorName": "FMCG" },
    { "sectorId": 4, "sectorName": "Aviation" }
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

  public getAllSectorss(): sector[] {
    return this.sectors;
  }

  public getAllEsgData(): esgInputData[] {
    return this.esgData;
  }

}
