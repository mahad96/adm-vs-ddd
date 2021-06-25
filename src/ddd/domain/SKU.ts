export class SKU {

    private static readonly skuRegex: RegExp = RegExp('.*[M|F].*');

    private constructor(public readonly value: string) {}

    public static create(value: string): SKU {
        if (!this.skuRegex.test(value)) {
            throw new Error(`'${value}' is not a valid SKU`);
        }
        return new SKU(value);
    }

    public equals(newSKU: SKU): boolean {
        return this.value === newSKU.value;
    }
    
}