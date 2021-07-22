import { AddItemService } from '../../application/service/AddItemService';
import { createResponse } from './utils/ResponseBuilder';


class ItemController {

    private readonly addItemService: AddItemService;

    public constructor(addItemService: AddItemService) {
        this.addItemService = addItemService;
    }

    public async addItem(req: Request): Promise<Response> {
        const { sku, quantity, price, id } = req.body;
        const addItemResult = await this.addItemService.addItem(sku, quantity, price, id);
        return createResponse(addItemResult);
    }

}
