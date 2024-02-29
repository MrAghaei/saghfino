import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
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

  private _filterCities(value: string): string[] {
    const filterValue = value.toLowerCase()
    return this.cities.filter((city) => city.toLowerCase().includes(filterValue))
  }

  onCitySelectionChange(): void {
    console.log(this.cityControl.value)
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
