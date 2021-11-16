import { Injectable, OnInit } from '@angular/core';
import firebase from "firebase/compat/app";
import "firebase/compat/database"
// import { DataSnapshot } from '@angular/fire/compat/database/interfaces';
import DataSnapshot = firebase.database.DataSnapshot;
import { Item } from '../models/item.model';
import { Subject } from 'rxjs';
import { ArrayItems } from '../models/arrayItems.model';
@Injectable({
    providedIn: 'root'
  })
  
  
  
  export class OtherItemsService implements OnInit {

    items: Item[] = [];
    itemsSubject = new Subject<Item[]>();
    allItems: any = {};
    allItemsSubject = new Subject<ArrayItems[]>();
  
    constructor() {
    //   firebase.auth().onAuthStateChanged(
    //     (user) => {
    //       if(user) {
    //         console.log(user.uid)
    //         this.getItems(user.uid);
    //       }
    //     }
    //   );
    this.getItems('0000')
    // this.getAllItems()
    }
    ngOnInit(): void {
      
    }
    
    emitItems() {
      this.itemsSubject.next(this.items);
    }
    emitAllItems() {
      this.allItemsSubject.next(this.allItems);
    }
    // pour enregister le noeud de donnée sur firebase 
    saveItems(currentUserUID :string) {
      
      firebase.database().ref('/items/'+currentUserUID).set(this.items);
    }
    getAllItems(){
      firebase.database().ref('/items')
        .on('value', (data: DataSnapshot) => {
          console.log(data.val())
          
            this.allItems = data.val() ? data.val() : {};
            this.emitAllItems();
            
          }
        );

        
    }
    obj : any;
    getItems(currentUserUID :string) {
      
      firebase.database().ref('/items/'+currentUserUID)
        .on('value', (data: DataSnapshot) => {
            this.items = data.val() ? data.val() : [];
            // this.obj.__defineGetter__('gimmeFive', function() { return 5; });
            // console.log(data.val())
            // console.log(this.obj.gimmeFive)
            
            this.emitItems();
          }
        );
    }
  
    getSingleItem(currentUserUID : string,id: number) {
      return new Promise(
        (resolve, reject) => {
          firebase.database().ref('/items/'+currentUserUID +'/' + id).once('value').then(
            (data: DataSnapshot) => {
              resolve(data.val());
            }, (error) => {
              reject(error);
            }
          );
        }
      );
    }
    // ajouter 
    createNewItem(newItem: Item) {
      this.items.push(newItem);
      
      
        this.saveItems("0000");
      // firebase.auth().onAuthStateChanged(
      //   (user) => {
      //     if(user) {
      //       this.saveItems(user.uid);
      //     }
      //   }
      // );
      this.emitItems();
    }
    // supprimer  
    removeItem(item: Item) {
      const itemIndexToRemove = this.items.findIndex(
        (itemEl) => {
          if(itemEl === item) {
            return true;
          }
          return false;
        }
      );
      this.items.splice(itemIndexToRemove, 1);
      // this.saveItems();
      firebase.auth().onAuthStateChanged(
        (user) => {
          if(user) {
            this.saveItems(user.uid);
          }
        }
      );
      this.emitItems();
    } 
    
  }