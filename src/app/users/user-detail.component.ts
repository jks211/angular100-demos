import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './user.service';
import { map, tap } from 'rxjs/operators';
import { User } from './user';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userId: number;
  user: User;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private service: UserService) {


  }

  ngOnInit() {
    let id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.service.getUser(id).subscribe((user) => this.user = user);

  }

  editUserPage() {
    this.router.navigate([`/users/${this.user.id}/edit`]);
  }

}


