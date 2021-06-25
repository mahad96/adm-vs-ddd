import { Order } from '../model/Order';

export interface OrderRepository extends RepositoryProvider {
    add(order: Order): void;
    update(order: Order): void;
    find(id: string): Order;
}
