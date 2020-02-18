import { Component, OnInit } from '@angular/core';
import { SharedSingletonService } from '../shared/shared.singleton.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass']
})
export class OrdersComponent implements OnInit {

  constructor(protected service: SharedSingletonService) {
  }

  ngOnInit(): void {
    console.log('lazy loaded orders component');
    this.service.count();
  }

}
