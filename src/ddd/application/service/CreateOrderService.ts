import { OrderRepository } from '../../domain/interface/OrderRepository';
import { Order } from '../../domain/model/entity/Order';
import { Item } from '../../domain/model/entity/Item';

export class CreateOrderService {

    private orderRepository: OrderRepository;

    constructor(private readonly repository: Repository) {
        this.orderRepository = repository;
    }

    public async createOrder(items: Item[]): Promise<boolean> {
        const order = Order.create(items)
        try {
            return await this.orderRepository.save(order);
        } catch(error) {
            return false;
        }
    }

}
