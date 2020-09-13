import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './material/material.module';
import { SocialComponent } from './components/layout/social/social.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BackToTopComponent } from './components/layout/back-to-top/back-to-top.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { StrategyComponent } from './components/services/strategy/strategy.component';
import { CreativeComponent } from './components/services/creative/creative.component';
import { ProductionComponent } from './components/services/production/production.component';
import { ReachComponent } from './components/services/reach/reach.component';
import { InnovationComponent } from './components/services/innovation/innovation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialComponent,
    HomeComponent,
    PageNotFoundComponent,
    WhoWeAreComponent,
    FooterComponent,
    ContactUsComponent,
    BackToTopComponent,
    StrategyComponent,
    ContactFormComponent,
    CreativeComponent,
    ProductionComponent,
    ReachComponent,
    InnovationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
