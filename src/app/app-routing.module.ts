import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { StrategyComponent } from './components/services/strategy/strategy.component';
import { CreativeComponent } from './components/services/creative/creative.component';
import { ProductionComponent } from './components/services/production/production.component';
import { ReachComponent } from './components/services/reach/reach.component';
import { InnovationComponent } from './components/services/innovation/innovation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'who-we-are', component: WhoWeAreComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'strategy', component: StrategyComponent },
  { path: 'creative', component: CreativeComponent },
  { path: 'production', component: ProductionComponent },
  { path: 'reach', component: ReachComponent },
  { path: 'innovation', component: InnovationComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
