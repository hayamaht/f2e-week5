import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Comic } from '../../comics-data/comic';

@Component({
  selector: 'app-comic-thumbs',
  templateUrl: './comic-thumbs.component.html',
  styleUrls: ['./comic-thumbs.component.scss']
})
export class ComicThumbsComponent implements OnChanges {

  @Input() comic: Comic;
  @Input() pages: string[];
  @Input() currentVol = 1;
  @Output() currentVolChange = new EventEmitter();
  @Input() currentPage: number;
  @Output() currentPageChange = new EventEmitter();
  @ViewChild('pagesList') pagesRef:ElementRef;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.currentPage) {
      const p = changes.currentPage.currentValue;
      const d = p - changes.currentPage.previousValue;
      if (p > 3 && d > 0) {
        this.pagesRef.nativeElement.scrollLeft += 100;
      }

      if (p < this.pages.length - 2 && d < 0) {
        this.pagesRef.nativeElement.scrollLeft -= 100;
      }
    }
  }

  gotoVol(vol: number) {
    this.currentVol = vol;
    this.currentVolChange.emit(this.currentVol);
  }

  prevVol() {
    this.gotoVol(this.currentVol - 1);
  }

  nextVol() {
    this.gotoVol(this.currentVol + 1);
  }

  gotoPage(page: number) {
    this.currentPage = page <= 0 ? 1 :
      page >= this.pages.length ? this.pages.length : page;

    this.currentPageChange.emit(this.currentPage);
  }

  onClickPage(event: Event) {
    const p = +(event.currentTarget as HTMLElement).getAttribute('data-page');
    this.gotoPage(p);
  }
}
