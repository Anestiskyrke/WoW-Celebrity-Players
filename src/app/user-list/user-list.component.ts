import { Component, OnInit } from '@angular/core';
import { from as fromPromise } from 'rxjs';
import { catchError, flatMap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  user: User = {};


  cols: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllOptions()
    .subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => console.error(error)
    });

    this.cols = [
        { field: 'name', header: 'Name' },
        { field: 'surname', header: 'Surname' },
        { field: 'Date', header: 'Date' }
    ];
  };
  
  deleteAll(): void {
    this.userService.deleteAll()
    .subscribe({
      next: (data) => {
        this.users = data;
        this.ngOnInit();
      },
      error: (error) => console.error(error)
    });
  }

  delete(user: User): void{
    this.userService.delete(user.id)
    .subscribe({
      next: (data) => {
        this.user = data;
        this.ngOnInit();
      },
      error: (error) => console.error(error)
    });
  }
}
