import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-top-consultant',
  templateUrl: './top-consultant.component.html',
  styleUrl: './top-consultant.component.scss',
})
export class TopConsultantComponent {
  @Input() cityName!: string
}
