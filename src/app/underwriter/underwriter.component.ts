import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-underwriter',
  templateUrl: './underwriter.component.html',
  styleUrls: ['./underwriter.component.css']
})
export class UnderwriterComponent implements OnInit {
  board: String | undefined | null;
  errorMessage: String | undefined | null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getWriterBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }

}
