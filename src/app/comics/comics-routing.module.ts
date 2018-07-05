import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { ComicViewComponent } from './comic-view/comic-view.component';

const routes: Routes = [
  { path: '', component: ComicDetailComponent },
  { path: ':id', component: ComicDetailComponent },
  { path: ':id/:vol', component: ComicViewComponent },
  { path: ':id/:vol/:page', component: ComicViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicRoutingModule { }
