import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-user-signal',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatDividerModule],
  templateUrl: './user-signal.component.html',
  styleUrl: './user-signal.component.css',
})
export class UserSignalComponent {
  displayedColumns: string[] = [
    'id',
    'first_name',
    'last_name',
    'email',
    'avatar',
  ];

  users = input.required<User[]>();
}
