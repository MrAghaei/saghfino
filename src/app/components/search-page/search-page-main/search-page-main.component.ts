// import { Component, OnInit } from '@angular/core'
// import { GetHousesService } from '../../../services/get-houses.service'
// import { housesModel } from '../../../housesModel'
// import { ActivatedRoute } from '@angular/router'
// import { map, Subscription } from 'rxjs'
// import { data } from 'autoprefixer'
//
// @Component({
//   selector: 'app-search-page-main',
//   templateUrl: './search-page-main.component.html',
//   styleUrl: './search-page-main.component.scss',
// })
// export class SearchPageMainComponent implements OnInit {
//   constructor(
//     private getHousesService: GetHousesService,
//     private route: ActivatedRoute,
//   ) {}
//
//   user$!: Subscription
//   cityId!: string
//   housesData!: housesModel[]
//   ngOnInit() {
//     this.subscribeOnQueryParams()
//   }
//   subscribeOnQueryParams() {
//     this.user$ = this.route.queryParams.pipe(map((q) => q['city'])).subscribe((value) => (this.cityId = value))
//     this.getHousesService.getHouses(this.cityId).subscribe((data) => (this.housesData = data))
//   }
// }
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
