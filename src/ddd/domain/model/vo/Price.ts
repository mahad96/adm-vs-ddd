export class Price {

    private constructor(public readonly value: number) {}

    public static create(value: number): Price {
        if (value <= 0) {
            throw new Error(`'${value}' should be strictly positive`);
        }
        return new Price(value);
    }
    
}
