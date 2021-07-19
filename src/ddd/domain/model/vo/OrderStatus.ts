export enum OrderStatuses {
    NEW = 'NEW',
    PACKED = 'PACKED',
    SHIPPED = 'SHIPPED'
}

export class OrderStatus {

    private constructor(public readonly value: string) {}

    public static create(value: string): OrderStatus {
        if (!(<any>Object).values(OrderStatuses).includes(value)) {
            throw new Error(
                `'${value}' is not a valid order status.`
            );
        }
        return new OrderStatus(value);
    }

    public equals(newStatus: string): boolean {
        return this.value === newStatus;
    }

}
