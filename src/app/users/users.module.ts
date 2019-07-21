import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './user-list.component';
import { UserCardComponent } from './user-card.component';
import { UserTableComponent } from './user-table.component';
import { UserRowComponent } from './user-row.component';

@NgModule({
 declarations: [UserListComponent, UserCardComponent, UserTableComponent, UserRowComponent],
 imports: [
   CommonModule
 ]
})
export class UsersModule { }

