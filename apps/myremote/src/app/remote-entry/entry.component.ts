import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-myremote-entry',
  template: `<h2 style="background-color: red">I'm remote</h2>`,
})
export class RemoteEntryComponent {}
