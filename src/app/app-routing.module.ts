import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TableContainerComponent } from './components/table-container/table-container.component';
import { DataTableGuard } from './shared/guards/data-table.guard';
import { LoginGuard } from './shared/guards/login-guard.guard';

const routes: Routes = [
  { path: 'home', canActivate:[LoginGuard], component: LoginComponent },
  { path: 'series', canActivate:[DataTableGuard], component: TableContainerComponent },
  { path: 'series/:type/:id', canActivate:[DataTableGuard], component: TableContainerComponent },
  { path: 'detail/:type/:id', canActivate:[DataTableGuard], component: DetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
