import { Order } from './Order';

export class Item {

    private _sku: string;
    private _quantity: number;
    private _price: number;

    private order: Order;

    public constructor(sku: string, quantity: number, price: number, order: Order) {
        this.sku = sku;
        this.quantity = quantity,
        this.price = price,
        this.order = order
    }

    public get sku(): string {
        return this._sku;
    }

    public set sku(sku: string) {
        this._sku = sku;
    }

    public get quantity(): number {
        return this._quantity;
    }

    public set quantity(quantity: number) {
        this._quantity = quantity;
    }

    public get price(): number {
        return this._price;
    }

    public set price(price: number) {
        this._price = price;
    }

}