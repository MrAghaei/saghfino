import { Component, Input } from '@angular/core'
import { housesModel } from '../../../housesModel'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
})
export class LocationComponent {
  @Input() house!: housesModel
}
