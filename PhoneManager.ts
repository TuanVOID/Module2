import {Phone} from "./Phone";

export class PhoneManager  {
    phones : Phone[] = [];

    constructor() {
    }

    add (phone:Phone) {
        this.phones.push(phone)
    }

    getList () : Phone[] {
        return this.phones;
    }

    findPhoneByName(name:string):number{
        let index = -1
        for (let i = 0; i < this.phones.length; i++) {
            if (this.phones[i].name === name ) {
                index = i;
            }
        }
        return index
    }

    deleteByName (name:string) {
        let indexPhoneDelete = this.findPhoneByName(name)
        if (indexPhoneDelete != -1) {
            this.phones.splice(indexPhoneDelete,1)
        } else throw new Error ("Het hang")
    }

    update(name:string,newName:string,newPrice:number,newQuantity:number){
        let indexPhoneUpdate = this.findPhoneByName(name)
        if ( indexPhoneUpdate != -1) {
            this.phones[indexPhoneUpdate].name = newName;
            this.phones[indexPhoneUpdate].price = newPrice;
            this.phones[indexPhoneUpdate].quantity = newQuantity;
        } else throw new Error("San pham khong ton tai")
    }

    sell ( name:string, quantity:number) {
        let indexPhoneSold = this.findPhoneByName(name);
        if (indexPhoneSold != -1) {
            this.phones[indexPhoneSold].quantity -= quantity;
        }
    }
}