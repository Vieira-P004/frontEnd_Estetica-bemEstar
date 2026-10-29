import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaHistorico } from './tela-historico';

describe('TelaHistorico', () => {
  let component: TelaHistorico;
  let fixture: ComponentFixture<TelaHistorico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaHistorico],
    }).compileComponents();

    fixture = TestBed.createComponent(TelaHistorico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
