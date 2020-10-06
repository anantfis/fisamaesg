import { Component, OnInit, Input } from '@angular/core';
import { company } from '../models/company';
import { EsgDataService } from '../service/esg-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-esg-info',
  templateUrl: './company-esg-info.component.html',
  styleUrls: ['./company-esg-info.component.css']
})
export class CompanyEsgInfoComponent implements OnInit {

  @Input() companySelected: company = <company>{};
  companyId: number;

  constructor(private esgDataService: EsgDataService, private route: ActivatedRoute) {
    //console.log('2. app-company-esg-info :' + this.companySelected.companyName);
  }

  ngOnInit() {
    this.route.params.subscribe(() => {
      this.companyId = +this.route.snapshot.paramMap.get('id');
      this.companySelected = this.esgDataService.getAllCompanies()[0];
      console.log('2. app-company-esg-info :' + this.companySelected.companyName)
    });
    //this.companySelected = this.esgDataService.getAllCompanies()[0];
    //console.log('2. app-company-esg-info :' + this.companySelected.companyName)
  }
}
