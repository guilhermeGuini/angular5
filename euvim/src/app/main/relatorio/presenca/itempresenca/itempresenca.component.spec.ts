import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItempresencaComponent } from './itempresenca.component';

describe('ItempresencaComponent', () => {
  let component: ItempresencaComponent;
  let fixture: ComponentFixture<ItempresencaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItempresencaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItempresencaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
