import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { ActivatedRoute } from '@angular/router'
import { housesModel } from '../../../housesModel'
import { HousesService } from '../../../services/houses.service'
import { housesDetailModel } from '../../../houses-detailModel'
import { CityService } from '../../../services/city.service'

@Component({
  selector: 'app-house-card-page-main',
  templateUrl: './house-card-page-main.component.html',
  styleUrl: './house-card-page-main.component.scss',
})
export class HouseCardPageMainComponent implements OnInit, OnDestroy {
  public cityName!: string
  public house!: housesModel
  public houseDetail!: housesDetailModel

  private queryParamsSubscription: Subscription | undefined
  private houseId!: string
  constructor(
    private housesService: HousesService,
    private cityService: CityService,
    private route: ActivatedRoute,
  ) {}
  ngOnInit() {
    this.queryParamsSubscription = this.route.queryParams.subscribe((params) => {
      this.houseId = params['houseId'] || ''
      this.fetchHouseById()
      this.fetchCityName()
      this.fetchHouseDetails()
    })
  }
  ngOnDestroy() {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe()
    }
  }
  private fetchHouseById(): void {
    this.house = this.housesService.getHouseById(this.houseId)
  }
  private fetchCityName(): void {
    this.cityName = this.cityService.getCityNameById(this.houseId)
  }
  private fetchHouseDetails(): void {
    this.houseDetail = this.housesService.getHousesDetailById(this.houseId)
  }
}
