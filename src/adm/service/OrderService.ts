import { Order } from '../model/Order';
import { OrderStatus } from '../model/OrderStatus';
import { Item } from '../model/Item';
import { OrderRepository } from '../repository/OrderRepository';
import { OrderItemRepository } from '../repository/OrderItemRepository';

export class OrderService {

    private readonly orderRepository: OrderRepository;
    private readonly orderItemRepository: OrderItemRepository;

    public constructor(orderRepository: OrderRepository, orderItemRepository: OrderItemRepository) {
        this.orderRepository = orderRepository;
        this.orderItemRepository = orderItemRepository;
    }

    public async create(items: Item[]): Promise<Order> {
        const order = new Order();
        order.id = Math.random().toString(36).substring(7);
        order.status = OrderStatus.NEW;
        order.items = items;
        await this.orderRepository.save(order);
        return order;
    }

    public async updateStatus(id: string, newStatus: OrderStatus): Promise<void> {
        const order = await this.orderRepository.find(id);
        if(order.status === OrderStatus.SHIPPED && newStatus === OrderStatus.NEW || order.status === OrderStatus.NEW && newStatus === OrderStatus.SHIPPED) {
            throw new Error(`Transitioning order status from ${order.status} to ${newStatus} is prohibitied`);
        }
        order.status = newStatus;
        return await this.orderRepository.save(order);
    }

    public async addItem(sku: string, quantity: number, price: number, id: string): Promise<void> {
        const order = await this.orderRepository.find(id);
        if(order.status === OrderStatus.SHIPPED) {
            throw new Error('Cannot add item. Order has already been shipped');
        }
        const newItem = new Item(sku, quantity, price, order);
        return await this.orderItemRepository.save(newItem);
    }


}