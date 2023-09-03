import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private router: Router) {}
selectedUser: any;
  lang = [
    { name: "Ahmed" },
    { name: "Sara" },
    { name: "said" },
    { name: "samia" },
    { name: "zainab" },
  ];
  next() {
    // Perform actions when the NEXT button is clicked
    // You can access the selected user via this.selectedUser
    console.log('Selected user:', this.selectedUser);
    this.router.navigate(['oues']);
  }

}
