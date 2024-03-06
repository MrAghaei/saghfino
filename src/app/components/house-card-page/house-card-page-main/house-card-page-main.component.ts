import { Component } from '@angular/core'
import { Subscription } from 'rxjs'
import { ActivatedRoute } from '@angular/router'
import { housesModel } from '../../../housesModel'
import { GetHousesService } from '../../../services/get-houses.service'

@Component({
  selector: 'app-house-card-page-main',
  templateUrl: './house-card-page-main.component.html',
  styleUrl: './house-card-page-main.component.scss',
})
export class HouseCardPageMainComponent {
  private queryParamsSubscription: Subscription | undefined
  house!: housesModel
  houseId!: string
  constructor(
    private route: ActivatedRoute,
    private getHouses: GetHousesService,
  ) {}
  ngOnInit() {
    this.queryParamsSubscription = this.route.queryParams.subscribe((params) => {
      this.houseId = params['houseId'] || ''
      this.fetchHouseById()
      console.log(this.house)
    })
  }
  ngOnDestroy() {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe()
    }
  }
  fetchHouseById(): void {
    this.house = this.getHouses.getHouseById(this.houseId)
  }
}