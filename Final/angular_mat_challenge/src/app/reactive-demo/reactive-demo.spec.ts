import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDemoComponent } from './reactive-demo';

describe('ReactiveDemo', () => {
  let component: ReactiveDemoComponent;
  let fixture: ComponentFixture<ReactiveDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveDemoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
