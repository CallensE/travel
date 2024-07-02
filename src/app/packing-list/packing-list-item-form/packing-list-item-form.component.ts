import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { uniqueItem } from '../../helpers/unique-username-validator';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-packing-list-item-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './packing-list-item-form.component.html',
  styleUrl: './packing-list-item-form.component.scss',
})
export class PackingListItemFormComponent implements OnInit {
  @Output() add = new EventEmitter<string>();

  packingListItemForm = new FormGroup({
    item: new FormControl(
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(30)],
      [uniqueItem()]
    ),
  });

  ngOnInit(): void {
    this.packingListItemForm.controls.item.valueChanges.pipe(debounceTime(500)).subscribe((item) => {
      console.log(item);
    });
  }

  save(): void {
    if (this.packingListItemForm.value.item) {
      this.add.emit(this.packingListItemForm.value.item);
    }
  }
}
