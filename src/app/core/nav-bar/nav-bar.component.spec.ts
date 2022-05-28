import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NavBarComponent } from './nav-bar.component'
import {By} from "@angular/platform-browser";

describe('NavBarComponent', () => {
  let component: NavBarComponent
  let fixture: ComponentFixture<NavBarComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarComponent ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render a logo', () => {
    const ne: HTMLElement = fixture
      .debugElement
      .query(By.css('.test-brand'))
      .nativeElement
    expect(ne).toBeTruthy();
  })

  it('should render an about link', () => {
    const ne: HTMLElement = fixture
      .debugElement
      .query(By.css('.test-about'))
      .nativeElement
    expect(ne).toBeTruthy();
  })

  it('should render a skills link', () => {
    const ne: HTMLElement = fixture
      .debugElement
      .query(By.css('.test-skills'))
      .nativeElement
    expect(ne).toBeTruthy();
  })

  it('should render a projects link', () => {
    const ne: HTMLElement = fixture
      .debugElement
      .query(By.css('.test-projects'))
      .nativeElement
    expect(ne).toBeTruthy();
  })
})
