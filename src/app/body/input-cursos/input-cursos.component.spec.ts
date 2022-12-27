import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCursosComponent } from './input-cursos.component';

describe('InputCursosComponent', () => {
  let component: InputCursosComponent;
  let fixture: ComponentFixture<InputCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});






