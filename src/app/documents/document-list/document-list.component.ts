import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents = []

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.documents = [
        'document 1',
        'document 2',
        'document 3',
        'document 4',
        'document 5',
      ]
    }, 5000)
  }

}
