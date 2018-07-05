import { ComicVolumn } from './comic-volumn';

export interface Comic {
  id: number;
  title: string;
  genres: string[];
  author: string;
  status: string;
  rate: number;
  summary: string;
  cover: string;
  volumns?: ComicVolumn[];
}
