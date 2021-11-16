import { Injectable } from '@angular/core';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth"
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  createNewUser(email: string, password: string) {
    return new Promise<void>(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }
  signInUser(email: string, password: string) {
    return new Promise<void>(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          (user) => {
            sessionStorage.setItem("connectedUser" , user.user!.uid ); 
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }
  signOutUser() {
    sessionStorage.removeItem( "connectedUser" );
    firebase.auth().signOut();
  }
  

  
}