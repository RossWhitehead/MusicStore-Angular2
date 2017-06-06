export class OrderLine {
    constructor(
        public orderLineKey: string,
        public albumKey: string,
        public quantity: number,
        public unitPrice: number) { }
}
