import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrimeNG';
  constructor(
    private router: Router
  ) {}
  ngOnInit() { }
  
  setTab(tabname: string) {
    this.router.navigate([`/${tabname}`]);
  }
  
}
