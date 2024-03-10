import { Component, Input } from '@angular/core'
import { housesModel } from '../../../housesModel'
import { housesDetailModel } from '../../../houses-detailModel'

@Component({
  selector: 'app-main-detail',
  templateUrl: './main-detail.component.html',
  styleUrl: './main-detail.component.scss',
})
export class MainDetailComponent {
  @Input() house!: housesModel
  @Input() houseDetail!: housesDetailModel
}
