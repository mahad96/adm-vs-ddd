import { OrderStatus } from './OrderStatus';
import { Item } from './Item';

export class Order {

    private _id: string;
    private _status: OrderStatus;
    private _items: Item[];

    public constructor(id: string, status: OrderStatus, items: Item[]) {
        this.id = id;
        this.status = status;
        this.items = items;
    }

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

    public get items(): Item[] {
        return this._items;
    }

    public set items(items: Item[]) {
        this._items = items;
    }

}
