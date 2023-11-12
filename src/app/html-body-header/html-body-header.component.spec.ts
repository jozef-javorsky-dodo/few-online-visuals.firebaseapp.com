import { ComponentFixture } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";
import { HtmlBodyHeaderComponent } from "./html-body-header.component";
import { MatCommonModule } from "@angular/material/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatRippleModule } from "@angular/material/core";



describe(<string>"HtmlBodyHeaderComponent", () => {

  let component: HtmlBodyHeaderComponent;
  let fixture: ComponentFixture<HtmlBodyHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HtmlBodyHeaderComponent
      ],
      imports: [
        MatCommonModule,
        MatDividerModule,
        MatGridListModule,
        MatProgressBarModule,
        MatRippleModule
      ]
    });
    fixture = TestBed.createComponent(HtmlBodyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(<string>"should create", () => {
    expect(component).toBeTruthy();
  });
});
