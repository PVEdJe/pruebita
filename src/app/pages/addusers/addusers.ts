import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-addusers',
  imports: [],
  templateUrl: './addusers.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Addusers {}
