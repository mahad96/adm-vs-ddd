import { Order } from '../model/entity/Order';

export interface OrderRepository {
    save(order: Order): Promise<boolean>;
    find(id: string): Promise<Order>;
}
