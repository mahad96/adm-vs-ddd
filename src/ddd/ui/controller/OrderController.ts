import { CreateOrderService } from '../../application/service/CreateOrderService';
import { UpdateOrderStatusService } from '../../application/service/UpdateOrderStatusService';
import { createResponse } from './utils/ResponseBuilder';


class OrderController {

    private readonly createOrderService: CreateOrderService;
    private readonly updateOrderStatusService: UpdateOrderStatusService;

    public constructor(createOrderService: CreateOrderService, updateOrderStatusService: UpdateOrderStatusService) {
        this.createOrderService = createOrderService;
        this.updateOrderStatusService = updateOrderStatusService
    }

    public async createOrder(req: Request): Promise<Response> {
        const { items } = req.body;
        const createOrderResult = await this.createOrderService.createOrder(items);
        return createResponse(createOrderResult);
    }

    public async updateStatus(req: Request): Promise<Response> {
        const { newStatus, id } = req.body;
        const updateStatusResult = await this.updateOrderStatusService.updateStatus(newStatus, id);
        return createResponse(updateStatusResult);
    }

}
