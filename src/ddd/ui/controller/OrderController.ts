import { CreateOrderService } from '../../application/service/CreateOrderService';
import { UpdateOrderStatusService } from '../../application/service/UpdateOrderStatusService';
import { AddItemService } from '../../application/service/AddItemService';
import { createResponse } from './utils/ResponseBuilder';

class OrderController {

    private readonly createOrderService: CreateOrderService;
    private readonly updateOrderStatusService: UpdateOrderStatusService;
    private readonly addItemService: AddItemService;

    public constructor(createOrderService: CreateOrderService, updateOrderStatusService: UpdateOrderStatusService, addItemService: AddItemService) {
        this.createOrderService = createOrderService;
        this.updateOrderStatusService = updateOrderStatusService;
        this.addItemService = addItemService;
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

    public async addItem(req: Request): Promise<Response> {
        const { sku, quantity, price, id } = req.body;
        const addItemResult = await this.addItemService.addItem(sku, quantity, price, id);
        return createResponse(addItemResult);
    }

}
