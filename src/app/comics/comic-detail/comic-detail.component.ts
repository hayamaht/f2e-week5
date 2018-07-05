import { Component, OnInit, Input } from '@angular/core';
import { ComicsService } from '../../comics-data/comics.service';
import { Comic } from '../../comics-data/comic';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.scss']
})
export class ComicDetailComponent implements OnInit {

  @Input() comic: Comic;

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
    this.comicsService
      .getById(id)
      .subscribe(comic => this.comic = comic);
  }

  goBack() {
    this.location.back();
  }

}
