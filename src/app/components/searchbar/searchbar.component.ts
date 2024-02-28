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
  selectedCity!: string
  cities: string[] = ['گیلان', 'تهران', 'شیراز'] // Replace with your list of cities
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
    if (!this.selectedCity) {
      // If no city is selected, navigate back to the '' route
      this.router.navigate([''])
    } else {
      // Otherwise, navigate to the search route with the selected city as a query parameter
      this.router.navigate(['/search'], { queryParams: { city: this.selectedCity } })
    }
  }
}
