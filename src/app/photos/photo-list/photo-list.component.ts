import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhotoService } from '../photo/photo.service';
import { Photo } from './../photo/photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html'
})
export class PhotoListComponent implements OnInit{

  photos: Photo[] = [];

  constructor(private photoService: PhotoService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    const {userName} = this.activatedRoute.snapshot.params;

    this.photoService
      .listFromUser(userName)
      .subscribe(photos => this.photos = photos);
  }

}
