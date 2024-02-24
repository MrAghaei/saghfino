import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-how-we-help-card',
  templateUrl: './how-we-help-card.component.html',
  styleUrl: './how-we-help-card.component.scss',
})
export class HowWeHelpCardComponent {
  @Input() text!: string
  @Input() header!: string
  @Input() image!: string
  @Input() buttonText!: string
  @Output() onButtonClick: EventEmitter<any> = new EventEmitter<any>()

  onClick(value: string): void {
    this.onButtonClick.emit(value)
  }
}
