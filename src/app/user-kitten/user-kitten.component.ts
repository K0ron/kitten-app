import { Component, OnInit } from '@angular/core';
import { Kitten, KittenService } from '../services/kitten.service';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css'],
})
export class UserKittenComponent implements OnInit {
  userKittens: Kitten[] = [];

  constructor(private kittenService: KittenService) {}

  ngOnInit(): void {
    this.userKittens = this.kittenService.getUserKittens();
  }
}
