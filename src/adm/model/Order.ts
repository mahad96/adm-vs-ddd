import { OrderStatus } from './OrderStatus';
import { Address } from './Address';
import { Item } from './Item';

export class Order {

    private _id: string;
    private _status: OrderStatus;
    private _deliveryAddress: Address;
    private _items: Item[];

    public get id(): string {
        return this._id;
    }

    public set id(id: string) {
        this._id = id;
    }

    public get status(): OrderStatus {
        return this._status;
    }

    public set status(status: OrderStatus) {
        this._status = status;
    }

    public get deliveryAddress(): Address {
        return this._deliveryAddress;
    }

    public set deliveryAddress(address: Address) {
        this.deliveryAddress = address;
    }

    public get items(): Item[] {
        return this._items;
    }

    public set items(items: Item[]) {
        this._items = items;
    }

}