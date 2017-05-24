import { Album } from './index';

export class Genre {
    constructor(
        public genreId: number,
        public name: string,
        public description?: string) { }
}
