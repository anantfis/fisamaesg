import { Component, OnInit, Input } from '@angular/core';
import { company } from '../models/company';
import { EsgDataService } from '../service/esg-data.service';

@Component({
  selector: 'app-company-esg-info',
  templateUrl: './company-esg-info.component.html',
  styleUrls: ['./company-esg-info.component.css']
})
export class CompanyEsgInfoComponent implements OnInit {

  @Input() companySelected: company;

  constructor(private esgDataService: EsgDataService) {
    //console.log('2. app-company-esg-info :' + this.companySelected.companyName);
  }

  ngOnInit() {
    this.companySelected = this.esgDataService.getAllCompanies()[0];
    console.log('2. app-company-esg-info :' + this.companySelected.companyName)
  }
}
