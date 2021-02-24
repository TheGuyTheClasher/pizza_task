import { Component, OnInit } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders = [
    {
      cust_name: 'Bob',
      no_of_items: 3,
      price: 299,
      address: '45st mary colony, NQ',
      item_name: 'Macroni Pizza',
      status: 'Order Received',
      image: '../../../assets/images/pizza1.jpg'
    },
    {
      cust_name: 'Kane',
      no_of_items: 1,
      price: 199,
      address: '1rt qwerty street, LM',
      item_name: 'Chicken Pizza',
      status: 'Order Received',
      image: '../../../assets/images/pizza2.jpg'


    },
    {
      cust_name: 'Mikel',
      no_of_items: 2,
      price: 149,
      address: '9th avenue, RT',
      item_name: 'Cheese Pizza',
      status: 'Order Received',
      image: '../../../assets/images/pizza3.jpg'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
