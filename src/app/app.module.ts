import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
// import {OneComponent} from './one/one.component';
// import {TwoComponent} from './two/two.component';
// import {ThreeComponent} from './three/three.component';
import {OneModule} from './one/one.module';
import {TwoModule} from './two/two.module';
import {ThreeModule} from './three/three.module';
import {OneComponent} from './one/one.component';
import {TwoComponent} from './two/two.component';
import {ThreeComponent} from './three/three.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const routes: Routes = [
  {path: 'one', component: OneComponent },
  {path: 'two', component: TwoComponent },
  {path: 'three', component: ThreeComponent },
  {path: '', redirectTo: 'one', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    OneModule, TwoModule, ThreeModule,
    BrowserModule, RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
