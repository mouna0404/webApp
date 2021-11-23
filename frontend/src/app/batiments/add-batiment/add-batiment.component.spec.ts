import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBatimentComponent } from './add-batiment.component';

describe('AddBatimentComponent', () => {
  let component: AddBatimentComponent;
  let fixture: ComponentFixture<AddBatimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBatimentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBatimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
