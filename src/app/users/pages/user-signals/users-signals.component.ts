import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnChanges,
  OnInit,
  signal,
  SimpleChanges,
} from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';
import { filter } from 'rxjs';
import { UserSignalComponent } from '../../components/user-signal/user-signal.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-users-signals',
  standalone: true,
  imports: [
    CommonModule,
    UserSignalComponent,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
  ],
  templateUrl: './users-signals.component.html',
  styleUrl: './users-signals.component.css',
})
export class UsersSignalsComponent implements OnInit, OnChanges {
  private readonly usersService = inject(UsersService);

  users = signal<User[]>([]);
  currentPage = signal(1);

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.loadPage(this.currentPage());
  }

  restart(): void {
    this.currentPage.set(1);
    this.users.set([]);
    this.loadPage(this.currentPage());
  }

  loadPage(page: number) {
    this.usersService
      .getUsers(page)
      .pipe(filter((users) => users.length > 0))
      .subscribe((newUsers) => {
        this.currentPage.set(page);
        this.users.update((currentUsers) => [...currentUsers, ...newUsers]);
      });
  }
}
