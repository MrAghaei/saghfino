import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeNewUserComponent } from './HomeNewUserPage/components/home-new-user/home-new-user.component'

@NgModule({
  declarations: [AppComponent, HomeNewUserComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
