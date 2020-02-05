import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
// import { TextField } from "tns-core-modules/ui/text-field";

@Component({
  selector: 'ns-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() name: string;
  @Input() role : string;
  @Input() title: string;
  @Output() formEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  submit(){
    this.formEvent.emit({name: this.name, role: this.role})
    this.name = this.role = null
  }


}
