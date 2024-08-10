import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retour-en-haut',
  templateUrl: './retour-en-haut.component.html',
  styleUrl: './retour-en-haut.component.scss'
})
export class RetourEnHautComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      const backToTopButton = document.querySelector('.back-to-top') as HTMLElement;
      if (window.scrollY > 100) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
