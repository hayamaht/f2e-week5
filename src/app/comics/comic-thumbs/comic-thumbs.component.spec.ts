import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicThumbsComponent } from './comic-thumbs.component';

describe('ComicThumbsComponent', () => {
  let component: ComicThumbsComponent;
  let fixture: ComponentFixture<ComicThumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicThumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicThumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
