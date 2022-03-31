import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-valid-list',
  templateUrl: './valid-list.component.html',
  styleUrls: ['./valid-list.component.scss']
})

export class ValidListComponent implements OnInit {

  ips: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getValidList().subscribe(
      (response) => { this.ips = response; },
      (error) => { console.log("ERRO", error); }
    );
  }


}
