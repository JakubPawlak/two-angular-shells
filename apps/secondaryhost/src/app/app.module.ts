import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { setRemoteDefinitions } from '@nx/angular/mf';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    setRemoteDefinitions({
      myremote: 'http://localhost:4202',
    });
  }
}
