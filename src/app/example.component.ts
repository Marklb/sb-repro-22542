import { Component } from '@angular/core';

import { base32 } from 'rfc4648';

console.log(base32.stringify([42, 121, 160])); // -> 'FJ42A==='
console.log(base32.parse('FJ42A===')); // -> Uint8Array([42, 121, 160])

@Component({
  selector: 'app-example',
  template: `example component`,
  styles: [],
  standalone: true,
})
export class ExampleComponent {}
2