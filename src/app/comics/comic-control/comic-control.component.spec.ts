import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicControlComponent } from './comic-control.component';

describe('ComicControlComponent', () => {
  let component: ComicControlComponent;
  let fixture: ComponentFixture<ComicControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
