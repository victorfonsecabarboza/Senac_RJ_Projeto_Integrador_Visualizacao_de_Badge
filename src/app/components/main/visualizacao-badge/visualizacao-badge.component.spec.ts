import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacaoBadgeComponent } from './visualizacao-badge.component';

describe('VisualizacaoBadgeComponent', () => {
  let component: VisualizacaoBadgeComponent;
  let fixture: ComponentFixture<VisualizacaoBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizacaoBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizacaoBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
