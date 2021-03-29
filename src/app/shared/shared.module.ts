import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SortByDirective } from './directives/sort-by.directive'

@NgModule({
  declarations: [SortByDirective],
  imports: [CommonModule],
})
export class SharedModule {}
