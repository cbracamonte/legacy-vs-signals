import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-user-legacy',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatDividerModule],
  templateUrl: './user-legacy.component.html',
  styleUrl: './user-legacy.component.css',
})
export class UserLegacyComponent implements OnInit, OnChanges {
  displayedColumns: string[] = [
    'id',
    'first_name',
    'last_name',
    'email',
    'avatar',
  ];

  @Input({ required: true }) users!: User[];

  ngOnChanges(changes: SimpleChanges): void {
    console.log('UserLegacyComponent - ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('UserLegacyComponent - ngOnInit');
  }
}
