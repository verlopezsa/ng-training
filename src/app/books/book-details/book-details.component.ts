import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book: Book;

  constructor() { 
    this.book = new Book();
  }

  ngOnInit() {
    this.book.authors = 'Julia Navarro';
    this.book.title = 'Dime quien soy';
  }

}
