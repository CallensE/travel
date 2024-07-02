import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingListItemFormComponent } from './packing-list-item-form.component';

describe('PackingListItemFormComponent', () => {
  let component: PackingListItemFormComponent;
  let fixture: ComponentFixture<PackingListItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackingListItemFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackingListItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
