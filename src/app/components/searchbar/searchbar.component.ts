import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { map, Observable, startWith } from 'rxjs'
import { FormControl } from '@angular/forms'
// import { v4 as uuidv4 } from 'uuid'
interface City {
  name: string
  id: string
}
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss',
})
export class SearchbarComponent {
  cities: City[] = [
    { name: 'گیلان', id: '1' },
    { name: 'تهران', id: '2' },
    { name: 'شیراز', id: '3' },
  ]
  filteredCities$!: Observable<City[]>
  cityControl = new FormControl()

  // generateUniqueId() {
  //   return uuidv4()
  // }
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.filteredCities$ = this.cityControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterCities(value)),
    )
  }

  private _filterCities(value: string): City[] {
    const filterValue = value.toLowerCase()
    return this.cities.filter((city) => city.name.toLowerCase().includes(filterValue))
  }

  onCitySelectionChange(): void {
    this.router.navigate(['/search'], {
      queryParams: { city: this.cityControl.value },
      relativeTo: this.route,
      queryParamsHandling: 'merge',
    })
  }
  onInputChange(): void {
    if (!this.cityControl.value) {
      this.router.navigate([''])
    }
  }
}
