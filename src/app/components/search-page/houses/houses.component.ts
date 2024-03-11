import { Component, Input } from '@angular/core'
import { houses } from '../../../houses'
import { housesModel } from '../../../housesModel'
import { map } from 'rxjs'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrl: './houses.component.scss',
})
export class HousesComponent {
  @Input() housesData!: housesModel[]
  @Input() cityName!: string

  constructor(private router: Router) {}
  public onSeeMoreClick(): void {
    this.router.navigate(['showmore'], { queryParamsHandling: 'merge' })
  }
}
