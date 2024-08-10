import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  
  public currentUrl: string | undefined;

  private _router: Router;

  constructor(router: Router) {
    this._router = router;
  }

  ngOnInit(): void {
    this._router.events.subscribe(
      (event) => {
        if (event instanceof NavigationEnd) {
          this.currentUrl = event.url;
          console.log(this.currentUrl);
        }   
      }
    );
  }
}
