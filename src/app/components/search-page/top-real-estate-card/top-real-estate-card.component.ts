import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-top-real-estate-card',
  templateUrl: './top-real-estate-card.component.html',
  styleUrl: './top-real-estate-card.component.scss',
})
export class TopRealEstateCardComponent {
  @Input() image!: string
  @Input() name!: string
  @Input() location!: string
  @Input() score!: string
  @Input() activeAds!: string
  @Input() reviewNum!: string

  @Output() onRealEstateCardClick: EventEmitter<any> = new EventEmitter<any>()

  onClick(value: string): void {
    this.onRealEstateCardClick.emit(value)
  }
}
