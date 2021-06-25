import { Id } from '../../domain/Id';
import { Order } from '../../domain/Order';
import { OrderRepository } from '../../domain/OrderRepository';
import { OrderRepositoryProvider } from '../../domain/OrderRepositoryProvider';

export class UpdateOrderStatus {

    private repository: OrderRepository;

    constructor(private readonly repositoryProvider: OrderRepositoryProvider) {}

    private async init(): Promise<void> {
        this.repository = await this.repositoryProvider();
    }

    public async update(newStatus: string, id: Id): Promise<void> {
        this.init();
        const order: Order = await this.repository.find(id);
        order.changeStatusTo(newStatus);
        this.repository.save(order);
    }

}