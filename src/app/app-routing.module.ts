import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MyItemComponent } from './my-list-items/my-item/my-item.component';
import { MyListItemsComponent } from './my-list-items/my-list-items.component';
import { OtherItemComponent } from './other-list-items/other-item/other-item.component';
import { OtherListItemsComponent } from './other-list-items/other-list-items.component';
import { AuthGuardService } from './shared/services/auth-guard.service';

const routes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  
  {path :'other-list-items',canActivate: [AuthGuardService], component: OtherListItemsComponent},
  {path :'other-item',canActivate: [AuthGuardService], component: OtherItemComponent},
  {path :'my-list-items',canActivate: [AuthGuardService], component: MyListItemsComponent},
  {path :'my-item',canActivate: [AuthGuardService], component: MyItemComponent},

  { path: '', redirectTo: 'other-list-items', pathMatch: 'full' },
  { path: '**', redirectTo: 'other-list-items' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
