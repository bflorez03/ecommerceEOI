import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShippingInfo } from 'src/app/entities/shippingInfo.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})

export class ShippingComponent implements OnInit {
  @Output() shippingInfoEmitter: EventEmitter<ShippingInfo> = new EventEmitter<ShippingInfo>();

  form: FormGroup;
  shippingInfo: ShippingInfo;

  name = new FormControl('', Validators.required);
  address = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      'name': this.name,
      "address": this.address,
      'email': this.email
    });
  }

  ngOnInit() {
    this.shippingInfo = new ShippingInfo();
  }

  onSubmit(formValue) {
    console.log(formValue);
    this.shippingInfoEmitter.emit(this.shippingInfo);
  }



}
