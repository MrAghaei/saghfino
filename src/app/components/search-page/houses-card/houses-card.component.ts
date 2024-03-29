import { Component, Input } from '@angular/core'
import { housesModel } from '../../../housesModel'
import { Router } from '@angular/router'

@Component({
  selector: 'app-houses-card',
  templateUrl: './houses-card.component.html',
  styleUrls: ['./houses-card.component.scss'], // Corrected property name
})
export class HousesCardComponent {
  @Input() housesCardInputModel!: housesModel
  @Input() cityName!: string
  constructor(private router: Router) {}
  public onHouseCardClick(houseId: string): void {
    this.router.navigate(['showmore/housedetail'], { queryParams: { houseId: houseId } })
  }
}
