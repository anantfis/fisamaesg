import { Component, OnInit } from '@angular/core';
import { EsgDataService } from '../service/esg-data.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { company } from '../models/company';

@Component({
  selector: 'app-global-company-search',
  templateUrl: './global-company-search.component.html',
  styleUrls: ['./global-company-search.component.css']
})
export class GlobalCompanySearchComponent implements OnInit {

  constructor(private esgDataService: EsgDataService) { }
  myControl = new FormControl();
  companies = this.esgDataService.getAllCompanies();
  filteredOptions: Observable<company[]>;
  companySelected: company = this.esgDataService.getAllCompanies()[0];

  ngOnInit() {
    this.companySelected = this.esgDataService.getAllCompanies()[0];
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): company[] {
    console.log('1 :' + value);
    const filterValue = value.toLowerCase();
    return this.companies.filter(option => option.companyName.toLowerCase().includes(filterValue));
  }
  

}
