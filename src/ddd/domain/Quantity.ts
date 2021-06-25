export class Quantity {

    private constructor(public readonly value: number) {}

    public static create(value: number): Quantity {
        if (value <= 0) {
            throw new Error(`'${value}' should be strictly positive`);
        }
        return new Quantity(value);
    }

    public equals(newQuantity: Quantity): boolean {
        return this.value === newQuantity.value;
    }
}
