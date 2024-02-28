import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-houses-card',
  templateUrl: './houses-card.component.html',
  styleUrl: './houses-card.component.scss',
})
export class HousesCardComponent {
  @Input() image!: string
  @Input() hoursPosted!: string
  @Input() area!: string
  @Input() address!: string
  @Input() rahnPrice!: string
  @Input() ejarePrice!: string
}
