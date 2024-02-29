import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { map, Observable, startWith } from 'rxjs'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss',
})
export class SearchbarComponent {
  cities: string[] = ['گیلان', 'تهران', 'شیراز']
  filteredCities$!: Observable<string[]>
  cityControl = new FormControl()

  constructor(private router: Router) {}

  ngOnInit() {
    this.filteredCities$ = this.cityControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterCities(value)),
    )
  }

  private _filterCities(value: string): string[] {
    const filterValue = value.toLowerCase()
    return this.cities.filter((city) => city.toLowerCase().includes(filterValue))
  }

  onCitySelectionChange() {
    console.log(this.cityControl.value)
    this.router.navigate(['/search'], { queryParams: { city: this.cityControl.value } })
  }
}
