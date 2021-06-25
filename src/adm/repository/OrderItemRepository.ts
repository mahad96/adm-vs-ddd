import { Item } from '../model/Item';

export interface OrderItemRepository extends RepositoryProvider {
    save(item: Item): Promise<void>;
    find(sku: string): Promise<Item>;
}
