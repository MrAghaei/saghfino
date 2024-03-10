import { Component, OnDestroy, OnInit } from '@angular/core'
import { HousesService } from '../../../services/houses.service'
import { ActivatedRoute } from '@angular/router'
import { housesModel } from '../../../housesModel'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-show-more-page-main',
  templateUrl: './show-more-page-main.component.html',
  styleUrl: './show-more-page-main.component.scss',
})
export class ShowMorePageMainComponent implements OnInit, OnDestroy {
  public housesData: housesModel[] = []

  private cityId!: string
  private queryParamsSubscription: Subscription | undefined
  private cityName!: string
  constructor(
    private getHousesService: HousesService,
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
