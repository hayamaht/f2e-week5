import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../comics-data/comics.service';
import { Observable } from 'rxjs';
import { Comic } from '../comics-data/comic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  comics: Observable<Comic[]>;
  isLoading = true;

  constructor(
    private comicsService: ComicsService
  ) { }

  ngOnInit() {
    this.comics = this.comicsService.getAll();
    this.comics
      .subscribe(_ => this.isLoading = false);
  }

}
