import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  data() {
    return {
      name: 'abc',
      age: 21,
      id: 11
    }
  }

}
