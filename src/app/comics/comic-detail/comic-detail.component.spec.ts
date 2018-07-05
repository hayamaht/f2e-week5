import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicDetailComponent } from './comic-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule, MatButtonModule } from '@angular/material';
import { ComicRoutingModule } from '../comics-routing.module';

describe('ComicDetailComponent', () => {
  let component: ComicDetailComponent;
  let fixture: ComponentFixture<ComicDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicDetailComponent ],
      imports: [
        MatProgressBarModule,
        MatButtonModule,
        HttpClientModule,
        ComicRoutingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
