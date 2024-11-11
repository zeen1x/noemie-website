import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carte-service',
  templateUrl: './carte-service.component.html',
  styleUrl: './carte-service.component.scss'
})
export class CarteServiceComponent {

  @Input()
  public imagesrc: string | undefined;

  @Input()
  public title: string | undefined;

  @Input()
  public paragraph: string | undefined;

  @Input()
  public buttonText: string | undefined;
}
