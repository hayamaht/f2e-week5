import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicRatingComponent } from './comic-rating.component';

describe('ComicRatingComponent', () => {
  let component: ComicRatingComponent;
  let fixture: ComponentFixture<ComicRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
