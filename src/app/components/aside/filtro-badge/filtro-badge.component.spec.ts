import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroBadgeComponent } from './filtro-badge.component';

describe('FiltroBadgeComponent', () => {
  let component: FiltroBadgeComponent;
  let fixture: ComponentFixture<FiltroBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
