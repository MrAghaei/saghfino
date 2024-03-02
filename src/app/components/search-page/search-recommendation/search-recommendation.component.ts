import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-search-recommendation',
  templateUrl: './search-recommendation.component.html',
  styleUrl: './search-recommendation.component.scss',
})
export class SearchRecommendationComponent {
  searches: string[] = [
    'ظفر',
    'دولت',
    'قلھک',
    'قيطريه',
    'الھیه',
    'دروس',
    'امانیه',
    'نياوران',
    'فرمانيه',
    'ولنجك',
    'پونک',
    'نارمک',
  ]
  @Output() onClickSearches: EventEmitter<any> = new EventEmitter<any>()

  onClick(value: string): void {
    this.onClickSearches.emit(value)
  }
}
