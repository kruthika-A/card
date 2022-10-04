import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loopcard',
  templateUrl: './loopcard.component.html',
  styleUrls: ['./loopcard.component.scss']
})
export class LoopcardComponent implements OnInit {
  userData:string=''
  user:any

  constructor(private fb:FormBuilder,private router:Router,private aRoute:ActivatedRoute) { }
  
  ngOnInit(): void {
    console.log('ddd');
    // this.user=new FormGroup({
    //   name:new FormControl(
    //     '',[Validators.required]),
    //   email:new FormControl('',[Validators.required])
    // }) 
    // validation by group
    this.user=this.fb.group({
      name:[null,[Validators.required]],
      email:[null,[Validators.required]],
      

    })
    }

  get form(){
    return this.user.controls
    
  }
  // Details=[{
  //   name:'charan',
  //   email:'charan@gmail.com',
  //   address:'chennai'
  // },
  // {
  //   name:'nakshu',
  //   email:'nakshu@gmail.com',
  //   address:'chennai'
  // },
  // {
  //   name:'priya',
  //   email:'priya@gmail.com',
  //   address:'chennai'
  // },
  // {
  //   name:'nakshathra',
  //   email:'charan@gmail.com',
  //   address:'chennai'
  // },
  // {
  //   name:'kruthi',
  //   email:'kruthi@gmail.com',
  //   address:'chennai'
  // },

  // ]
  submit(){
    console.log('sgygshgd',this.user.value);
    this.router.navigate(['register'])   //redirect to another page
    // this.router.navigate(['register'],{relativeTo:this.aRoute}) //relative path


  }
}
