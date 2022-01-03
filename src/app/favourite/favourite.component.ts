import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  inputs: ['isFavourite']
})
export class FavouriteComponent implements OnInit {
  @Input('is-favourite') isFavourite:Boolean= false;
  @Output() change = new EventEmitter();

  constructor() { 

  }

  ngOnInit(): void {
  }

  onClick(){
      this.isFavourite = !this.isFavourite;
      this.change.emit({newValue: this.isFavourite});
  }

}

export interface favouriteEventArgs {
  newValue:boolean
} 