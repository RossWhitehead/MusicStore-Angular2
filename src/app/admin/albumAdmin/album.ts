export class Album {
    constructor(
        public albumKey: string,
        public title: string,
        public genreKey: string,
        public price: number,
        public artist: string,
        public albumArtUrl: string) { }
}
