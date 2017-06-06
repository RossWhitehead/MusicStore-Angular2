import { OrderAddress, OrderLine } from '.';

export class Order {
    constructor(
        public orderKey: string,
        public userName: string,
        public createdOn: number,
        public orderAddress: OrderAddress,
        public orderLines: OrderLine[]) { }
}
