import { Injectable } from '@angular/core';

export interface Kitten {
  name: string;
  breed: string;
  birthDate: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class KittenService {
  private kittens: Kitten[] = [];
  private userKittens: Kitten[] = [];

  constructor() {}

  getKittens(): Kitten[] {
    return this.kittens;
  }

  getUserKittens(): Kitten[] {
    return this.userKittens;
  }

  addKitten(kitten: Kitten): void {
    this.kittens.push(kitten);
  }

  adoptKitten(kitten: Kitten): void {
    this.userKittens.push(kitten);
    this.kittens = this.kittens.filter((cat) => cat !== kitten);
  }
}
