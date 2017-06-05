export class CartItem {
    constructor(
        public cartItemKey: string,
        public albumKey: string,
        public count: number,
        public createdOn: Date) { }
}
