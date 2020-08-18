import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { BooksService } from './booksservice';
import { Book } from './book';
import {SelectItem, MessageService} from 'primeng/api';
import {DataView} from 'primeng/dataview'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  data:Book[];
  books: Book[];  
  selectedBook: Book;
  displayDialog: boolean;
  sortOptions: SelectItem[];
  sortKey: string;
  sortField: string;
  sortOrder: number;
  searchData:any;
  clearFilterbtn:boolean = false

  constructor(private booksService: BooksService, private messageService:MessageService) { }
  
  ngOnInit() {
      this.booksService.getBookssLarge()
      .then(books => this.data = books)
      .then(()=>{
        if(history.state.data){
            this.clearFilterbtn = true;
            this.books = this.data.filter((value) => {
                return value.category === history.state.data;
            })
            if(this.books.length>0){this.messageService.add({severity: 'success', summary: 'Filter by', detail: `"${history.state.data}" results:`});}
            else{this.messageService.add({severity: 'error', summary: 'No Data available for Category ', detail: `"${history.state.data}".`});}
        }else
            {this.books = this.data}
      });
      
      this.sortOptions = [
          {label: 'Newest First', value: '!published'},
          {label: 'Oldest First', value: 'published'},
          {label: 'Category', value: 'category'}
      ];
      }
  onSortChange(event) {
      let value = event.value;
      if (value.indexOf('!') === 0) {
          this.sortOrder = -1;
          this.sortField = value.substring(1, value.length);
      }
      else {
          this.sortOrder = 1;
          this.sortField = value;
      }
  }
  clearFilter(){
      this.books = this.data;
  }
  onDialogHide() {
      this.selectedBook = null;
  }
  handleClickClearFilter(event){
    this.books = this.data;
    this.clearFilterbtn = false;
    this.messageService.clear();
  }
}
