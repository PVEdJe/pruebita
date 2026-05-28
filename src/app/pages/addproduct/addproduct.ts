import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  imports: [],
  templateUrl: './addproduct.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Addproduct {}
