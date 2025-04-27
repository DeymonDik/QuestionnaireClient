import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswererComponent } from './answerer.component';

describe('AnswererComponent', () => {
  let component: AnswererComponent;
  let fixture: ComponentFixture<AnswererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswererComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
