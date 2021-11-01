import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from './../photo/photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html'
})
export class PhotoListComponent implements OnInit{

  filter: string = '';
  photos: Photo[] = [];

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data.photos;
  }
}
