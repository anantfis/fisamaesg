import { Injectable } from '@angular/core';
import { SectorCompanyParameterBaseData } from '../models/sector-company-basedata';
import { companyNameInStorage } from '../models/constants/companyNameInStorage';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public getCompanyDataFromLocalStorageByName(storageName: companyNameInStorage): SectorCompanyParameterBaseData {
    var data: SectorCompanyParameterBaseData;
    switch (storageName) {
      case companyNameInStorage.lupin:
        data = JSON.parse(localStorage.getItem('companyData_lupin')) as SectorCompanyParameterBaseData;
        return data;
        break;
      case companyNameInStorage.sun:
        data = JSON.parse(localStorage.getItem('companyData_sun')) as SectorCompanyParameterBaseData;
        return data;
        break;
      case companyNameInStorage.cipla:
        data = JSON.parse(localStorage.getItem('companyData_cipla')) as SectorCompanyParameterBaseData;
        return data;
        break;
      case companyNameInStorage.infosys:
        data = JSON.parse(localStorage.getItem('companyData_infosys')) as SectorCompanyParameterBaseData;
        return data;
        break;
      case companyNameInStorage.accenture:
        data = JSON.parse(localStorage.getItem('companyData_accenture')) as SectorCompanyParameterBaseData;
        return data;
        break;
      case companyNameInStorage.cognizant:
        data = JSON.parse(localStorage.getItem('companyData_cognizant')) as SectorCompanyParameterBaseData;
        return data;
        break;
      case companyNameInStorage.png:
        data = JSON.parse(localStorage.getItem('companyData_png')) as SectorCompanyParameterBaseData;
        return data;
        break;
      case companyNameInStorage.itc:
        data = JSON.parse(localStorage.getItem('companyData_itc')) as SectorCompanyParameterBaseData;
        return data;
        break;
      case companyNameInStorage.hul:
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

  public updateCompanyDataInLocalTempDataByName(data: SectorCompanyParameterBaseData) {
    localStorage.setItem(data.company.storageName, JSON.stringify(data));
  }
}
