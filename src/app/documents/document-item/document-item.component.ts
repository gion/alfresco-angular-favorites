import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.css']
})

export class DocumentItemComponent implements OnInit {
  @Input() name: string

  constructor() { }

  ngOnInit() {
  }

}
