import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = ''; 
  router = undefined;
  constructor( router: Router) { 
    this.router = router;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('username', this.username, this.username == 'admin');
    console.log('password', this.password);
    if (this.username == 'admin' && this.password == 'admin') {
      console.log('login success');
      localStorage.setItem('ial', 'dfg');

      this.router.navigate(['/home'])
    }
   

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('changes: ', changes);
  }

}
