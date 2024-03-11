import { Component, OnInit, OnDestroy } from '@angular/core'
import { HousesService } from '../../../services/houses.service'
import { housesModel } from '../../../housesModel'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'
import { CityService } from '../../../services/city.service'

@Component({
  selector: 'app-search-page-main',
  templateUrl: './search-page-main.component.html',
  styleUrls: ['./search-page-main.component.scss'], // Corrected property name
})
export class SearchPageMainComponent implements OnInit, OnDestroy {
  public cityName!: string
  public housesData: housesModel[] = []

  private cityId!: string
  private queryParamsSubscription: Subscription | undefined
  constructor(
    private houseService: HousesService,
    private cityService: CityService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.queryParamsSubscription = this.route.queryParams.subscribe((params) => {
      this.cityId = params['city'] || ''
      this.fetchHouses()
      this.fetchCityNames()
    })
  }

  ngOnDestroy() {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe()
    }
  }

  private fetchHouses(): void {
    this.houseService.getHouses(this.cityId).subscribe((data) => {
      this.housesData = data
    })
  }
  private fetchCityNames(): void {
    this.cityName = this.cityService.getCityNameById(this.cityId)
  }
}
