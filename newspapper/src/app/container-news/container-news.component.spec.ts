import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerNewsComponent } from './container-news.component';

describe('ContainerNewsComponent', () => {
  let component: ContainerNewsComponent;
  let fixture: ComponentFixture<ContainerNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
