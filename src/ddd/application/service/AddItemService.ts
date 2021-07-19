import { Order } from '../../domain/model/entity/Order';
import { OrderRepository } from '../../domain/interface/OrderRepository';

export class AddItemService {

    private orderRepository: OrderRepository;

    constructor(private readonly repository: Repository) {
        this.orderRepository = repository;
    }

    public async addItem(sku: string, quantity: number, price: number, id: string): Promise<boolean> {
        const order: Order = await this.orderRepository.find(id);
        order.addItem(sku, quantity, price);
        try {
            return await this.orderRepository.save(order);
        } catch(error) {
            return false;
        }
    }

}
