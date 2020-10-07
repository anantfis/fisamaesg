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
  }

  ngOnInit() {
    this.route.params.subscribe(() => {
      this.companyId = +this.route.snapshot.paramMap.get('id');
      this.companySelected = this.esgDataService.getAllCompanies()[0];     
    });
  }
}
