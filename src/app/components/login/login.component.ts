import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Md5 } from 'ts-md5';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('enterState', [
      state(
        'void',
        style({
          transform: 'translateX(-150%)',
          opacity: 0
        })
      ),
      transition(':enter', [
        animate(
          400,
          style({
            transform: 'translateX(0)',
            opacity: 1
          })
        )
      ])
    ])
  ]
})
export class LoginComponent {

  loading: boolean = false;

  constructor(private router: Router) { }

  login() {
    this.loading = true;
    let hash = new Md5();
    hash.appendStr(environment.ts);
    hash.appendStr(environment.privateKey);
    hash.appendStr(environment.publicKey);
    let finalHash = hash.end();
    localStorage.setItem(
      'hash',
      JSON.stringify(finalHash).replace(/["]+/g, '')
    );
    setTimeout(() => {
      this.router.navigateByUrl('/series');
      this.loading = false;
    }, 1000);
    
  }
}
