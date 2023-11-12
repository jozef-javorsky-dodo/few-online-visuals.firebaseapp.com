import { ComponentFixture } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";
import { HtmlBodyFooterComponent } from "./html-body-footer.component";
import { MatCommonModule } from "@angular/material/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatRippleModule } from "@angular/material/core";



describe(<string>"HtmlBodyFooterComponent", () => {

  let component: HtmlBodyFooterComponent;
  let fixture: ComponentFixture<HtmlBodyFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HtmlBodyFooterComponent
      ],
      imports: [
        MatCommonModule,
        MatDividerModule,
        MatGridListModule,
        MatProgressBarModule,
        MatRippleModule
      ]
    });
    fixture = TestBed.createComponent(HtmlBodyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(<string>"should create", () => {
    expect(component).toBeTruthy();
  });
});
