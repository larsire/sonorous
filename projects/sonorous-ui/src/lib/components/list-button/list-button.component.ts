import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'sonorous-ui-list-button',
  templateUrl: './list-button.component.html',
  styleUrls: ['./list-button.component.scss'],
})
export class ListButtonComponent implements OnInit {
  @Input() image: string;

  @HostBinding("class.has-children")
  @Input() hasChildren: boolean;

  @HostBinding("class.is-favorite")
  @Input() isFavorite: boolean;

  constructor() { }

  ngOnInit() { }

}
