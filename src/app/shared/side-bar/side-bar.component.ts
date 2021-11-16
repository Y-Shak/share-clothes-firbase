import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // isAuth!: boolean;
  // currentUserUID! : string;
  // constructor(private authService: AuthService ) { }

  // ngOnInit(): void {
  //   firebase.auth().onAuthStateChanged(
  //     (user) => {
  //       if(user) {
  //         this.isAuth = true;
  //         this.currentUserUID = user.uid ;
  //       } else {
  //         this.isAuth = false;
  //       }
  //     }
  //   );
  // }
  // onSignOut(){
  //   this.authService.signOutUser();
  // }

}
