import { Component, OnInit } from '@angular/core'
import {
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { first } from 'rxjs/operators'
import { Hero } from '../../models/hero'
import { AlertService, HeroService } from '../../services'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit {
  hero!: Hero
  form!: FormGroup
  id!: string
  isAddMode!: boolean
  loading = false
  submitted = false

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService,
    private alertService: AlertService,
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.isAddMode = !this.id

    const passwordValidators = [Validators.minLength(6)]
    if (this.isAddMode) {
      passwordValidators.push(Validators.required)
    }

    const formOptions: AbstractControlOptions = {
      //  validators: MustMatch('password', 'confirmPassword'),
    }
    this.form = this.formBuilder.group(
      {
        id: [''],
        name: ['', Validators.required],
      },
      formOptions,
    )

    if (!this.isAddMode) {
      this.heroService
        .getById(this.id)
        .pipe(first())
        .subscribe((x) => {
          this.form.patchValue(x)
          this.hero = x
        })
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls
  }

  onSubmit() {
    this.submitted = true
    this.alertService.clear()

    if (this.form.invalid) {
      return
    }

    this.loading = true
    if (this.isAddMode) {
      this.createHero()
    } else {
      this.updateHero()
    }
  }

  private createHero() {
    this.heroService
      .create(this.form.value)
      .pipe(first())
      .subscribe(() => {
        this.alertService.success('Hero added', { keepAfterRouteChange: true })
        this.router.navigate(['../'], { relativeTo: this.route })
      })
      .add(() => (this.loading = false))
  }

  private updateHero() {
    this.heroService
      .update(this.form.value)
      .pipe(first())
      .subscribe(() => {
        this.alertService.success('Hero updated', {
          keepAfterRouteChange: true,
        })
        this.router.navigate(['../../'], { relativeTo: this.route })
      })
      .add(() => (this.loading = false))
  }
}
