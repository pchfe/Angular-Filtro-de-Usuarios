import { Component, Output, EventEmitter } from '@angular/core';
import { IFilterOption } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  filterOptions: IFilterOption = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  }

  statusList = [
    { description: 'Ativo', value: true },
    { description: 'Inativo', value: false },
  ];

  @Output('onFilter') onFilterEmitt = new EventEmitter<IFilterOption>();

  onFilter() {
    this.onFilterEmitt.emit(this.filterOptions);
  }
  noFilter() {
    this.filterOptions = {
      name: undefined,
      startDate: undefined,
      endDate: undefined,
      status: undefined,
    }

    this.onFilterEmitt.emit(this.filterOptions);
  }

  onFilterChange(): void {
    const isVoid = this.filterOptions.name === '';

    if (isVoid) {
      this.onFilterEmitt.emit(this.filterOptions);
    } 

    this.onFilterEmitt.emit(this.filterOptions);
  }
}

