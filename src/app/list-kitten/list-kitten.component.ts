import { Component, OnInit } from '@angular/core';
import { Kitten, KittenService } from '../services/kitten.service';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css'],
})
export class ListKittenComponent implements OnInit {
  kittens: Kitten[] = [];

  constructor(private kittenService: KittenService) {}

  ngOnInit(): void {
    this.kittens = this.kittenService.getKittens();
  }

  adoptKitten(kitten: Kitten): void {
    this.kittenService.adoptKitten(kitten);
    this.kittens = this.kittenService.getKittens();
  }
}
