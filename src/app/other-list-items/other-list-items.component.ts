import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArrayItems } from '../shared/models/arrayItems.model';
import { Item } from '../shared/models/item.model';
import { OtherItemsService } from '../shared/services/other-items.service';

@Component({
  selector: 'app-other-list-items',
  templateUrl: './other-list-items.component.html',
  styleUrls: ['./other-list-items.component.scss']
})
export class OtherListItemsComponent implements OnInit,OnDestroy {
  constructor(
    private formBuilder: FormBuilder, 
    private otherItemsService: OtherItemsService,
    private router: Router) {
      
     }
  
              
  
  ngOnInit() {
    this.initForm();
    console.log(this.itemForm)

    // get all part 
    this.itemsSubscription = this.otherItemsService.itemsSubject.subscribe(
      (data : Item[])=> {
        this.items =data;
        // console.log(data)
        // this.tempItemsArray = data;
      }
    );
    
    
    // for(let element of this.tempItemsArray){
    //   element.arrayOfItems.forEach( item => this.items.push(item) )
    // }
    this.otherItemsService.emitItems();
    
  }
  // ------------------------ PARTIE get list  -----------
  items!: Item[]
  tempItemsArray! : any
  itemsSubscription! : Subscription














  // ------------------------ PARTIE FORMULAIRE -----------
  // TODO soit la faire en modal soit mettre un component

  
  itemForm!: FormGroup;
  @ViewChild( 'closebutton' ) closebuttonelement: any; 

  // fileIsUploading = false;
  // fileUrl: string;
  // fileUploaded = false;
  
  
  
  initForm() {
    this.itemForm = this.formBuilder.group({
      userID: ['0000', Validators.required],
      type: ['', Validators.required],
      etat: '',
      photo: ''
    });
  }
  
  resetForm(){
    this.initForm()
  }

  // sans upload la photo 
  onSave() {
    const userID = this.itemForm.get('userID')!.value;
    const type = this.itemForm.get('type')!.value;
    const etat = this.itemForm.get('etat')!.value;
    const photo = this.itemForm.get('photo')!.value;
    const newItem = new Item(userID,type,etat,photo);
    this.otherItemsService.createNewItem(newItem);
    console.log(newItem)
    this.closebuttonelement.nativeElement.click();

    // this.otherItemsService.createNewCalendar(newItem);
    // this.router.navigate(['/other-list-items']);
  }
  // onSave() {
  //   const title = this.itemForm.get('title').value;
  //   const author = this.itemForm.get('author').value;
  //   const synopsis = this.itemForm+.get('synopsis').value;
  //   const newItem = new Calendar(title, author);
  //   newItem.synopsis = synopsis;
  //   if(this.fileUrl && this.fileUrl !== '') {
  //     newItem.photo = this.fileUrl;
  //   }
  //   this.otherItemsService.createNewCalendar(newItem);
  //   this.router.navigate(['/books']);
  // }
  // onUploadFile(file: File) {
    
  //   this.fileIsUploading = true;
  //   console.log(this.fileIsUploading);
  //   this.otherItemsService.uploadFile(file).then(
  //     (url: string) => {
  //       this.fileUrl = url;
  //       this.fileIsUploading = false;
  //       this.fileUploaded = true;
  //     }
  //   );
  // }
  // detectFiles(event) {
  //   this.onUploadFile(event.target.files[0]);
  // }


  ngOnDestroy(): void {
    this.itemsSubscription.unsubscribe()
  }

}
