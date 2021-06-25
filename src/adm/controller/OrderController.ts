import { Item } from '../model/Item';
import { Order } from '../model/Order';
import { OrderStatus } from '../model/OrderStatus';
import { OrderService } from '../service/OrderService';

export class OrderController {

    private readonly orderService: OrderService;

    public constructor(orderService: OrderService) {}

    public async createOrder(items: Item[]): Promise<string> {
        const order = await this.orderService.create(items);
        return order.id;
    }

    public async update(order: Order, newStatus: OrderStatus): Promise<string> {
        try {
            await this.orderService.updateStatus(order.id, newStatus);
            return `Successfully transitioned status from ${order.status} to ${newStatus} for order ${order.id}`;
        } catch(error) {
            return 'FORBIDDEN';
        }
    }

    public async addItem(item: Item, order: Order): Promise<string> {
        try { 
            await this.orderService.addItem(item.sku, item.quantity, item.price, order.id);
            return `Added item ${item.sku} to order ${order.id}`;
        } catch (error) {
            return 'FORBIDDEN';
        } 
    }

}