import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenuBasiqueComponent } from './contenu/_contenu-basique/contenu-basique.component';
import { AccueilComponent } from './__Accueil__/accueil.component';
import { CoordonneesComponent } from './__Coordonnees__/coordonnees.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { EntetePagePrincipalComponent } from './entete-page-principal/entete-page-principal.component';
import { ServicesOffertsComponent } from './__Services-offerts__/services-offerts.component';
import { RendezVousComponent } from './__Rendez-vous__/rendez-vous.component';
import { FaqComponent } from './__FAQ__/faq.component';
import { PiedDePageComponent } from './pied-de-page/pied-de-page.component';
import { RetourEnHautComponent } from './retour-en-haut/retour-en-haut.component';
import { ProblematiquesTraiteesComponent } from './contenu/problematiques-traitees/problematiques-traitees.component';
import { ContenuSplit5050Component } from './contenu/_contenu-split-50-50/contenu-split-50-50.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ContenuBasiqueComponent,
    AccueilComponent,
    CoordonneesComponent,
    NavBarComponent,
    EntetePagePrincipalComponent,
    ServicesOffertsComponent,
    RendezVousComponent,
    FaqComponent,
    PiedDePageComponent,
    RetourEnHautComponent,
    ProblematiquesTraiteesComponent,
    ContenuSplit5050Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      },
      defaultLanguage: 'fr'
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
