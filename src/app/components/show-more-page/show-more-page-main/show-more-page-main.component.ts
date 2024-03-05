import { Component } from '@angular/core'
import { GetHousesService } from '../../../services/get-houses.service'
import { ActivatedRoute } from '@angular/router'
import { housesModel } from '../../../housesModel'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-show-more-page-main',
  templateUrl: './show-more-page-main.component.html',
  styleUrl: './show-more-page-main.component.scss',
})
export class ShowMorePageMainComponent {
  constructor(
    private getHousesService: GetHousesService,
    private route: ActivatedRoute,
  ) {}

  cityId!: string
  housesData: housesModel[] = []
  private queryParamsSubscription: Subscription | undefined
  cityName!: string

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
