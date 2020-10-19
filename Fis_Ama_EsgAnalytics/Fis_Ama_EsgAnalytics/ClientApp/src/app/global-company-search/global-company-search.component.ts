import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EsgDataService } from '../service/esg-data.service';
import { FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { company } from '../models/company';
import { CommunicationService } from '../service/communication.service';

@Component({
  selector: 'app-global-company-search',
  templateUrl: './global-company-search.component.html',
  styleUrls: ['./global-company-search.component.css']
})
export class GlobalCompanySearchComponent implements OnInit {
  @Output() companySelected = new EventEmitter<company>();   
  companyNameSelected: string = 'abbott'; // first time select first company in Array : abbott
  constructor(private esgDataService: EsgDataService,
              private communicationService: CommunicationService) { }
  myControl = new FormControl();

  // filter airline sector companies.
  companies = this.esgDataService.getAllCompanies().filter(x => (x.companyId !== 10 && x.companyId !== 11 && x.companyId !== 12));
  filteredOptions: Observable<company[]>;  

  ngOnInit() {
    this.companySelected.emit(this.GetCompanyDetailsByName(this.companyNameSelected));
    this.communicationService.emitChange(this.GetCompanyDetailsByName(this.companyNameSelected));

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  optionselected($event) {
    this.companyNameSelected = $event.option.value;
    this.companySelected.emit(this.GetCompanyDetailsByName(this.companyNameSelected));
    this.communicationService.emitChange(this.GetCompanyDetailsByName(this.companyNameSelected));    
  }

  private _filter(value: string): company[] {   
    const filterValue = value.toLowerCase();
    return this.companies.filter(option => option.companyName.toLowerCase().includes(filterValue));
  }

  private GetCompanyDetailsByName(name: string ): company {
    return this.esgDataService.getAllCompanies().filter(x => x.companyName === name)[0];
  }
}
