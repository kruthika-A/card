import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {
  user:any
  

  constructor( private router:Router) { }

  ngOnInit(): void {
    this.user=new FormGroup({
      name:new FormControl('',[Validators.required]),
      email :new FormControl('',[Validators.required]),
      mobile :new FormControl('',[Validators.required]),
      Tel:new FormControl('',Validators.required)
    }) 
  }

  get register(){
    return this.user.controls
  }



  save(){
    console.log('ssssssssssssss',this.user.value);
    this.router.navigate(['school']) 
  }

}

