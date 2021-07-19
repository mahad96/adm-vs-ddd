import { CreateOrderService } from '../../application/service/CreateOrderService';
import { createResponse } from './utils/ResponseBuilder';


class CreateOrder {

    private readonly createOrderService: CreateOrderService;

    public constructor(createOrderService: CreateOrderService) {
        this.createOrderService = createOrderService;
    }

    public async createOrder(req: Request): Promise<Response> {
        const { items } = req.body;
        const createOrderResult = await this.createOrderService.createOrder(items);
        return createResponse(createOrderResult);
    }

}
