import { Routes, RouterModule } from '@angular/router';
import { NoContentComponent } from './no-content';
import { DataResolver } from './app.resolver';

// import { LoginPage } from './account/login/login';
export const ROUTES: Routes = [
  // { path: '', redirectTo: 'app', pathMatch: 'full' },
  // { path: 'app', loadChildren: () => System.import('./layout/layout.module') }
  // { path: 'app', loadChildren: './layout#LayoutModule' },
  { path: '**', redirectTo: 'admin/dashboard' }
  // {
  //   path: 'error', component: ErrorComponent
  // },
  // {
  //   path: '**', component: ErrorComponent
  // }
];
