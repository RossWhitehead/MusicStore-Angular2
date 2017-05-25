import { Genre } from "../data";

export class Album {
    constructor(
        public title: string,
        public genre: string,
        public price: number,
        public artist: string,
        public albumArtUrl: string) { }
}
