import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./modules/layout/components/home/home.component";
import {CatalogViewComponent} from "./modules/layout/components/catalog-view/catalog-view.component";
import {AccountComponent} from "./modules/layout/components/account/account.component";
import {NotFoundComponent} from "./modules/layout/components/not-found/not-found.component";


const routes: Routes = [

  {path: "", component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'music', component: CatalogViewComponent},
  {path: 'films', component: CatalogViewComponent},
  {path: 'books', component: CatalogViewComponent},
  {path: 'myaccount', component: AccountComponent},
  {path: 'notFound', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
