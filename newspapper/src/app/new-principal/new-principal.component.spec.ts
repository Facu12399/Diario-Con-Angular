import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPrincipalComponent } from './new-principal.component';

describe('NewPrincipalComponent', () => {
  let component: NewPrincipalComponent;
  let fixture: ComponentFixture<NewPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
