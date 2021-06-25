import { Id } from './Id';
import { Order } from './Order';

export interface OrderRepository {
    save(order: Order): Promise<void>;
    find(id: Id): Promise<Order>;
}