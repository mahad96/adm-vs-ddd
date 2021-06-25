import { OrderStatus, OrderStatuses } from './OrderStatus';
import { Item } from './Item';
import { Id } from './Id';

export class Order {

    private constructor(
        public readonly id: Id,
        private status: OrderStatus,
        private items: Item[]
    ) {}

    public static create(items: Item[]): Order {
        return new Order(
            Id.generate(),
            OrderStatus.create(OrderStatuses.NEW),
            items
        )
    }

    public changeStatusTo(status: string): void {
        const newStatus = OrderStatus.create(status);
        if(this.status.equals(OrderStatuses.SHIPPED) && newStatus.equals(OrderStatuses.NEW) || this.status.equals(OrderStatuses.NEW) && newStatus.equals(OrderStatuses.SHIPPED)) {
            throw new Error(`Transitioning order status from ${this.status.value} to ${newStatus.value} is prohibitied`);
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