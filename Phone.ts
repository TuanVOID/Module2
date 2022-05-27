export class Phone {
    private _name: string;
    private _type: string;
    private _price : number;
    private _quantity : number;
    private _description: string;
    private _date : string;


    constructor(name: string, type: string, price: number, quantity: number, description: string, date: string) {
        this._name = name;
        this._type = type;
        this._price = price;
        this._quantity = quantity;
        this._description = description;
        this._date = date;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get date(): string {
        return this._date;
    }

    set date(value: string) {
        this._date = value;
    }
}
