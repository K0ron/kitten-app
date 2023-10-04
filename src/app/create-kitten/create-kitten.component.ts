import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KittenService, Kitten } from '../services/kitten.service';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css'],
})
export class CreateKittenComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private kittenService: KittenService
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      breed: ['', Validators.required],
      birthDate: ['', Validators.required],
      imageUrl: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.form.valid) {
      const kitten: Kitten = this.form.value;
      this.kittenService.addKitten(kitten);
      this.form.reset();
    }
  }
}
