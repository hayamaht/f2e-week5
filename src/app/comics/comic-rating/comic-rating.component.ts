import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comic-rating',
  templateUrl: './comic-rating.component.html',
  styleUrls: ['./comic-rating.component.scss']
})
export class ComicRatingComponent {

  @Input() rating = 0;

  constructor() { }
}
