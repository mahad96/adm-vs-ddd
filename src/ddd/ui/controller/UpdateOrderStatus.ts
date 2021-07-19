import { UpdateOrderStatusService } from '../../application/service/UpdateOrderStatusService';
import { createResponse } from './utils/ResponseBuilder';


class UpdateOrderStatus {

    private readonly updateOrderStatusService: UpdateOrderStatusService;

    public constructor(updateOrderStatusService: UpdateOrderStatusService) {
        this.updateOrderStatusService = updateOrderStatusService;
    }

    public async updateStatus(req: Request): Promise<Response> {
        const { newStatus, id } = req.body;
        const updateStatusResult = await this.updateOrderStatusService.updateStatus(newStatus, id);
        return createResponse(updateStatusResult);
    }

}
