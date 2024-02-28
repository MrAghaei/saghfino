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

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, SearchPageMainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    HomePageModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageMainComponent,
      },
      {
        path: 'search',
        component: SearchPageMainComponent,
      },
    ]),
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
  exports: [NavbarComponent],
})
export class AppModule {}
