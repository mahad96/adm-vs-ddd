import { EntityRepository, ORM } from 'YourORM';
import { OrderRepository } from '../../domain/OrderRepository';
import { Order } from '../../domain/Order';
import { Id } from '../../domain/Id';

export class OrmOrderRepository implements OrderRepository {
    private ormRepository: EntityRepository<Order>;

    constructor(private readonly orm: ORM) {
        this.ormRepository = this.orm.em.getRepository(Order);
    }

    public async save(order: Order): Promise<void> {
        try {
            await this.ormRepository.persistAndFlush(order);
        } catch (error) {
            this.cleanEntityManager();
            throw error;
        }
    }

    public async find(id: Id): Promise<Order> {
        return await this.ormRepository.findOne({
            id: Id,
        });
    }

    private cleanEntityManager(): void {
        this.ormRepository = this.orm.em.fork().getRepository(Order);
    }
}
