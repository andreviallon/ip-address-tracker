import { debounceTime } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

const SEARCH_CTRL = 'searchCtrl';

@Component({
  selector: 'search-input',
  template: `
    <form>
      <input type="text" [formControl]="${SEARCH_CTRL}" placeholder="Search for an IP address or domain">
      <button>T</button>
    </form>
  `,
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, OnDestroy {

  public searchCtrl = new FormControl();

  private subscription = new Subscription();

  constructor() { }

  public ngOnInit(): void {
    this.subscription.add(
      this.searchCtrl.valueChanges.pipe(debounceTime(500)).subscribe((searchQuery: string) => console.log('searchQuery =>', searchQuery))
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
