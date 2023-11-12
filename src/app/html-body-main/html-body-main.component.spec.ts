import { ComponentFixture } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";
import { HtmlBodyMainComponent } from "./html-body-main.component";
import { MatCommonModule } from "@angular/material/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatRippleModule } from "@angular/material/core";



describe(<string>"HtmlBodyMainComponent", () => {

  let component: HtmlBodyMainComponent;
  let fixture: ComponentFixture<HtmlBodyMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HtmlBodyMainComponent
      ],
      imports: [
        MatCommonModule,
        MatDividerModule,
        MatGridListModule,
        MatProgressBarModule,
        MatRippleModule
      ]
    });
    fixture = TestBed.createComponent(HtmlBodyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(<string>"should create", () => {
    expect(component).toBeTruthy();
  });
});
