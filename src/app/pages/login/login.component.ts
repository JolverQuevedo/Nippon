import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login = { email: '', password: '' };
  constructor(private snackBar: MatSnackBar, private router: Router) {}

  ngOnInit() {}
  onSubmit() {
    localStorage.setItem('usuario', JSON.stringify(this.login));
    this.router.navigate(['home']);
  }
}
