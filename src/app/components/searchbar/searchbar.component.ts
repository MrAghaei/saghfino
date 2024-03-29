import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { filter, map, Observable, startWith, Subject, takeUntil } from 'rxjs'
import { FormControl } from '@angular/forms'
import { City, CityService } from '../../services/city.service'

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss',
})
export class SearchbarComponent implements OnInit, OnDestroy {
  public cities!: City[]

  public filteredCities$!: Observable<City[]>
  public cityControl = new FormControl()

  private unsubscribe$ = new Subject<void>()

  constructor(
    private cityService: CityService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.filteredCities$ = this.cityControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterCities(value)),
      takeUntil(this.unsubscribe$),
    )
    this.fetchCities()
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

  private _filterCities(value: string): City[] {
    let filterValue = ''
    if (typeof value === 'string') filterValue = value.toLowerCase()
    return this.cities.filter((city) => city.name.toLowerCase().includes(filterValue))
  }

  public onCitySelectionChange(): void {
    this.router.navigate(['/search'], {
      queryParams: { city: this.cityControl.value.id },
      relativeTo: this.route,
      queryParamsHandling: 'merge',
    })
  }
  public onInputChange(): void {
    if (!this.cityControl.value) {
      this.router.navigate([''])
    }
  }
  fetchCities(): void {
    this.cities = this.cityService.getCities()
  }
}
