import { Component, OnInit, Input } from '@angular/core';
import { ComicsService } from '../../comics-data/comics.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ComicVolumn } from '../../comics-data/comic-volumn';
import { Comic } from '../../comics-data/comic';

@Component({
  selector: 'app-comic-view',
  templateUrl: './comic-view.component.html',
  styleUrls: ['./comic-view.component.scss']
})
export class ComicViewComponent implements OnInit {

  @Input() comic: Comic;
  volumn: ComicVolumn;
  light = 'on';
  currentPage = 1;
  currentVol = -1;

  constructor(
    private route: ActivatedRoute,
    private comicsService: ComicsService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getComic();
  }

  private getComic() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.currentVol = +this.route.snapshot.paramMap.get('vol') || 1;
    this.comicsService
      .getById(id)
      .subscribe(comic => {
        this.comic = comic;
        this.volumn = this.comic.volumns.filter(v => v.vol === this.currentVol)[0];
      });
  }

  goBack() {
    this.location.back();
  }

  nextPage() {
    this.gotoPage(this.currentPage + 1);
  }

  prevPage() {
    this.gotoPage(this.currentPage - 1);
  }

  gotoPage(page: number) {
    this.currentPage = (page >= this.volumn.pages.length) ? this.volumn.pages.length :
      (page <= 0) ? 1 : page;
  }

}
