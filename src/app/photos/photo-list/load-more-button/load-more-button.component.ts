import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ap-load-more-button',
  templateUrl: './load-more-button.component.html',
})
export class LoadMoreButtonComponent implements OnInit {

  @Input() hasMore: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
