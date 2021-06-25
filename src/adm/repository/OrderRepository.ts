import { Order } from '../model/Order';

export interface OrderRepository extends RepositoryProvider {
    save(order: Order): Promise<void>;
    find(id: string): Promise<Order>;
}
