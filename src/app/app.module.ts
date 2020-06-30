import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticlesModule } from './articles/articles.module';
import { CoreModule } from './core-module/core-module';
import {RouterModule} from "@angular/router";
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  
    BrowserModule,
    ArticlesModule,
    CoreModule,
    RouterModule.forRoot([
      {path: 'articles', component: <any>ArticlesListComponent}
    ])

  ],
  providers: [ArticlesListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
