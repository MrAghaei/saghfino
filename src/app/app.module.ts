import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeNewUserComponent } from './HomeNewUserPage/components/home-new-user/home-new-user.component'
import { HeaderComponent } from './components/header/header.component'
import { NgOptimizedImage } from '@angular/common'
import { NavbarComponent } from './components/navbar/navbar.component'
import { SearchbarComponent } from './components/searchbar/searchbar.component'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'

import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { HowWeHelpComponent } from './HomeNewUserPage/components/how-we-help/how-we-help.component'
import { HowWeHelpCardComponent } from './HomeNewUserPage/components/how-we-help-card/how-we-help-card.component';
import { CategoryComponent } from './HomeNewUserPage/components/category/category.component';
import { CategoryCardComponent } from './HomeNewUserPage/components/category-card/category-card.component';
import { FeatureComponent } from './HomeNewUserPage/components/feature/feature.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeNewUserComponent,
    HeaderComponent,
    NavbarComponent,
    SearchbarComponent,
    HowWeHelpComponent,
    HowWeHelpCardComponent,
    CategoryComponent,
    CategoryCardComponent,
    FeatureComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgOptimizedImage, MatInputModule, MatFormFieldModule, MatIconModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
