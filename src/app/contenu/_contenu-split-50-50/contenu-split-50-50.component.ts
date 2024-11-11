import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contenu-split-50-50',
  templateUrl: './contenu-split-50-50.component.html',
  styleUrl: './contenu-split-50-50.component.scss'
})
export class ContenuSplit5050Component {

  @Input() 
  public titre1: string = "Titre1";

  @Input() 
  public texte1: string = "Texte1";

  @Input() 
  public bgColorStyle1: number = 1; 

  @Input() 
  public titre2: string = "Titre2";

  @Input() 
  public texte2: string = "Texte2";

  @Input() 
  public bgColorStyle2: number = 2; 

  @Input() 
  public image: string | undefined;
}
