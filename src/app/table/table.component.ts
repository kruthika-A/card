import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  cols:any ;
  products: any

  constructor() { }

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

}
