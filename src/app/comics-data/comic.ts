import { ComicVolumn } from './comic-volumn';

export interface Comic {
  id: number;
  title: string;
  genres: string[];
  author: string;
  status: ComicStatus;
  rate: number;
  summary: string;
  cover: string;
  volumns?: ComicVolumn[];
}

export enum ComicStatus {
  Ongoing = 'Ongoing', Finished = 'Finished'
}
