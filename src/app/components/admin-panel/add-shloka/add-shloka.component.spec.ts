import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShlokaComponent } from './add-shloka.component';

describe('AddShlokaComponent', () => {
  let component: AddShlokaComponent;
  let fixture: ComponentFixture<AddShlokaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddShlokaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddShlokaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
