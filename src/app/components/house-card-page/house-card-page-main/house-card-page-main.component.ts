import { Component } from '@angular/core'
import { Subscription } from 'rxjs'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-house-card-page-main',
  templateUrl: './house-card-page-main.component.html',
  styleUrl: './house-card-page-main.component.scss',
})
export class HouseCardPageMainComponent {
  private queryParamsSubscription: Subscription | undefined
  houseId!: string
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.queryParamsSubscription = this.route.queryParams.subscribe((params) => {
      this.houseId = params['houseId'] || ''
    })
  }
  ngOnDestroy() {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe()
    }
  }
}
