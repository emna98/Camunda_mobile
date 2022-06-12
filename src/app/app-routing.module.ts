import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';
const routes: Routes = [
  {path: '', redirectTo: 'login',  pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'process/:id',
    loadChildren: () => import('./process/process.module').then( m => m.ProcessPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'task/:id',
    loadChildren: () => import('./task/task.module').then( m => m.TaskPageModule),
    canActivate: [AuthGuard]

  },
 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
