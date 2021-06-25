import { OrderRepository } from '../../domain/OrderRepository';
import { OrderRepositoryProvider } from '../../domain/OrderRepositoryProvider';
import { OrmOrderRepository } from '../domain/OrmOrderRepository';
import { ORM } from 'YourORM';

let repository: OrmOrderRepository;

export const OrmOrderRepositoryProvider: OrderRepositoryProvider = () =>
    new Promise<OrderRepository>(async (resolve, reject) => {
        try {
            if (!repository) {
                const orm = await ORM.init();
                repository = new OrmOrderRepository(orm);
            }
            resolve(repository);
        } catch (error) {
            reject(error);
        }
    });
