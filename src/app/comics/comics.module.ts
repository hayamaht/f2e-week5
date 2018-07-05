import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MatProgressBarModule,
  MatButtonModule
} from '@angular/material';

import { ComicRoutingModule } from './comics-routing.module';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { ComicViewComponent } from './comic-view/comic-view.component';
import { ComicControlComponent } from './comic-control/comic-control.component';
import { ComicListComponent } from './comic-list/comic-list.component';



@NgModule({
  imports: [
    CommonModule,
    ComicRoutingModule,
    RouterModule,
    MatProgressBarModule,
    MatButtonModule,
  ],
  declarations: [ComicDetailComponent, ComicViewComponent, ComicControlComponent, ComicListComponent]
})
export class ComicsModule { }
