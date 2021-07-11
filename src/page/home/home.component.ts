import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  router:Router
  constructor(router: Router) {
    this.router = router;
  
  }

  ngOnInit(): void {
    let token = localStorage.getItem('ial');
    if(token != 'dfg'){
     this.router.navigate(['/login'])
    }
  }

}
