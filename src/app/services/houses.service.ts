import { Injectable } from '@angular/core'
import { housesModel } from '../housesModel'
import { houses } from '../houses'
import { Observable, of } from 'rxjs'
import { housesDetailModel } from '../houses-detailModel'
import { housesDetail } from '../houses-detail'

@Injectable({
  providedIn: 'root',
})
export class HousesService {
  constructor() {}

  public getHouses(id: string): Observable<housesModel[]> {
    const newHouses: housesModel[] = houses.filter((house) => house.cityId === id)
    return of(newHouses)
  }
  public getHouseById(id: string): housesModel {
    const house: housesModel[] = houses.filter((house) => house.houseId === id)
    return house[0]
  }
  public getHousesDetailById(id: string) {
    const houseDetail: housesDetailModel[] = housesDetail.filter((detail) => detail.houseId === id)
    return houseDetail[0]
  }
}
