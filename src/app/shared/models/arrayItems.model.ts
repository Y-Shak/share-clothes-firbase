import { Item } from "./item.model";

export class ArrayItems{
    constructor(
        public userID : string,
        public arrayOfItems: Item[]
    ){}
}