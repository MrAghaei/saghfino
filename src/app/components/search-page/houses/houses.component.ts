import { Component } from '@angular/core'
import { houses } from '../../../Houses'
import { housesModel } from '../../../housesModel'

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrl: './houses.component.scss',
})
export class HousesComponent {
  housesData: housesModel[] = houses
}
