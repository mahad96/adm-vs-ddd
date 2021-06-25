export class Id {

    private constructor(public readonly value: string) {}

    public static generate(): Id {
        return new Id(Math.random().toString(36).substring(7));
    }
    
}
