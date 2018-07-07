import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as faker from 'faker';
import { ComicStatus } from './comic';

faker.seed(8);

const ComicsSize = 50;

const ps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const comics = [];

    for (let i = 1; i <= ComicsSize; i += 1) {
      const vols = [];
      for (let j = 1; j < faker.random.number({min: 1, max: 100}); j += 1) {

        const pages = ps.slice().sort(_ => 0.5 - Math.random());

        const v = {
          vol: j,
          cover: 'https://picsum.photos/290/440/?image=' + faker.random.number({min: 0, max: 100}),
          subject: faker.lorem.sentence(),
          pages
        };
        vols.push(v);
      }

      const c = {
        id: i,
        title: faker.lorem.sentence(2, 5).slice(0, -1),
        genres: faker.random.words().split(' '),
        author: faker.name.findName(),
        status: ComicStatus.Ongoing,
        rate: faker.random.number({min: 0, max: 5}),
        summary: faker.lorem.paragraph(),
        cover: 'https://picsum.photos/290/440/?image=' + faker.random.number({min: 0, max: 50}),
        volumns: vols,
      };
      comics.push(c);
    }

    return { comics };
  }
}
