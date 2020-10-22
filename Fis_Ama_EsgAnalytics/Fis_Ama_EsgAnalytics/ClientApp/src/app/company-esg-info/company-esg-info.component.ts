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
  sector: string = 'PHARMA';

  constructor(private esgDataService: EsgDataService, private route: ActivatedRoute,
    private communicationService: CommunicationService) {
  }

  ngOnInit() {
    this.companyChangeSubs = this.communicationService.changeEmitted$.subscribe(
      message => {
        this.companySelected = message as company;
        this.companyId = this.companySelected.companyId;
        this.sector = this.getsector();
      });
    this.route.params.subscribe(() => {
      this.companyId = +this.route.snapshot.paramMap.get('id');
      this.companySelected = this.esgDataService.getAllCompanies().filter(x => x.companyId == this.companyId)[0];
      this.sector = this.getsector();
    });
  }

  ngOnDestroy() {
    this.companyChangeSubs.unsubscribe();
  }

  getsector(): string {
    if (this.companyId == 1 || this.companyId == 2 || this.companyId == 3) {
      return "PHARMA";
    }
    else if (this.companyId == 4 || this.companyId == 5 || this.companyId == 6) {
      return "SOFTWARE";
    }
    else if (this.companyId == 7 || this.companyId == 8 || this.companyId == 9) {
      return "MANUFACTURING";
    }
  }
}
