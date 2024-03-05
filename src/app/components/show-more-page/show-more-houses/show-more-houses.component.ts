import { Component, Input } from '@angular/core'
import { housesModel } from '../../../housesModel'

@Component({
  selector: 'app-show-more-houses',
  templateUrl: './show-more-houses.component.html',
  styleUrl: './show-more-houses.component.scss',
})
export class ShowMoreHousesComponent {
  @Input() housesData!: housesModel[]
  @Input() cityName!: string
}
