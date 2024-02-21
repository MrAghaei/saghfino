import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeNewUserComponent } from './HomeNewUserPage/components/home-new-user/home-new-user.component'
import { HeaderComponent } from './components/header/header.component'
import { NgOptimizedImage } from '@angular/common'

@NgModule({
  declarations: [AppComponent, HomeNewUserComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, NgOptimizedImage],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
