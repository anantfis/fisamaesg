import { Component, OnInit, Input } from '@angular/core';
import { company } from '../models/company';
import { EsgDataService } from '../service/esg-data.service';
import { ActivatedRoute } from '@angular/router';
import { CommunicationService } from '../service/communication.service';

@Component({
  selector: 'app-company-esg-info',
  templateUrl: './company-esg-info.component.html',
  styleUrls: ['./company-esg-info.component.css']
})
export class CompanyEsgInfoComponent implements OnInit {

  companySelected: company = <company>{};
  companyId: number;
  companyChangeSubs: any;

  constructor(private esgDataService: EsgDataService, private route: ActivatedRoute,
    private communicationService: CommunicationService) {
  }

  ngOnInit() {
    this.companyChangeSubs = this.communicationService.changeEmitted$.subscribe(
      message => {
        this.companySelected = message as company;
        this.companyId = this.companySelected.companyId;
      });
    this.route.params.subscribe(() => {
      this.companyId = +this.route.snapshot.paramMap.get('id');
      this.companySelected = this.esgDataService.getAllCompanies().filter(x => x.companyId == this.companyId)[0];
    });
  }

  ngOnDestroy() {
    this.companyChangeSubs.unsubscribe();
  }
}
