import { Component, OnInit, Input } from '@angular/core';
import { ComicsService } from '../../comics-data/comics.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ComicVolume } from '../../comics-data/comic-volume';
import { Comic } from '../../comics-data/comic';

@Component({
  selector: 'app-comic-view',
  templateUrl: './comic-view.component.html',
  styleUrls: ['./comic-view.component.scss']
})
export class ComicViewComponent implements OnInit {

  @Input() comic: Comic;
  volume: ComicVolume;
  light = 'on';
  currentPage = 1;
  currentVol = -1;
  private maxVol = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private comicsService: ComicsService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getComic();
  }

  onVolChange(vol: number) {
    const v = vol < 1 ? 1 :
      vol > this.maxVol ? this.maxVol : vol;
    this.router.navigate([`/comic/${this.comic.id}/${v}`]);
    this.gotoVol(this.comic.id, v);
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
    this.currentPage = (page >= this.volume.pages.length) ? this.volume.pages.length :
      (page <= 0) ? 1 : page;
  }

  private gotoVol(id: number, vol: number) {
    if (this.comic && (id === this.comic.id && vol === this.currentVol)) {
      return;
    }

    this.comicsService
      .getById(id)
      .subscribe(comic => {
        this.comic = comic;
        this.maxVol = Math.max.apply(null, this.comic.volumes.map(v => v.vol));
        const volume = this.comic.volumes.filter(v => v.vol === vol)[0];
        if (volume) {
          this.currentVol = vol;
          this.volume = volume;
        } else {
          this.volume = this.comic.volumes[0];
          this.currentVol = this.volume.vol;
        }
      });
  }

  private getComic() {
    const id = +this.route.snapshot.paramMap.get('id');
    const vol = +this.route.snapshot.paramMap.get('vol') || 1;
    this.gotoVol(id, vol);
  }
}
