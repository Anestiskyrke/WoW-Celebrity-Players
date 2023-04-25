import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{

  constructor( private userService: UserService ) { }

  ngOnInit(): void {}

  submitted = false;

  user: User = {
    name: '',
    surname: ""
  };

  basicUserForm(): void {
    this.submitted = false;
    this.user = {
      name: '',
      surname: '',
      Date: ''
    };
  }

  saveUser(): void {
    const data = {
      name: this.user.name,
      surname: this.user.surname,
      Date: this.user.Date
    };

    this.userService.create(data)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (error) => console.error(error)
    });
  }

}
