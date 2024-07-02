import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingListItemPageComponent } from './packing-list-item-page.component';

describe('PackingListItemPageComponent', () => {
  let component: PackingListItemPageComponent;
  let fixture: ComponentFixture<PackingListItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackingListItemPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackingListItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
