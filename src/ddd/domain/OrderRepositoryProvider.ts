import { OrderRepository } from './OrderRepository';

export type OrderRepositoryProvider = () => Promise<OrderRepository>;
