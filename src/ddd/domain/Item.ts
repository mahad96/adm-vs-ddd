import { SKU } from './SKU';
import { Quantity } from './Quantity';
import { Price } from './Price';

export class Item {

    private constructor(
        public readonly sku: SKU,
        private quantity: Quantity,
        private price: Price
    ) {}

    public static create(sku: string, quantity: number, price: number): Item {
        return new Item(
            SKU.create(sku),
            Quantity.create(quantity),
            Price.create(price)
        );
    }

    public changeQuantity(newQuantity: number): void {
        this.quantity = Quantity.create(newQuantity);
    }

    public changePrice(newPrice: number): void {
        this.price = Price.create(newPrice);
    }
}