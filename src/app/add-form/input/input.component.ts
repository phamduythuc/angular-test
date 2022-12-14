import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() label: string = '';
  @Input() control: FormControl | any;
  @Input() require: string = '';
  @Input() format: FormControl | any;
  required = false;
  constructor() {}

  ngOnInit(): void {
    if (this.require === 'required') {
      this.required = true;
    }
  }
}
