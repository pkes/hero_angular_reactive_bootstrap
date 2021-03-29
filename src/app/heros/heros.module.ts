import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { HeroListComponent } from './hero-list/hero-list.component'
import { HeroSearchComponent } from './hero-search/hero-search.component'
import { HerosRoutingModule } from './heros-routing.module'
import { LayoutComponent } from './layout/layout.component'

@NgModule({
  declarations: [
    HeroListComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    LayoutComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, HerosRoutingModule],
})
export class HerosModule {}
