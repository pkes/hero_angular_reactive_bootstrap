import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HerosModule } from './heros/heros.module'
import { HomeComponent } from './home/home.component'
import { InMemoryDataService } from './services'
import { AlertComponent } from './shared/components/alert/alert.component'
import { FooterComponent } from './shared/components/footer/footer.component'
import { NavTabComponent } from './shared/components/tab/tab.component'
import { SharedModule } from './shared/shared.module'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HerosModule,
    SharedModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    FooterComponent,
    NavTabComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
