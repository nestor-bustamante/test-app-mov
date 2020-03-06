import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamplePagePage } from './example-page.page';

describe('ExamplePagePage', () => {
  let component: ExamplePagePage;
  let fixture: ComponentFixture<ExamplePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamplePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamplePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
