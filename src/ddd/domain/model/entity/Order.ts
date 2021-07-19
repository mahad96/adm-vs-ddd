import { v4 as uuidv4 } from 'uuid';
import { Item } from './Item';
import { OrderStatus, OrderStatuses } from '../vo/OrderStatus';

export class Order {

    public readonly id: string;
    private status: OrderStatus;

    private constructor(
        private items: Item[]
    ) {
        this.id = uuidv4();
        this.status = OrderStatus.create(OrderStatuses.NEW);
    }

    public static create(items: Item[]): Order {
        return new Order(items);
    }

    public changeStatusTo(status: string): void {
        const newStatus = OrderStatus.create(status);
        if(this.status.equals(OrderStatuses.SHIPPED) && newStatus.equals(OrderStatuses.NEW) || this.status.equals(OrderStatuses.NEW) && newStatus.equals(OrderStatuses.SHIPPED)) {
            throw new Error(`Transitioning order status from ${this.status.value} to ${newStatus.value} is prohibited`);
        }
        this.status = newStatus;
    }

    public addItem(sku: string, quantity: number, price: number): void {
        if(this.status.equals(OrderStatuses.SHIPPED)) {
            throw new Error('Cannot add item. Order has already been shipped');
        }
        this.items.push(Item.create(sku, quantity, price));
    }

}
