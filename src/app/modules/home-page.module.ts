import { NgModule } from '@angular/core'
import { CategoryCardComponent } from '../components/home-page/category-card/category-card.component'
import { HeaderComponent } from '../components/header/header.component'
import { SearchbarComponent } from '../components/searchbar/searchbar.component'
import { FeatureComponent } from '../components/home-page/feature/feature.component'
import { CategoryComponent } from '../components/home-page/category/category.component'
import { HowWeHelpCardComponent } from '../components/home-page/how-we-help-card/how-we-help-card.component'
import { HowWeHelpComponent } from '../components/home-page/how-we-help/how-we-help.component'
import { HomePageMainComponent } from '../components/home-page/home-page-main/home-page-main.component'

import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { AppModule } from '../app.module'

@NgModule({
  declarations: [
    HomePageMainComponent,
    HeaderComponent,
    SearchbarComponent,
    HowWeHelpComponent,
    HowWeHelpCardComponent,
    CategoryComponent,
    CategoryCardComponent,
    FeatureComponent,
  ],
  imports: [MatInputModule, MatFormFieldModule, MatIconModule],
  exports: [],
})
export class HomePageModule {}
