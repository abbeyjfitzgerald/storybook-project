import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewscardComponent } from './newscard/newscard.component';
import { NewscardActionsComponent } from './newscard-actions/newscard-actions.component';
import { NewsListComponent } from './news-list/news-list.component';
import { UnorderedListComponent } from './unordered-list/unordered-list.component';
import { UnorderedListLoadingComponent } from './unordered-list-loading/unordered-list-loading.component';
import { ButtonComponent } from './button/button.component';
import { WorkCardComponent } from './work-cards/work-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NewscardComponent,
    NewscardActionsComponent,
    NewsListComponent,
    UnorderedListComponent,
    UnorderedListLoadingComponent,
    ButtonComponent,
    WorkCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
