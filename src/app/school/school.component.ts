import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {
  user: any


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.pattern(
        '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,10}$'
      ),]),

      mobile: new FormControl('', [Validators.required],),
      message: new FormControl('', Validators.required)
    })
  }

  get school() {
    return this.user.controls
  }



  save() {
    if (this.user.invalid) {
      this.user.markAllAsTouched();
    } else {
      console.log('ssssssssssssss', this.user.value);
      this.router.navigate(['college'])
    }

  }

}

