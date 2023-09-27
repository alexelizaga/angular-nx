import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, map, tap } from 'rxjs';

@Component({
  selector: 'signals-counter-15-page',
  templateUrl: './counter-15-page.component.html',
  styles: [],
})
export class Counter15PageComponent {
  constructor() {
    combineLatest([this.count$, this.count2$]).subscribe(([count1, count2]) => {
      console.log(`rxjs subscription: ${count1}, ${count2}`);
    });
  }

  public count$ = new BehaviorSubject(10);
  public count2$ = new BehaviorSubject(5);
  public squareCounter$ = this.count$.pipe(map((value) => value * value));
  public count1PlusCount2$ = combineLatest([this.count$, this.count2$]).pipe(
    tap(([v1, v2]) => console.log(`rxjs: ${v1 + v2}`)),
    map(([count1, count2]) => count1 + count2)
  );

  increaseBy$(value: number): void {
    this.count$.next(this.count$.value + value);
  }

  reset$(): void {
    this.count$.next(10);
  }
}
