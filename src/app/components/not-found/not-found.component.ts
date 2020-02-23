import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  time = 5;
  constructor(private _router: Router) { }

  ngOnInit() {
    setInterval(() => {
      this.time--;
    }, 1000);
    setTimeout(() => {
      this.redirectToHome();
    }, 1000 * 5);
  }

  redirectToHome() {
    this._router.navigate(['/']);
  }

}
