import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'angular-nx-counter-16-page',
  templateUrl: './counter-16-page.component.html',
  styles: [],
})
export class Counter16PageComponent {
  constructor() {
    effect(() => {
      console.log(`signal effect: ${this._counter()}, ${this._counter2()}`);
    });
  }

  private _counter = signal(10);
  private _counter2 = signal(5);

  public counter = computed(() => this._counter());
  public counter2 = computed(() => this._counter2());
  public squareCounter = computed(() => this.counter() * this.counter());
  public count1PlusCount2 = computed(() => {
    console.log(`signal: ${this._counter() + this._counter2()}`);
    return this._counter() + this._counter2();
  });

  increaseBy(value: number): void {
    this._counter.update((current) => current + value);
  }

  reset(): void {
    this._counter.set(10);
  }
}
