import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoFormComponent } from './photo-form/photo-form.component';
import { FilterByDescription } from './photo-list/filter-by-description.pipe';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { PhotoComponent } from './photo/photo.component';
import { LoadMoreButtonComponent } from './photo-list/load-more-button/load-more-button.component';

@NgModule({
  declarations: [PhotoComponent, PhotoListComponent, PhotoFormComponent, PhotosComponent, FilterByDescription, LoadMoreButtonComponent],
  exports: [PhotoListComponent],
  imports: [HttpClientModule, CommonModule]
})
export class PhotosModule{

}
