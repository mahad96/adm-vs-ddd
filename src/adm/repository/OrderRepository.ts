import { Order } from '../model/Order';

export class OrderRepository extends Repository {

    public async save(order: Order): Promise<boolean> {
        return await this.insert(order);
    }

    public async find(id: string): Promise<Order> {
        return await this.find(id);
    }

}
