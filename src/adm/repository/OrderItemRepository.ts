import { Item } from '../model/Item';

export class OrderItemRepository extends Repository {

    public async save(item: Item): Promise<boolean> {
        return await this.insert(item);
    }

    public async find(sku: string): Promise<Item> {
        return await this.find(sku);
    }

}
