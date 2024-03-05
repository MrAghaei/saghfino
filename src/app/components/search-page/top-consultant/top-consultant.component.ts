import { Component, Input } from '@angular/core'
import { map } from 'rxjs'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-top-consultant',
  templateUrl: './top-consultant.component.html',
  styleUrl: './top-consultant.component.scss',
})
export class TopConsultantComponent {
  @Input() cityName!: string
}
