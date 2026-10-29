import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadItens } from './cad-itens';

describe('CadItens', () => {
  let component: CadItens;
  let fixture: ComponentFixture<CadItens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadItens],
    }).compileComponents();

    fixture = TestBed.createComponent(CadItens);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
