import { Component } from '@angular/core';
import { UserLogin } from '../../_models/user-login';
import { Router } from '@angular/router';
import { UserAuthService } from '../../services/auth/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userLogin: UserLogin;



  constructor(private authservice: UserAuthService, private router: Router) {
    this.userLogin = {
      email: '',
      password: '',
      rememberMe: false,
      messageError: 'Email or password is incorrect',
      styleMessageError: false
    };

  }

  Login() {
    this.authservice.Login(this.userLogin.email, this.userLogin.password, this.userLogin.rememberMe).subscribe({
      next: (respone) => {
        if (respone) {
          console.log(respone.token);
        }
        alert(`Hi ${this.userLogin.email}`);
        this.router.navigate(['/tools']);
      }, error: (err) => {
        console.error('Login error:', err);
        this.userLogin.styleMessageError = true;
      }, complete: () => {
        console.log('Login process success');
      }
    });
  }
}
