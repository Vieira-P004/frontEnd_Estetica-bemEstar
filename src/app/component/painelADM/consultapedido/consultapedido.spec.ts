import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consultapedido } from './consultapedido';

describe('Consultapedido', () => {
  let component: Consultapedido;
  let fixture: ComponentFixture<Consultapedido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Consultapedido],
    }).compileComponents();

    fixture = TestBed.createComponent(Consultapedido);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
