import { Component } from '@angular/core'
import { map } from 'rxjs'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-top-real-estate',
  templateUrl: './top-real-estate.component.html',
  styleUrl: './top-real-estate.component.scss',
})
export class TopRealEstateComponent {
  user$ = this.route.queryParams.pipe(map((q) => q['city']))

  constructor(private route: ActivatedRoute) {}
}
