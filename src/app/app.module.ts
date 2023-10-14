import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

// NGRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { todoReducer } from './todo/reducers/todo.reducers'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { LoadingComponent } from './loading/loading.component';
import { filterReducer } from './filters/filters.reducers';
import { FooterComponent } from './layouts/footer/footer.component';
import { FilterPipe } from './todo/filter/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    LoadingComponent,
    FooterComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      todo: todoReducer,
      filter: filterReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
