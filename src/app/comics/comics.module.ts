import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  MatProgressBarModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatButtonToggleModule
} from '@angular/material';

import { ComicRoutingModule } from './comics-routing.module';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { ComicViewComponent } from './comic-view/comic-view.component';
import { ComicControlComponent } from './comic-control/comic-control.component';
import { ComicListComponent } from './comic-list/comic-list.component';
import { FormsModule } from '@angular/forms';
import { ComicThumbsComponent } from './comic-thumbs/comic-thumbs.component';

@NgModule({
  imports: [
    CommonModule,
    ComicRoutingModule,
    RouterModule,
    FormsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonToggleModule,
  ],
  declarations: [
    ComicDetailComponent,
    ComicViewComponent,
    ComicControlComponent,
    ComicListComponent,
    ComicThumbsComponent
  ]
})
export class ComicsModule { }
