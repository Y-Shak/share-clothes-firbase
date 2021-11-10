import { Item } from "./item.model";

export class ArrayItems{
    constructor(
        public userID : number,
        public arrayOfItems: Item[]
    ){}
}