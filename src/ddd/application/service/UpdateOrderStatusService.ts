import { Order } from '../../domain/model/entity/Order';
import { OrderRepository } from '../../domain/interface/OrderRepository';

export class UpdateOrderStatusService {

    private orderRepository: OrderRepository;

    constructor(private readonly repository: Repository) {
        this.orderRepository = repository;
    }

    public async updateStatus(newStatus: string, id: string): Promise<boolean> {
        const order: Order = await this.orderRepository.find(id);
        order.changeStatusTo(newStatus);
        try {
            return await this.orderRepository.save(order);
        } catch(error) {
            return false;
        }
    }

}
