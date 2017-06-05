export class CartItem {
    constructor(
        public cartKey: string,
        public cartItemKey: string,
        public albumKey: string,
        public count: number,
        public createdOn: Date) { }
}
