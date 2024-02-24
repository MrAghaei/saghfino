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

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    HomePageModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageMainComponent,
      },
    ]),
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
  exports: [NavbarComponent],
})
export class AppModule {}
