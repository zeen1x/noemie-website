import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-text',
  templateUrl: './basic-text.component.html',
  styleUrl: './basic-text.component.scss'
})
export class BasicTextComponent {

  @Input() 
  public text: string ="";
}
