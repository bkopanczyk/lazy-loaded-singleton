import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class SharedSingletonService {
  private number = 0;

  constructor() {
    console.log('Constructed singleton!');
  }

  public count(): void {
    this.number = this.number + 1;
    console.log('A number is ', this.number);
  }
}
