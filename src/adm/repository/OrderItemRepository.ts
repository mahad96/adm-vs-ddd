import { Item } from '../model/Item';

export interface OrderItemRepository extends RepositoryProvider {
    add(item: Item): void;
    find(sku: string): Item;
}
