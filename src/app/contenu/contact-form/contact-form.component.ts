import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  public prenom = "";
  public nom ="";
  public courriel = "";
  public sujet = "";
  public contenu ="";

  public invalidInput = "invalidInput";

  onSubmit(){
    console.log("submit");
  }
}
