import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DetailsComponent } from '../../details/details.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() orderItem;

  order_received_flag = true;
  order_preparing_flag = false;
  order_ready_flag = false;

  constructor(private mat_dialog: MatDialog) { }

  ngOnInit(): void {
  }

  preparing(order) {
    this.order_received_flag = false;
    this.order_preparing_flag = true;
  }

  ready(order) {
    this.order_received_flag = false;
    this.order_preparing_flag = false;
    this.order_ready_flag = true;
  }

  openDialog(order_data) {
    console.log(order_data)
    this.mat_dialog.open(DetailsComponent, {
      data: { object: order_data }
    });
  }


}
