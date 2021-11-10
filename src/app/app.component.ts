import { Component } from '@angular/core';

import firebase from "firebase/compat/app";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'share-clothes';
  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyDZndOMdIchH3inl3OrlJA442Cu0PsyRxc",
  authDomain: "share-clothes-dev.firebaseapp.com",
  databaseURL: "https://share-clothes-dev-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "share-clothes-dev",
  storageBucket: "share-clothes-dev.appspot.com",
  messagingSenderId: "431164854826",
  appId: "1:431164854826:web:a1702728ffeb79bea32953",
  measurementId: "G-NNC4P5K7WV"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
