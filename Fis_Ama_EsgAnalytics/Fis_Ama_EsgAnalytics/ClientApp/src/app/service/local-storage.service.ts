import { Injectable } from '@angular/core';
import { SectorCompanyParameterBaseData } from '../models/sector-company-basedata';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public getCompanyDataFromLocalStorageByName(name: string): SectorCompanyParameterBaseData {
    var data: SectorCompanyParameterBaseData;
    switch (name.toLowerCase()) {
      case "lupin":
        data = JSON.parse(localStorage.getItem('companyData_lupin')) as SectorCompanyParameterBaseData;
        return data;
        break;
      case 'sun':
        data = JSON.parse(localStorage.getItem('companyData_sun')) as SectorCompanyParameterBaseData;
        return data;
        break;
      case 'cipla':
        data = JSON.parse(localStorage.getItem('companyData_cipla')) as SectorCompanyParameterBaseData;
        return data;
        break;
      case 'infosys':
        data = JSON.parse(localStorage.getItem('companyData_infosys')) as SectorCompanyParameterBaseData;
        return data;
        break;
      case 'accenture':
        data = JSON.parse(localStorage.getItem('companyData_accenture')) as SectorCompanyParameterBaseData;
        return data;
        break;
      case 'cognizant':
        data = JSON.parse(localStorage.getItem('companyData_cognizant')) as SectorCompanyParameterBaseData;
        return data;
        break;
      case 'png':
        data = JSON.parse(localStorage.getItem('companyData_png')) as SectorCompanyParameterBaseData;
        return data;
        break;
      case 'itc':
        data = JSON.parse(localStorage.getItem('companyData_itc')) as SectorCompanyParameterBaseData;
        return data;
        break;
      case 'hul':
        data = JSON.parse(localStorage.getItem('companyData_hul')) as SectorCompanyParameterBaseData;
        return data;
        break;
    }
  }

  public getAllCompanyDataFromLocalStorage(): SectorCompanyParameterBaseData[] {
    var data: SectorCompanyParameterBaseData[]=[];
    data.push(JSON.parse(localStorage.getItem('companyData_lupin')) as SectorCompanyParameterBaseData);
    data.push(JSON.parse(localStorage.getItem('companyData_sun')) as SectorCompanyParameterBaseData);
    data.push(JSON.parse(localStorage.getItem('companyData_cipla')) as SectorCompanyParameterBaseData);
    data.push(JSON.parse(localStorage.getItem('companyData_infosys')) as SectorCompanyParameterBaseData);
    data.push(JSON.parse(localStorage.getItem('companyData_accenture')) as SectorCompanyParameterBaseData);
    data.push(JSON.parse(localStorage.getItem('companyData_cognizant')) as SectorCompanyParameterBaseData);
    data.push(JSON.parse(localStorage.getItem('companyData_png')) as SectorCompanyParameterBaseData);
    data.push(JSON.parse(localStorage.getItem('companyData_itc')) as SectorCompanyParameterBaseData);
    data.push(JSON.parse(localStorage.getItem('companyData_hul')) as SectorCompanyParameterBaseData);
    return data;
  }

  public updateCompanyDataInLocalTempDataByName(name: string, data: SectorCompanyParameterBaseData) {
    localStorage.setItem(name, JSON.stringify(data));
  }
}
