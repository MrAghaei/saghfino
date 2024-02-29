import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { NgOptimizedImage } from '@angular/common'

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'

import { HomePageModule } from './modules/home-page.module'
import { NavbarComponent } from './components/navbar/navbar.component'
import { RouterModule } from '@angular/router'
import { HomePageMainComponent } from './components/home-page/home-page-main/home-page-main.component'
import { BlogComponent } from './components/home-page/blog/blog.component'
import { BlogCardComponent } from './components/home-page/blog-card/blog-card.component'
import { FooterComponent } from './components/footer/footer.component'
import { SearchPageMainComponent } from './components/search-page/search-page-main/search-page-main.component'

import { MatSelectModule } from '@angular/material/select'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatInputModule } from '@angular/material/input'
import { HousesComponent } from './components/search-page/houses/houses.component'
import { HousesCardComponent } from './components/search-page/houses-card/houses-card.component'
import { MatIcon } from '@angular/material/icon'
import { LandingPageComponent } from './components/landing-page/landing-page.component'
import { LandingPageModule } from './modules/landing-page.module'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchPageMainComponent,
    HousesComponent,
    HousesCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    HomePageModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    LandingPageModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LandingPageComponent,
      },
    ]),
    MatIcon,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
  exports: [NavbarComponent],
})
export class AppModule {}
