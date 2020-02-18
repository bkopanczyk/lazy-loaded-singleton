import { Component, OnInit } from '@angular/core';
import { SharedSingletonService } from '../shared/shared.singleton.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.sass']
})
export class CustomersComponent implements OnInit {

  constructor(protected service: SharedSingletonService) {
  }

  ngOnInit(): void {
    console.log('lazy loaded customer component');
    this.service.count();
  }

}
