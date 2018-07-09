import { Comic } from './comic';

export interface ComicVolume {
  vol: number;
  subject?: string;
  cover: string;
  pages: string[];
}
