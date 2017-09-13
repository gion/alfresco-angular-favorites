import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.css']
})

export class DocumentItemComponent implements OnInit {
  public type: string
  private _name: string

  private _updateType(name: string) {
    let extension = name.split('.')[1]

    if (extension) {
      this.type = 'file'
    } else {
      this.type = 'directory'
    }
  }

  get name(): string {
    return this._name
  }

  @Input()
  set name(name: string) {
    this._name = name
    this._updateType(name)
  }

  constructor() { }

  ngOnInit() {
  }

}
