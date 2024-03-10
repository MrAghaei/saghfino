import { Component, Input } from '@angular/core'
import { housesDetailModel } from '../../../houses-detailModel'
import { housesDetail } from '../../../houses-detail'

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrl: './equipments.component.scss',
})
export class EquipmentsComponent {
  @Input() houseDetail!: housesDetailModel
}
