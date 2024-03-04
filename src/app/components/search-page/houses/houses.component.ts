import { Component, Input } from '@angular/core'
import { houses } from '../../../Houses'
import { housesModel } from '../../../housesModel'
import { map } from 'rxjs'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrl: './houses.component.scss',
})
export class HousesComponent {
  @Input() housesData!: housesModel[]
  user$ = this.route.queryParams.pipe(map((q) => q['city']))

  constructor(private route: ActivatedRoute) {}
}
