import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { BooksComponent } from './books/books.component';
import { CategoryComponent } from './category/category.component';
import {CategoryService } from './category/categoryservice'

import { AppComponent }   from './app.component';
import { BooksService } from './books/booksservice';

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { TabMenuModule } from 'primeng/tabmenu';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {MessageService} from 'primeng/api';
import {TreeModule} from 'primeng/tree';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    MessageModule,
    MessagesModule,
    TabMenuModule,
    TableModule,
    CardModule,
    TreeModule,
    RouterModule.forRoot([
				{path:'', redirectTo:'books', pathMatch:'full'},
				{path:'books',component: BooksComponent},
				{path:'category',component: CategoryComponent}
		])
  ],
  declarations: [ AppComponent, BooksComponent, CategoryComponent, BooksComponent, CategoryComponent ],
  providers: [BooksService,CategoryService, MessageService],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
