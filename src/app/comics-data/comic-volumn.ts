import { Comic } from './comic';

export interface ComicVolumn {
  vol: number;
  subject?: string;
  cover: string;
  pages: string[];
}
