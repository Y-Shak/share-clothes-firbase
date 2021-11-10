import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyItemComponent } from './my-list-items/my-item/my-item.component';
import { MyListItemsComponent } from './my-list-items/my-list-items.component';
import { OtherItemComponent } from './other-list-items/other-item/other-item.component';
import { OtherListItemsComponent } from './other-list-items/other-list-items.component';

const routes: Routes = [
  {path :'other-list-items', component: OtherListItemsComponent},
  {path :'other-item', component: OtherItemComponent},
  {path :'my-list-items', component: MyListItemsComponent},
  {path :'my-item', component: MyItemComponent},
  { path: '', redirectTo: 'other-list-items', pathMatch: 'full' },
  { path: '**', redirectTo: 'other-list-items' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
