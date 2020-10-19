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
      case companyNameInStorage.abbott:
        data = JSON.parse(localStorage.getItem('companyData_abbott')) as SectorCompanyParameterBaseData;
        return data;
        break;
      case companyNameInStorage.novartis:
        data = JSON.parse(localStorage.getItem('companyData_novartis')) as SectorCompanyParameterBaseData;
        return data;
        break;
      case companyNameInStorage.cipla:
        data = JSON.parse(localStorage.getItem('companyData_cipla')) as SectorCompanyParameterBaseData;
        return data;
        break;
      case companyNameInStorage.apple:
        data = JSON.parse(localStorage.getItem('companyData_apple')) as SectorCompanyParameterBaseData;
        return data;
        break;
      case companyNameInStorage.accenture:
        data = JSON.parse(localStorage.getItem('companyData_accenture')) as SectorCompanyParameterBaseData;
        return data;
        break;
      case companyNameInStorage.amazon:
        data = JSON.parse(localStorage.getItem('companyData_amazon')) as SectorCompanyParameterBaseData;
        return data;
        break;
      case companyNameInStorage.ford:
        data = JSON.parse(localStorage.getItem('companyData_ford')) as SectorCompanyParameterBaseData;
        return data;
        break;
      case companyNameInStorage.tesla:
        data = JSON.parse(localStorage.getItem('companyData_tesla')) as SectorCompanyParameterBaseData;
        return data;
        break;
      case companyNameInStorage.cocacola:
        data = JSON.parse(localStorage.getItem('companyData_cocacola')) as SectorCompanyParameterBaseData;
        return data;
        break;
    }
  }

  public getAllCompanyDataFromLocalStorage(): SectorCompanyParameterBaseData[] {
    var data: SectorCompanyParameterBaseData[]=[];
    data.push(JSON.parse(localStorage.getItem('companyData_abbott')) as SectorCompanyParameterBaseData);
    data.push(JSON.parse(localStorage.getItem('companyData_novartis')) as SectorCompanyParameterBaseData);
    data.push(JSON.parse(localStorage.getItem('companyData_cipla')) as SectorCompanyParameterBaseData);
    data.push(JSON.parse(localStorage.getItem('companyData_apple')) as SectorCompanyParameterBaseData);
    data.push(JSON.parse(localStorage.getItem('companyData_accenture')) as SectorCompanyParameterBaseData);
    data.push(JSON.parse(localStorage.getItem('companyData_amazon')) as SectorCompanyParameterBaseData);
    data.push(JSON.parse(localStorage.getItem('companyData_ford')) as SectorCompanyParameterBaseData);
    data.push(JSON.parse(localStorage.getItem('companyData_tesla')) as SectorCompanyParameterBaseData);
    data.push(JSON.parse(localStorage.getItem('companyData_cocacola')) as SectorCompanyParameterBaseData);
    return data;
  }

  public updateCompanyDataInLocalTempDataByName(data: SectorCompanyParameterBaseData) {
    localStorage.setItem(data.company.storageName, JSON.stringify(data));
  }
}
