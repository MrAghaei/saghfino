import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss',
})
export class BlogCardComponent {
  @Input() title!: string
  @Input() image!: string
  @Output() onBlogCardClick: EventEmitter<any> = new EventEmitter<any>()

  onClick(value: string): void {
    this.onBlogCardClick.emit(value)
  }
}
