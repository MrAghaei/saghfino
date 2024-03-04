import { Component, OnInit } from '@angular/core'
import { GetHousesService } from '../../../services/get-houses.service'
import { housesModel } from '../../../housesModel'
import { ActivatedRoute } from '@angular/router'
import { map, Subscription } from 'rxjs'

@Component({
  selector: 'app-search-page-main',
  templateUrl: './search-page-main.component.html',
  styleUrl: './search-page-main.component.scss',
})
export class SearchPageMainComponent implements OnInit {
  constructor(
    private getHousesService: GetHousesService,
    private route: ActivatedRoute,
  ) {}

  user$!: Subscription
  cityId!: string
  housesData!: housesModel[]
  ngOnInit() {
    this.subscribeOnQueryParams()
  }
  subscribeOnQueryParams() {
    this.user$ = this.route.queryParams.pipe(map((q) => q['city'])).subscribe((value) => (this.cityId = value))
    this.housesData = this.getHousesService.getHouses(this.cityId)
  }
}
