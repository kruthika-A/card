import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',    
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  cols:any ;
  products: any

  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
  ];
  this.products = [
    {
      code:'fullstack',
      name:'kruthika',
      category:'A1'


    },
    {
      code:'fullstack',
      name:'Divya Priya',
      category:'A1'


    },
    {
      code:'fullstack',
      name:'uma',
      category:'A3'


    },
    {
      code:'fullstack',   
      name:'Arun',
      category:'A4',
      


    }
  ]
  }
  confirm() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to perform this action?',
        accept: () => {
            //Actual logic to perform a confirmation
        }
    });
}
}









