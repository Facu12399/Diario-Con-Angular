import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionColumnComponent } from './opinion-column.component';

describe('OpinionColumnComponent', () => {
  let component: OpinionColumnComponent;
  let fixture: ComponentFixture<OpinionColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpinionColumnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpinionColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
