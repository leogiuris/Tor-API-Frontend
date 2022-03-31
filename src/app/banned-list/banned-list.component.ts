import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-banned-list',
  templateUrl: './banned-list.component.html',
  styleUrls: ['./banned-list.component.scss']
})
export class BannedListComponent implements OnInit {

	ips: any;

	constructor(private apiService: ApiService) { }

	ngOnInit() {
		this.apiService.getBannedList().subscribe(
			(response) => { this.ips = response;},
			(error) => { console.log("ERRO", error); }
		);
	}
}
