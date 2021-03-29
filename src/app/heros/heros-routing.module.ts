import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { HeroListComponent } from './hero-list/hero-list.component'
import { LayoutComponent } from './layout/layout.component'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HeroListComponent, data: { animation: 'hero' } },
      {
        path: 'hero',
        component: HeroDetailComponent,
        data: { animation: 'hero' },
      },
      {
        path: 'hero/:id',
        component: HeroDetailComponent,
        data: { animation: 'hero' },
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HerosRoutingModule {}
