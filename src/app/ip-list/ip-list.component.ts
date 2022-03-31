import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-ip-list',
	templateUrl: './ip-list.component.html',
	styleUrls: ['./ip-list.component.scss']
})

export class IpListComponent implements OnInit {

	ips: any;
	bannedIps: any;
	obj: any;
	bannedIndexes: any;


	constructor(private apiService: ApiService) { }


	ngOnInit() {

		this.apiService.getFullList().subscribe(
			(response) => { 
				this.ips = response;
				this.apiService.getBannedList().subscribe(
					(responseBanned) => { 
						this.bannedIps = responseBanned;
						this.makeObj()
					},
					(error) => { console.log("ERRO", error); }
				);
			},
			(error) => { console.log("ERRO", error); }
		);
		
	}

	makeObj(){
		this.bannedIndexes = []
		for(let el of this.bannedIps){
			if(this.ips.includes(el)){
				console.log(this.ips.indexOf(el))
				this.bannedIndexes[this.ips.indexOf(el)] = 'banned'
			}
		}

	}

	refresh(): void {
		window.location.reload();
	}

	onBan(ip){

		console.log("baniu: ", ip)
		this.apiService.postBanIp(ip).subscribe(
			(response) => { this.ips = response;},
			(error) => { console.log("ERRO", error); }
		);
		this.apiService.getBannedList().subscribe(
			(response) => { this.bannedIps = response; this.refresh()},
			(error) => { console.log("ERRO", error); }
		);
		
	}
}
