import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { OtherListItemsComponent } from './other-list-items/other-list-items.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { OtherItemComponent } from './other-list-items/other-item/other-item.component';
import { MyListItemsComponent } from './my-list-items/my-list-items.component';
import { MyItemComponent } from './my-list-items/my-item/my-item.component';
import { OtherItemsService } from './shared/services/other-items.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './shared/services/auth.service';
import { AuthGuardService } from './shared/services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OtherListItemsComponent,
    SideBarComponent,
    OtherItemComponent,
    MyListItemsComponent,
    MyItemComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    OtherItemsService, AuthService, AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
