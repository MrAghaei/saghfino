import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LandingPageComponent } from '../components/landing-page/landing-page.component'
import { RouterModule } from '@angular/router'
import { HomePageMainComponent } from '../components/home-page/home-page-main/home-page-main.component'
import { SearchPageMainComponent } from '../components/search-page/search-page-main/search-page-main.component'
import { HomePageModule } from './home-page.module'

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LandingPageComponent,
        children: [
          {
            path: '',
            component: HomePageMainComponent,
          },
          {
            path: 'search',
            component: SearchPageMainComponent,
          },
        ],
      },
    ]),
    HomePageModule,
  ],
})
export class LandingPageModule {}
