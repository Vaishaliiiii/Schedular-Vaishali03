import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any | null;

  constructor(private token: TokenStorageService) { }

  ngOnInit() {
      this.info = {
        token: this.token.getToken(),
        username: this.token.getUsername(),
        authorities: this.token.getAuthorities()
      };
    }
  
    logout() {
      this.token.signOut();
      window.location.reload();
    }
}