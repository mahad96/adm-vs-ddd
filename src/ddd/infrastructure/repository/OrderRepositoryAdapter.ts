import { OrderRepository } from '../../domain/interface/OrderRepository';
import { Order } from '../../domain/model/entity/Order';

export class OrderRepositoryAdapter extends Repository implements OrderRepository {

    public async save(order: Order): Promise<boolean> {
        return await this.insert(order);
    }

    public async find(id: string): Promise<Order> {
        return await this.find(id);
    }

}
