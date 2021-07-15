import { Order } from '../model/Order';
import { OrderStatus } from '../model/OrderStatus';
import { Item } from '../model/Item';
import { OrderRepository } from '../repository/OrderRepository';
import { OrderItemRepository } from '../repository/OrderItemRepository';
import { v4 as uuidv4 } from 'uuid';

export class OrderService {

    private readonly orderRepository: OrderRepository;
    private readonly orderItemRepository: OrderItemRepository;

    public constructor(orderRepository: OrderRepository, orderItemRepository: OrderItemRepository) {
        this.orderRepository = orderRepository;
        this.orderItemRepository = orderItemRepository;
    }

    public async create(items: Item[]): Promise<boolean> {
        const id = uuidv4();
        const status = OrderStatus.NEW;
        const order = new Order(id, status, items);
        try {
            return await this.orderRepository.save(order);
        } catch(error) {
            return false;
        }
    }

    public async updateStatus(id: string, newStatus: OrderStatus): Promise<boolean> {
        const order = await this.orderRepository.find(id);
        if(order.status === OrderStatus.SHIPPED && newStatus === OrderStatus.NEW || order.status === OrderStatus.NEW && newStatus === OrderStatus.SHIPPED) {
            throw new Error(`Transitioning order status from ${order.status} to ${newStatus} is prohibitied`);
        }
        order.status = newStatus;
        try {
            return await this.orderRepository.save(order);
        } catch(error) {
            return false;
        }
    }

    public async addItem(id: string, sku: string, quantity: number): Promise<boolean> {
        const order = await this.orderRepository.find(id);
        if(order.status === OrderStatus.SHIPPED) {
            throw new Error('Cannot add item. Order has already been shipped');
        }
        const newItem = new Item(sku, quantity, order);
        try {
            return await this.orderItemRepository.save(newItem);
        } catch(error) {
            return false;
        }
    }

}
