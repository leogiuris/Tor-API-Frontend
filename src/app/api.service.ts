import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {

	private url_full_list = 'http://localhost:5000/fullList'
	private url_valid_list = 'http://localhost:5000/validList'
	private url_ban_ip = 'http://localhost:5000/ban_ip'
	private url_banned_list = 'http://localhost:5000/bannedList'
	
	constructor(private http: HttpClient) { }

	getFullList() {
		return this.http.get(this.url_full_list, { 
				headers: new HttpHeaders({ 
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*' 
				}) 
			});
	}

	postBanIp(ip) {
		return this.http.post(this.url_ban_ip, {'ip_address': ip})
	}

	getValidList() {
		return this.http.get(this.url_valid_list, { 
			headers: new HttpHeaders({ 
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*' 
			}) 
		});
	}

	getBannedList() {
		return this.http.get(this.url_banned_list, { 
			headers: new HttpHeaders({ 
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*' 
			}) 
		});
	}

}
