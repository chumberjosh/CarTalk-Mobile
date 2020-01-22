import { Component, OnInit } from '@angular/core';
import { LoggedinService } from '~/app/_services/loggedin.service';
// import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'ns-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    title: string = 'Log in'
    email: string;
    password: string;

    constructor(private router: Router, private loginService: LoggedinService) { }
    public items = new Array<Account>(
        {
            email: "",
            password: "",
        }
    )

    ngOnInit() {
        // this.mode = ' login'
        this.loginService.loggedIn = 'false';
    }

    mode: any = 'login'
    errormode: any = false;

    forgotpassword() {
        console.log('forgot password')
    }

    login() {
        console.log('errormode', this.errormode)
        console.log('Login ->', this.email, this.password);
        this.router.navigate(['/'])
    }

    signup(email, password) {
        let items = new Array<Account>(
            {
                email: email,
                password: password,
            }
        )
        // this.http.post('https://makesworth-app.firebaseio.com/accounts.json'
        //     , items).subscribe(res => {
        //         console.log(res);
        //     });
        this.router.navigate(['/'])
        this.loginService.loggedIn = 'true'
    }

    changeToLogin() {
        if (this.mode = 'login') {
            this.mode = 'signup'
        }
        console.log(this.mode);
        this.title = 'Register'
    }

    changeToRegister() {
        if (this.mode = 'signup') {
            this.mode = 'login'
        }
        this.title = 'Log in'
    }

    skip() {
        this.router.navigate(['/']);
        this.loginService.loggedIn = 'skipped';
    }

    // sendBackendItems() {
    //     this.http.post('https://makesworth-app.firebaseio.com/tax-tips.json'
    //         , this.items).subscribe(res => {
    //             console.log(res);
    //         });
    // }

}

export class Account {
    constructor(
        public email: string,
        public password: string,
    ) { }
    //  constructor(public KTDItem: KTDItem) { }
}
