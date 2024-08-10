import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './__Accueil__/accueil.component';
import { CoordonneesComponent } from './__Coordonnees__/coordonnees.component';
import { ServicesOffertsComponent } from './__Services-offerts__/services-offerts.component';
import { RendezVousComponent } from './__Rendez-vous__/rendez-vous.component';
import { FaqComponent } from './__FAQ__/faq.component';

const routes: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'services-offerts', component: ServicesOffertsComponent},
  {path: 'rendez-vous', component: RendezVousComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'coordonnees', component: CoordonneesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
