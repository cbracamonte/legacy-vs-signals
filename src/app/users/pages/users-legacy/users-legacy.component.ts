import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { UserLegacyComponent } from '../../components/user-legacy/user-legacy.component';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';
import { filter, Observable, tap } from 'rxjs';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-users-legacy',
  standalone: true,
  imports: [
    CommonModule,
    UserLegacyComponent,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './users-legacy.component.html',
  styleUrl: './users-legacy.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersLegacyComponent implements OnInit, OnChanges {
  private readonly userService = inject(UsersService);

  users$!: Observable<User[]>;
  currentPage = 1;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('UsersLegacyComponent - OnChanges', changes);
  }

  ngOnInit(): void {
    console.log('UsersLegacyComponent - OnInit');
    this.users$ = this.userService.getUsers(this.currentPage);
  }

  loadPage(page: number): void {
    this.users$ = this.userService.getUsers(page).pipe(
      filter((users) => users.length > 0),
      tap(() => {
        this.currentPage = page;
      })
    );
  }
}
