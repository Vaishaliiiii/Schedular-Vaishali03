import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  board: String | undefined | null;
  errorMessage: String | undefined | null;

  constructor(private userService: UserService) { 
  }

  ngOnInit() {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
      this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }
}

