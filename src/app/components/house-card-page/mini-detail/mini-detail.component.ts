import { Component, Input } from '@angular/core'
import { housesModel } from '../../../housesModel'
import { housesDetailModel } from '../../../houses-detailModel'

@Component({
  selector: 'app-mini-detail',
  templateUrl: './mini-detail.component.html',
  styleUrl: './mini-detail.component.scss',
})
export class MiniDetailComponent {
  @Input() house!: housesModel
  @Input() houseDetail!: housesDetailModel
}
