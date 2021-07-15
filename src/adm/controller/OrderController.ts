import { Item } from '../model/Item';
import { OrderService } from '../service/OrderService';

export class OrderController {

    private readonly orderService: OrderService;

    public constructor(orderService: OrderService) {
        this.orderService = orderService;
    }

    public async createOrder(req: Request): Promise<Response> {
        const reqBody = JSON.parse(req.body);
        const items: Item[] = reqBody.items;
        const orderResult = await this.orderService.create(items);
        this.createResponse(orderResult);
    }

    public async update(req: Request): Promise<Response> {
        const reqBody = JSON.parse(req.body);
        const orderId = reqBody.orderId;
        const newStatus = reqBody.newStatus;
        const updateResult = await this.orderService.updateStatus(orderId, newStatus);
        this.createResponse(updateResult);
    }

    public async addItem(req: Request): Promise<Response> {
        const reqBody = JSON.parse(req.body);
        const orderId = reqBody.orderId;
        const sku = reqBody.sku;
        const quantity = reqBody.quantity;
        const addResult = await this.orderService.addItem(orderId, sku, quantity);
        this.createResponse(addResult);
    }

    private createResponse(result: boolean): Response {
        const response = Response();
        if(!result) {
            response.body = 'Error';
            response.statusCode = 500;
        }
        response.body = 'OK';
        response.statusCode = 200;
        return response;
    }

}
