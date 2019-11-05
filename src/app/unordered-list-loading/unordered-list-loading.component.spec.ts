import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnorderedListLoadingComponent } from './unordered-list-loading.component';

describe('UnorderedListLoadingComponent', () => {
  let component: UnorderedListLoadingComponent;
  let fixture: ComponentFixture<UnorderedListLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnorderedListLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnorderedListLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
