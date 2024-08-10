import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contenu-basique',
  templateUrl: './contenu-basique.component.html',
  styleUrl: './contenu-basique.component.scss'
})
export class ContenuBasiqueComponent {

  @Input() 
  public title: string ="";

  @Input() 
  public text: string ="";

  @Input()
  public applyBgColor: boolean = false;

  @Input()
  public bgColorStyle: number = 0;
}
