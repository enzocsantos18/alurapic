import { PhotoService } from './../photo/photo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators'

import { Photo } from './../photo/photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html'
})
export class PhotoListComponent implements OnInit{

  filter: string = '';
  photos: Photo[] = [];
  debounce: Subject<string> = new Subject<string>();
  username: string = '';
  hasMore: boolean = true;
  page: number = 1;

  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) {

  }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data.photos;
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.filter = filter);
  }

  more() {
    this.photoService.listFromUserPaginated(this.username, this.page++)
    .subscribe(photos => {
      this.photos = this.photos.concat(...photos);
      if(!photos.length) this.hasMore = false;

    })
  }


}
