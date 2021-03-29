import { Component, OnInit } from '@angular/core'
import { first } from 'rxjs/operators'
import { HeroService } from '../../services'

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
})
export class HeroListComponent implements OnInit {
  heros!: any
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroService
      .getAll()
      .pipe(first())
      .subscribe((heros) => (this.heros = heros))
  }

  deleteHero(id: string) {
    const hero = this.heros.find((x: { id: string }) => x.id === id)
    if (!hero) return
    hero.isDeleting = true
    this.heroService
      .delete(id)
      .pipe(first())
      .subscribe(
        () =>
          (this.heros = this.heros.filter((x: { id: string }) => x.id !== id)),
      )
  }
}
