import { Injectable } from '@angular/core'
import { housesModel } from '../housesModel'
import { houses } from '../Houses'

@Injectable({
  providedIn: 'root',
})
export class GetHousesService {
  constructor() {}

  houses: housesModel[] = houses

  getHouses(id: string): housesModel[] {
    const newHouses: housesModel[] = houses.filter((house) => house.id === id)
    return newHouses
  }
}
