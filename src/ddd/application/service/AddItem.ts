import { Id } from '../../domain/Id';
import { Order } from '../../domain/Order';
import { OrderRepository } from '../../domain/OrderRepository';
import { OrderRepositoryProvider } from '../../domain/OrderRepositoryProvider';

export class AddItem {

    private repository: OrderRepository;

    constructor(private readonly repositoryProvider: OrderRepositoryProvider) {}

    private async init(): Promise<void> {
        this.repository = await this.repositoryProvider();
    }

    public async addItem(sku: string, quantity: number, price: number, id: Id): Promise<void> {
        this.init();
        const order: Order = await this.repository.find(id);
        order.addItem(sku, quantity, price);
        await this.repository.save(order);
    }

}