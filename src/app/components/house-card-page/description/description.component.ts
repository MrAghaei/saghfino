import { Component, Input } from '@angular/core'
import { housesDetailModel } from '../../../houses-detailModel'

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss',
})
export class DescriptionComponent {
  @Input() houseDetail!: housesDetailModel
}
