import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

import firebase from 'firebase/compat/app'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth!: boolean;
  currentUserUID : string =' ';
  constructor(private authService: AuthService ) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
          this.currentUserUID = user.uid ;
        } else {
          this.isAuth = false;
        }
      }
    );
  }
  onSignOut(){
    this.authService.signOutUser();
  }

  


}
