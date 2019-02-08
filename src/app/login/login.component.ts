import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { moveIn } from '../shared/animations/router.animations';
import { LoginProviderService } from '../shared/core/login-provider.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    animations: [moveIn(),
    trigger('active', [
        state('inactive', style({
            transform: 'scale(0.6)'
        })),
        state('active', style({
            transform: 'scale(1.0)'
        })),
        transition('inactive => active', animate('1000ms ease-in')),
        transition('active => inactive', animate('1000ms ease-out'))
    ])],
    // tslint:disable-next-line:use-host-property-decorator
    host: { '[@moveIn]': '' }
})
export class LoginComponent implements OnInit {
    constructor(
        private loginProvider: LoginProviderService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.loginProvider.user.subscribe(user => {
            if (user) {
                this.router.navigate([`/table`]);
            }
        });
    }

    googleLogin() {
        this.loginProvider.googleLogin();
        this.router.navigate([`/table`]);
    }
}
