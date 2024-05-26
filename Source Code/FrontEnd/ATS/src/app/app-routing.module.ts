import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeScreenComponent } from './features/user-home-screen/user-home-screen.component';

const routes: Routes = [
  {
    path: '',
    component: UserHomeScreenComponent
  }
  ,{
    path:'core',
    loadChildren: () =>  import('./core/core.module').then(m => m.CoreModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
