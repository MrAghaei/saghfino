import { Component, OnInit, OnDestroy } from '@angular/core'
import { GetHousesService } from '../../../services/get-houses.service'
import { housesModel } from '../../../housesModel'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'

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
    private getHousesService: GetHousesService,
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

  fetchHouses(): void {
    this.getHousesService.getHouses(this.cityId).subscribe((data) => {
      this.housesData = data
    })
  }
  fetchCityNames(): void {
    this.cityName = this.getHousesService.getCityNameById(this.cityId)
  }
}
