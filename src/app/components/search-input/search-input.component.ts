import { debounceTime } from "rxjs/operators";
import { Component, OnDestroy, OnInit, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Subscription } from "rxjs";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { EventEmitter } from "@angular/core";

const SEARCH_CTRL = "searchCtrl";

@Component({
  selector: "search-input",
  template: `
    <form>
      <input
        type="text"
        [formControl]="${SEARCH_CTRL}"
        placeholder="Search for an IP address or domain"
      />
      <button>
        <fa-icon [icon]="faAngleRight"></fa-icon>
      </button>
    </form>
  `,
  styleUrls: ["./search-input.component.scss"]
})
export class SearchInputComponent implements OnInit, OnDestroy {
  @Output() search = new EventEmitter<string>();

  public searchCtrl = new FormControl();
  public faAngleRight = faAngleRight;

  private subscription = new Subscription();

  public ngOnInit(): void {
    this.subscription.add(
      this.searchCtrl.valueChanges
        .pipe(debounceTime(500))
        .subscribe((searchQuery: string) => this.search.emit(searchQuery))
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
