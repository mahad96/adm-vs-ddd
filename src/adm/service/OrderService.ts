import { Order } from "../model/Order";
import { OrderRepository } from "../repository/OrderRepository";

export class OrderService{

    private readonly orderRepository: OrderRepository;

    public constructor(orderRepository: OrderRepository){
        this.orderRepository = orderRepository;
    }

    public create(id: number, status: OrderStatus, deliveryAddress: Address, items: Item[]): void{
        const order = new Order();
        order.id = id;
        order.status = status;
        order.deliveryAddress = deliveryAddress;
        order.items = items;
        return this.orderRepository.add(order);
    }

    

}