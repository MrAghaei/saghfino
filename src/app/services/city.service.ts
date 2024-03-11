import { Injectable } from '@angular/core'
export interface City {
  name: string
  id: string
}
@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor() {}
  public getCityNameById(id: string): string {
    switch (id) {
      case '1':
        return 'گیلان'
        break
      case '2':
        return 'تهران'
        break
      case '3':
        return 'شیراز'
        break
      default:
        return ''
    }
  }
  public getCities(): City[] {
    return [
      {
        name: 'گیلان',
        id: '1',
      },
      {
        name: 'تهران',
        id: '2',
      },
      {
        name: 'فارس',
        id: '3',
      },
    ]
  }
}
