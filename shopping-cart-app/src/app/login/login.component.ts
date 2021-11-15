import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public option: {"title":string, "description":string} = {"title":'login', "description":'Get access to your Orders, Wishlist and Recommendations'};

  constructor(private router: Router) { }

  ngOnInit(): void {
    
    if(this.router.url === "/login"){
      this.option.title = 'Login';
      this.option.description = 'Get access to your Orders, Wishlist and Recommendations';
    } else if(this.router.url === "/register"){
      this.option.title = 'Signup';
      this.option.description = 'We do not share your personal details with anyone';
    }

  }
public onSubmit(){
  console.log("submitted");
}
}
