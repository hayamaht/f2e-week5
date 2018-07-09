import { ComicVolume } from './comic-volume';

export interface Comic {
  id: number;
  title: string;
  genres: string[];
  author: string;
  status: ComicStatus;
  rate: number;
  summary: string;
  cover: string;
  volumes?: ComicVolume[];
}

export enum ComicStatus {
  Ongoing = 'Ongoing', Finished = 'Finished'
}
