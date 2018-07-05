import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as faker from 'faker';

faker.seed(8);

const ComicsSize = 50;

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const comics = [];

    for (let i = 1; i <= ComicsSize; i += 1) {
      const vols = [];
      for (let j = 1; j < faker.random.number({min: 1}); j += 1) {

        const pages = [];
        for (let k = 1; k < faker.random.number({ min: 5 }); k += 1) {
          pages.push(faker.random.number({min: 1, max: 12}).toString());
        }

        const v = {
          vol: j,
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
        status: '',
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
