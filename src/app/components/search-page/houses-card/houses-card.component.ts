import { Component, Input } from '@angular/core'
import { housesModel } from '../../../housesModel'

@Component({
  selector: 'app-houses-card',
  templateUrl: './houses-card.component.html',
  styleUrls: ['./houses-card.component.scss'], // Corrected property name
})
export class HousesCardComponent {
  @Input() housesCardInputModel!: housesModel
}
