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
    const newHouses: housesModel[] = houses.filter((house) => house.id === id)
    return of(newHouses)
  }
}
