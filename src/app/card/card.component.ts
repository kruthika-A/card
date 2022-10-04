import { Component, OnInit } from '@angular/core';
import { ShareReplayConfig } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  userData:string=''
  userVar:string=''
  userBrw:string=''
  
  constructor() { }

  ngOnInit(): void {
    
  }


  products=[{
  username:'liquid',
  type:'oil',
  email:'asddj@fmail.com',

 },
 {
  username:'liquid',
  type:'oil',
  email:'asddj@fmail.com',

 },
 {
  username:'liquid',
  type:'oil',
  email:'asddj@fmail.com',

 },
 {
  username:'liquid',
  type:'oil',
  email:'asddj@fmail.com',

 },
]
save(){
  console.log('data saved')
  // this.appService.getAllusers().subscribe({username:this.userData,email:this.email})
  console.log('hdjfh',this.userData,this.userVar,this.userBrw);
   
}
}
