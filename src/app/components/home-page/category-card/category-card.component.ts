import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss',
})
export class CategoryCardComponent {
  @Input() image!: string
  @Input() houseAmount!: string
  @Input() title!: string
  @Output() onCardClick: EventEmitter<any> = new EventEmitter<any>()

  public onClick(value: string): void {
    this.onCardClick.emit(value)
  }
}
