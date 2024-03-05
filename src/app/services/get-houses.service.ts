import { Injectable } from '@angular/core'
import { housesModel } from '../housesModel'
import { houses } from '../Houses'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class GetHousesService {
  constructor() {}

  houses: housesModel[] = houses

  getHouses(id: string): Observable<housesModel[]> {
    const newHouses: housesModel[] = houses.filter((house) => house.cityId === id)
    return of(newHouses)
  }
  getCityNameById(id: string): string {
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
}
