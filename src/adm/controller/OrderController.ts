import { Address } from '../model/Address';
import { Item } from '../model/Item';
import { Order } from '../model/Order';
import { OrderStatus } from '../model/OrderStatus';
import { OrderService } from '../service/OrderService';

export class OrderController {

    private readonly orderService: OrderService;

    public constructor(orderService: OrderService) {
        this.orderService = orderService;
    }

    public createOrder(items: Item[], deliveryAddress: Address): string {
        const order = this.orderService.create(items, deliveryAddress);
        return order.id;
    }

    public update(order: Order, newStatus: OrderStatus): string {
        try {
            this.orderService.updateStatus(order.id, newStatus);
            return `Successfully transitioned status from ${order.status} to ${newStatus} for order ${order.id}`;
        } catch(error) {
            return 'FORBIDDEN';
        }
    }

    public addItem(item: Item, order: Order): string {
        try { 
            this.orderService.addItem(item.sku, item.quantity, item.price, order.id);
            return `Added item ${item.sku} to order ${order.id}`;
        } catch (error) {
            return 'FORBIDDEN';
        } 
    }

}