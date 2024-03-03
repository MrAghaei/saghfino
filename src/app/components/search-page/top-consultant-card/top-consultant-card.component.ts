import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-top-consultant-card',
  templateUrl: './top-consultant-card.component.html',
  styleUrl: './top-consultant-card.component.scss',
})
export class TopConsultantCardComponent {
  @Input() image!: string
  @Input() name!: string
  @Input() realEstateName!: string
  @Input() score!: string

  @Output() onTopConsultantCardClick: EventEmitter<any> = new EventEmitter<any>()

  onClick(value: string): void {
    this.onTopConsultantCardClick.emit(value)
  }
}
