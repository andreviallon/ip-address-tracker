import { Component, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { EventEmitter } from "@angular/core";

const SEARCH_CTRL = "searchCtrl";

@Component({
  selector: "search-input",
  template: `
    <form>
      <input type="text" [formControl]="${SEARCH_CTRL}" placeholder="Search for an IP address or domain" />
      <button (click)="search.emit(searchCtrl.value)">
        <fa-icon [icon]="faAngleRight"></fa-icon>
      </button>
    </form>
  `,
  styleUrls: ["./search-input.component.scss"]
})
export class SearchInputComponent {
  @Output() search = new EventEmitter<string>();

  public searchCtrl = new FormControl();
  public faAngleRight = faAngleRight;
}
