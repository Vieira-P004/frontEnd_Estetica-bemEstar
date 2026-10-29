import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tela01 } from './tela01';

describe('Tela01', () => {
  let component: Tela01;
  let fixture: ComponentFixture<Tela01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tela01],
    }).compileComponents();

    fixture = TestBed.createComponent(Tela01);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
