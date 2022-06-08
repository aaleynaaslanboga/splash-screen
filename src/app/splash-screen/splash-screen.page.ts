import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {

  constructor(public router: Router) {
    setTimeout(() => {
      this.router.navigateByUrl('/home');
    }, 3000); // set tımeout here to redırect to home page

  }

  ngOnInit(): void {

  }

}
