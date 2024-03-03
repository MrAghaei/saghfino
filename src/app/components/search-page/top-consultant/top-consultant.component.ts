import { Component } from '@angular/core'
import { map } from 'rxjs'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-top-consultant',
  templateUrl: './top-consultant.component.html',
  styleUrl: './top-consultant.component.scss',
})
export class TopConsultantComponent {
  user$ = this.route.queryParams.pipe(map((q) => q['city']))

  constructor(private route: ActivatedRoute) {}
}
