import { Component, ViewChild, ElementRef } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  openedChange(val) {
    console.log("openedChange:", val);
  }
}
